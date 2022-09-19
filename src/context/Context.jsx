import { createContext, useContext } from "react";
import objData from "../utils/data.json";

const data = objData;


const ChangeDataContext = createContext({
  info: {},
  data,
  // updateInfoDaily: () => {},
  // updateInfoWeekly: () => {},
  // updateInfoMonthly: () => {},
});

export default function Context({ children }) {
  // const [info, Setinfo] = useState({});

  // function updateInfoDaily() {
  //   const infoUpdated = data.map((item) => ({
  //     current: item.timeframes.daily.current,
  //     previus: item.timeframes.daily.previous,
  //   }));

  //   return Setinfo(infoUpdated);
  // }

  // function updateInfoWeekly() {
  //   const infoUpdated = data.map((item) => ({
  //     current: item.timeframes.weekly.current,
  //     previus: item.timeframes.weekly.previous,
  //   }));

  //   return Setinfo(infoUpdated);
  // }

  // function updateInfoMonthly() {
  //   const infoUpdated = data.map((item) => ({
  //     current: item.timeframes.monthly.current,
  //     previus: item.timeframes.monthly.previous,
  //   }));
  //   return Setinfo(infoUpdated);
  // }

  return (
    <ChangeDataContext.Provider
      value={{
        info: {},
        data,
        // updateInfoDaily: () => {},
        // updateInfoWeekly: () => {},
        // updateInfoMonthly: () => {},
      }}
    >
      {children}
    </ChangeDataContext.Provider>
  );
}

export function useChangeDataContext() {
  return useContext(ChangeDataContext);
}
