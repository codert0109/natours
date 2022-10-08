import axios from 'axios';
import { SERVER_BASE_URL } from '../constants/serverConstants';

export const getAllTours = async () => {
  try {
    const { data: tourData } = await axios.get(`${SERVER_BASE_URL}/api/v1/tours`);

    if (tourData.status === 'success') return tourData.data;
  } catch (err) {
    return false;
  }
};

export const getOneTour = async tourName => {
  try {
    const { data: tourData } = await axios.get(`${SERVER_BASE_URL}/api/v1/tours/name/${tourName}`);

    if (tourData.status === 'success') return tourData.data;
  } catch (err) {
    return false;
  }
};

export const getBookedTours = async () => {
  try {
    const { data: bookingsData } = await axios.get(`${SERVER_BASE_URL}/api/v1/tours/my-tours`);

    if (bookingsData.status === 'success') return bookingsData.data;
  } catch (err) {
    return false;
  }
};
