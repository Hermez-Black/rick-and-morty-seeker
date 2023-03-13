// core
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Location from './components/Location';
import SearchLocation from './components/SearchLocation';
import ResidentInfo from './components/ResidentInfo';
import Loader from './components/Loader';
import NavPaginator from './components/NavPaginator';

// funtions
import { getRandomLocation } from './api/Location';

function App() {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomLocation().then((res) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 900);
      setLocation(res);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <img src="/logo.svg" alt="logo header" />
      <SearchLocation setFunctionLocation={setLocation} setIsLoading={setIsLoading} ></SearchLocation>
      <h4 className='welcome'>Welcome to the crazy universe!</h4>
      <Location locationData={location}/>
      <div className='cards-container'>
      {
        location?.residents?.map((residentUrl) => {
          return <ResidentInfo key={residentUrl} residentUrl={residentUrl}/>
        })
      }
      </div>
      <NavPaginator Pagination={[1,2,3,4,5]}></NavPaginator>
    </div>
  );
}

export default App;
