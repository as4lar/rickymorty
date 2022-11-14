import React from "react";
const Character=({character})=>{
    return(
        <div className="col-md-4 mb-4">
            <div className="card">
                <img
                    src={character.image}
                    alt={character.name}
                    className="card-img-top"
                />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{character.name}<p></p>
                    {character.status}-{character.species}</li>
                </ul>       
            </div>
        </div>
        /*
        <>
            
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name}/>
        </>*/
    );
};
export default Character;