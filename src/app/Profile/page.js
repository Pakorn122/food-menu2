import React from 'react';
export default function Profile() {

 
    
  const userProfile = {
    username: 'pakornsak',
    fullName: 'pakorsak wannapop',
    email: 'pakornsak@12345.com',
    
  };

  return (
    <>
  



    <div>
      <h1 className="text-3xl font-semibold mb-4">ข้อมูลส่วนตัวของ {userProfile.username}</h1>

      <div className="flex items-center mb-4">
        <img
          src={userProfile.avatarUrl}
          alt={`${userProfile.username}'s avatar`}
          className="rounded-full h-16 w-16 object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{userProfile.fullName}</h2>
          <p className="text-gray-600">{userProfile.email}</p>
        </div>
      </div>

      
    </div>
    </>

  );
  
}
