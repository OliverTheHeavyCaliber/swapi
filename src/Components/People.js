import { useEffect, useState } from "react";

function People() {
  const [data, setData] = useState(null);
  const peopleUrl = "https://swapi.dev/api/people";

  // url is the parameter of the fetchPeople function. I can pass different urls to fetch different data
  // after first render I pass the peopleUrl to it to fetch the first set of results, but on click on the button I will pass the url that I will get from the api in data.next to render a different set of the data
  async function fetchPeople(url) {
    const resp = await fetch(url);
    const result = await resp.json();
    setData(result);
  }

  useEffect(() => {
    fetchPeople(peopleUrl);
  }, []);

  return (
    <div>
      {data && data.results.map((item, index) => (
        <h3 key={index}>{item.name}</h3>
      ))}
      {data && <button onClick={() => {fetchPeople(data.next); console.log(data.next)}}>Fetch next people</button>}
      
    </div>
  )
}

export default People;