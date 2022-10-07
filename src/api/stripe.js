import axios from 'axios';
import { handleErrorAlert } from '../utils/alert';

export const bookTour = async tourId => {
  try {
    const { data } = await axios.get(`/api/v1/bookings/checkout-session/${tourId}`);

    if (data.status === 'success') {
      return data.sessionUrl;
    }

    throw new Error('Something went very wrong!');
  } catch (err) {
    handleErrorAlert(err);
  }
};

export const createBooking = async searchQuery => {
  try {
    const { data } = await axios.get(`/api/v1/bookings/create-booking/${searchQuery}`);

    if (data.status === 'success') return true;
  } catch (err) {
    handleErrorAlert(err);
  }
};
