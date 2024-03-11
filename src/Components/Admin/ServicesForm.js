import React, { useEffect, useState } from 'react';
import { getPhotoUrl, getServicePageContent, updateClientList, updateCoverData, updateInnerPageData, updateServicesList } from '../../Firebase/firebase_utils';
import ServiceModal from './Modals/ServiceModal';
import ClientModal from './Modals/ClientModal';


const ServicesForm = ({ }) => {

  const [cover_data, set_cover_data] = useState(null)
  const [inner_page_data, set_inner_page_data] = useState(null)
  const [services_data, set_services_data] = useState(null)
  const [client_data, set_client_data] = useState(null)

  const [coverType, setCoverType] = useState(cover_data?.image.type || 'g-drive');
  const [coverUrl, setCoverUrl] = useState(cover_data?.image.url || '');
  const [title, setTitle] = useState(cover_data?.title || '');
  const [subtitle, setSubtitle] = useState(cover_data?.sub || '');

  const [innerPageTitle, setInnerPageTitle] = useState('');
  const [innerPageType, setInnerPageType] = useState('g-drive');
  const [innerPageUrl, setInnerPageUrl] = useState('');
  const [innerPageImage, setInnerPageImage] = useState('');
  const [innerPageSub, setInnerPageSub] = useState('');
  const [innerPageDetails, setInnerPageDetails] = useState('');

  const [serviceTitle, setServiceTitle] = useState('')
  const [serviceSub, setServiceSub] = useState('')
  const [services, setServices] = useState(services_data || []);
  ``
  const [clientTitle, setClientTitle] = useState('')
  const [clientSub, setClientSub] = useState('')
  const [clientDetails, setClientDetails] = useState(services_data || []);
  const [clientList, setClientList] = useState();


  const handleAddService = (e) => {
    e.stopPropagation()
    setServicesData(null)
    setServiceModalOpen(true)

  };

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [servicesData, setServicesData] = useState(null);

  const openServiceModal = () => {
    setServiceModalOpen(true)
  };

  const closeServiceModal = () => {
    setServicesData(null)
    setServiceModalOpen(false)
  };

  const saveService = (newService) => {

    if (newService.index || newService.index + 1) {
      setServices(services.map((el, index) => {
        if (index == newService.index) {
          return newService.data
        }
        else {
          return el
        }
      }))
    }
    else {
      setServices([...services, newService.data]);
    }
  };

  const deleteService = (e, index) => {
    e.stopPropagation();
    const updatedServices = services.filter((_, el_index) => el_index != index)

    setServices(updatedServices);
  };



  const handleAddClient = (e) => {

    e.stopPropagation();


    setClientData({ order: Math.max(...client_data?.content?.map(el => el?.order)) + 1 || 1 });
    setClientModalOpen(true);
  };

  const [clientModalOpen, setClientModalOpen] = useState(false);
  const [clientData, setClientData] = useState(null);

  const openClientModal = () => {
    setClientModalOpen(true);
  };

  const closeClientModal = () => {
    setClientData(null);
    setClientModalOpen(false);
  };

  const saveClient = (newClient) => {

    if (newClient.index || newClient.index + 1) {

      setClientList(clientList.map((el, index) => {
        if (index == newClient.index) {
          return newClient.data
        }
        else {
          return el
        }
      }))
    }
    else {
      setClientList([...clientList, newClient.data]);
    }
  };

  const deleteClient = (e, index) => {
    e.stopPropagation();
    const updatedClientList = clientList.filter((_, el_index) => el_index != index)

    setClientList(updatedClientList);

    // const updatedClients = [...clients];
    // updatedClients.splice(index, 1);
    // setClients(updatedClients);
  };

  const [expandedSection, setExpandedSection] = useState(null);

  const isSectionExpanded = (sectionName) => expandedSection === sectionName;

  const toggleSection = (sectionName) => {
    if (isSectionExpanded(sectionName)) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionName);
    }
  };

  useEffect(() => {

    if (cover_data) {
      setTitle(cover_data?.title)
      setSubtitle(cover_data?.sub)
      setCoverType(cover_data?.image.type)
      setCoverUrl(cover_data?.image.url)
    }

    if (inner_page_data) {

      setInnerPageTitle(inner_page_data?.title)
      setInnerPageType(inner_page_data?.image.type)
      setInnerPageUrl(inner_page_data?.image.url)
      setInnerPageImage(inner_page_data?.image.url)
      setInnerPageSub(inner_page_data?.sub)
      setInnerPageDetails(inner_page_data?.details)
    }

    if (services_data) {
      setServiceTitle(services_data?.title)
      setServiceSub(services_data?.sub)
      setServices(services_data?.content)
    }
    if (client_data) {
      setClientTitle(client_data.title)
      setClientSub(client_data.sub)
      setClientDetails(client_data.details)
      setClientList(client_data.content)
    }

  }, [cover_data, inner_page_data, services_data]);

  const fetchdata = () => {
    getServicePageContent('services', 'cover', set_cover_data)
    getServicePageContent('services', 'inner_page', set_inner_page_data)
    getServicePageContent('services', 'services_list', set_services_data)
    getServicePageContent('services', 'client_list', set_client_data)
  }

  useEffect(() => {
    // getServicePageContent_all(['cover', 'inner_page', 'services_list', 'client_list'],
    //   setData)
    fetchdata()
  }, [])


  const handleSectionUpdate = (e) => {
    if (expandedSection == 'cover') {
      updateCoverData(title, subtitle, coverType, coverUrl)
        .then(success => {
          if (success) {
            console.log('Cover data updated successfully!');
          } else {
            console.log('Failed to update cover data.');
          }
        })
        .catch(error => {
          console.log('Error updating cover data:', error);
        });
    }
    else if (expandedSection == 'innerPage') {

      updateInnerPageData(innerPageTitle, innerPageSub, innerPageImage, innerPageUrl, innerPageDetails)
        .then(success => {

          if (success) {
            console.log('Inner page data updated successfully!');
          } else {
            console.log('Failed to update inner page data.');
          }
        })
        .catch(error => {
          console.log("jj");
          console.log('Error updating inner page data:', error);
        });
    }
    else if (expandedSection == 'services') {

      updateServicesList(serviceSub, serviceTitle, services)
        .then(success => {
          if (success) {
            console.log('Services list data updated successfully!');
          } else {
            console.log('Failed to update services list data.');
          }
        })
        .catch(error => {
          console.log('Error updating services list data:', error);
        });
    }
    else if (expandedSection == 'clients') {
      
      updateClientList(clientTitle, clientSub, clientDetails, clientList,client_data)
        .then(success => {
 
          if (success) {
            console.log('Client list data updated successfully!');
          } else {
            console.log('Failed to update client list data.');
          }
        })
        .catch(error => {
          console.log('Error updating client list data:', error);
        });
    }


  }
  const SectionHeader = ({ section_title }) => {
    return (<div className=" section-header grid grid-cols-12 gap-20 cursor-pointer
     hover:bg-gray-600 rounded-md rounded-b-none bg-opacity-25 pl-4"
      onClick={() => toggleSection(section_title)}>
      <h2 className="text-2xl font-semibold my-auto pb-1">{section_title}</h2>
      <div></div>
      <span className="section-chevron text-xl my-auto">
        {isSectionExpanded(section_title) ? '▲' : '▼'}
      </span>
    </div>)
  }

  return (
    <div className="  rounded-lg shadow-md px-6">
      <button onClick={(e) => { e.stopPropagation(); fetchdata() }}>Refresh Data</button>
      <div className='mb-10 pt-4 pb-8 space-y-4'>
        <section className='bg-dark-3'>   {/* Cover Section */}
          {<SectionHeader section_title={'cover'} />}
          {isSectionExpanded('cover') && (
            <div className="section-content px-8 py-4 ">
              {/* Cover section content */}
              <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
                <div className="mb-1 ">
                  <label className="block font-medium mb-1">Title:</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-1 ">
                  <label className="block font-medium mb-1">Subtitle:</label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Subtitle"
                  />
                </div>
                <div className="mb-1 ">
                  <label className="block font-medium mb-1">Image Type:</label>
                  <select
                    value={coverType}
                    onChange={(e) => setCoverType(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  >
                    <option value="g-drive">Google Drive</option>
                    <option value="link">Link</option>
                  </select>
                </div>
                <div className="mb-1 ">
                  <label className="block font-medium mb-1">
                    {coverType === 'g-drive' ? 'Google Drive URL:' : 'Image URL:'}
                  </label>
                  <input
                    type="text"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder={coverType === 'g-drive' ? 'Google Drive URL' : 'Image URL'}
                  />
                </div>
                <img src={getPhotoUrl(coverType, coverUrl)} alt="Cover" className="h-72 object-cover" />
              </div>
            </div>
          )}
        </section>
        {isSectionExpanded("cover") && (<div className='flex gap-4'>
          <button onClick={handleSectionUpdate}> Save changes</button>
          <button>Clear</button>
        </div>)}


        <section className='bg-dark-3'>
          {/* Inner Page Section */}
          {<SectionHeader section_title={'innerPage'} />}

          {isSectionExpanded('innerPage') && (

            <div className="section-content px-8 py-4">

              {/* Inner Page section content */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Inner Page Inputs */}
                <div className="mb-1">
                  <label className="block font-medium mb-1">Inner Page Title:</label>
                  <input
                    type="text"
                    value={innerPageTitle}
                    onChange={(e) => setInnerPageTitle(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Inner Page Title"
                  />
                </div>
                <div className="mb-1">
                  <label className="block font-medium mb-1">Inner Page Type:</label>
                  <select
                    value={innerPageType}
                    onChange={(e) => setInnerPageType(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  >
                    <option value="g-drive">Google Drive</option>
                    <option value="link">Link</option>
                  </select>
                </div>
                <div className="mb-1">
                  <label className="block font-medium mb-1">
                    {innerPageType === 'g-drive' ? 'Google Drive URL:' : 'Image URL:'}
                  </label>
                  <input
                    type="text"
                    value={innerPageUrl}
                    onChange={(e) => setInnerPageUrl(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder={innerPageType === 'g-drive' ? 'Google Drive URL' : 'Image URL'}
                  />
                </div>

                <div className="mb-1">
                  <label className="block font-medium mb-1">Inner Page Subtitle:</label>
                  <input
                    type="text"
                    value={innerPageSub}
                    onChange={(e) => setInnerPageSub(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Inner Page Subtitle"
                  />
                </div>
                <div className="col-span-2 mb-1">
                  <label className="block font-medium mb-1">Inner Page Details:</label>
                  <textarea
                    value={innerPageDetails}
                    onChange={(e) => setInnerPageDetails(e.target.value)}
                    rows="4"
                    className="border rounded px-3 py-2 w-full resize-none bg-transparent"
                    placeholder="Inner Page Details"
                  />
                </div>
                <div className="col-span-2">
                  <img src={getPhotoUrl(innerPageType, innerPageUrl)} alt="Inner Page" className="h-72 object-cover" />
                </div>
              </div>
            </div>
          )}
        </section>
        {isSectionExpanded("innerPage") && (<div className='flex gap-4'>
          <button onClick={handleSectionUpdate}> Save changes</button>
          <button>Clear</button>
        </div>)}

        <section className='bg-dark-3'>
          {/* Services List */}
          {<SectionHeader section_title={'services'} />}

          {isSectionExpanded('services') && (
            <div className="section-content px-8 py-4">
              {/* Services List content */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                <div className="mb-1">
                  <label className="block font-medium mb-1">Service Page Title:</label>
                  <input
                    type="text"
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Service Page Title"
                  />
                </div>
                <div className="mb-1">
                  <label className="block font-medium mb-1">Service Page Subtitle:</label>
                  <input
                    type="text"
                    value={serviceSub}
                    onChange={(e) => setServiceSub(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Service Page Subtitle"
                  />
                </div>

                {services.map((item, index) => {

                  return (<div className='px-10 py-4  bg-dark-2'>
                    <div>
                      <img className='mb-2' src={getPhotoUrl(item?.image?.type, item?.image?.url)} />
                      <p>{item.name}</p>
                      <p>{item.details}</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); setServicesData({ ...item, index }); setServiceModalOpen(true) }}
                        className="bg-blue-500 text-white px-3 py-1 rounded-sm mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => { deleteService(e, index) }}
                        className="bg-red-500 text-white px-3 py-1 rounded-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  )
                })}
                {/* services.map((service, index) => (
          <div key={index} className="mb-6">
            <div className="mb-4">
              <label className="block font-medium mb-1">Service Title:</label>
              <input
                type="text"
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                className="border rounded px-3 py-2 w-full"
                placeholder="Service Title"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Service Subtitle:</label>
              <input
                type="text"
                value={service.subTitle}
                onChange={(e) => handleServiceChange(index, 'subTitle', e.target.value)}
                className="border rounded px-3 py-2 w-full"
                placeholder="Service Subtitle"
              />
            </div>
            <button
              onClick={() => handleAddSubService(index)}
              className="bg-dark-2 text-white px-3 py-1 rounded-sm hover:bg-dark-1"
            >
              + Add Sub Service
            </button>
          </div>
        )) */}

                <button
                  onClick={handleAddService}
                  className="bg-dark-2 text-white px-3  rounded-sm hover:bg-dark-1"
                >
                  + Add Service
                </button>
              </div>
            </div>
          )}</section>
        {isSectionExpanded("services") && (<div className='flex gap-4'>
          <button onClick={handleSectionUpdate}> Save changes</button>
          <button>Clear</button>
        </div>)}
        <section className='bg-dark-3'>
          {/* Client Hub */}
          {<SectionHeader section_title={'clients'} />}

          {isSectionExpanded('clients') && (
            <div className="section-content px-8 py-4">
              {/* Client Hub content */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="mb-1">
                  <label className="block font-medium mb-1">Client Page Title :</label>
                  <input
                    type="text"
                    value={clientTitle}
                    onChange={(e) => setClientTitle(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Client Page Title"
                  />
                </div>


                <div className="mb-1">
                  <label className="block font-medium mb-1">Client Page Sub :</label>
                  <input
                    type="text"
                    value={clientSub}
                    onChange={(e) => setClientSub(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Client Page Sub"
                  />
                </div>

                <div className="mb-1">
                  <label className="block font-medium mb-1">Client Page Details :</label>
                  <input
                    type="text"
                    value={clientDetails}
                    onChange={(e) => setClientDetails(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Client Page Details"
                  />
                </div>



                {clientList?.sort((item_p, item_n) => { return item_p.order - item_n.order })?.
                  map((item, index) => {

                    return (<div className='px-10 py-4  bg-dark-2'>
                      <div>
                        <img className='mb-2' src={getPhotoUrl(item?.image?.type, item?.image?.url)} />
                        <p>{item.name}</p>

                      </div>
                      <div className="flex justify-between mt-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); setClientData({ ...item, index }); openClientModal(); }}
                          className="bg-blue-500 text-white px-3 py-1 rounded-sm mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => { deleteClient(e, index) }}
                          className="bg-red-500 text-white px-3 py-1 rounded-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    )
                  })}
                <button
                  onClick={handleAddClient}
                  className="bg-dark-2 text-white px-3 rounded-sm hover:bg-dark-1"
                >
                  + Add Client
                </button>
              </div>
            </div>
          )}
        </section>
        {isSectionExpanded("clients") && (<div className='flex gap-4'>
          <button onClick={handleSectionUpdate}> Save changes</button>
          <button>Clear</button>
        </div>)}


      </div>

      {clientModalOpen && (
        <ClientModal
          onClose={closeClientModal}
          onSave={saveClient}
          editMode={clientData ? true : false}
          data={clientData ? clientData : null} />
      )}

      {/* Service Modal */}
      {serviceModalOpen && <ServiceModal

        onClose={closeServiceModal}
        onSave={saveService}
        editMode={servicesData ? true : false}
        data={servicesData ? servicesData : null}
      />}
    </div>
  );
};



export default ServicesForm;
