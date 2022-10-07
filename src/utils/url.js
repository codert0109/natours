export const getQueryParam = (queryParam, key) => {
  const urlParams = new URLSearchParams(queryParam);
  const paramVal = urlParams.get(key);

  return paramVal;
};
