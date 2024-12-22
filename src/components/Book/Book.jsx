import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book
  return (
    <div className="border-2 rounded-lg p-[24px]">
        <div className="rounded-lg bg-[#F3F3F3] p-10">
            <img className="w-full h-[260px] object-cover rounded-lg" src={image} alt="Descriptive text about the image" />
        </div>
        <div className="flex justify-between items-center text-accent text-base font-medium my-3">
            <p>Young Adult</p>
            <p>Identity</p>
        </div>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="my-3 text-base font-medium">By: {author}</p>
        <hr />
        <div className="flex justify-between gap-3 items-center my-3 text-base font-medium">
            <p>Fiction</p>
            <p className="flex gap-1 items-center">{rating}<span><CiStar/></span></p>
        </div>
    </div>
  )
}

export default Book