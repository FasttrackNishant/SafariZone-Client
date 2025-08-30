import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../main/navbar/Navbar";
import Footer from "../main/footer/Footer";
import safariBookingData from "./safari-booking-data";

// Component imports
import BookingHero from "./BookingHero";
import SafariDetailsSection from "./SafariDetailsSection";
import PassengerDetailsSection from "./PassengerDetailsSection";
import SafariRulesSection from "./SafariRulesSection";
import BookingSidebar from "./BookingSidebar";
import BackgroundOrbs from "./BackgroundOrbs";
import LoadingSpinner from "../utils/components/LoadingSpinner";

export default function SafariBookingPage() {
  const { parkId, zoneId, sessionId, vehicleType } = useParams();
  const navigate = useNavigate();
  
  const [bookingData, setBookingData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [bookingType, setBookingType] = useState('per-seat');
  const [isVisible, setIsVisible] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load booking data
    const booking = safariBookingData.safariBooking;
    setBookingData(booking);
    
    // Initialize with one passenger
    setPassengers([{
      ...safariBookingData.passengers[0],
      id: Date.now()
    }]);
  }, [parkId, zoneId, sessionId, vehicleType]);

  // Fixed observer setup - runs after bookingData is loaded and components are rendered
  useEffect(() => {
    if (!bookingData) return; // Don't setup observer until data is loaded

    const setupObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log('Observer entries:', entries.length);
          entries.forEach(({ target, isIntersecting }) => {
            console.log(`Element ${target.id}: ${isIntersecting ? 'visible' : 'hidden'}`);
            if (isIntersecting && target.id) {
              setIsVisible(prev => ({ ...prev, [target.id]: true }));
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px' // Trigger before element is fully visible
        }
      );

      // Add delay to ensure child components have rendered
      setTimeout(() => {
        const elements = document.querySelectorAll('[data-animate]');
        console.log(`Found ${elements.length} elements to observe`);
        
        elements.forEach(el => {
          if (el.id) {
            observer.observe(el);
            console.log(`Observing element: ${el.id}`);
          }
        });
      }, 100); // Small delay to ensure DOM is ready

      return observer;
    };

    const observer = setupObserver();
    
    return () => {
      console.log('Cleaning up observer');
      observer.disconnect();
    };
  }, [bookingData]); // Run after bookingData is loaded

  const passengerHandlers = {
    add: () => {
      if (bookingData && passengers.length < bookingData.passengerLimits.maxPassengersPerVehicle) {
        const newPassenger = {
          ...safariBookingData.passengers[0],
          id: Date.now() + Math.random(),
          isRequired: false
        };
        setPassengers([...passengers, newPassenger]);
      }
    },
    remove: (id) => {
      if (passengers.length > 1) {
        setPassengers(passengers.filter(p => p.id !== id));
      }
    },
    update: (id, field, value) => {
      setPassengers(passengers.map(p => 
        p.id === id ? { ...p, [field]: value } : p
      ));
    }
  };

  const calculateTotalPrice = () => {
    if (!bookingData) return 0;
    
    const basePrice = bookingType === 'full-vehicle' ? 
      bookingData.pricing.pricePerVehicle : 
      bookingData.pricing.pricePerSeat * passengers.length;
    
    const additionalFees = (bookingData.pricing.forestEntryFee + bookingData.pricing.guideFee) * passengers.length;
    return basePrice + additionalFees;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!selectedDate) {
      newErrors.date = 'Please select a safari date';
    }
    
    passengers.forEach((passenger, index) => {
      if (!passenger.firstName) newErrors[`firstName_${index}`] = 'First name is required';
      if (!passenger.lastName) newErrors[`lastName_${index}`] = 'Last name is required';
      if (!passenger.age || passenger.age < 5) newErrors[`age_${index}`] = 'Age must be 5 or above for core zones';
      if (!passenger.gender) newErrors[`gender_${index}`] = 'Gender is required';
      if (!passenger.idProofType) newErrors[`idProofType_${index}`] = 'ID proof type is required';
      if (!passenger.idProofNumber) newErrors[`idProofNumber_${index}`] = 'ID proof number is required';
      if (index === 0 && !passenger.contactNumber) newErrors[`contactNumber_${index}`] = 'Contact number is required';
      if (index === 0 && !passenger.email) newErrors[`email_${index}`] = 'Email is required';
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = () => {
    if (validateForm()) {
      navigate('/payment', {
        state: {
          bookingDetails: {
            ...bookingData,
            selectedDate,
            passengers,
            bookingType,
            totalPrice: calculateTotalPrice()
          }
        }
      });
    }
  };

  if (!bookingData) {
    return <LoadingSpinner loadingText={"Loading safari details..."}/>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
      <Navbar />
      <BackgroundOrbs />
      
      <BookingHero 
        bookingData={bookingData}
        parkId={parkId}
        navigate={navigate}
      />

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <SafariDetailsSection 
                bookingData={bookingData}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                bookingType={bookingType}
                setBookingType={setBookingType}
                isVisible={isVisible}
                errors={errors}
              />

              <PassengerDetailsSection 
                passengers={passengers}
                passengerHandlers={passengerHandlers}
                bookingData={bookingData}
                safariBookingData={safariBookingData}
                isVisible={isVisible}
                errors={errors}
              />

              <SafariRulesSection 
                bookingData={bookingData}
                isVisible={isVisible}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <BookingSidebar 
              bookingData={bookingData}
              selectedDate={selectedDate}
              passengers={passengers}
              bookingType={bookingType}
              calculateTotalPrice={calculateTotalPrice}
              handleBooking={handleBooking}
              navigate={navigate}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
