import { useState } from 'react';
import Zoomln from '@mui/icons-material/ZoomIn';
import { getLocationByInputId } from '../api/Location';

export default function SearchLocation({ setFunctionLocation, setIsLoading }) {
  const [locationInput, setLocationInput] = useState('');

  const onChangeHandler = (e) => {
    const value = parseInt(e.target.value ? e.target.value : 0);
    if (!isNaN(Number(value))) {
      setLocationInput(value);
      console.log('Es numero', value);
    } else {
      setLocationInput(value);
      alert('Only numbers please');
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (locationInput < 1 || locationInput > 125) {
      alert('Please only ids between 1 to 125');
      return;
    }
    setIsLoading(true);
    getLocationByInputId(locationInput).then(
      (res) => {
        setTimeout(()=> {
          setIsLoading(false);
        }, 900);
        setFunctionLocation(res);
      }
    );
  }

  return (
      <form className='searchMiniForm' onSubmit={ e => onSubmitHandler(e)}>
        <input
          className='inputSearch'
          type="text"
          placeholder="Type a location id ... "
          value={locationInput}
          onChange={onChangeHandler}/>
        <button type='submit' className='buttonSearch' onSubmit={onSubmitHandler}>Search <Zoomln /></button>
      </form>
  )
}
