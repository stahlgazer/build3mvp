import React, { useState, useEffect } from 'react';
import TopCard from './TopCard';
import axios from 'axios';



const Browse = () => {
    
    const [strain, setStrain] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
             .then(res => {
               console.log(res.data);
               setStrain(res.data.results)
             })
             .catch(err => {
               console.log(err)
             })
      }, [])
    
      useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => {
                console.log(res.data.results);
                setStrain(res.data.results);
            })
            .catch(err => {
                console.log(err)
            })
    }, [page])
    
    
    
    
    
    return (
        <div>
            <TopCard strain={strain} setStrain={setStrain}/>
            
        </div>
    );
};

export default Browse;