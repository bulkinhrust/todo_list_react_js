import PropTypes from 'prop-types';

import './styles.scss';

const Index = ({ value = '', isError, handleInputChange, handleInputKeyPress, addNewTask }) => {
  return (<div className={`todo__input ${isError ? 'error' : ''}`}>
    <input value={value}
           onChange={({ target: { value }}) => handleInputChange(value)}
           onKeyPress={handleInputKeyPress}/>
    <button onClick={addNewTask}>Add</button>
    {isError && <span className='error__message'>Task name must be longer than 3 characters</span>}
  </div>)
};

Index.propTypes = {
  value: PropTypes.string,
  isError: PropTypes.bool,
  handleInputChange: PropTypes.func.isRequired,
  handleInputKeyPress: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
};

export default Index;