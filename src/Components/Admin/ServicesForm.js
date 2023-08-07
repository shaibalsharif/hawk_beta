import React, { useState } from 'react';
const ServicesForm = () => {
  const [formData, setFormData] = useState({})
  const [coverFormData, setCoverFormData] = useState({
    title: '',
    subtitle: '',
    coverImage: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleCoverInputChange = (e) => {
    const { name, value } = e.target;
    setCoverFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverFormData((prevData) => ({
      ...prevData,
      coverImage: file,
    }));
  };

  return (
    <div className='services-form'>
      <div className='section'>
        <h2 className='section-title'>Cover</h2>
        <div className='input-group'>
          <input
            type='text'
            name='title'
            value={coverFormData.title}
            onChange={handleCoverInputChange}
            placeholder='Title'
          />
          <input
            type='text'
            name='subtitle'
            value={coverFormData.subtitle}
            onChange={handleCoverInputChange}
            placeholder='Subtitle'
          />
        </div>
        <div className='cover-image'>
          <input
            type='file'
            accept='image/*'
            onChange={handleCoverImageChange}
          />
        </div>
      </div>
      <div className='section'>
        <h2 className='section-title'>Services</h2>
        <div className='input-group'>
          <input
            type='text'
            name='category'
            value={formData.category}
            onChange={handleInputChange}
            placeholder='Category'
          />
          <textarea
            name='details'
            value={formData.details}
            onChange={handleInputChange}
            placeholder='Details'
            rows='4'
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesForm;
