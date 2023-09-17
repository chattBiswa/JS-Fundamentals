import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() =>{
            fetch(url, { signal: abortController.signal })
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch data from that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("aborted");
                }else{
                    setError(err.message);
                    setIsLoading(false);
                }
            })
        }, 1000)

        return (() => abortController.abort());
    }, [url])

    return ({data, isLoading, error});
}
 
export default useFetch;