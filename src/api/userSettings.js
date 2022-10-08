import axios from 'axios';
import { SERVER_BASE_URL } from '../constants/serverConstants';
import { handleErrorAlert, showAlert } from '../utils/alert';

// type is either password or data
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? `${SERVER_BASE_URL}/api/v1/users/update-password`
        : `${SERVER_BASE_URL}/api/v1/users/update-me`;
    const { data: updatedData } = await axios.patch(url, data);

    if (updatedData.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);

      return updatedData.data.user;
    }
  } catch (err) {
    handleErrorAlert(err);
  }
};
