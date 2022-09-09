import React, { createContext, useReducer } from "react";

const ProfileContext = createContext();

const Profile={
  name:"Yabsera Haile",
  first_name:"Yabsera",
  middle_name:"Haile",
  last_name:"Yemaneberhan",
  college:"College of Electrical and Mechanical Engineering",
  dep:"Software Engineering",
  rank:"PHD",
  mobile:"+251987654321",
  pic:"/images/photo.png",
  email:"yabserahaile@gmail.com",
  calendar:{
    year:"2022",
    semester:"II",
    duration:"Dec 20,2022 - May 3,2022",
    n_weeks:"16",
  },
  details:{
    load: 17,
    n_groups:4,
    a_research:3,
    expectedLoad:12,
    payment_rate:100,
    leh:40,
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case "edit_profile":
      return {...Profile}
    default:
      return new Error();
  }
};



export function ProfileContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, Profile);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;