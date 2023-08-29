import React, { useState } from 'react';

const ClientModal = ({ onClose, onSave, data }) => {
  const [name, setName] = useState(data ? data.name : '');
  const [image, setImage] = useState(data ? data.image : '');

  const handleSave = () => {
    const newClient = {
      name: name,
      image: image,
    };

    onSave(newClient);
    onClose();
  };

  return (
    <div className="h-screen w-full fixed z-10 top-0 left-0 flex justify-center items-center bg-slate-400 bg-opacity-50">
      <div className="modal-container w-[40%]">
        <div className="modal-content">
          {/* ...input fields for name and image... */}
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
