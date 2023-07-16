import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AllBook from '../components/AllBook/AllBook';
import BookDetails from '../components/bookDetails/BookDetails';
import AddBook from '../components/booksData/AddBooks';
import EditBook from '../components/booksData/EditBook';
import Error from '../components/sheared/Error';
import Login from '../components/sheared/auth/Login';
import Register from '../components/sheared/auth/Register';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/allBooks',
        element: <AllBook />,
      },
      {
        path: '/addBook',
        element: <AddBook />,
      },
      {
        path: '/:id',
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
      {
        path: '/editBook/:id',
        element: <EditBook />,
      },
    ],
  },
]);
export default router;
