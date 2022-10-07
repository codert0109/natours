import axios from 'axios';
import { handleErrorAlert, showAlert } from '../utils/alert';

export const userSignup = async formData => {
  try {
    const { data: signupData } = await axios.post('/api/v1/users/signup', formData);

    if (signupData.status === 'success') {
      showAlert('success', 'Signed up successfully');

      return signupData.data.user;
    }
  } catch (err) {
    handleErrorAlert(err);
  }
};

export const userLogin = async (email, password) => {
  try {
    const { data: loginData } = await axios.post('/api/v1/users/login', {
      email,
      password,
    });

    if (loginData.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      return loginData.data.user;
    }
  } catch (err) {
    handleErrorAlert(err);
  }
};

export const userLogout = async () => {
  try {
    const { data } = await axios.get('/api/v1/users/logout');

    if (data.status === 'success') {
      showAlert('success', 'Logged out successfully!');
      return true;
    }
  } catch (err) {
    handleErrorAlert(err);
  }
};
