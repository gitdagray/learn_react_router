import Pregled from "./Pregled";

const Feed = ({ pregledi }) => {
  return (
    <>
      {pregledi.map((pregled) => (
        <Pregled key={pregled.id} pregled={pregled} />
      ))}
    </>
  );
};

export default Feed;
