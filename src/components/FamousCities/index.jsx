import "./index.css";

function FamousCities(props) {
  const { Parij, Tokio, NyuYork, London, Toshkent } = props;
  return (
    <>
      <ul>
        <li>{Parij}</li>
        <li>{Tokio}</li>
        <li>{NyuYork}</li>
        <li>{London}</li>
        <li>{Toshkent}</li>
      </ul>
    </>
  );
}

export default FamousCities;
