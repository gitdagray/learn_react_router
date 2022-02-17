import Feed from "./Feed";

const Home = ({ pregledi }) => {
  return (
    <main className="Home">
      {pregledi.length ? (
        <Feed pregledi={pregledi} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Nema pregleda za ovu kosnicu.</p>
      )}
    </main>
  );
};

export default Home;
