import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utiliti/addToReadList";
import { getStoredWishList } from "../../utiliti/addToWishList";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedRedList = getStoredReadList();
    const storedRedListInt = storedRedList.map((id) => parseInt(id));
    console.log(storedRedList, storedRedListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedRedListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    console.log(storedWishList, storedWishListInt, allBooks);

    const wishBookList = allBooks.filter((book) =>
      storedWishList.includes(book.bookId)
    );
    setWishList(wishBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType)
  };

  return (
    <div className="container mx-auto">
      <details className="dropdown">
        <summary className="btn m-1">{sort ? `Sort By ${sort}` : "Sort By"}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=> handleSort("Rating")}>
          <a> Rating</a>
          </li>
          <li  onClick={()=> handleSort("No of Page.")}>
            <a>No of Page.</a>
          </li>
        </ul>
      </details>
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
