import { useState } from "react";
import React from "react";

const ChangePassword = () => {
  'h-full overflow-auto'
  'h-full flex flex-col justify-center items-center'
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Old Password: ${oldPassword}, New Password: ${newPassword}, Confirm Password: ${confirmPassword}`);
    if(newPassword != confirmPassword)
        {
            //warning
        }
        else
        {
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }
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
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
          <br />
        </label>
        <label htmlFor="newPassword">
          New Password
          <input
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
          <br />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
          <br />         
        </label>  
        <button onClick={handleSubmit}>Confirm</button>
      </div> 
    </div>
    
  );
};

export default ChangePassword;