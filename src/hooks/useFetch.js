import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        setData(null);
        setError(null);
        setTimeout(() => {
            // this setTimeout is here only to demonstrate loading screens. it has no real use and it should be removed  
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setData(null);
                setError(err.message);
            })
        }, 1000);
    }, [url]);

    return { data, isPending, error };
}
 
export default useFetch;