import './Home.css';

import Header from '../components/Header/index';
import SearchBar from '../components/SearchBar/index';

function Home() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default Home;
