import React, { useState } from 'react';
import { getPhotoUrl } from '../../Firebase/firebase_utils';
import ServiceModal from './Modals/ServiceModal'
import ClientModal from './Modals/ClientModal';


const ServicesForm = ({ data }) => {
  const [coverType, setCoverType] = useState(data ? data.coverType : 'g-drive');
  const [coverUrl, setCoverUrl] = useState(data ? data.coverUrl : '');
  const [title, setTitle] = useState(data ? data.title : '');
  const [subtitle, setSubtitle] = useState(data ? data.subtitle : '');

  const [innerPageTitle, setInnerPageTitle] = useState(data ? data.innerPageTitle : '');
  const [innerPageType, setInnerPageType] = useState(data ? data.innerPageType : 'g-drive');
  const [innerPageUrl, setInnerPageUrl] = useState(data ? data.innerPageUrl : '');
  const [innerPageImage, setInnerPageImage] = useState(data ? data.innerPageImage : '');
  const [innerPageSub, setInnerPageSub] = useState(data ? data.innerPageSub : '');
  const [innerPageDetails, setInnerPageDetails] = useState(data ? data.innerPageDetails : '');

  const [services, setServices] = useState(data ? data.services : [
    { name: 'dadadada', details: 'adajhvdgavjbdahbdhahdavvda', image: { type: 'link', url: 'https://plus.unsplash.com/premium_photo-1661963676028-4df834387828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' } },
    { name: 'dadadada', details: 'adajhvdgavjbdahbdhahdavvda', image: { type: 'link', url: 'https://plus.unsplash.com/premium_photo-1661963676028-4df834387828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' } }]);
  ;
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


    setServices([...services, newService]);

  };

  const deleteService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const [clients, setClients] = useState(data ? data.clients : []);

  const handleAddClient = () => {
    setClientData(null);
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
    setClients([...clients, newClient]);
  };

  const deleteClient = (index) => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);
    setClients(updatedClients);
  };


  return (
    <div className=" bg-dark-3 rounded-lg shadow-md px-6">
      <div className='mb-10 pt-4 pb-8'>
        <h2 className="text-2xl font-semibold ">Cover Section</h2>
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
        <h2 className="text-2xl font-semibold mt-2 mb-1">Inner Page Section</h2>
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">Services List</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
          {services.map(item => {

            return (<div className='px-10 py-4  bg-dark-2'>
              <div>
                <img className='mb-2' src={getPhotoUrl(item?.image?.type, item?.image?.url)} />
                <p>{item.name}</p>
                <p>{item.details}</p>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  onClick={(e) => { e.stopPropagation(); setServicesData(item); setServiceModalOpen(true) }}
                  className="bg-blue-500 text-white px-3 py-1 rounded-sm mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteService(index)}
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">Client Hub</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {clients.map((client, index) => (
            <div key={index} className="px-10 py-4 bg-dark-2">
              <div className=''>
                <img className="mb-2" src={client.image} alt={client.name} />
                <p>{client.name}</p>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => {
                    setClientData(client);
                    setClientModalOpen(true);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded-sm mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteClient(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddClient}
            className="bg-dark-2 text-white px-3 rounded-sm hover:bg-dark-1"
          >
            + Add Client
          </button>
        </div>
      </div>

      {clientModalOpen && (
        <ClientModal onClose={closeClientModal} onSave={saveClient} data={clientData ? clientData : null} />
      )}

      {/* Service Modal */}
      {serviceModalOpen && <ServiceModal

        onClose={closeServiceModal}
        onSave={saveService}
        data={servicesData ? servicesData : null}
      />}
    </div>
  );
};

export default ServicesForm;
