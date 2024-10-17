// import React from 'react';
// import MyClassLayout from './MyClassLayout';

// const MyClass = () => {
//   return (
//     <div>
//       <MyClassLayout content={<div>hii</div>} />
//     </div>
//   );
// };

// export default MyClass;
import React, { useState } from 'react';
import MyClassLayout from './MyClassLayout'; // Update path as necessary
import Profile from './profile';
import ProfileUpdate from './updateprofile';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save or cancel in ProfileUpdate
  const handleSaveOrCancel = () => {
    setIsEditing(false);
  };

  return (
    <MyClassLayout content={isEditing ? <ProfileUpdate onSaveOrCancel={handleSaveOrCancel} /> : <Profile onEdit={handleEditClick} />} />
  );
};

export default App;



// import React from 'react';
// import MyClassLayout from './MyClassLayout'; // Update path as necessary
// import Profile from './profile';
// import ProfileUpdate from './updateprofile';


// const App = () => {
//   return (
//     <MyClassLayout content={<ProfileUpdate />} />
//   );
// };

// export default App;


