import { getAuth, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import app from '../../firebase/firebase.config';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { setUser } from '../../redux/features/users/userSlice';
const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const handleMenuToggle = () => {
    setOpen(!open);
  };
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <nav
      className={`${
        scroll
          ? 'bg-white shadow-md text-black hover:text-black'
          : 'backdrop-brightness-100 text-black'
      }  w-full z-50 transition  duration-500`}
    >
      <div className="px-4 py-5 flex items-center justify-between ">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10" />
            <h1 className="text-red-500 font-bold font-mono text-2xl">
              Atech{' '}
            </h1>
          </div>
        </Link>

        <div>
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="relative">
              <Link to="/allBooks" className="mx-3 font-medium">
                ALL BOOKS
              </Link>
              {user?.email && (
                <Link to="/addBook" className="mx-3 font-medium">
                  ADD BOOK
                </Link>
              )}
            </div>
            <div>
              {user?.email && (
                <button
                  onClick={handleLogout}
                  className="bg-blue-950 rounded-3xl mt-[-10px] px-4 py-2 w-36 hover:bg-pink-800 text-white"
                >
                  Log Out
                </button>
              )}

              {!user?.email && (
                <Link to={'/login'}>
                  <button className="bg-blue-950 rounded-3xl mt-[-10px] px-4 py-2 w-36 hover:bg-pink-800 text-white">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className={`${
                open ? 'text-black' : 'text-black'
              } focus:outline-none hover:text-gray-400`}
            >
              {open ? <ImCross size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${open ? 'block' : 'hidden'} md:hidden text-black bg-white`}
      >
        <Link to="/allBooks" className="block my-2 font-medium text-center">
          ALL BOOKS
        </Link>
        <Link to="/addBook" className="block my-2 font-medium text-center">
          ADD BOOK
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
