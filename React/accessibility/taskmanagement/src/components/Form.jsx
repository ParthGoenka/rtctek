import React, { useState } from 'react';

function Form() {
  // Set initial state to appropriate values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    if (!email || !name || !pass || !country || !agree || !gender) {
      alert('Please fill all details');
      return;
    } else {
      console.log(email, name, pass, country, agree, gender);
      setAgree("");
      setCountry("");
      setName("");
      setEmail("");
      setPass("");
      setGender("");
    }
  };

  return (
    <div className="bg-white p-10 ">
    
    <div className="bg-[#f0f0f0] flex items-center justify-center p-10 rounded-lg" role="form">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-[#202020] mb-6">Create an Account</h2>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#606060] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-[#303030] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#606060] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-[#696969] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {/* Dropdown List (Select) */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-[#606060] mb-2">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select your country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="india">India</option>
            </select>
          </div>

          {/* Checkbox Field */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="h-4 w-4 text-[#000060] border-gray-300 rounded focus:ring-blue-500"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="ml-2 text-sm text-[#606060]">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Radio Button Field */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-[#606060] mb-2">Gender</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-[#000060] border-gray-300 focus:ring-blue-500"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male" className="ml-2 text-sm text-[#606060]">Male</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-[#000060] border-gray-300 focus:ring-blue-500"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female" className="ml-2 text-sm text-[#606060]">Female</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  className="h-4 w-4 text-[#000060] border-gray-300 focus:ring-blue-500"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="other" className="ml-2 text-sm text-[#606060]">Other</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="w-full py-2 bg-[#0000f0] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
      
    </div>
  );
}

export default Form;
