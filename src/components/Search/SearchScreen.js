import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import HeroCard from '../Heroes/HeroCard';
import useForm from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { search } = location;
  const { q = ''} = queryString.parse(search);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`?q=${searchText}`);
  }


  return (
    <div>
      <h1>Seacrh Screen</h1>
      <hr />
      <div className='row'>

        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <label htmlFor='searchText'>
              Busca tu heroe
              <input
                type='text'
                placeholder='Superman'
                className='form-control'
                name='searchText'
                value={searchText}
                onChange={handleInputChange}
                autoComplete='off'
              />
            </label>
            <button type='submit' className='btn m-1 btn-block btn-outline-primary'>Search...</button>
          </form>
        </div>
        <div className='col-7'>
          <h4> Resultado </h4>

          {
            (q === '')
            &&
            <div className='alert alert-info'>
              Search a hero
            </div>
          }

          {
            (q !== '' && heroesFiltered.length === 0)
            &&
            <div className='alert alert-danger'>
              There is no a hero with {q}
            </div>
          }

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen;
