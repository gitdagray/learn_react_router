const NoviPregled = ({
  handleSubmit,
  pregledTitle,
  setPregledTitle,
  pregledBody,
  setPregledBody,
}) => {
  return (
    <main className="NoviPregled">
      <h2>Novi Pregled</h2>
      <form className="noviPregledForm" onSubmit={handleSubmit}>
        <label htmlFor="pregledTitle">Naslov:</label>
        <input
          id="pregledTitle"
          type="text"
          required
          value={pregledTitle}
          onChange={(e) => setPregledTitle(e.target.value)}
        />
        <label htmlFor="pregledBody">Pregled:</label>
        <textarea
          id="pregledBody"
          required
          value={pregledBody}
          onChange={(e) => setPregledBody(e.target.value)}
        />
        <button type="submit">Potvrdi</button>
      </form>
    </main>
  );
};

export default NoviPregled;
