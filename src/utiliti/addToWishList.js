const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list");
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
    } else {
      return [];
    }
  };
  
  const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
      // already exist. do not add it
      console.log(id, "already exists, don't add it to the read list.");
    } else {
      storedList.push(id);
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem("wish-list", storedListStr);
       alert("asdnfkblafk")
    }
  };
  
  export { addToStoredWishList, getStoredWishList };
  