import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Film from './Components/Film';
import Films from './Components/Films';
import People from './Components/People';

function App() {
  const [films, setFilms] = useState([]);

  const url = "https://swapi.dev/api/films";

  async function fetchData() {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    console.log(data.next);
    console.log(data.previous);
    setFilms(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      {/**Wrap the whole app inside Router to access its components and funcionality */}
      <div className="App">
        {/**Wrap the actual routing inside Routes */}
        <Routes>
          {/**Remove this piece of code from App.js and put it into <Films/> and pass `films` as a property */}
          {/* {films.map((film, index) => (
            <Film key={index} film={film} />
          ))} */}
          <Route 
            path="/films" 
            element={<Films films={films} />} 
          />
          {/** to pass variables into routes path you can start the name with `:` than the Route component makes it a variable and you can access its value from inside the element component */}
          <Route 
            path="/film/:filmId"
            element={<Film />}
          />
        </Routes>
        {/** As long as People component is not inside the Routes it will be included on all of the pages*/}
        <People />
      </div>
    </Router>
  );
}

export default App;
