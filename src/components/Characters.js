import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Character from './Character';
const Characters = () => {
    const [characters, setCharacters]=useState([]);
    const[pagina,cambiarPagina]=useState(1);
    const url="https://rickandmortyapi.com/api/character?page=";
    useEffect(()=>{
        axios.get(url+pagina.toString()).then((response)=>{
            console.log(response.data.results);
            setCharacters(response.data.results);
        });
    },[pagina]);
    return (
        <>
            <div className='row'>
                {characters.map((character)=>(
                    <Character key= {character.id} character={character}/>
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