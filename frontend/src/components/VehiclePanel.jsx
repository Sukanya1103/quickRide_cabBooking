import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const VehiclePanel = (props) => {
  const { user } = useContext(UserDataContext)

  return (
    <div>
      <h3 className='text-2xl font-semibold mb-5'>Choose a Driver</h3>

      {/* ✅ DRIVER GENDER OPTION — ONLY FEMALE USERS */}
      {user?.gender === 'female' && (
        <div className="mb-4 p-3 border rounded-lg bg-gray-50">
          <p className="text-sm font-medium mb-2">
            Choose Driver Gender
          </p>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={props.driverGenderPreference === 'any'}
                onChange={() => props.setDriverGenderPreference('any')}
              />
              Any
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={props.driverGenderPreference === 'female'}
                onChange={() => props.setDriverGenderPreference('female')}
              />
              Female
            </label>
          </div>
        </div>
      )}

      {/* VEHICLES */}
      <div
        onClick={() => {
          props.selectVehicle('car')
          props.setConfirmRidePanel(true)
        }}
        className="flex border-2 mb-2 rounded-xl p-3"
      >
        <h4>Female</h4>
      </div>

      <div
        onClick={() => {
          props.selectVehicle('moto')
          props.setConfirmRidePanel(true)
        }}
        className="flex border-2 mb-2 rounded-xl p-3"
      >
        <h4>Male</h4>
      </div>
    </div>
  )
}

export default VehiclePanel
