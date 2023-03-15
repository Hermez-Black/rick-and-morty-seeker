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
  const [numberPage, setNumberPage] = useState(0);
  const [paginationElements, setPaginationElements] = useState([]);

  const makePagination = (residents) => {
    const totalResidents = residents.length;
    if (totalResidents < 9) {
      console.log("no need pagination");
      console.log([residents]);
      return [residents];
    }
    console.log(totalResidents);
    let numberPages = parseInt(totalResidents / 9);
    const restDivision = totalResidents % 9 ;
    if (restDivision > 0) {
      numberPages += 1;
    }
    const paginator = {};

    const step = 9;
    const result = Array(Math.ceil(totalResidents / step)).fill().map((_, index) => {
      const start = index * step;
      return residents.slice(start, start + step);
    });

    /* const arrayPagination = residents.map((resi, index) => {
      if (index === 9) {
        return residents.slice([0]);
      }
      return []
    }); */
    // todo: refactor and clean this code
    result.forEach((resi, index) => {
      paginator[index] = resi;
    });
    console.log(numberPages, "jiji");
    console.log(result, "jojo");
    return result;
  }

  useEffect(() => {
    getRandomLocation().then((res) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 900);
      setLocation(res);
      setPaginationElements(makePagination(res.residents));
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <img src="/logo.svg" alt="logo header" className='headerImage'/>
      <SearchLocation setFunctionLocation={setLocation} setIsLoading={setIsLoading} ></SearchLocation>
      <h4 className='welcome'>Welcome to the crazy universe!</h4>
      <Location locationData={location}/>
      <div className='cards-container'>
      {
        location?.residents?.length > 0 ?
        paginationElements[numberPage]?.map((residentUrl, index) => {
          return <ResidentInfo key={residentUrl} residentUrl={residentUrl}/>
        }) :
        <div className='withoutResidents'>There are not residents</div>
      }
      </div>
      <NavPaginator
        Pagination={paginationElements}
        setNewNumberPage={setNumberPage}></NavPaginator>
    </div>
  );
}

export default App;
