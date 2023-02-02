import React, { useContext, useState, useReducer } from "react";
import { filterArray } from "../functions/filter";
import chapters from "../data/data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const reduce = (state, action) => {
    if (action.type === "GET_FILTRE_DATA") {
      let chapterFiltred = filterArray(chapters, action.payload, "lessonName");
      return { ...state, chapters: chapterFiltred };
    }
    return { ...state };
  };
  const [curstate, dispatch] = useReducer(reduce, {
    chapters,
  });
  const handleChange = (event) => {
    dispatch({ type: "GET_FILTRE_DATA", payload: event.target.value });
  };
  return (
    <AppContext.Provider value={{ handleChange, ...curstate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
