const Header = ({ title, handleSave, hive, handleHive }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <input
        placeholder="Broj:"
        className="searchHive"
        autoFocus
        type="text"
        value={hive}
        onChange={(e) => handleHive(e.target.value)}
      ></input>
    </header>
  );
};

export default Header;
