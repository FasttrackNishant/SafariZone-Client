import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Navbar from '../main/navbar/Navbar';
import Footer from '../main/footer/Footer';
import paymentData from './payment-data';

// Component imports
import BookingSummary from './BookingSummary';
import PaymentMethods from './PaymentMethods';
import OfferSection from './OfferSection';
import SecurityBadges from './SecurityBadges';
import BackgroundOrbs from '../booking/BackgroundOrbs';
import LoadingSpinner from '../utils/components/LoadingSpinner';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cards');
  const [isProcessing, setIsProcessing] = useState(false);
  const [appliedOffer, setAppliedOffer] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [finalAmount, setFinalAmount] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Get booking details from navigation state
    if (location.state?.bookingDetails) {
      setBookingDetails(location.state.bookingDetails);
      setFinalAmount(location.state.bookingDetails.totalPrice);
    } else {
      // Redirect back to booking if no details found
      navigate('/parks');
    }
  }, [location, navigate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && target.id) {
            setIsVisible(prev => ({ ...prev, [target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [bookingDetails]);

  const applyPromoCode = () => {
    const offer = paymentData.offers.find(o => o.code === promoCode.toUpperCase());
    
    if (offer && bookingDetails.totalPrice >= offer.minAmount) {
      const discountAmount = Math.min(
        (bookingDetails.totalPrice * offer.discount) / 100,
        offer.maxDiscount
      );
      setAppliedOffer({ ...offer, discountAmount });
      setFinalAmount(bookingDetails.totalPrice - discountAmount);
    } else {
      alert('Invalid promo code or minimum amount not met');
    }
  };

  const removeOffer = () => {
    setAppliedOffer(null);
    setFinalAmount(bookingDetails.totalPrice);
    setPromoCode('');
  };

  // Razorpay integration placeholder
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    // Load Razorpay script
    const isRazorpayLoaded = await loadRazorpayScript();
    
    if (!isRazorpayLoaded) {
      alert('Failed to load payment gateway. Please try again.');
      setIsProcessing(false);
      return;
    }

    // TODO: Replace with actual backend API call
    const orderData = {
      amount: finalAmount * 100, // Amount in paise
      currency: 'INR',
      booking: bookingDetails
    };

    // Simulated order creation (replace with actual API)
    setTimeout(() => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Will be replaced with actual key
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Safari Booking',
        description: `${bookingDetails.sessionName} - ${bookingDetails.zoneName}`,
        order_id: 'order_' + Date.now(), // Will be from backend
        handler: function (response) {
          // Payment success
          console.log('Payment successful:', response);
          navigate('/booking-success', {
            state: {
              paymentId: response.razorpay_payment_id,
              bookingDetails: bookingDetails,
              finalAmount: finalAmount
            }
          });
        },
        prefill: {
          name: `${bookingDetails.passengers[0].firstName} ${bookingDetails.passengers[0].lastName}`,
          email: bookingDetails.passengers[0].email,
          contact: bookingDetails.passengers[0].contactNumber
        },
        notes: {
          safari_date: bookingDetails.selectedDate,
          safari_type: bookingDetails.sessionName,
          zone: bookingDetails.zoneName,
          passengers: bookingDetails.passengers.length
        },
        theme: {
          color: '#059669'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setIsProcessing(false);
    }, 1000);
  };

  if (!bookingDetails) {
    return <LoadingSpinner loadingText="Loading payment details..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
      <Navbar />
      <BackgroundOrbs />

      {/* Header Section */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            {/* Breadcrumb */}
            <div className="flex justify-center items-center space-x-2 mb-6">
              {paymentData.paymentPage.breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-slate-400">→</span>}
                  <span className={index === paymentData.paymentPage.breadcrumb.length - 1 
                    ? "text-emerald-400" 
                    : "text-slate-400"
                  }>
                    {item}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <h1 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                {paymentData.paymentPage.title}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {paymentData.paymentPage.subtitle}
            </p>
          </div>

          {/* Security Badges */}
          <SecurityBadges badges={paymentData.paymentPage.securityBadges} />
        </div>
      </section>

      {/* Payment Content */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Payment Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-8">
              {/* Payment Methods */}
              <PaymentMethods 
                methods={paymentData.paymentMethods}
                selectedMethod={selectedPaymentMethod}
                onMethodSelect={setSelectedPaymentMethod}
                isVisible={isVisible}
              />

              {/* Promo Code Section */}
              <OfferSection 
                offers={paymentData.offers}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                appliedOffer={appliedOffer}
                onApplyCode={applyPromoCode}
                onRemoveOffer={removeOffer}
                isVisible={isVisible}
              />

              {/* Terms & Conditions */}
              <div 
                id="terms-section"
                data-animate
                className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-1500 ${
                  isVisible['terms-section'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold text-slate-200 mb-4">Terms & Conditions</h3>
                <div className="space-y-2">
                  {paymentData.terms.map((term, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <p className="text-slate-400 text-sm">{term}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24">
              <BookingSummary 
                bookingDetails={bookingDetails}
                appliedOffer={appliedOffer}
                finalAmount={finalAmount}
                onPayment={handlePayment}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
