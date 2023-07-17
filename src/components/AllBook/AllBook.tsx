import { useState } from 'react';
import { IBook } from '../../Interface/bookInterface';
import { useGetBooksQuery } from '../../redux/features/bookCatalog/booksApi';
import Book from '../book/Book';
import LoadingBar from '../sheared/LoadingBar';
import BooksPagination from './BooksPagination';

const AllBook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const url = `/api/v1/books/?page=${currentPage}&skip=${postsPerPage}`;
  const { data: books, isLoading } = useGetBooksQuery(url, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });
  if (isLoading) {
    return <LoadingBar />;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = books?.books?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = books?.books?.length;
  // @ts-ignore
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="font-serif items-center text-center mt-5">
        <p className="text-xl text-gray-400">Popular Catalog</p>
        <h1 className="text-3xl font-bold mt-2 mb-8 text-black">
          <span className="text-red-500">
            A home for your books. Enter what you’re reading or your whole
            library.
          </span>
          It’s an easy, library-quality catalog.
        </h1>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        {currentPosts?.map((book: IBook) => (
          <Book book={book} />
        ))}
      </div>

      <div className=" mt-10">
        <BooksPagination
          totalPages={totalPages}
          paginate={paginate}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default AllBook;
