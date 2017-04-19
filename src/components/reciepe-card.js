import React from 'react';

const ReciepeCard = ({reciepe}) => {
  return (

    <div className="card card-item">
      <img className="card-img-top" src={reciepe.recipe.image} width="198px" alt={reciepe.recipe.label} />
      <div className="card-block">
        <h6 className="card-title">{reciepe.recipe.label}</h6>
        <div className="text-success">Calories: {Math.round(reciepe.recipe.calories)}</div>
        <a href={reciepe.recipe.url} target="_blank">Instructions</a>
      </div>
    </div>

  );
}

export default ReciepeCard;
