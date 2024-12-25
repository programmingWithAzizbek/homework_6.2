import "./index.css";

function SeasonColors(props) {
  const { Bahor, Yoz, Kuz, Qish } = props;
  return (
    <>
      <p>{Bahor}</p>
      <div className="green"></div>
      <p>{Yoz}</p>
      <div className="yellow"></div>
      <p>{Kuz}</p>
      <div className="orange"></div>
      <p>{Qish}</p>
      <div className="lightblue"></div>
    </>
  );
}

export default SeasonColors;
