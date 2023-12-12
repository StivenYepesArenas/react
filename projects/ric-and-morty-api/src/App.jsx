import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {useState ,useEffect } from "react";
import Card from "./component/Card/Card.jsx"
// import Search from "./components/Search/Search.jsx";
 
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";
// import Navbar from "./components/Navbar/Navbar";
 
  
function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  let { info, results } = fetchedData;
let api = `https://rickandmortyapi.com/api/character/?page=1`;
 useEffect(() => {
   (async function () {
     let data = await fetch(api).then((res) => res.json());
     updateFetchedData(data);
   })();
 }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
