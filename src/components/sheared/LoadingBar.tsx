const LoadingBar = () => {
  return (
    <div className=" mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
        <div className="h-48 rounded-t dark:bg-gray-200"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-200">
          <div className="w-full h-6 rounded dark:bg-gray-100"></div>
          <div className="w-full h-6 rounded dark:bg-gray-100"></div>
          <div className="w-3/4 h-6 rounded dark:bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
