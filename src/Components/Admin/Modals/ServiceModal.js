import React, { useState, useEffect } from 'react';
import { getPhotoUrl } from '../../../Firebase/firebase_utils';

const ServiceModal = ({ onClose, onSave, data }) => {
    const [name, setName] = useState(data ? data.name : '');
    const [subTitle, setSubTitle] = useState(data ? data.details : '');
    const [imageType, setImageType] = useState(data ? data.image.type : 'g-drive')
    const [imageUrl, setImageUrl] = useState(data ? data.image.url : "")

    console.log(data);

    const handleSave = () => {
        const newData = {
            name: name,
            details: subTitle,
            image: { type: imageType, url: imageUrl, },

           
        };

        onSave(newData);
        onClose();
    };
    return (
        <div className='h-screen w-full fixed z-10 top-0 left-0 flex justify-center items-center bg-slate-400 bg-opacity-50'>

            <div className="modal-container w-[40%]  ">
                <div className="modal-content">
                    <h2 className="text-xl font-semibold mb-4">
                        {data ? 'Edit Service' : 'Add New Service'}
                    </h2>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Service Title:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded px-3 py-2 w-full"
                            placeholder="Service Title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Service Subtitle:</label>
                        <input
                            type="text"
                            value={subTitle}
                            onChange={(e) => setSubTitle(e.target.value)}
                            className="border rounded px-3 py-2 w-full"
                            placeholder="Service Subtitle"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-1">Image Type:</label>
                        <select
                            value={imageType}
                            onChange={(e) => setImageType(e.target.value)}
                            className="border rounded px-3 py-2 w-full"
                        >
                            <option value="link">Link</option>
                            <option value="g-drive">Google Drive</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">
                            {imageType === 'g-drive' ? 'Google Drive URL:' : 'Image URL:'}
                        </label>
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="border rounded px-3 py-2 w-full"
                            placeholder={imageType === 'g-drive' ? 'Google Drive URL' : 'Image URL'}
                        />
                    </div>

                    <div className="mb-4">

                        <img
                            src={imageUrl ? getPhotoUrl(imageType, imageUrl) : ""}
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

export default ServiceModal;
