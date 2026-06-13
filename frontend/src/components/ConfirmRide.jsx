import React, { useContext, useState } from 'react'
import { UserDataContext } from '../context/UserContext'

const ConfirmRide = (props) => {
  const { user } = useContext(UserDataContext)

  // default:
  // female user → 'any'
  // male user → 'male'
  const [driverGender, setDriverGender] = useState(
    user?.gender === 'female' ? 'any' : 'male'
  )

  const handleConfirm = () => {
   props.createRide({
  driverGenderPreference: props.driverGenderPreference
})


    props.setVehicleFound(true)
    props.setConfirmRidePanel(false)
  }

  return (
    <div>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

      {/* ONLY FEMALE CLIENTS SEE THIS */}
      {user?.gender === 'female' && (
        <div className="mb-4 p-3 border rounded-lg bg-gray-50">
          <p className="text-sm font-medium mb-2">
            Choose Driver Gender
          </p>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="driverGender"
                value="any"
                checked={driverGender === 'any'}
                onChange={() => setDriverGender('any')}
              />
              Any
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="driverGender"
                value="female"
                checked={driverGender === 'female'}
                onChange={() => setDriverGender('female')}
              />
              Female
            </label>
          </div>
        </div>
      )}

      <button
        onClick={handleConfirm}
        className="w-full bg-green-600 text-white p-2 rounded-lg"
      >
        Confirm Ride
      </button>
    </div>
  )
}

export default ConfirmRide
