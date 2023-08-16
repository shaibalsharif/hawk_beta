import React, { useEffect, useState } from 'react';
import dummy from '../../Assets/images/mountain.jpg'
import { getCategoryList } from '../../Firebase/firebase_admin_utils';
import { fetchDocumentByName, fetchPortFolioData, getEmbedLink } from '../../Firebase/firebase_utils';
import CategoryModal from './Modals/CategoryModal';
import DeleteModal from './Modals/DeleteModal';
import PortfolioModal from './Modals/PortfolioModal';

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
  const [portfolioContent, setportfolioContent] = useState(null)


  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false)

  const [cat_data, set_cat_data] = useState(null)






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








  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteCategory = (cate_item) => {
    set_cat_data(cate_item)
    setIsDeleteModalOpen(true)
  };

  const handleHideCategory = (cate_item) => {

  };

  const handleEditCategory = (cate_item) => {
    set_cat_data(cate_item)
    setIsCategoryModalOpen(true)
  };




  const handleAddPortfolio = (e) => {
    setportfolioContent([])
    setIsPortfolioModalOpen(true)
  }

  const handleDeletePortfolio = () => {
    setIsDeleteModalOpen(true)
  };

  const handleHidePortfolio = (cate_item) => {

  };

  const handleEditPortfolio = (e ) => {
    e.preventDefault()
    e.stopPropagation()

    setIsPortfolioModalOpen(true)
  };

  const handlePortfolioItemSelection = (item) => {
    setSelectedPortfolio(item)
  }



  return (
    <div className='p-4'>
      <div className=' p-4 rounded-lg'>
        <h2 className='text-white text-lg mb-4'>Portfolio</h2>

        <div className='w-full '>
          <button className='flex gap-2 bg-dark-2 my-2 px-4 py-1 rounded-sm font-[500] tracking-widest' onClick={() => { set_cat_data(null); setIsCategoryModalOpen(true) }}>
            <p>Add new Category</p>
            < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </button>
          <div className='space-y-2 sm:space-y-0 gap-2 sm:grid grid-cols-2 md:grid-cols-3 mb-4'>




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
                  <div className=' absolute right-0 top-0 flex gap-2 p-2 bg-[#585858] bg-opacity-10 rounded-lg m-2'>

                    {/* EDIT */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      onClick={(e) => { e.stopPropagation(); handleEditCategory(item) }}
                      className=" hover:bg-dark-1 bg-opacity-20 hover:scale-105 cursor-pointer p-1 rounded-xl w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                    {/* HIDE */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      onClick={(e) => handleHideCategory(item)}
                      className=" hover:bg-dark-1 bg-opacity-20 hover:scale-105 cursor-pointer p-1 rounded-xl w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    {/* Delete */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      onClick={(e) => handleDeleteCategory(item)}
                      className=" hover:bg-dark-1 bg-opacity-20 hover:scale-105 cursor-pointer p-1 rounded-xl w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>


                  </div>
                </div>
                {/*  <div className=' grid grid-cols-12 gap-6'>

                  </div> */}

              </div>
            ) : <></>}

          </div>

          {selectedCategory ? <><button
            onClick={handleAddPortfolio} className='flex gap-2 bg-dark-2 my-2 px-4 py-1 rounded-sm font-[500] tracking-widest'>
            <p>Add new Portfolio Item</p>
            < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>

          </button>
            <div>
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
                      <div className=' absolute right-0 top-0 flex gap-2 p-2 bg-[#585858] bg-opacity-10 rounded-lg m-2'>

                        {/* EDIT */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                          onClick={(e) => {handleEditPortfolio(e)}}
                          className=" hover:bg-dark-1 bg-opacity-20 hover:scale-105 cursor-pointer p-1 rounded-xl w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                        {/* HIDE */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                          onClick={(e) => handleHidePortfolio(item)}
                          className=" hover:bg-dark-1 bg-opacity-20 hover:scale-105 cursor-pointer p-1 rounded-xl w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        {/* Delete */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                          onClick={(e) => handleDeletePortfolio(portfolioContent)}
                          className=" hover:bg-dark-1 bg-opacity-20 hover:scale-105 cursor-pointer p-1 rounded-xl w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>


                      </div>


                    </div>


                  </div>)
                })}
              </div> : <></>}

            </div></> : <></>}

          {/* portfolioContent ? <div className='w-full border p-2 mt-6   grid grid-cols-3'>
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


          </div> : <></> */}

        </div>


      </div>


      {/* Modalas */}
      {isCategoryModalOpen ? <CategoryModal data={cat_data} onClose={() => setIsCategoryModalOpen(false)} /> : <></>}
      {isPortfolioModalOpen ? <PortfolioModal category={selectedCategory} data={portfolioContent} onClose={() => setIsPortfolioModalOpen(false)} /> : <></>}
      {isDeleteModalOpen ? <DeleteModal data={cat_data} onClose={() => setIsDeleteModalOpen(false)} /> : <></>}

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