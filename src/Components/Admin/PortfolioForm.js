import React, { useEffect, useState } from 'react';
import dummy from '../../Assets/images/mountain.jpg'
import { getCategoryList } from '../../Firebase/firebase_admin_utils';
import { fetchDocumentByName, fetchPortFolioData, getEmbedLink } from '../../Firebase/firebase_utils';

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

  const [selectedCategory, setSelectedCategory] = useState()
  const [categoryList, setCategoryList] = useState([])
  const [portfolioItems, setPortfolioItems] = useState([])
  const [selectedPortfolio, setSelectedPortfolio] = useState()

  const [portfolioContent, setportfolioContent] = useState()


  const handleCategorySelection = (item) => {
    setSelectedCategory(item.id);
  }

  useEffect(() => {
    getCategoryList(setCategoryList)
  }, [])
  useEffect(() => {
    if (selectedCategory)
      fetchDocumentByName('portfolio_category', selectedCategory, setPortfolioItems)

  }, [selectedCategory])

  useEffect(() => {
    if (selectedPortfolio) {
      fetchPortFolioData('portfolio', selectedPortfolio.content.id, setportfolioContent)
    }

  }, [selectedPortfolio])


  useEffect(() => {
    if (portfolioContent) {
      // console.log(portfolioContent);
    }

  }, [portfolioContent])





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
    /*    const updatedPortfolio = DUMMY_PORTFOLIO_DATA.filter((_, i) => i !== index);
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
       DUMMY_PORTFOLIO_DATA =updatedPortfolio; */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const handlePortfolioItemSelection = (item) => {
    setSelectedPortfolio(item)
  }

  return (
    <div className='p-4'>
      <div className='bg-gray-800 p-4 rounded-lg'>
        <h2 className='text-white text-lg mb-4'>Portfolio</h2>
        {showAll ? (
          <div className='w-full '>
            <div className='space-y-2 sm:space-y-0 gap-2 sm:grid grid-cols-2 md:grid-cols-3'>

              {categoryList.length ? categoryList.map(item =>
                <div className='' onClick={(e) => { handleCategorySelection(item) }}>

                  <div className={`w-full bg-dark-2 px-2 py-2 border relative ${selectedCategory == item.id ? ' border-green-500' : ''}`}>
                    <p>{item.id}</p>
                    <div>
                      <p className='text-xs pt-2'>Title</p>
                      <p>{item.data.title}</p>
                      <p className='text-xs pt-2'>Details</p>
                      <p>{item.data.details}</p>
                      <img className='w-full md:w-1/3' src={item.data.photo.type == 'g-drive' ? getEmbedLink(item.data.photo.url) : item.data.photo.url} />
                    </div>
                    <div className=' absolute right-0 top-0 flex gap-2 p-2'>
                      < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </div>


                  </div>
                  <div className=' grid grid-cols-12 gap-6'>

                  </div>

                </div>
              ) : <></>}
              {portfolioItems.length ? <div className='w-full space-y-2 sm:space-y-0 gap-2 sm:grid grid-cols-2 md:grid-cols-3'>
                {portfolioItems.map(item => {

                  return (<div className='' onClick={(e) => { handlePortfolioItemSelection(item) }}>

                    <div className={`w-full bg-dark-2 px-2 py-2 border relative ${''}`}>

                      <div>
                        <p className='text-xs pt-2'>Title</p>
                        <p>{item.title}</p>
                        <p className='text-xs pt-2'>Details</p>
                        <p>{item.details}</p>
                        <img className='w-full md:w-1/3' src={item.photo.type == 'g-drive' ? getEmbedLink(item.photo.url) : item.photo.url} />
                      </div>
                      <div className=' absolute right-0 top-0 flex gap-2 p-2'>
                        < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                          className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </div>


                    </div>
                    <div className=' grid grid-cols-12 gap-6'>

                    </div>

                  </div>)
                })}
              </div> : <></>}
            </div>
            {portfolioContent ? <div className='w-full border p-2 mt-6   grid grid-cols-3'>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>client</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.client}</p>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>content_description</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.content_description}</p>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>cover_title</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.cover_title}</p>
              </div>

              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>points</p>
                <ul className=' font-semibold text-yellow-2'>{portfolioContent.points?.map(el => <li className=' font-semibold text-yellow-2'>{el}</li>)}</ul>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>role</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.role}</p>
              </div>

              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>year</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.year}</p>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>creator_section_company</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.creator_section_company}</p>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>creator_section_description</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.creator_section_description}</p>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>creator_section_name</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.creator_section_name}</p>
              </div>
              <div className=' border bg-gray-50 bg-opacity-70'>
                <p>creator_section_position</p>
                <p className=' font-semibold text-yellow-2'>{portfolioContent.creator_section_position}
                </p>
              </div>


            </div> : <></>}

          </div>
        ) : (
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
    </div >
  );
};

export default PortfolioForm;
/* {DUMMY_PORTFOLIO_DATA.map((item, index) => (
                    <div
                      className={` w-full col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 py-4 cursor-pointer ${activeIndex === 11 ? 'bg-gray-900' : 'bg-gray-800'
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
                  ))} */