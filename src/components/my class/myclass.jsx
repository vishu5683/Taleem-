import React, { useState } from 'react';
import MyClassLayout from './MyClassLayout'; // Update path as necessary
import Profile from './profile';
import ProfileUpdate from './updateprofile';
import FaqSidebar from '../sidebar options/faqssidebar';

const App = () => {
  const [currentContent, setCurrentContent] = useState(<ProfileUpdate />); // Default to ProfileUpdate on load

  // Function to switch to ProfileUpdate
  const handleEditClick = () => {
    setCurrentContent(<ProfileUpdate onSaveOrCancel={handleSaveOrCancel} />);
  };

  // Function to switch back to Profile or another component (e.g., after saving or canceling in ProfileUpdate)
  const handleSaveOrCancel = () => {
    setCurrentContent(<Profile onEdit={handleEditClick} />);
  };

  // Function to switch to FAQs
  const handleShowFaqs = () => {
    setCurrentContent(<FaqSidebar />);
  };

  return (
    <MyClassLayout content={<ProfileUpdate/>} /> 
  );
};

export default App;
