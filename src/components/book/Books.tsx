import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../../redux/features/bookCatalog/booksApi';
import LoadingBar from '../sheared/LoadingBar';
import Book from './Book';
import Dropdown from './Dropdown';
const Books = () => {
  const [sort, setSort] = useState({ sort: 'publicationDate' });

  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const url = `?sort=${sort}&search=${search}&genre=${genre}&limit=${10}`;
  const { data, isLoading, isError } = useGetBooksQuery(url, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });
  if (isLoading) {
    <LoadingBar />;
  }
  if (isError) {
    <h1 className="text-red-500"> something went worng.....</h1>;
  }
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Dropdown genre={genre} setGenre={setGenre} />
          <form className="mb-0 ">
            <div className="flex items-center relative ">
              <input
                className="h-8 rounded-lg pe-10 text-sm placeholder-gray-300 focus:z-10 border-spacing-1  border-2 text-black"
                placeholder="Search..."
                type="text"
                value={search}
                onChange={event => setSearch(event.target.value)}
                name="search"
              />
              <button
                type="submit"
                className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
              >
                <span className="sr-only">Submit Search</span>
                <BsSearch />
              </button>
            </div>
          </form>
        </div>
        <div>
          <Link to={'/allBooks'}>
            <button className="btn btn-sm">All Books</button>
          </Link>
        </div>
      </div>
      <div className=" mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data?.books?.map(book => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
