const Dropdown = ({ setGenre, genre }) => {
  return (
    <div>
      <form className="flex">
        <label className="block ">
          <select
            className="h-8 rounded-lg pe-10 text-sm placeholder-gray-300 focus:z-10 border-spacing-1 border text-black"
            value={genre}
            onChange={event => setGenre(event.target.value)}
          >
            <option value="Fiction">Fiction</option>
            <option value="Thriller">Thriller</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="History">History</option>
            <option value="Dictionary">Dictionary</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Dropdown;
