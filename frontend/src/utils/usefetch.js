import { useEffect, useState } from "react";
// will be used for backend server side cookies
export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error(err));
  }, [url]);
  return data;
}
