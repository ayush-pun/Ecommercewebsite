import React, { useEffect, useState } from "react";
import { getPosts, getRandomUser } from "../API";
import Card from "./Card";
import Randomcard from "./Randomcard";

const ApiPractice = () => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getPosts().then((posts) => setData(posts));
    }, []);

    useEffect(() => {
        getRandomUser().then((userdata) => {
            console.log("API response:", userdata);
            setUser(userdata.results[0])
        });
    }, [])
    
    const refresh = ()=>{
         getRandomUser().then((userdata) => {
            setUser(userdata.results[0])

    })}

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div>{

                user && <Randomcard data={user} />
            }
                <div className="flex justify-center mt-6">
                    <button
                    onClick={refresh} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition">
                        Refresh
                    </button>
                </div>
            </div>




            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.length > 0 ? (
                    data.map((e) => (
                        <Card
                            key={e.id}
                            title={e.title}
                            body={e.body}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-lg text-gray-500">
                        Loading...
                    </p>
                )}
            </div>
        </div>
    );
};

export default ApiPractice;