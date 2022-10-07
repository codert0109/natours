import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import { getOneTour } from '../../api/tours';
import TourOverviewBox from './tourOverviewBox.component';
import TourReviewCard from './tourReviewCard.component';
import TourMap from '../map/tourMap.component';
import TourCta from './tourCta.component';
import { SERVER_BASE_URL } from '../../constants/serverConstants';
import { setPageTitle } from '../../utils/pageHead';

const SingleTour = () => {
  const { tour: tourName } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    (async () => {
      const tourData = await getOneTour(tourName);

      if (tourData) {
        setTour(tourData.data);
        setPageTitle(`Natours | ${tourData.data.name}`);
      }
    })();
  }, []);

  const tourDate = tour.startDates
    ? new Date(tour.startDates[0]).toLocaleString('en-us', { month: 'long', year: 'numeric' })
    : '';

  // There is no change in the data
  // Thus, the whole html is put in the same file

  if (Object.keys(tour).length === 0) {
    return <></>;
  }

  return (
    <>
      <section className='section-header'>
        <div className='header__hero'>
          <div className='header__hero-overlay'>&nbsp;</div>
          <img
            className='header__hero-img'
            src={`${SERVER_BASE_URL}/img/tours/${tour.imageCover}`}
            alt={`${tour.name}`}
          />
        </div>
        <div className='heading-box'>
          <h1 className='heading-primary'>
            <span>{tour.name} Tour</span>
          </h1>
          <div className='heading-box__group'>
            <div className='heading-box__detail'>
              <FaRegClock className='heading-box__icon' />
              <span className='heading-box__text'>{tour.duration} days</span>
            </div>
            <div className='heading-box__detail'>
              <FaMapMarkerAlt className='heading-box__icon' />
              <span className='heading-box__text'>{tour.startLocation?.description}</span>
            </div>
          </div>
        </div>
      </section>

      <section className='section-description'>
        <div className='overview-box'>
          <div>
            <div className='overview-box__group'>
              <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>
              <TourOverviewBox label='Next Date' text={tourDate} icon='date' />
              <TourOverviewBox label='Difficulty' text={tour.difficulty} icon='difficulty' />
              <TourOverviewBox
                label='Participants'
                text={`${tour.maxGroupSize} people`}
                icon='participants'
              />
              <TourOverviewBox label='Rating' text={`${tour.ratingsAverage} / 5`} icon='rating' />
            </div>
            <div className='overview-box__group'>
              <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>
              {tour.guides.map(guide => (
                <div className='overview-box__detail' key={guide._id}>
                  <img
                    className='overview-box__img'
                    src={`${SERVER_BASE_URL}/img/users/${guide.photo}`}
                    alt={guide.name}
                  />
                  <span className='overview-box__label'>
                    {guide.role === 'lead-guide' ? 'Lead Guide' : 'Guide'}
                  </span>
                  <span className='overview-box__text'>{guide.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='description-box'>
          <h2 className='heading-secondary ma-bt-lg'>About {tour.name} tour</h2>
          {tour.description.split('\n').map((paragraph, i) => (
            <p className='description__text' key={i}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className='section-pictures'>
        {tour.images.map((picture, i) => (
          <div className='picture-box' key={i}>
            <img
              src={`${SERVER_BASE_URL}/img/tours/${picture}`}
              alt={`${tour.name} ${i + 1}`}
              className={`picture-box__img picture-box__img--${i + 1}`}
            />
          </div>
        ))}
      </section>

      <section className='section-map'>
        <TourMap locationData={tour.locations} mapId={'map'} />
      </section>

      <section className='section-reviews'>
        <div className='reviews'>
          {tour.reviews.map(review => (
            <TourReviewCard review={review} key={review._id} />
          ))}
        </div>
      </section>

      <TourCta tourImages={tour.images} tourId={tour.id} />
    </>
  );
};

export default SingleTour;
