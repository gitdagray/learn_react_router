import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Nemate takvu kosnicu</h2>
      <p>Kreirajte novu.</p>
      <p>
        <Link to="/Add">Kreiraj novu kosnicu</Link>
      </p>
    </main>
  );
};

export default Missing;
