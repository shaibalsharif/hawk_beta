import React, { useState } from 'react';

const PortfolioModal = ({ data, onClose }) => {


    console.log(data);

    const [client, setClient] = useState(data?.client || '');
    const [contentDescription, setContentDescription] = useState(data?.content_description || '');
    const [coverTitle, setCoverTitle] = useState(data?.cover_title || '');
    const [role, setRole] = useState(data?.role || '');
    const [year, setYear] = useState(data?.year || '');
    const [points, setPoints] = useState(data?.points || ['']);
    const [creatorSectionCompany, setCreatorSectionCompany] = useState(data?.creator_section_company || '');
    const [creatorSectionDescription, setCreatorSectionDescription] = useState(data?.creator_section_description || '');
    const [creatorSectionName, setCreatorSectionName] = useState(data?.creator_section_name || '');
    const [creatorSectionPosition, setCreatorSectionPosition] = useState(data?.creator_section_position || '');

    const handleAddPoint = () => {
        setPoints([...points, '']);
    };

    const handleDeletePoint = (index) => {
        const updatedPoints = [...points];
        updatedPoints.splice(index, 1);
        setPoints(updatedPoints);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            client,
            content_description: contentDescription,
            cover_title: coverTitle,
            role,
            year,
            points,
            creator_section_company: creatorSectionCompany,
            creator_section_description: creatorSectionDescription,
            creator_section_name: creatorSectionName,
            creator_section_position: creatorSectionPosition,
        };
        // Do something with the newData, e.g., update Firestore
        onClose();
    };

    return (
        <div className="absolute w-full flex justify-center items-center bg-black bg-opacity-80 overflow-y-scroll top-0 left-0 ">
            <div className="bg-dark-2 p-8 rounded-lg w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12">
                <h2 className="text-xl font-semibold mb-4">{data ? 'Edit Portfolio' : 'Add Portfolio'}</h2>
                <form onSubmit={handleSubmit}>

                    {/* COVER */}
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-2'>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Cover Title:</label>
                            <input
                                type="text"
                                value={coverTitle}
                                onChange={(e) => setCoverTitle(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Cover Title"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Client:</label>
                            <input
                                type="text"
                                value={client}
                                onChange={(e) => setClient(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Client"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Year:</label>
                            <input
                                type="text"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Year"
                            />
                        </div>
                        <div className="mb-4">
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



                    {/* COVER */}
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Content Description:</label>
                        <textarea
                            value={contentDescription}
                            onChange={(e) => setContentDescription(e.target.value)}
                            className="border rounded px-3 py-2 w-full bg-dark-2 bg-dark-2"
                            placeholder="Content Description"
                        />
                    </div>

                    {/* INNER PAGE */}
                    <div className="mb-4">
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
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Creator Section - Company:</label>
                            <input
                                type="text"
                                value={creatorSectionCompany}
                                onChange={(e) => setCreatorSectionCompany(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Company"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Creator Section - Description:</label>
                            <textarea
                                value={creatorSectionDescription}
                                onChange={(e) => setCreatorSectionDescription(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2 bg-dark-2"
                                placeholder="Description"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Creator Section - Name:</label>
                            <input
                                type="text"
                                value={creatorSectionName}
                                onChange={(e) => setCreatorSectionName(e.target.value)}
                                className="border rounded px-3 py-2 w-full bg-dark-2"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
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
                </form>
            </div>
        </div>
    );
};

export default PortfolioModal;
