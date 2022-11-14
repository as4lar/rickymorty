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
                <div className="card-body text-primary">
                    <p>{character.name}</p>
                    <p>{character.status}-{character.species}</p>  
                </div>    
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