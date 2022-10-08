import axios from 'axios';
import { SERVER_BASE_URL } from '../constants/serverConstants';
import { handleErrorAlert } from '../utils/alert';

export const bookTour = async tourId => {
  try {
    const options = {
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    };
    const { data } = await axios.get(
      `${SERVER_BASE_URL}/api/v1/bookings/checkout-session/${tourId}`, options
    );

    if (data.status === 'success') {
      return data.sessionUrl;
    }

    throw new Error('Something went very wrong!');
  } catch (err) {
    handleErrorAlert(err);
  }
};
