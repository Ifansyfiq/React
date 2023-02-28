import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); //loading
    const [error , setError] = useState(null);  //error fetching

    
    useEffect(() => { 
        const abortCont = new AbortController(); //declarations object AbortController

        setTimeout (() => { //test time out utk 1 sec (don't use this for real project)
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                //console.log(res)
                if (!res.ok){ //test if have error on fetching or not (block response is false)
                    throw Error('Could not fetch from resource')  
                }
                return res.json()
            })
            .then(data => {
                setIsPending(false)
                setData(data)
                setError(null)
            })
            .catch((err) => {
                if (err.name === 'AbortError'){
                    console.log('fetch Aborted')
                }
                else{
                    setIsPending(false)
                    setError(err.message)
                }
            })
        },1000)

        return () => abortCont.abort() //abort fetching data

    }, [url])

    return {data, isPending, error};    
}

export default useFetch; 