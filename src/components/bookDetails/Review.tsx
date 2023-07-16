import { useState } from 'react';
import {
  useGetSingleBookQuery,
  usePostReviewMutation,
} from '../../redux/features/bookCatalog/booksApi';

const Review = ({ id }) => {
  const [review, setReview] = useState('');
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });
  const [postReview, { isLading, isError, isSuccess }] =
    usePostReviewMutation();
  const handleSubmit = e => {
    e.preventDefault();
    const reviewOption = { id, reviews: { reviews: review } };
    postReview(reviewOption);
    setReview('');
  };

  return (
    <div className=" mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            id="bio"
            value={review}
            onChange={event => setReview(event.target.value)}
            placeholder=""
            className="w-full border rounded-md focus:ring focus:ri focus:ri "
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div>
        <ul className="list-none">
          {data?.reviews?.map((review, i) => (
            <div key={i} className="flex space-x-4 mt-4">
              <img
                alt=""
                src="https://source.unsplash.com/100x100/?portrait"
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {review}
                </a>
                <span className="text-xs dark:text-gray-400">4 hours ago</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
