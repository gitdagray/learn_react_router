import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Pretraga Pregleda</label>
        <input
          id="search"
          type="text"
          placeholder="Pretraga pregleda"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Istorija</Link>
        </li>
        <li>
          <Link to="/pregled">Pregled</Link>
        </li>
        <li>
          <Link to="/add">Nova</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
