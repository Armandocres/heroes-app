import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  return (
    <div className="col" style={{ maxWidth: 540 }}>
      <div className="card h-100 border-dark mb-3">
        <div className="col-md-4 m-auto">
          <img src={ `./assets/heroes/${id}.jpg` } className='card-img rounded' alt={superhero} />
        </div>
        <div className='col-md-8 m-auto'>
          <div className='card-body'>
            <h5 className='card-title'>{superhero} </h5>
            <p className='card-text'>{alter_ego} </p>

            {
              (alter_ego !== characters)
              && <p className='crad-text'>{ characters }</p>
            }

            <p className='card-text'>
              <small className='text-muted'>{ first_appearance }</small>
            </p>

            <Link to={`./hero/${id}` }>
              Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard;
