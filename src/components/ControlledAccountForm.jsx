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
    e.preventDefault();
    if (fullName === '' || email === '') {
      alert('Please fill out all fields.');
      return;
    }
    alert('Account Created Successfully!\nName: ' + fullName + '\nEmail: ' + email + '\nType: ' + accountType);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm border border-emerald-200">
      <h2 className="text-2xl font-bold text-emerald-950 mb-4 border-b border-emerald-100 pb-2">
        Bank Account Registration
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-emerald-900 mb-1">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={handleNameChange}
            className="w-full p-2.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="e.g. Jaiminpuri Bava"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-emerald-900 mb-1">Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="e.g. jaiminpuri@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-emerald-900 mb-1">Account Type:</label>
          <select
            value={accountType}
            onChange={handleTypeChange}
            className="w-full p-2.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
          >
            <option value="Savings">Savings Account</option>
            <option value="Current">Current Account</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-md font-semibold text-sm transition"
        >
          Register Account
        </button>
      </form>
    </div>
  );
}

export default ControlledAccountForm;
