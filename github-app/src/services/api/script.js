import React, { useEffect, useState } from 'react';
//import loupe from '../assets/icon-search.svg';


export function Api(){
    const [searchData, setSearchData] = useState({userName:"octocat"});
    const [data, setData] = useState({});
    
    useEffect(() => {
        async function fetchDataGit(){
            try{
                // destructuration de l'objet
                const response = await fetch(`https://api.github.com/users/${searchData.userName}`);
                const data = await response.json();
                setData(data);
                console.log(data);
                console.log(response);
            } catch (error){
               // console.error(error);
            }
        }
        fetchDataGit();
        // permet l'ajout de la valeur au tableau de dependance
    }, [searchData.userName]);

    return data;
}


   
