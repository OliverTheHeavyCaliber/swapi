import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Crawl from "./Crawl";

function Film(props) {
  const [crawl, setCrawl] = useState('');
  // useParams() from 'react-router-dom' and access all the variables from the path that you passed to this component `params.filmId = 1` if in path you have /`film/1` based on this you can than fetch tha data that you need in you specific page.
  const params = useParams();
  const [film, setFilm] = useState(props.film || null);
  const url = `https://swapi.dev/api/films/${params.filmId}`;

  useEffect(() => {
    if (film) {
      setTimeout(() => {
        setCrawl(film.opening_crawl);
      }, 3000);
    }
  }, [film]);

  async function fetchFilmData() {
    const resp = await fetch(url);
    const result = await resp.json();
    // console.log(result);
    // what you set to your state depends on the data structure that come as a result from the api
    setFilm(result);
  }

  useEffect(() => {
    //with && you can condition what is on the most right side will be run or rendered only in case all of the left sides are true; So if there are params and inside params object I have filmId than I will actually fetch the data for the film with the filmId.
    params && params.filmId && fetchFilmData();
  }, [params]);

  return (
    <div>
      {console.log(film)}
      {film && 
        <Link to={`/film/${film.episode_id}`}><h2>{film.title}</h2></Link>
      }
      <Crawl crawl={crawl} />
      <div>{crawl}</div>
    </div>
  )
}

export default Film;