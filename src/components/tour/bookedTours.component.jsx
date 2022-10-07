import { useEffect, useState } from 'react';
import { getBookedTours } from '../../api/tours';
import { setPageTitle } from '../../utils/pageHead';
import TourCard from './tourCard.component';
import ToursOverview from './toursOverview.component';

const BookedTours = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    (async () => {
      const bookedTours = await getBookedTours();

      if (bookedTours) setAllBookings(bookedTours);
    })();
  }, []);

  useEffect(() => setPageTitle('Natours | My Bookings'), []);

  return (
    <ToursOverview>
      {allBookings.map(tour => (
        <TourCard key={tour.id} tourData={tour} />
      ))}
    </ToursOverview>
  );
};

export default BookedTours;
