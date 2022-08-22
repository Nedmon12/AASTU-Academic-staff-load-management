import React, { createContext, useReducer } from "react";

const courseData = [
  {
    courseName: "Object Oriented Programming",
    courseCode: "SWEG101",
    owner: "Electrical Department",
    program: "Msc",
    creditHour: 4,
    lecHour: 4,
    labHour: 2,
    tutHour: 4,
    menHour: 3,
    advHour: 2,
  },
  {
    courseName: "System Analysis Programming",
    courseCode: "SWEG102",
    owner: "Software Department",
    program: "Msc",
    creditHour: 4,
    lecHour: 4,
    labHour: 2,
    tutHour: 4,
    menHour: 4,
    advHour: 2,
  },
  {
    courseName: "Introduction Oriented Programming",
    courseCode: "SWEG103",
    owner: "Software Department",
    program: "Msc",
    creditHour: 2,
    lecHour: 4,
    labHour: 2,
    tutHour: 4,
    menHour: 4,
    advHour: 2,
  },
];

const CourseContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "loadCourse":
      console.log("loading");
      return action.course;
    case "addCourse":
      console.log("adding");
      return addCourse(state, action.course);
    case "editCourse":
      console.log("editing");
      return editCourse(state, action.course);
    case "deleteCourse":
      return state;
    default:
      return state;
  }
};

const addCourse = (state, course) => {
  const newState = [
    ...state,
    { ...course, owner: "Software Engineering", program: "Msc" },
  ];
  return newState;
};
const editCourse = (state, course) => {
  const newState = [...state];
  const index = newState.findIndex((c) => c.courseCode === course.courseCode);
  newState[index] = {
    ...course,
    owner: "Software Engineering",
    program: "Msc",
  };
  return newState;
};

export function CourseContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, courseData);
  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseContext;
