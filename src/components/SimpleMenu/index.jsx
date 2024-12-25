import "./index.css";

function SimpleMenu(props) {
  const { HomePage, About, Contacts, News } = props;
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">{HomePage}</a>
          </li>
          <li>
            <a href="#">{About}</a>
          </li>
          <li>
            <a href="#">{Contacts}</a>
          </li>
          <li>
            <a href="#">{News}</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SimpleMenu;
