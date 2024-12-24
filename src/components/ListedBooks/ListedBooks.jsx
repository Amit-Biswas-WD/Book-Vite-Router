import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utiliti/addToReadList";
import { getStoredWishList } from "../../utiliti/addToWishList";

const ListedBooks = () => {
  const [readList, setReadList] = useState([])
  const [wishList, setWishList] = useState([])
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedRedList = getStoredReadList();
    const storedRedListInt = storedRedList.map((id) => parseInt(id));
    console.log(storedRedList, storedRedListInt, allBooks);

    const readBookList = allBooks.filter(book => storedRedListInt.includes(book.bookId) )
    setReadList(readBookList)
  }, []);


  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    console.log(storedWishList, storedWishListInt, allBooks);

    const wishBookList = allBooks.filter(book => storedWishList.includes(book.bookId) )
    setWishList(wishBookList)
  }, []);


  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        <Tabs>
          <TabList>
            <Tab>Read</Tab>
            <Tab>Wishlist</Tab>
          </TabList>
          <TabPanel>
            <h2>Read List: {readList.length}</h2>
          </TabPanel>
          <TabPanel>
            <h2>Wish List: {wishList.length}</h2>
          </TabPanel>
        </Tabs>
      </h2>
    </div>
  );
};

export default ListedBooks;
