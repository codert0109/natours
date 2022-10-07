const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
export const showAlert = (type, msg, time = 5) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, time * 1000);
};

export const handleErrorAlert = err => {
  let errMsg = '';

  if (import.meta.env.MODE === 'development') {
    errMsg = err.response?.data?.message || err.message;
  }

  if (import.meta.env.MODE === 'production') {
    errMsg = err.response?.data?.message || 'Sorry something went very wrong!';
  }

  showAlert('error', errMsg);
};
