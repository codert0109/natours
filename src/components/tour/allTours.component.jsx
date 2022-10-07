import { useState, useEffect } from 'react';
import { getAllTours } from '../../api/tours';
import { setPageTitle } from '../../utils/pageHead';
import TourCard from './tourCard.component';
import ToursOverview from './toursOverview.component';

const AllTours = () => {
  const [allTours, setAllTours] = useState([]);

  useEffect(() => {
    // Set page title
    setPageTitle('Natours | All Tours');

    // Get all tours
    (async () => {
      const tours = await getAllTours();

      if (tours) setAllTours(tours.data);
    })();
  }, []);

  return (
    <ToursOverview>
      {allTours.map(tour => (
        <TourCard key={tour.id} tourData={tour} />
      ))}
    </ToursOverview>
  );
};

export default AllTours;
