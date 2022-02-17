import { useParams, Link } from "react-router-dom";

const PregledPage = ({ pregledi }) => {
  const { id } = useParams();
  const pregled = pregledi.find((pregled) => pregled.id.toString() === id);
  return (
    <main className="PregledPage">
      <article className="pregled">
        {pregled && (
          <>
            <h2>{pregled.title}</h2>
            <p className="pregledDate">{pregled.datetime}</p>
            <p className="pregledBody">{pregled.body}</p>
          </>
        )}
        {!pregled && (
          <>
            <h2>Nepostojeci podaci</h2>
            <p>Pretrazite nesto drugo.</p>
            <p>
              <Link to="/">Vrati se nazad</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PregledPage;
