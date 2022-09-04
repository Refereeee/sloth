const getLocalStorageItems = () => {
    const data = localStorage.getItem('items');
    return data ? JSON.parse(data) : []
    // const items = data ? JSON.parse(data) : [];
    // console.log(items)
    // console.log(data)
    // return data.join('')
};

export default getLocalStorageItems;