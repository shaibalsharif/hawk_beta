import React, { useState } from 'react';
import { URL_ID_LIST } from '../../Assets/data';

const HomeForm = () => {
  const [inputText, setInputText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [items, setItems] = useState(URL_ID_LIST);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    if (text.length > 20) {
      setErrorMessage('Character limit exceeded');
    } else {
      setErrorMessage('');
    }
  };
  const handleTitletChange = (e) => {
    const text = e.target.value;
    setTitleText(text);

  };

  const handleOrderClick = (index) => {
    if (index < items.length - 1) {
      const updatedItems = [...items];
      const temp = updatedItems[index];
      updatedItems[index] = updatedItems[index + 1];
      updatedItems[index + 1] = temp;
      setItems(updatedItems);
    }
  };

  const handleDeleteClick = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleAddClick = (e) => {
    if (!(titleText?.trim().length > 0))
      return
    setItems([...items, titleText]);
    setTitleText("")
  };

  return (
    <div className='home-form'>
      <div className='input-container'>
        <label>Page Title</label>
        <input
          type='text'
          value={inputText}
          onChange={handleInputChange}
          className={`input-field ${errorMessage ? 'error' : ''}`}
        />
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </div>

      <div className='items-container'>
        {items.map((item, index) => (
          <div className='item' key={index}>
            <div className='titlei'>{item}</div>
            <div className='order' onClick={() => handleOrderClick(index)}> {index + 1}</div>
            <div className='delete' onClick={() => handleDeleteClick(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </div>
          </div>
        ))}
        <div className='relative flex h-10'>
          <input
            type='text'
            value={titleText}
            onChange={handleTitletChange}
            className={`input-field btn-input`}
          /> <svg xmlns="http://www.w3.org/2000/svg" onClick={handleAddClick} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-yellow-2  w-10 px-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </div>

      </div>
      <button className='w-full py-2 bg-gray-400 mt-2 uppercase hover:text-yellow-2 hover:bg-gray-700'>Update</button>
    </div>
  );
};

export default HomeForm;
