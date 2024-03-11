import React, { useState } from 'react';
import { getPhotoUrl } from '../../../Firebase/firebase_utils';

const ClientModal = ({ onClose, onSave, data, editMode }) => {

  const [name, setName] = useState(data ? data.name : '');
  const [url, setUrl] = useState(data ? data?.image?.url : '');
  const [type, setType] = useState(data ? data.type : 'link');
  const [order, setOrder] = useState(data ? data?.order : null)


  const handleSave = () => {
    
    const newClient = {
      data: {
        name: name,
        image: { type: type, url: url },
        type:type,
        order: order,
      }

    };
    if (editMode) {
      newClient.index = data.index
    }
    onSave(newClient);
    onClose();
  };

  return (
    <div className="h-screen w-full fixed z-10 top-0 left-0 flex justify-center items-center bg-slate-400 bg-opacity-50">
      <div className="modal-container w-[40%]">
        <div className="modal-content">
          {/* ...input fields for name and image... */}

          <div className="mb-4">
            <label className="block font-medium mb-1">Service Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Client Name"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Image Type :</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="link">Link</option>
              <option value="g-drive">Google Drive</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              {type === 'g-drive' ? 'Google Drive URL:' : 'Image URL:'}
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder={type === 'g-drive' ? 'Google Drive URL' : 'Image URL'}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Select Order
            </label>
            <select
              className="border rounded px-3 py-2 w-full"
              onChange={(e) => setOrder(e.target.value)}
              value={order}

            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((order_item) => {

                return <option value={order_item}>{order_item}</option>
              })}
            </select>

          </div>


          <div className="mb-4">
            <img
              src={url && type ? getPhotoUrl(type, url) : ""}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded-sm mr-2"
            >
              Save
            </button>
            <button onClick={onClose} className="bg-gray-500 text-white px-3 py-1 rounded-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientModal;
