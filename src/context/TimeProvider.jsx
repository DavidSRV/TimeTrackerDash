import { createContext, useContext } from "react";
import { useState } from "react";

const Time = createContext("");

export default function TimeProvider({ children }) {
  const [time, setTime] = useState("daily");

  return (
    <Time.Provider
      value={{
        time,
        setTime
      }}
    >
      {children}
    </Time.Provider>
  );
}

export const useTimeFrames = () => useContext(Time);
