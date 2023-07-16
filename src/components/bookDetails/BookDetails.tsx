import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../redux/app/hooks';
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from '../../redux/features/bookCatalog/booksApi';
import Loading from '../sheared/Loading';
import Review from './Review';

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const { user } = useAppSelector(state => state.user);
  const navigate = useNavigate();

  const [deleteData, { isLoading, isError }] = useDeleteBookMutation();
  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <h2>data is not assess</h2>;
  }
  const handleDelete = () => {
    deleteData(id);
    toast.success('Book deleted successfully');
    navigate('/');
  };
  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={data?.imgUrl}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              {data?.title}
            </h1>

            <span className="font-semibold text-gray-500 text-2xl">
              {' '}
              genre: {data?.genre}{' '}
            </span>
            <div className="flex justify-between space-x-4 mt-3">
              <div className="flex space-x-4 ">
                <img
                  alt=""
                  src={data?.author?.img}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 "
                />
                <div className="flex flex-col space-y-1">
                  <p className="font-semibold">{data?.author?.name} </p>
                  <span className="text-xs dark:text-gray-400">
                    {data?.publicationDate}
                  </span>
                </div>
              </div>
            </div>
            {user?.email && (
              <div className="flex items-center  mt-6">
                <Link to={`/editBook/${id}`}>
                  <button className="btn btn-sm bg-green-500">edit</button>{' '}
                </Link>
                <button
                  onClick={handleDelete}
                  className="btn btn-sm bg-red-500"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mt-8">
        <Review id={id} />
      </div>
    </div>
  );
};

export default BookDetails;
