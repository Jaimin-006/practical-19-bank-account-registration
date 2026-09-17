import React, { useState } from 'react';

function ControlledAccountForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('Savings');

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleTypeChange(e) {
    setAccountType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent full page submit
    if (fullName === '' || email === '') {
      alert('Please fill out all fields.');
      return;
    }
    alert('Account Created Successfully!\nName: ' + fullName + '\nEmail: ' + email + '\nType: ' + accountType);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Bank Account Registration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-blue-500"
            placeholder="e.g. Jaiminpuri Bava"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-blue-500"
            placeholder="e.g. jaiminpuri@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Account Type:</label>
          <select
            value={accountType}
            onChange={handleTypeChange}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          >
            <option value="Savings">Savings Account</option>
            <option value="Current">Current Account</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded font-bold hover:bg-blue-800"
        >
          Register Account
        </button>
      </form>
    </div>
  );
}

export default ControlledAccountForm;
