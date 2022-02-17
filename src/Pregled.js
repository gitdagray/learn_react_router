import { Link } from "react-router-dom";

const Pregled = ({ pregled }) => {
  return (
    <article className="pregled">
      <Link to={`/pregled/${pregled.id}`}>
        <h2>{pregled.title}</h2>
        <p className="pregledDate">{pregled.datetime}</p>
      </Link>
      <p className="pregledBody">
        {pregled.body.length <= 25
          ? pregled.body
          : `${pregled.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Pregled;
