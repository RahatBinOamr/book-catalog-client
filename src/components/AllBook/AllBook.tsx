import { IBook } from '../../Interface/bookInterface';
import { useGetBooksQuery } from '../../redux/features/bookCatalog/booksApi';
import Book from '../book/Book';
import LoadingBar from '../sheared/LoadingBar';

const AllBook = () => {
  const url = `/`;
  const { data, isLoading } = useGetBooksQuery(url, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  if (isLoading) {
    return <LoadingBar />;
  }

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
      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data?.books?.map((book: IBook) => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBook;
