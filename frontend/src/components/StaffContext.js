import React, { createContext, useReducer } from "react";

const StaffContext = createContext();

const Setting={
  sidebar:true,
  research_notf:2,
  overload_notf:4,
  offering_notf:1,

}
const reducer = (state, action) => {
  switch (action.type) {
    case "collapse_expand":
      return {...state,sidebar:!state.sidebar};
    default:
      return new Error();
  }
};



export function StaffContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, Setting);
  return (
    <StaffContext.Provider value={{ state, dispatch }}>
      {children}
    </StaffContext.Provider>
  );
}

export default StaffContext;
