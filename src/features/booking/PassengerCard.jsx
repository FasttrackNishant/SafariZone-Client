export default function PassengerCard({ 
  passenger, 
  index, 
  passengers, 
  passengerHandlers, 
  safariBookingData, 
  errors 
}) {
  return (
    <div className="bg-slate-700/30 rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-slate-200">
          Passenger {index + 1} {index === 0 && '(Primary Contact)'}
        </h3>
        {passengers.length > 1 && (
          <button
            onClick={() => passengerHandlers.remove(passenger.id)}
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            Remove
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Name Fields */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">First Name *</label>
          <input
            type="text"
            value={passenger.firstName}
            onChange={(e) => passengerHandlers.update(passenger.id, 'firstName', e.target.value)}
            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
            placeholder="Enter first name"
          />
          {errors[`firstName_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`firstName_${index}`]}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">Last Name *</label>
          <input
            type="text"
            value={passenger.lastName}
            onChange={(e) => passengerHandlers.update(passenger.id, 'lastName', e.target.value)}
            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
            placeholder="Enter last name"
          />
          {errors[`lastName_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`lastName_${index}`]}</p>}
        </div>

        {/* Age and Gender */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">Age *</label>
          <input
            type="number"
            value={passenger.age || ''}
            onChange={(e) => passengerHandlers.update(passenger.id, 'age', parseInt(e.target.value))}
            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
            placeholder="Enter age"
            min="5"
            max="100"
          />
          {errors[`age_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`age_${index}`]}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">Gender *</label>
          <select
            value={passenger.gender}
            onChange={(e) => passengerHandlers.update(passenger.id, 'gender', e.target.value)}
            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
          >
            <option value="">Select gender</option>
            {safariBookingData.genderOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors[`gender_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`gender_${index}`]}</p>}
        </div>

        {/* ID Proof */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">ID Proof Type *</label>
          <select
            value={passenger.idProofType}
            onChange={(e) => passengerHandlers.update(passenger.id, 'idProofType', e.target.value)}
            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
          >
            <option value="">Select ID proof</option>
            {safariBookingData.idProofTypes.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors[`idProofType_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`idProofType_${index}`]}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">ID Proof Number *</label>
          <input
            type="text"
            value={passenger.idProofNumber}
            onChange={(e) => passengerHandlers.update(passenger.id, 'idProofNumber', e.target.value)}
            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
            placeholder="Enter ID number"
          />
          {errors[`idProofNumber_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`idProofNumber_${index}`]}</p>}
        </div>

        {/* Contact Details (Primary passenger only) */}
        {index === 0 && (
          <>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Contact Number *</label>
              <input
                type="tel"
                value={passenger.contactNumber}
                onChange={(e) => passengerHandlers.update(passenger.id, 'contactNumber', e.target.value)}
                className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
                placeholder="Enter contact number"
              />
              {errors[`contactNumber_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`contactNumber_${index}`]}</p>}
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Email Address *</label>
              <input
                type="email"
                value={passenger.email}
                onChange={(e) => passengerHandlers.update(passenger.id, 'email', e.target.value)}
                className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
                placeholder="Enter email address"
              />
              {errors[`email_${index}`] && <p className="text-red-400 text-sm mt-1">{errors[`email_${index}`]}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
