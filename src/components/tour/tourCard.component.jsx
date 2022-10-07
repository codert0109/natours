import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegCalendar, FaRegFlag, FaRegUser } from 'react-icons/fa';
import { SERVER_BASE_URL } from '../../constants/serverConstants';

const TourCard = ({ tourData }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__picture'>
          <div className='card__picture-overlay'>&nbsp;</div>
          <img
            className='card__picture-img'
            src={`${SERVER_BASE_URL}/img/tours/${tourData.imageCover}`}
            alt={tourData.name}
          />
        </div>
        <h3 className='heading-tertirary'>
          <span>{tourData.name}</span>
        </h3>
      </div>
      <div className='card__details'>
        <h4 className='card__sub-heading'>
          {`${tourData.difficulty} ${tourData.duration}`}-day tour
        </h4>
        <p className='card__text'>{tourData.summary}</p>
        <div className='card__data'>
          <FaMapMarkerAlt className='card__icon' />
          <span>{tourData.startLocation.description}</span>
        </div>
        <div className='card__data'>
          <FaRegCalendar className='card__icon' />
          <span>
            {new Date(tourData.startDates[0]).toLocaleString('en-us', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className='card__data'>
          <FaRegFlag className='card__icon' />
          <span>{tourData.locations.length} stops</span>
        </div>
        <div className='card__data'>
          <FaRegUser className='card__icon' />
          <span>{tourData.maxGroupSize} people</span>
        </div>
      </div>
      <div className='card__footer'>
        <p>
          <span className='card__footer-value'>${tourData.price}</span>{' '}
          <span className='card__footer-text'>per person</span>
        </p>
        <p className='card__ratings'>
          <span className='card__footer-value'>{tourData.ratingsAverage}</span>{' '}
          <span className='card__footer-text'>ratings ({tourData.ratingsQuantity})</span>
        </p>
        <Link className='btn btn--green btn--small' to={`/tour/${tourData.slug}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
