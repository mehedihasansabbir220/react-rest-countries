import './App.css';
import Countries from './Componets/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}























// function Countries() {

//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch(`https://restcountries.eu/rest/v2/all`)
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (

//     <div>

//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//       <h2>Traveling around the World!!!</h2>
//       <h4>countries found :{countries.length}</h4>
//     </div>

//   )
// }

// function Country(prop) {
//   return (
//     <div>
//       <h2>Name:{prop.name}</h2>
//       <p>Capital:{prop.capital}</p>
//     </div>
//   )
// }

export default App;
