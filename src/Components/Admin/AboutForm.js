import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../../Assets/data';

const AboutForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    bullet1: '',
    bullet2: '',
    bullet3: '',
    coverImage: null,
    innerPage1Title: '',
    innerPage1Text: '',
  });
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [showAllMembers, setShowAllMembers] = useState(false); // State to track if all members are shown
  const [addingMember, setAddingMember] = useState(false); // State to track if a new member is being added
  const handleAddNewMember = () => {

  }
  const handleShowAllMembers = () => {
    setShowAllMembers(true);
    setAddingMember(false);
  };

  const handleAddMember = () => {
    setShowAllMembers(false);
    setAddingMember(true);
  }

  const handleNextMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === TEAM_MEMBERS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === 0 ? TEAM_MEMBERS.length - 1 : prevIndex - 1
    );
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      coverImage: file,
    }));
  };
  const handleNewMemberImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      coverImage: file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='about-form'>
      <div className='section'>
        <h2 className='section-title'>Cover</h2>
        <div className='input-group'>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            placeholder='Title'
          />
          <input
            type='text'
            name='subtitle'
            value={formData.subtitle}
            onChange={handleInputChange}
            placeholder='Subtitle'
          />
        </div>
        <div className='bullet-list'>
          <input
            type='text'
            name='bullet1'
            value={formData.bullet1}
            onChange={handleInputChange}
            placeholder='Bullet 1'
          />
          <input
            type='text'
            name='bullet2'
            value={formData.bullet2}
            onChange={handleInputChange}
            placeholder='Bullet 2'
          />
          <input
            type='text'
            name='bullet3'
            value={formData.bullet3}
            onChange={handleInputChange}
            placeholder='Bullet 3'
          />
        </div>
        <div className='cover-image'>
          <input
            type='file'
            accept='image/*'
            onChange={handleCoverImageChange}
          />
        </div>
      </div>


      {/* Inner Page 1 */}
      <div className='section'>
        <h2 className='section-title'>Inner Page 1</h2>
        <div className='input-group'>
          <input
            type='text'
            name='innerPage1Title'
            value={formData.innerPage1Title}
            onChange={handleInputChange}
            placeholder='Title'
            maxLength={20}
          />
          <textarea
            name='innerPage1Text'
            value={formData.innerPage1Text}
            onChange={handleInputChange}
            placeholder='Text'
          />
        </div>
      </div>

      <div className='section'>
        <h2 className='section-title'>Team Members</h2>
        <div className='button-group'>
          <button
            className={`show-members-button ${showAllMembers ? 'active' : ''}`}
            onClick={handleShowAllMembers}
          >
            Show All Members
          </button>
          <button
            className={`add-member-button ${addingMember ? 'active' : ''}`}
            onClick={handleAddMember}
          >
            Add Member
          </button>
        </div>

        {/* Displaying Team Member Cards */}
        {showAllMembers && (
          <div className='team-member-card'>
            <div className='card'>
              <div className='carousel-navigation'>
                <button className='prev-button' onClick={handlePrevMember}>
                  &lt;
                </button>
                <div className='member-image'>
                  <img src={TEAM_MEMBERS[currentMemberIndex].photo} alt='Member' />
                </div>
                <button className='next-button' onClick={handleNextMember}>
                  &gt;
                </button>
              </div>
              <div className='card-content'>
                <h3>{TEAM_MEMBERS[currentMemberIndex].name}</h3>
                <p>{TEAM_MEMBERS[currentMemberIndex].position}</p>
              </div>
              <div className='card-remove'>
                <button>Remove</button>
              </div>
            </div>
          </div>
        )}

        {/* Adding a New Member */}
        {addingMember && (
          <div className='add-member'>
            <input
              type='text'
              name='newMemberName'
              value={formData.newMemberName}
              onChange={handleInputChange}
              placeholder='Name'
            />
            <input
              type='text'
              name='newMemberPosition'
              value={formData.newMemberPosition}
              onChange={handleInputChange}
              placeholder='Position'
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleNewMemberImageChange}
            />
            <button onClick={handleAddNewMember}>Add New Member</button>
          </div>
        )}
      </div>


      <button className='submit-button w-full' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AboutForm;
