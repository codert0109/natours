import { useState, useEffect } from 'react';
import { getAllTours } from '../../api/tours';
import { setPageTitle } from '../../utils/pageHead';
import Skeleton from '../skeleton/skeleton.component';
import TourCard from './tourCard.component';
import ToursOverview from './toursOverview.component';

const AllTours = () => {
  const [allTours, setAllTours] = useState([]);
  const [loadingTours, setLoadingTours] = useState(true);

  useEffect(() => {
    // Set page title
    setPageTitle('Natours | All Tours');

    // Get all tours
    (async () => {
      const tours = await getAllTours();

      setTimeout(() => setLoadingTours(false), 1000);
      if (tours) setAllTours(tours.data);
    })();
  }, []);

  return (
    <ToursOverview>
      {loadingTours === true ? (
        <Skeleton totalSkeletons={3} height='50rem' />
      ) : (
        allTours.map(tour => <TourCard key={tour.id} tourData={tour} />)
      )}
    </ToursOverview>
  );
};

export default AllTours;
