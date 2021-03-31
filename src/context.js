import React, { useState,useEffect } from 'react'

export const DataContext = React.createContext()

export const DataContextProvider = (props) =>{
    const [data,setData] = useState(null);

    const getData = () =>{
        fetch('data.json',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            setData(data);
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider