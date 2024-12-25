import "./index.css";

function GreetingCard(props) {
  const { conc } = props;
  return (
    <>
      <p>{conc}</p>
    </>
  );
}

export default GreetingCard;
