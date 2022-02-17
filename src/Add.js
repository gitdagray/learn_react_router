const Add = ({
  handleNewSubmit,
  pregledTitle,
  setPregledTitle,
  pregledBody,
  setPregledBody,
}) => {
  return (
    <main className="NoviPregled">
      <h2>Nova kosnica br: {localStorage.length + 1}</h2>
      <form className="noviPregledForm" onSubmit={handleNewSubmit}>
        <label htmlFor="pregledTitle">Naslov:</label>
        <input
          id="pregledTitle"
          type="text"
          required
          value={pregledTitle}
          onChange={(e) => setPregledTitle(e.target.value)}
        />
        <label htmlFor="pregledBody">Podaci:</label>
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

export default Add;
