import PropTypes from 'prop-types';
import { Button, StyledForm } from './MoviesSearchForm.styled';

const MoviesSearchForm = ({ queryString, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input type="text" name="searchValue" defaultValue={queryString ?? ''} />
      <Button type="submit">Search</Button>
    </StyledForm>
  );
};

export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  queryString: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
