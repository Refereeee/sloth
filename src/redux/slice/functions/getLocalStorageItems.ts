const getLocalStorageItems = () => {
  // setInterval(() => {
  const data = localStorage.getItem('items');
  return data ? JSON.parse(data) : [];
  // }, 5000);
};

export default getLocalStorageItems;
