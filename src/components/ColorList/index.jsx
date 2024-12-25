import "./index.css";

function ColorList(props) {
  const { red, green, blue, yellow, maroon } = props;
  return (
    <>
      <p>{red}</p>
      <div className="red"></div>
      <p>{green}</p>
      <div className="green"></div>
      <p>{blue}</p>
      <div className="blue"></div>
      <p>{yellow}</p>
      <div className="yellow"></div>
      <p>{maroon}</p>
      <div className="maroon"></div>
    </>
  );
}

export default ColorList;
