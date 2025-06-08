import { createContext, useContext, useState } from "react";

// 1. Create the context
const courseContext = createContext();

export default function CourseProvider({ children }) {
  // 2. Initialize state FROM localStorage
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    const saved = localStorage.getItem("courses") || "";
    return saved ? saved.split(",") : [];
  });

  // 3. Function to add a course
  const registerForCourse = (courseId) => {
    // Update React state
    const updatedCourses = [...registeredCourses, courseId];
    setRegisteredCourses(updatedCourses);

    // Save to localStorage
    localStorage.setItem("courses", updatedCourses.join(","));
  };

  return (
    <courseContext.Provider value={{ registeredCourses, registerForCourse }}>
      {children}
    </courseContext.Provider>
  );
}

export function useCourses() {
  return useContext(courseContext);
}
