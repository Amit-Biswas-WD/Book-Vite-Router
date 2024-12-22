import { useLoaderData, useParams } from "react-router-dom";

const ListedBooks = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="container mx-auto mb-6">
      <h2 className="text-3xl">ListedBooks: {bookId}</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="w-full">
          <img className="w-full h-[564px] bg-cover" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-bold">{bookName}</h2>
          <p className="text-base my-2">By : {author}</p>
          <hr className="black" />
          <p className="my-2">Fiction</p>
          <hr className="black" />
          <h2 className="my-2 font-semibold">
            Review: <span className="text-base font-light">{review}</span>
          </h2>
          <div className="flex gap-4">
            <h2 className="font-semibold">Tag : </h2>
            {tags.map((tag) => (
              <p className="text-green-500 bg-green-100 p-1 rounded-xl">{tag}</p>
            ))}
          </div>
          <hr className="black my-2" />
          <div className="w-64">
            <div className="flex justify-between">
              <p>Number of Pages:</p>
              <p className="font-semibold">{totalPages}</p>
            </div>
            <div className="flex justify-between my-2">
              <p>Publisher:</p>
              <p className="font-semibold">{publisher}</p>
            </div>
            <div className="flex justify-between">
              <p>Year of Publishing:</p>
              <p className="font-semibold">{yearOfPublishing}</p>
            </div>
            <div className="flex justify-between my-2">
              <p>Rating:</p>
              <p className="font-semibold">{rating}</p>
            </div>
          </div>
          <div className="flex gap-6">
            <button className="btn btn-outline btn-accent">Accent</button>
            <button className="btn btn-success">Success</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
