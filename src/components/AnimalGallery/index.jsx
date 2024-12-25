import "./index.css";

function AnimalGallery(props) {
  const { dog, cat, elephant, lion, bird } = props;
  return (
    <>
      <p>{dog}</p>
      <p>{cat}</p>
      <p>{elephant}</p>
      <p>{lion}</p>
      <p>{bird}</p>
    </>
  );
}

export default AnimalGallery;
