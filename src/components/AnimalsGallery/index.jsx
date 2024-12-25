import React from "react";

function AnimalGallery(props) {
  const { dog, cat, elephant, lion, bird } = props;
  return (
    <div>
      <p>{dog}</p>
      <p>{cat}</p>
      <p>{elephant}</p>
      <p>{lion}</p>
      <p>{bird}</p>
    </div>
  );
}

export default AnimalGallery;
