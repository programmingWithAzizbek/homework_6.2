import "./index.css";

function WeekDays(props) {
  const { Dushanba, Seshanba, Chorshanba, Payshanba, Juma, Shanba, Yakshanba } =
    props;
  return (
    <>
      <ul>
        <li>{Dushanba}</li>
        <li>{Seshanba}</li>
        <li>{Chorshanba}</li>
        <li>{Payshanba}</li>
        <li>{Juma}</li>
        <li>{Shanba}</li>
        <li>{Yakshanba}</li>
      </ul>
    </>
  );
}

export default WeekDays;
