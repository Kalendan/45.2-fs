// import React from "react";
import  './ProfileCard.css'; 

const ProfileCard = ({ avatar, name, job, hobbies }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}' avatar`} className="avatar" />
      <h2>{name}</h2>
      <p>Job:{job}</p>
      <p>Hobby:{hobbies}</p>
    </div>
  );
};

export default ProfileCard;
