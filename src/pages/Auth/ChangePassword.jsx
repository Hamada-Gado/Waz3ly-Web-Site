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
    
    <div className="text-sm text-gray-700 text-center">
      <h1 className="text-3xl font-heading font-bold text-primary text-center">
        Set new Password
      </h1>
      <div className="flex flex-col">
        <label htmlFor="oldPassword"
        className="text-sm font-body text-gray-700">
          Old Password
          </label>
          <input
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>         
        
        </div>
          <div className="flex flex-col">
        <label htmlFor="newPassword"
        className="text-sm font-body text-gray-700">
          New Password
          </label>
          <input
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
          <br />
  
        </div>
        <div className="flex flex-col">
        <label htmlFor="confirmPassword"
        className="text-sm font-body text-gray-700">
          Confirm Password
          </label>
          <input
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          ></input>
          <br /> 
          </div>        
        <div>
        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md shadow-sm " onClick={handleSubmit}>Confirm</button>
      </div> 
    </div>
    
  );
};

export default ChangePassword;