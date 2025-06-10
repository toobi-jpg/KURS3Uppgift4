import { createContext, useContext, useState } from "react";

const courseContext = createContext();

export default function CourseProvider({ children }) {
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    const saved = localStorage.getItem("courses") || "";
    return saved ? saved.split(",").map(Number) : [];
  });

  const registerForCourse = (courseId) => {
    if (registeredCourses.includes(courseId)) {
      console.log("Already registered for this course.");
      return;
    }

    const updatedCourses = [...registeredCourses, courseId];
    setRegisteredCourses(updatedCourses);
    localStorage.setItem("courses", updatedCourses.join(","));
  };

  const unRegisterCourse = (courseId) => {
    const newArr = registeredCourses.filter((id) => id != courseId);
    setRegisteredCourses(newArr);
    localStorage.setItem("courses", newArr.join(","));
  };

  return (
    <courseContext.Provider
      value={{ registeredCourses, registerForCourse, unRegisterCourse }}
    >
      {children}
    </courseContext.Provider>
  );
}

export function useCourses() {
  return useContext(courseContext);
}
