import React, { useState } from 'react';
import { deleteMember, getPhotoUrl, handleAddEditMember } from '../../../Firebase/firebase_utils';

const MemberModal = ({ member, setVisible, handleEdit, handleDelete }) => {



    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [editedName, setEditedName] = useState(member?.name || "");
    const [editedPosition, setEditedPosition] = useState(member?.position || "");
    const [coverType, setCoverType] = useState(member?.photo?.type || 'link')
    const [coverPhoto, setCoverPhoto] = useState(member?.photo || { type: 'link', url: "" })
    const handleConfirmDelete = () => {
        // Perform actual delete operation here
        deleteMember(member.name.split(" ").join('-'));
        
        setShowConfirmationModal(false);
    };

    const handleSaveEdit =async (e) => {
      
        e.stopPropagation()
       
        // Perform actual edit operation here
         handleAddEditMember({ ...member, name: editedName, position: editedPosition,photo_object:coverPhoto })
        
        // handleEdit({ ...member, name: editedName, position: editedPosition });
    };

    return (
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-dark-3 rounded-md">
            <div className="px-[10%] py-20">
                <p onClick={() => setVisible(false)} className="w-fit text-red-500 text-xl float-right cursor-pointer hover:scale-105">X  </p>

                {/* Member Information */}
                <div className="mb-4 md:flex gap-2 items-center ">
                    <img src={getPhotoUrl(coverType, coverPhoto?.url)} alt={editedName} className="mx-auto h-[80%] mb-2 object-contain w-1/2" />

                    <div className=' grid grid-cols-3 w-full gap-2'>
                        <div className="mb-2">
                            <label className="block font-medium mb-1">Cover Type:</label>
                            <select
                                value={coverType}
                                onChange={(e) => setCoverType(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                            >
                                <option value="g-drive">Google Drive</option>
                                <option value="link">Link</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="block font-medium mb-1">{coverType === 'g-drive' ? 'Google Drive URL:' : 'Image Link:'}</label>
                            <input
                                type="text"
                                value={coverPhoto?.url}
                                onChange={(e) => setCoverPhoto({ type: coverType, url: e.target.value })}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder={coverType === 'g-drive' ? 'Google Drive URL' : 'Image Link'}
                            />
                        </div>
                        {/* Editable fields */}
                        <div className="mb-2">
                            <label className="block font-medium mb-1">Name:</label>
                            <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className="border rounded px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block font-medium mb-1">Position:</label>
                            <input
                                type="text"
                                value={editedPosition}
                                onChange={(e) => setEditedPosition(e.target.value)}
                                className="border rounded px-3 py-2 w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Edit and Delete Buttons */}
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 mr-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                        onClick={handleSaveEdit}
                    >
                        Save
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                        onClick={() => setShowConfirmationModal(true)}
                    >
                        Delete
                    </button>
                </div>

                {/* Confirmation Modal */}
                {showConfirmationModal && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dark-3 bg-opacity-75">
                        <div className="bg-dark-2 p-8 rounded-md text-center">
                            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this member?</p>
                            <div className="flex justify-center">
                                <button
                                    className="px-4 py-2 mr-2 rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                                    onClick={handleConfirmDelete}
                                >
                                    Yes
                                </button>
                                <button
                                    className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                                    onClick={() => setShowConfirmationModal(false)}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberModal;
