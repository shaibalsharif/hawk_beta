import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    coverTitle: '',
    coverSubtitle: '',
    pageTitle: '',
    pageDescription: '',
    emails: [],
    addresses: [],
    phones: [],
    newEmail: '',
    newAddress: '',
    newPhone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEmail = () => {
    if (formData.newEmail) {
      setFormData((prevData) => ({
        ...prevData,
        emails: [...prevData.emails, prevData.newEmail],
        newEmail: '',
      }));
    }
  };

  const handleAddAddress = () => {
    if (formData.newAddress) {
      setFormData((prevData) => ({
        ...prevData,
        addresses: [...prevData.addresses, prevData.newAddress],
        newAddress: '',
      }));
    }
  };

  const handleAddPhone = () => {
    if (formData.newPhone) {
      setFormData((prevData) => ({
        ...prevData,
        phones: [...prevData.phones, prevData.newPhone],
        newPhone: '',
      }));
    }
  };

  const handleDeleteItem = (section, index) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='p-4'>
      <div className='bg-gray-800 p-4 rounded-lg'>
        {/* Cover Section */}
        <div className='mb-4'>
          <h2 className='text-white text-lg mb-2'>Cover</h2>
          <input
            type='text'
            name='coverTitle'
            value={formData.coverTitle}
            onChange={handleInputChange}
            placeholder='Title'
            className='input-field mb-2'
          />
          <input
            type='text'
            name='coverSubtitle'
            value={formData.coverSubtitle}
            onChange={handleInputChange}
            placeholder='Subtitle'
            className='input-field'
          />
        </div>

        {/* Inner Page Section */}
        <div>
          <h2 className='text-white text-lg mb-2'>Inner Page</h2>
          <input
            type='text'
            name='pageTitle'
            value={formData.pageTitle}
            onChange={handleInputChange}
            placeholder='Title'
            className='input-field mb-2'
          />
          <textarea
            name='pageDescription'
            value={formData.pageDescription}
            onChange={handleInputChange}
            placeholder='Description'
            rows='4'
            className='input-field mb-4'
          />

          {/* Email Subsection */}
          <div className='sub-section'>
            <h3 className='text-white text-md mb-2'>Emails</h3>
            {formData.emails.map((email, index) => (
              <div className='sub-item' key={index}>
                <input
                  type='text'
                  value={email}
                  readOnly
                  className='input-field mr-2'
                />
                <button
                  onClick={() => handleDeleteItem('emails', index)}
                  className='text-red-500 hover:text-red-700 focus:outline-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
            <div className='sub-input-group'>
              <input
                type='email'
                name='newEmail'
                value={formData.newEmail}
                onChange={handleInputChange}
                placeholder='New Email'
                className='input-field'
              />
              <button
                onClick={handleAddEmail}
                className='px-2 py-1 bg-blue-600 text-white rounded focus:outline-none'
              >
                Add
              </button>
            </div>
          </div>

          {/* Address Subsection */}
          <div className='sub-section'>
        <h3 className='text-white text-md mb-2'>Addresses</h3>
        {formData.addresses.map((address, index) => (
          <div className='sub-item' key={index}>
            <input
              type='text'
              value={address}
              readOnly
              className='input-field mr-2'
            />
            <button
              onClick={() => handleDeleteItem('addresses', index)}
              className='text-red-500 hover:text-red-700 focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
        ))}
        <div className='sub-input-group'>
          <input
            type='text'
            name='newAddress'
            value={formData.newAddress}
            onChange={handleInputChange}
            placeholder='New Address'
            className='input-field'
          />
          <button
            onClick={handleAddAddress}
            className='px-2 py-1 bg-blue-600 text-white rounded focus:outline-none'
          >
            Add
          </button>
        </div>
      </div>

      <div className='sub-section'>
        <h3 className='text-white text-md mb-2'>Phones</h3>
        {formData.phones.map((phone, index) => (
          <div className='sub-item' key={index}>
            <input
              type='tel'
              value={phone}
              readOnly
              className='input-field mr-2'
            />
            <button
              onClick={() => handleDeleteItem('phones', index)}
              className='text-red-500 hover:text-red-700 focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
        ))}
        <div className='sub-input-group'>
          <input
            type='tel'
            name='newPhone'
            value={formData.newPhone}
            onChange={handleInputChange}
            placeholder='New Phone'
            className='input-field'
          />
          <button
            onClick={handleAddPhone}
            className='px-2 py-1 bg-blue-600 text-white rounded focus:outline-none'
          >
            Add
          </button>
        </div>
      </div>

        </div>
      </div>
      <button
        className='mt-4 px-4 py-2 bg-green-600 text-white rounded w-full focus:outline-none'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
