
import "./App.css";
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import { original,action,ComedyMovies } from "./url";
import RawPost from './Components/RawPost/RawPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost title='Netflix Originals' url={original}/>
      <RawPost title='Action Movies' isSmall url={action}/>
      <RawPost title='Comedy Movies' isSmall url={ComedyMovies}/>
    </div>
  );
}

export default App;
