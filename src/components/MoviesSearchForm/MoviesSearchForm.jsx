const MoviesSearchForm = ({ queryString, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchValue" defaultValue={queryString ?? ''} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesSearchForm;
