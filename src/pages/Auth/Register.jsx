import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("donor"); // Default category
  const [subcategory, setSubcategory] = useState(""); // Selected subcategory
  const [document, setDocument] = useState(""); // Document for teacher/doctor

  const categories = [
    { value: "donor", label: "Donor" },
    { value: "donor_receiver", label: "Donor Receiver" },
    { value: "organization", label: "Organization" },
  ];

  const subcategories = {
    donor: ["Teacher", "Doctor", "Normal Donor"],
    donor_receiver: [], // No subcategories for this category
    organization: [
      "Charity",
      "Hospital",
      "Place of Worship",
      "Orphanage",
      "Public School",
    ],
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(""); // Reset subcategory when category changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., send data to backend)
    console.log(
      `Username: ${username}, Password: ${password}, Category: ${category}, Subcategory: ${subcategory}, Document: ${document}`
    );
    setUsername("");
    setPassword("");
    setCategory("donor"); // Reset category after submission
    setSubcategory("");
    setDocument("");
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg px-8 pb-8 max-w-md w-full space-y-8">
        <h1 className="text-3xl font-heading font-bold text-primary text-center">
          Register
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-body text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-body text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-body text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          {category != "Donor Receiver" && (
            <div className="flex flex-col">
              <label
                htmlFor="subcategory"
                className="text-sm font-body text-gray-700"
              >
                Subcategory
              </label>
              <select
                id="subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
                required
              >
                <option value="">Select Subcategory</option>
                {subcategories[category].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          )}
          {(subcategory === "Teacher" || subcategory === "Doctor") && (
            <div className="flex flex-col">
              <label
                htmlFor="document"
                className="text-sm font-body text-gray-700"
              >
                Upload{" "}
                {subcategory === "Teacher"
                  ? "Teaching Credential"
                  : "Medical Certificate"}
              </label>
              <input
                id="document"
                type="file" // Use file input for document upload
                onChange={(e) => setDocument(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md shadow-sm w-full"
          >
            Register
          </button>
        </form>
        <div className="text-sm text-gray-700 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
