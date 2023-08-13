import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../../Firebase/firebase_config';

const DeleteModal = ({ onClose, data, }) => {

    const handleDelete = async () => {

        if (!data || !data.id) {
            console.error('No document ID provided for deletion.');
            return;
        }

        try {
            const docRef = doc(db, 'portfolio_category', data.id);
            await deleteDoc(docRef);
            console.log('Document deleted with ID:', data.id);
            onClose();
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">

                <div className="confirmation-modal">
                    <p>Are you sure you want to delete this item?</p>
                    <div className='flex justify-center gap-2 items-center'>
                        <button onClick={handleDelete} className="confirm-button">
                            Yes
                        </button>
                        <button onClick={() => onclose()} className="cancel-button">
                            No
                        </button>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default DeleteModal