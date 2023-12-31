import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { usePostBookMutation } from '../../redux/features/bookCatalog/booksApi';

interface BookFormProps {
  onSubmit: (bookData: BookData) => void;
}

interface BookData {
  imgUrl: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
}

const AddBook: React.FC<BookFormProps> = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorImg, setAuthorImg] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState(new Date());
  const navigate = useNavigate();
  const [savedBook, { isError, isLoading, isSuccess }] = usePostBookMutation();
  console.log(isError, isLoading, isSuccess);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const author = {
      name: authorName,
      img: authorImg,
    };
    const bookData = {
      imgUrl,
      title,
      author,
      genre,
      publicationDate,
    };
    savedBook(bookData);
    toast.success('book added successfully');
    navigate('/allBooks');
    handelReset();
  };
  const handelReset = () => {
    setAuthorName(''),
      setAuthorImg(''),
      setGenre(''),
      setImgUrl(''),
      setTitle('');
  };
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="imgUrl">
          Image URL:
        </label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          value={imgUrl}
          onChange={event => setImgUrl(event.target.value)}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 border focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="author">
          Author Name:
        </label>
        <input
          type="text"
          id="author"
          name="author name"
          value={authorName}
          onChange={event => setAuthorName(event.target.value)}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 border focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="author">
          Author Image:
        </label>
        <input
          type="text"
          id="author Image"
          name="author Image"
          value={authorImg}
          onChange={event => setAuthorImg(event.target.value)}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 border focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="genre">
          Genre:
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={event => setGenre(event.target.value)}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 border focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="publicationDate">
          Publication Date:
        </label>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          value={publicationDate.toISOString().split('T')[0]}
          onChange={event => setPublicationDate(new Date(event.target.value))}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 border focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 border bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBook;
