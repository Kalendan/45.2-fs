
import React from "react";
import ProfileCard from "./ProfileCard";



const Homework02 = () => {
  return (
    <div>
      <ProfileCard
      avatar={ "https://www.rodneypikeart.com/wp-content/uploads/2017/06/tom-cruise-1232x1772.jpg"}
      name={  "Paul"}
      job={ "Physicist"}
      hobbies={ "Football"}
      />
      <ProfileCard
      avatar={"https://i.f1g.fr/media/figarofr/1000x/2014/06/13/PHO540d8f50-f2eb-11e3-a63a-1828d897ccd7-400x453.jpg"}
      name={"Markus"}
      job={"Artist"}
      hobbies={"Journey"}
      />
      <ProfileCard
      avatar={"https://i.pinimg.com/originals/c2/98/b2/c298b2348456023dfd79a2e422c5f058.jpg"}
      name={"Arni"}
      job={"Actor"}
      hobbies={"Chess"}
      />
      </div>
    );
  };

export default Homework02;

