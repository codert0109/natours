import { useState } from 'react';
import { Link } from 'react-router-dom';
import { bookTour } from '../../api/stripe';
import { SERVER_BASE_URL } from '../../constants/serverConstants';
import User from '../../context/userContext';

const TourCta = ({ tourImages, tourId }) => {
  const [creatingCheckout, setCreatingCheckout] = useState(false);

  const { isUserLoggedIn } = User();

  const buyTour = async e => {
    setCreatingCheckout(true);
    const tourId = e.target.dataset.tourId;

    const sessionUrl = await bookTour(tourId);

    setCreatingCheckout(false);
    if (sessionUrl) window.open(sessionUrl, '_blank');
  };

  return (
    <section className='section-cta'>
      <div className='cta'>
        <div className='cta__img cta__img--logo'>
          <img src={`${SERVER_BASE_URL}/img/logo-white.png`} alt='Natours logo' />
        </div>
        <img
          className='cta__img cta__img--1'
          src={`${SERVER_BASE_URL}/img/tours/${tourImages[0]}`}
          alt='Tour picture'
        />
        <img
          className='cta__img cta__img--2'
          src={`${SERVER_BASE_URL}/img/tours/${tourImages[1]}`}
          alt='Tour picture'
        />
        <div className='cta__content'>
          <h2 className='heading-secondary'>What are you waiting for?</h2>
          <p className='cta__text'>10 days. 1 adventure. Infinite memories. Make it yours today!</p>
          {isUserLoggedIn === true ? (
            <button
              className='btn btn--green span-all-rows'
              data-tour-id={tourId}
              onClick={buyTour}>
              {creatingCheckout === true ? 'Processing...' : 'Book tour now!'}
            </button>
          ) : (
            <Link className='btn btn--green span-all-rows' to='/login'>
              Log in to book tour
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TourCta;
