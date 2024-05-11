import React from 'react';
import useUpdate from '../../hooks/useUpdate';
import { useState } from 'react';

const DonationFormDefault = ({ selectedDonation, setSelectedDonations }) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupVehicle, setPickupVehicle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedDonation);
    setSelectedDonations((prevSelectedDonation) => {
      prevSelectedDonation.item = item;
      prevSelectedDonation.quantity = quantity;
      prevSelectedDonation.pickupDate = pickupTime;
      prevSelectedDonation.pickupVehicle = pickupVehicle;
      prevSelectedDonation.pending = true;
      prevSelectedDonation.completed =
        new Date() > new Date(event.target.pickupTime.value);

      useUpdate('donations', prevSelectedDonation, prevSelectedDonation?.id);
      return null;
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <h2 className="text-xl font-heading font-bold">
        {selectedDonation.title}
      </h2>
      <label className="block text-base font-body">
        Item:
        <input
          onChange={(e) => setItem(e.target.value)}
          value={item}
          type="text"
          name="item"
          required
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <label className="text-base font-body block">
        Quantity:
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          type="number"
          name="quantity"
          required
          min="0"
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <label className="text-base font-body block">
        Pickup Date:
        <input
          onChange={(e) => setPickupTime(e.target.value)}
          value={pickupTime}
          type="date"
          name="pickupTime"
          onInput={(e) => {
            console.log(e.target.value.split('-')[2]);
            console.log(new Date().toLocaleDateString().split('/')[1]);
          }}
          required
          min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 10)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <label className="text-base font-body block">
        Type Of Transportation Depending On Donation Size:
        <select
          name="pickupVehicle"
          required
          onChange={(e) => setPickupVehicle(e.target.value)}
          value={pickupVehicle}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option className="text-base font-body" value="Car">
            🚗 ~ Car
          </option>
          <option className="text-base font-body" value="Truck">
            🚚 ~ Truck
          </option>
          <option className="text-base font-body" value="Motorcycle">
            🏍️ ~ Motorcycle
          </option>
        </select>
      </label>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-black font-bold rounded font-heading text-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DonationFormDefault;
