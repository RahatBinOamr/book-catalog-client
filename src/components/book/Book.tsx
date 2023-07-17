import { Link } from 'react-router-dom';
import { IBook } from '../../Interface/bookInterface';

interface book {
  book: IBook;
}

const Book: React.FC<book> = ({ book }) => {
  const { title, publicationDate, imgUrl, genre, author, _id } = book;
  const { name, img } = author;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <Link to={`/${_id}`}>
        <figure>
          <img
            src={imgUrl}
            alt="Shoes "
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        </figure>
      </Link>
      <Link to={`/${_id}`}>
        <div className="flex justify-between space-x-4 mt-3">
          <div className="flex space-x-4 ">
            <img
              alt=""
              src={img}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 "
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">{name} </p>
              <span className="text-xs dark:text-gray-400">
                {publicationDate.substring(0, 10)}
              </span>
            </div>
          </div>
          <h3 className="font-semibold"> {genre} </h3>
        </div>
      </Link>
      <Link to={`/${_id}`}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Book;
