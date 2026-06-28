import React from 'react';
import { useEffect, useState } from 'react';

const useApihook = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);

            const url = 'https://jsonplaceholder.typicode.com/todos';

            const res = await fetch(url);
            const data = await res.json();
            console.log("data in hooks",data);

            setUsers(data);
            setLoading(false)
                
        }
        catch (err) {
            console.log(err)
        }
    };

    useEffect(()=>{
        fetchUsers();
    },[])

    return {
        users,
        loading
    };
};

export default useApihook;
