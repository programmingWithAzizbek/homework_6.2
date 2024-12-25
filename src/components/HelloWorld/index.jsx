import "./index.css";

function HelloWorld(props) {
  const { lang1, lang2, lang3, lang4 } = props;
  return (
    <>
      <p>{lang1}</p>
      <p>{lang2}</p>
      <p>{lang3}</p>
      <p>{lang4}</p>
    </>
  );
}

export default HelloWorld;
