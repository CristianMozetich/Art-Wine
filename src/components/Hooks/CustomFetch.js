import { useState, useEffect } from "react";

export const CustomFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(resp => resp.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.log(error))
    })
  return data
}

export default CustomFetch
