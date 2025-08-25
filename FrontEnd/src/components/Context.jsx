import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/songs`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch(console.error(err));
  }, []);
  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
}
