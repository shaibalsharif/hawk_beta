import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/firebase_config';
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDocumentByRefList, getPhotoUrl } from '../../Firebase/firebase_utils';
import MemberModal from './Modals/MemberModal';

const ResponsiveComponent = () => {
  const [coverType, setCoverType] = useState('g-drive');
  const [coverUrl, setCoverUrl] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [points, setPoints] = useState(['', '', '']);

  const [innerTitle, setInnerTitle] = useState('');
  const [innerDescription, setInnerDescription] = useState('');


  const [member_title, set_member_title] = useState("")
  const [member_details, set_member_details] = useState('')



  const [teamMembers, setTeamMembers] = useState([]);
  const [isMemberModalVisible, setIsMemberModalVisible] = useState(false)
  const [memberModalContent, setMemberModalContent] = useState(null)

  const handleMemberAction = (event, actionType, member) => {
    event.stopPropagation()
    setIsMemberModalVisible(true)
    setMemberModalContent(member)
    switch (actionType) {
      case 'edit':

        break;
      case 'delete':
        console.log("delete");
        break;
      case 'add':
        console.log("add");
        break;
    }
  }


  const getCoverData = async () => {


    try {
      const cover_aboutDocRef = doc(db, 'about', 'cover');

      const aboutDocSnapshot = await getDoc(cover_aboutDocRef);

      if (aboutDocSnapshot.exists()) {
        const data = aboutDocSnapshot.data();

        setCoverType(data.image.type);
        setCoverUrl(data.image.url);
        setTitle(data.title);
        setSubtitle(data.sub);
        setPoints(data.points || []);

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getTeamData = async () => {


    try {
      const cover_aboutDocRef = doc(db, 'about', 'team_members');

      const aboutDocSnapshot = await getDoc(cover_aboutDocRef);

      if (aboutDocSnapshot.exists()) {
        const data = aboutDocSnapshot.data();
        set_member_title(data.title);
        set_member_details(data.sub);
        const temporary_setter_for_memberList = (datas) => {
         
          setTeamMembers(datas.map((i, index) => { return { ...i, id: index + 1, } }))
        }

        getDocumentByRefList(data.members, temporary_setter_for_memberList)
      }
      else {
        console.log('empty');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };



  const getInnerData = async () => {
    try {
      const cover_aboutDocRef = doc(db, 'about', 'inner_page');

      const aboutDocSnapshot = await getDoc(cover_aboutDocRef);

      if (aboutDocSnapshot.exists()) {
        const data = aboutDocSnapshot.data();

        setInnerTitle(data.title)
        setInnerDescription(data.description)

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleCoverUpdate = async (e) => {
    if (coverType && coverUrl) {
      try {
        const cover_aboutDocRef = doc(db, 'about', 'cover');

        await updateDoc(cover_aboutDocRef, {
          image: {
            type: coverType,
            url: coverUrl,
          },
          title: title,
          sub: subtitle,
          points: points || [],
        });

        console.log('Data updated successfully!');
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  }
  const handleInnerUpdate = async (e) => {
    if (innerTitle && innerDescription) {
      try {
        const cover_aboutDocRef = doc(db, 'about', 'inner_page');

        await updateDoc(cover_aboutDocRef, {
          title: innerTitle,
          description: innerDescription,
        });

        console.log('Data updated successfully!');
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  }
  const addreftolist = async (doc_ref) => {
    try {
      const teamMembersDocRef = doc(db, 'about', 'team_members');
      const aboutDocSnapshot = await getDoc(teamMembersDocRef);
      if (aboutDocSnapshot.exists()) {
        const data = aboutDocSnapshot.data();
        const newData = { ...data, members: [...data.members, doc_ref] }
        await updateDoc(teamMembersDocRef, newData);
        console.log('Team members document updated successfully!');
      }
    }
    catch (error) {
      console.error('Error updating team members document: ', error);
      throw error;
    }

  }
  const addMember = async (name = "test", photo = { type: 'link', url: 'asdadad', }, position = 'ajdbjajdbjabd') => {
    try {
      const membersCollectionRef = collection(db, 'members');


      const newMemberDocRef = doc(membersCollectionRef, 'testing')
      console.log(newMemberDocRef);
      await setDoc(newMemberDocRef, {
        name: name,
        photo: {
          type: photo.type,
          url: photo.url,
        },
        position: position,
      });

      console.log('New member added with ID: ', newMemberDocRef.id);
      addreftolist(newMemberDocRef)
      return newMemberDocRef;
    } catch (error) {
      console.error('Error adding member: ', error);
      throw error;
    }
  };





  useEffect(() => {
    getCoverData()
    getInnerData()
    getTeamData()
  }, [])


  return (
    <div className=" min-h-screen py-8 px-4 md:px-8 lg:px-16">
      <div className=' mx-auto bg-dark-3 rounded-lg shadow-md p-6 mb-8 '>
        <h2 className="text-2xl font-semibold mb-4">Cover Section</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20'>
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block font-medium mb-1">{coverType === 'g-drive' ? 'Google Drive URL:' : 'Image URL:'}</label>
            <input
              type="text"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder={coverType === 'g-drive' ? 'Google Drive URL' : 'Image URL'}
            />
          </div>
          <img src={getPhotoUrl(coverType, coverUrl)} className='h-72' />

          <div className="mb-4">
            <label className="block font-medium mb-1">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Subtitle:</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Subtitle"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Points:</label>
            {points.map((point, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const updatedPoints = [...points];
                    updatedPoints[index] = e.target.value;
                    setPoints(updatedPoints);
                  }}
                  className="border rounded px-2 py-1 w-full"
                  placeholder={`Point ${index + 1}`}
                />

              </div>
            ))}

          </div>
          <button className='h-fit w-fit px-4  my-auto' onClick={handleCoverUpdate}>Update</button>
        </div>

      </div>
      <div className=' mx-auto bg-dark-3 rounded-lg shadow-md p-6 mb-8 '>
        <h2 className="text-2xl font-semibold mb-4">Inner Page Section</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20'>

          <div className="mb-4">
            <label className="block font-medium mb-1">Inner Title:</label>
            <input
              type="text"
              value={innerTitle}
              onChange={(e) => setInnerTitle(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Inner Title"
            />
          </div>
          <div className='mb-4 col-span-2'>
            <label className="block font-medium mb-1">Inner Description:</label>
            <textarea
              value={innerDescription}
              onChange={(e) => setInnerDescription(e.target.value)}
              className="border rounded px-3 py-2 w-full h-32 bg-dark-3"
              placeholder="Inner Description"
            />
          </div>
          <button className='h-fit w-fit px-4  my-auto' onClick={handleInnerUpdate}>Update</button>
        </div>


      </div>


      <div className=' mx-auto bg-dark-3 rounded-lg shadow-md p-6 mb-8  relative'>
        <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
        <div className='grid grid-cols-1 md:grid-cols-6 w-full py-2'>
          <div className=' w-full mb-4 col-span-2'>
            <label>Title</label>
            <input className='w-full rounded-lg px-2' type='text' value={member_title} onChange={(e) => { set_member_title }} />
          </div>
          <div className='mb-4 col-span-2 col-start-4'>
            <label>Details</label>
            <textarea className='bg-inherit border-inherit border w-full rounded-lg px-2' value={member_details} onChange={(e) => { set_member_details }} />
          </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-8'>
          <div className="col-span-1 sm:col-span-2 md:col-span-4">
            <button
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              onClick={(e) => handleMemberAction(e, 'add', null)}
            >
              Add New Member
            </button>
          </div>
          {teamMembers.map(member => (
            <div key={member.id} className="relative group bg-dark-2 rounded-lg p-4 " onClick={(e) => handleMemberAction(e, 'edit', member)}>
              <div className='absolute hidden group-hover:inline inset-0 bg-dark-3 bg-opacity-25'></div>
              <div className='hidden group-hover:flex absolute  bg-opacity-50 border-2 rounded-md p-1 bg-dark-2
               justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' >
                <svg onClick={(e) => handleMemberAction(e, 'edit', member)}
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:bg-orange-300 rounded-full  cursor-pointer w-10 h-10  hover:scale-105 p-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

                <svg onClick={(e) => handleMemberAction(e, 'delete', member)}
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:bg-red-500 cursor-pointer rounded-full w-10 h-10 hover:scale-105 p-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

              </div>

              <img src={getPhotoUrl(member.photo.type, member.photo.url)} alt={member.name} className=" mx-auto h-[80%] mb-2" />
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          ))}


          {isMemberModalVisible && <MemberModal setVisible={setIsMemberModalVisible} member={memberModalContent}
          handleEdit={()=>{}} handleDelete={()=>{}} />}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
