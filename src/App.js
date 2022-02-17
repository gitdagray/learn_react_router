import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NoviPregled from "./NoviPregled";
import PregledPage from "./PregledPage";
import Add from "./Add";
import Missing from "./Missing";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [hive, setHive] = useState("");
  const [pregledi, setPregledi] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pregledTitle, setPregledTitle] = useState("");
  const [pregledBody, setPregledBody] = useState("");
  const history = useHistory();

  useEffect(() => {
    const filteredResults = pregledi.filter(
      (pregled) =>
        pregled.body.toLowerCase().includes(search.toLowerCase()) ||
        pregled.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [pregledi, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = pregledi.length ? pregledi[pregledi.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const noviPregled = {
      id,
      title: pregledTitle,
      datetime,
      body: pregledBody,
    };
    const allPregledi = [...pregledi, noviPregled];
    setPregledi(allPregledi);
    localStorage.setItem(hive, JSON.stringify(allPregledi));
    setPregledTitle("");
    setPregledBody("");
    history.push("/");
  };

  const handleNewSubmit = (e) => {
    e.preventDefault();
    const newHiveNo = localStorage.length + 1;
    const id = 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    let allNew = [];
    const newHive = {
      id,
      title: pregledTitle,
      datetime,
      body: pregledBody,
    };
    allNew[0] = newHive;
    setPregledTitle("");
    setPregledBody("");
    history.push("/");

    localStorage.setItem(newHiveNo, JSON.stringify(allNew));
  };

  const handleHive = (h) => {
    if (JSON.parse(localStorage.getItem(h))) {
      setPregledi(JSON.parse(localStorage.getItem(h)));
      setHive(h);
    } else {
      setPregledi([]);
      setHive("");
    }
  };

  const handleSave = () => {
    if (hive) {
      localStorage.setItem(hive, JSON.stringify(pregledi));
      handleHive("");
    }
  };

  return (
    <div className="App">
      <Header
        title="Evidencija kosnice br: "
        hive={hive}
        handleHive={handleHive}
        handleSave={handleSave}
      />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home pregledi={searchResults} />
        </Route>
        <Route exact path="/pregled">
          {hive ? (
            <NoviPregled
              handleSubmit={handleSubmit}
              pregledTitle={pregledTitle}
              setPregledTitle={setPregledTitle}
              pregledBody={pregledBody}
              setPregledBody={setPregledBody}
            />
          ) : (
            <Route path="*" component={Missing} />
          )}
        </Route>
        <Route path="/pregled/:id">
          <PregledPage pregledi={pregledi} />
        </Route>
        <Route path="/add">
          <Add
            handleNewSubmit={handleNewSubmit}
            pregledTitle={pregledTitle}
            setPregledTitle={setPregledTitle}
            pregledBody={pregledBody}
            setPregledBody={setPregledBody}
          />
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
      <Footer hive={hive} />
    </div>
  );
}

export default App;
