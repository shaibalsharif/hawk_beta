import React, { useState } from 'react';
import dummy from '../../Assets/images/mountain.jpg'
let DUMMY_PORTFOLIO_DATA = [
  {
    title: 'Project 1',
    details: 'Project 1 Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    coverUrl: dummy,
    category: 'Category 1',
  },
  {
    title: 'Project 2',
    details: 'Project 2 Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    coverUrl: dummy,
    category: 'Category 2',
  },
  {
    title: 'Project 3',
    details: 'Project 3 Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    coverUrl: dummy,
    category: 'Category 3',
  },
];

const PortfolioForm = () => {
  const [showAll, setShowAll] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    details: '',
    coverUrl: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedPortfolio = DUMMY_PORTFOLIO_DATA.filter((_, i) => i !== index);
    setActiveIndex(0); // Reset active index after deletion
    DUMMY_PORTFOLIO_DATA.length > 0 && setActiveIndex(0);
    DUMMY_PORTFOLIO_DATA.length > 0 && setActiveIndex(0);
    if (DUMMY_PORTFOLIO_DATA.length === 0) {
      setShowAll(true);
    }
    setFormData({
      title: '',
      details: '',
      coverUrl: '',
      category: '',
    });
    DUMMY_PORTFOLIO_DATA =updatedPortfolio;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='p-4'>
      <div className='bg-gray-800 p-4 rounded-lg'>
        <h2 className='text-white text-lg mb-4'>Portfolio</h2>
        {showAll ? (
          <div className='carousel flex flex-wrap -mx-4'>
            {DUMMY_PORTFOLIO_DATA.map((item, index) => (
              <div
                className={`portfolio-card w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer ${
                  activeIndex === index ? 'bg-gray-900' : 'bg-gray-800'
                }`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <img src={item.coverUrl} alt={item.title} className='w-full h-48 object-cover mb-2 rounded' />
                <h3 className='text-white text-md font-medium'>{item.title}</h3>
                <p className='text-gray-300 text-sm mb-2'>{item.details}</p>
                <span className='text-gray-400 text-xs'>{item.category}</span>
                <button
                  className='text-red-500 hover:text-red-700 focus:outline-none'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteItem(index);
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-4 h-4'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) :  (
          <div className='input-group'>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              placeholder='Title'
            />
            <input
              type='text'
              name='details'
              value={formData.details}
              onChange={handleInputChange}
              placeholder='Details'
            />
            <input
              type='text'
              name='coverUrl'
              value={formData.coverUrl}
              onChange={handleInputChange}
              placeholder='Cover URL'
            />
            <input
              type='text'
              name='category'
              value={formData.category}
              onChange={handleInputChange}
              placeholder='Category'
            />
          </div>
        )}
        <div className='mt-4'>
          <button
            onClick={handleToggleView}
            className='px-4 py-2 bg-blue-600 text-white rounded focus:outline-none'
          >
            {showAll ? 'Add New Item' : 'Show All Items'}
          </button>
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

export default PortfolioForm;
