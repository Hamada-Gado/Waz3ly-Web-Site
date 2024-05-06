import { useState } from "react";
import React from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Old Password: ${oldPassword}, New Password: ${newPassword}, Confirm Password: ${confirmPassword}`);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-primary text-center">
        Set new Password
      </h1>
      <div>
        <label htmlFor="oldPassword">
          Old Password
          <input
            id="oldPassword"
            value={oldPassword}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
        </label>
        <label htmlFor="newPassword">
          New Password
          <input
            id="newPassword"
            value={newPassword}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            id="confirmPassword"
            value={confirmPassword}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default ChangePassword;