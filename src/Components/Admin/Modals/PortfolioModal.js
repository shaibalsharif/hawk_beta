import React, { useEffect, useState } from 'react';
import { fetchPortFolioData, getPhotoUrl } from '../../../Firebase/firebase_utils';
import { addDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase_config';


const PortfolioModal = ({ data=null, onClose, category, actionType }) => {


    useEffect(() => {
        if (actionType && actionType.type == 'edit' && !data) {
            fetchPortFolioData('portfolio', actionType.id, (val)=>data=val)
        }
    }, [])

    const [currentTab, selectCurrentTab] = useState('portfolio-details')

    const [doc_id, set_doc_id] = useState("")
    const [coverType, setCoverType] = useState(data?.cover_background?.type || 'g-drive');
    const [client, setClient] = useState(data?.client || '');
    const [contentDescription, setContentDescription] = useState(data?.content_description || '');
    const [coverTitle, setCoverTitle] = useState(data?.cover_title || '');
    const [coverPhoto, setCoverPhoto] = useState(data?.cover_background || null);
    const [role, setRole] = useState(data?.role || '');
    const [year, setYear] = useState(data?.year || '');
    const [points, setPoints] = useState(data?.points || ['']);
    const [creatorSectionCompany, setCreatorSectionCompany] = useState(data?.creator_section_company || '');
    const [creatorSectionDescription, setCreatorSectionDescription] = useState(data?.creator_section_description || '');
    const [creatorSectionName, setCreatorSectionName] = useState(data?.creator_section_name || '');
    const [creatorSectionPosition, setCreatorSectionPosition] = useState(data?.creator_section_position || '');
    const [content_list, setConten_list] = useState(data?.content_list || [])


    const [thumbType, setThumbType] = useState(data?.thumb?.type || 'g-drive')
    const [thumbPhoto, setThumbPhoto] = useState(data?.thumb?.url || null);

    const [thumbTitle, setThumbTitle] = useState(data?.thumbTitle || '');
    const [thumbDetails, setThumbDetails] = useState(data?.thumbDetails || '');

    const [newImageType, setNewImageType] = useState(null)
    const [newImageUrl, setNewImageUrl] = useState('')




    const addPortfolioToCategory = async (newDocumentRef,) => {

        try {
            // Step 1: Retrieve the document you want to update

            const docRef = doc(db, 'portfolio_category', category);
            const docSnapshot = await getDoc(docRef);
            console.log(docSnapshot);
            if (docSnapshot.exists()) {
                // Step 2: Update the array of document references
                const updatedArray = [...docSnapshot.data().content, newDocumentRef];

                // Step 3: Update the document in Firestore
                await updateDoc(docRef, { content: updatedArray });

                console.log('Data added to the document array successfully.');
            } else {
                console.log('Document does not exist.');
            }
        } catch (error) {
            console.error('Error adding data to document array:', error);
        }
    };

    const addToPortfolioList = async (newDocumentRef) => {
        const data = {
            title: thumbTitle,
            details: thumbDetails,
            photo: {
                type: thumbType,
                url: thumbPhoto?.url
            },
            content: newDocumentRef
        }

        console.log(data);
        try {
            // Step 1: Retrieve the document you want to update

            const docRef = doc(db, 'portfolio_list', doc_id);
            const docSnapshot = await getDoc(docRef);

            let returned = ''
            if (docSnapshot.exists()) {


                // Step 3: Update the document in Firestore
                returned = await updateDoc(docRef, data);

                console.log('Data added to the document array successfully.');
            } else {
                returned = await setDoc(docRef, data);
            }
            addPortfolioToCategory(docRef)

        } catch (error) {
            console.error('Error adding data to document array:', error);
        }
    };


    const handleAddImage = (e) => {
        setNewImageType(null)
        setNewImageUrl("")
        setConten_list([...content_list, { type: newImageType, url: newImageUrl }])
    }
    const handleAddPoint = () => {
        setPoints([...points, '']);
    };

    const handleDeletePoint = (index) => {
        const updatedPoints = [...points];
        updatedPoints.splice(index, 1);
        setPoints(updatedPoints);
    };
    const handleDeleteImage = (index) => {
        setConten_list(content_list.filter((el, ind) => index !== ind));

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = {
            cover_background: { type: coverType, url: coverPhoto?.url },
            client: client,
            content_description: contentDescription,
            cover_title: coverTitle,
            role: role,
            year: year,
            points: points,
            creator_section_company: creatorSectionCompany,
            creator_section_description: creatorSectionDescription,
            creator_section_name: creatorSectionName,
            creator_section_position: creatorSectionPosition,
            content_list: content_list
        };
       ;
         if (newData) {
            try {
                // Check if the document ID already exists
                const docRef = doc(db, 'portfolio', doc_id); // Replace 'customId' with your desired document ID
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists()) {
                    console.log('Document already exists with this ID.');
                    // setErrorMessage('Document already exists with this ID.');
                    return;
                }

                await setDoc(docRef, newData);

                addToPortfolioList(docRef,)
                // Close the modal
                // onClose();
            } catch (error) {
                console.error('Error adding document:', error);
            }
        } 

        // onClose();
    };

    return (
        <div className="absolute w-full min-h-screen   bg-black bg-opacity-80 overflow-y-scroll top-0 left-0 ">
            <div className=' h-4/5 flex justify-center gap-2 mt-24 items-center'>
                <div className="bg-dark-2 p-8 rounded-lg w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 relative">
                    <div className='flex w-full gap-8 justify-center'>
                        <h2 onClick={() => selectCurrentTab('portfolio-details')} className={`text-xl font-semibold mb-2 px-4 py-2 cursor-pointer rounded-md border  ${currentTab == 'portfolio-details' ? 'border-2 border-[#c7da82] scale-105 ' : ''} bg-slate-300 bg-opacity-5`}>{data ? 'Edit Portfolio' : 'Add Portfolio'}</h2>

                        <h2 onClick={() => selectCurrentTab('gallery')} className={`text-xl font-semibold mb-2 px-4 py-2 cursor-pointer rounded-md border ${currentTab == 'gallery' ? 'border-2 border-[#c7da82] scale-105 ' : ''} bg-slate-300 bg-opacity-5`}>Photo Gallery</h2>
                    </div>

                    {currentTab == 'portfolio-details' ? (<form onSubmit={handleSubmit}>

                        {/* COVER */}
                        <div className='grid grid-cols-3 md:grid-cols-5 gap-2'>

                            <div className="mb-2">
                                <label className="block font-medium mb-1">Doc ID</label>
                                <input
                                    type="text"
                                    value={doc_id}
                                    onChange={(e) => set_doc_id(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Doc Id"
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block font-medium mb-1">Cover Title:</label>
                                <input
                                    type="text"
                                    value={coverTitle}
                                    onChange={(e) => setCoverTitle(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Cover Title"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Client:</label>
                                <input
                                    type="text"
                                    value={client}
                                    onChange={(e) => setClient(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Client"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Year:</label>
                                <input
                                    type="text"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Year"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Role:</label>
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Role"
                                />
                            </div>


                        </div>

                        <div className='grid grid-cols-4'>

                            <div className='w-[80%] mx-auto'>
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
                            </div>
                            <div className="p-4 border">

                                <img
                                    src={getPhotoUrl(coverType, coverPhoto?.url)}
                                    title={coverType === 'g-drive' ? "Google Drive Embed" : "Image Link"}
                                    className="w-full h-[300px]"
                                />

                            </div>



                            <div className='w-[80%] mx-auto'>
                                <div className="mb-2">
                                    <label className="block font-medium mb-1">Thumb Type:</label>
                                    <select
                                        value={thumbType}
                                        onChange={(e) => setThumbType(e.target.value)}
                                        className="border rounded px-3 py-2 w-full bg-dark-2"
                                    >
                                        <option value="g-drive">Google Drive</option>
                                        <option value="link">Link</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="block font-medium mb-1">{thumbType === 'g-drive' ? 'Google Drive URL:' : 'Image Link:'}</label>
                                    <input
                                        type="text"
                                        value={thumbPhoto?.url}
                                        onChange={(e) => setThumbPhoto({ type: thumbType, url: e.target.value })}
                                        className="border rounded px-3 py-2 w-full bg-dark-2"
                                        placeholder={thumbType === 'g-drive' ? 'Google Drive URL' : 'Image Link'}
                                    />
                                </div>
                            </div>
                            <div className="p-4 border">

                                <img
                                    src={getPhotoUrl(thumbType, thumbPhoto?.url)}
                                    title={thumbType === 'g-drive' ? "Google Drive Embed" : "Image Link"}
                                    className="w-full h-[300px]"
                                />

                            </div>
                        </div>



                        <div className="mb-2">
                            <label className="block font-medium mb-1">Thumb Title:</label>
                            <input
                                type="text"
                                value={thumbTitle}
                                onChange={(e) => setThumbTitle(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Thumbnail Title"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block font-medium mb-1">Thumbnail Details:</label>
                            <input
                                type="text"
                                value={thumbDetails}
                                onChange={(e) => setThumbDetails(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Thumbnail Details"
                            />
                        </div>



                        {/* COVER */}
                        <div className="mb-2">
                            <label className="block font-medium mb-1">Content Description:</label>
                            <textarea
                                value={contentDescription}
                                onChange={(e) => setContentDescription(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2 "
                                placeholder="Content Description"
                            />
                        </div>

                        {/* INNER PAGE */}
                        <div className="mb-2">
                            <label className="block font-medium mb-1">Points:</label>
                            <div className='grid grid-cols-3 md:grid-cols-5 gap-2'>

                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center space-x-2 mb-2 relative">
                                        <input
                                            type="text"
                                            value={point}
                                            onChange={(e) => {
                                                const updatedPoints = [...points];
                                                updatedPoints[index] = e.target.value;
                                                setPoints(updatedPoints);
                                            }}
                                            className=" pl-2 pr-10 py-1 w-full bg-dark-2 outline-none "
                                            placeholder={`Point ${index + 1}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleDeletePoint(index)}
                                            className="text-red-600 absolute  right-2 hover:bg-slate-500 p-0"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddPoint}
                                    className="text-green-600"
                                >
                                    Add Point
                                </button>
                            </div>

                        </div>



                        {/* CREATOR SECTION */}

                        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Creator Section - Company:</label>
                                <input
                                    type="text"
                                    value={creatorSectionCompany}
                                    onChange={(e) => setCreatorSectionCompany(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Company"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Creator Section - Description:</label>
                                <textarea
                                    value={creatorSectionDescription}
                                    onChange={(e) => setCreatorSectionDescription(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2 bg-dark-2"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Creator Section - Name:</label>
                                <input
                                    type="text"
                                    value={creatorSectionName}
                                    onChange={(e) => setCreatorSectionName(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium mb-1">Creator Section - Position:</label>
                                <input
                                    type="text"
                                    value={creatorSectionPosition}
                                    onChange={(e) => setCreatorSectionPosition(e.target.value)}
                                    className="border rounded px-3 py-2 w-full bg-dark-2"
                                    placeholder="Position"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                            >
                                {data ? 'Save Changes' : 'Add Portfolio'}
                            </button>
                        </div>
                    </form>) : (<div className='bg-dark-2  h-[70vh] rounded-md '>
                        <h2 className="text-xl font-semibold p-4">Images</h2>

                        <div className='p-2 space-y-4 last:mb-8 '>
                            <div className='grid grid-cols-5 gap-4 '>

                                {content_list.map((item, index) => (
                                    <div key={index} className='relative border p-2  space-x-2 flex items-center'>

                                        <img
                                            src={getPhotoUrl(item.type, item.url)}
                                            alt={`Image ${index}`}
                                            className='w-20 h-auto'
                                        />


                                        <button
                                            type='button'
                                            onClick={() => handleDeleteImage(index)}
                                            className='absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-black p-0'
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center space-x-2'>
                                <select
                                    value={newImageType}
                                    onChange={(e) => setNewImageType(e.target.value)}
                                    className='border rounded px-2 py-1 bg-dark-2'
                                >
                                    <option value='g-drive'>Google Drive</option>
                                    <option value='link'>Link</option>
                                </select>
                                <input
                                    type='text'
                                    value={newImageUrl}
                                    onChange={(e) => setNewImageUrl(e.target.value)}
                                    className='border rounded px-2 py-1 bg-dark-2'
                                    placeholder={newImageType === 'g-drive' ? 'Google Drive URL' : 'Image Link'}
                                />
                                <button
                                    type='button'
                                    onClick={handleAddImage}
                                    className='text-green-600'
                                >
                                    Add Image
                                </button>
                            </div>
                            {newImageUrl && newImageType ? (<div className='border px-1 text-center'>
                                <p>Preview</p>
                                <img className='px-2 pb-2 pt-1 h-72 mx-auto' src={getPhotoUrl(newImageType, newImageUrl)} />
                            </div>) : <></>}

                        </div>

                    </div>)}

                    <div
                        onClick={() => onClose()} className='absolute top-2 right-2 text-red-500 hover:scale-110 cursor-pointer bg-white p-1 rounded-md'>

                        <p>X</p>
                    </div>   </div>

            </div>

        </div>
    );
};

export default PortfolioModal;
