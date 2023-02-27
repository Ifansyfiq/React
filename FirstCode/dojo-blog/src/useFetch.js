import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); //loading
    const [error , setError] = useState(null);  //error fetching

    
    useEffect(() => { 
        setTimeout (() => { //test time out utk 1 sec (don't use this for real project)
            fetch(url)
            .then(res => {
                console.log(res)
                if (!res.ok){ //test if have error on fetching or not (block response is false)
                    throw Error('Could not fetch from resource')  
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setIsPending(false)
                setError(err.message)
            })
        },1000)
    }, [url])

    return {data, isPending, error};    
}

export default useFetch; 