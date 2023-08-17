import React, { useEffect, useState } from 'react';
import { setDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase_config';
import './Modal.css'

import { getPhotoUrl } from '../../../Firebase/firebase_utils';
const CategoryModal = ({ onClose, data }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [type, setType] = useState('g-drive');
    // const [file, setFile] = useState(null);
    const [photoUrl, setPhotoURL] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (data) {
            setTitle(data.data.title);
            setDetails(data.data.details);
            setType(data.data.photo.type);
            setPhotoURL(data.data.photo.url)
        }
    }, [data]);


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data) {
            try {
                // Check if the document ID already exists
                const docRef = doc(db, 'portfolio_category', title.toLowerCase()); // Replace 'customId' with your desired document ID
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists()) {
                    console.log('Document already exists with this ID.');
                    setErrorMessage('Document already exists with this ID.');
                    return;
                }

                await setDoc(docRef, {
                    title,
                    details,
                    photo: {
                        url: photoUrl,
                        type,
                    },
                    content: [],
                });

                console.log('Document added with ID:', title);

                // Close the modal
                onClose();
            } catch (error) {
                console.error('Error adding document:', error);
            }
        }
        else {

        }
    };


    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'portfolio_category', data.id);
            console.log(docRef);
            // Update the specified fields using updateDoc
            updateDoc(docRef, {
                title,
                details,
                photo: {
                    url: photoUrl,
                    type,
                },
            }).then(res => {
                console.log('Document Updated with ID:', data.id);

                onClose();
            }).catch(e => {

                console.log(e);
            })


        } catch (error) {
            console.error('Error updating document:', error);
        }
    };


    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className='flex justify-between'>Add Category <span>
                    <svg onClick={() => onClose()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6 hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span></h2>
                <form onSubmit={data ? handleUpdate : handleSubmit}>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                    <label>Details:</label>
                    <input type="text" value={details} onChange={(e) => setDetails(e.target.value)} required />

                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="g-drive">Google Drive</option>
                        <option value="link">Link</option>
                    </select>
                    <input placeholder='https://' type="text" value={photoUrl} onChange={(e) => setPhotoURL(e.target.value)} required />



                    {photoUrl ? <img className='my-2 border p-2' src={getPhotoUrl(type,photoUrl)} /> : <p>No Image</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button className='bg-dark-3 border' type="submit">{data ? "Update" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default CategoryModal;