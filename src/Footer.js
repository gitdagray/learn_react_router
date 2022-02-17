const Footer = ({ hive }) => {
  return (
    <footer className="Footer">
      <p>Kosnica br: {hive} od ukupno {localStorage.length}</p>
    </footer>
  );
};

export default Footer;
