import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [status, setStatus] = useState<any>

  ({loading: false,
    data:undefined,
    error: undefined });

  function fetchNow(url: string) {
    console.log("FETCHNOW", url)  
    setStatus({loading: true})
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setStatus({loading: false, data:res})
      })
      .catch ((error) =>{
          console.log("LOADING ERROR", error)
        setStatus({loading:false, error})
      })
  }

  useEffect(() => {
    if (url) {
        console.log("START LOADING", url)  
      fetchNow(url);
      
    }
  }, []);

  return {...status, fetchNow };
};
export default useFetch;
