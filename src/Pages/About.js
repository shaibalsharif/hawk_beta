import React, { useEffect, useState } from 'react'
import Footer from '../Components/Shared/Footer';
import Cover from '../Components/About/Cover';
import TeamMembers from '../Components/About/TeamMembers';
import WikiSection from '../Components/About/WikiSection';

import { db } from '../Firebase/firebase_config';
import { doc, getDoc } from 'firebase/firestore';
import { getDocumentByRefList } from '../Firebase/firebase_utils';


const About = () => {

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

  const getTeamData = async () => {


    try {
      const cover_aboutDocRef = doc(db, 'about', 'team_members');

      const aboutDocSnapshot = await getDoc(cover_aboutDocRef);

      if (aboutDocSnapshot.exists()) {
        const data = aboutDocSnapshot.data();
       
        set_member_title(data.title);
        set_member_details(data.sub);

        getDocumentByRefList(data.members, setTeamMembers)

      }
      else {
        console.log('empty');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  useEffect(() => {
    console.log(teamMembers);
  }, [teamMembers])

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
  useEffect(() => {
    getCoverData()
    getInnerData()
    getTeamData()
  }, [])

  return (
    <div className=''>
      <Cover title={title} sub={subtitle} points={points} coverPhoto={{ type: coverType, url: coverUrl }} />


      <div className='h-[90vh] min-h-[480px] w-full bg-dark-1 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between
        px-4 md:px-8 text-justify '>
        <h2 className=' text-yellow-2 text-[23px] md:text-[30px] tracking-[2px] font-[500] uppercase md:text-end'>{innerTitle}</h2>
        <p className='text-[14px] mt-8 font-[400] font-sans leading-tight md:w-[65%]'>"{innerDescription}"</p>
      </div>
      <TeamMembers teamMembers={teamMembers} title={member_title} detail={member_details} />
      <WikiSection />
      <Footer />
    </div>
  )
}

export default About