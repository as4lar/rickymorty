import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Character from './Character';
const Characters = () => {
    const [characters, setCharacters]=useState([]);
    const[pagina,cambiarPagina]=useState(1);
    const url="https://rickandmortyapi.com/api/character?page="+pagina.toString();
    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response.data.results);
            setCharacters(response.data.results);
        });
    });
    return (
        <>
        <div className='row'>
        {characters.map((character)=>(
            <Character character={character}/>
        ))}
        </div>
        <div>
            <button onClick={()=>cambiarPagina(pagina-1)}>Anterior</button>
            <button onClick={()=>cambiarPagina(pagina+1)}>Siguiente</button>
        </div>
        </>
    );
};
 
export default Characters;