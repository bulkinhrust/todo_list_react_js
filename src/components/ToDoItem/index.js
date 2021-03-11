import './styles.scss';
import PropTypes from 'prop-types';

const ToDoItem = ({ id, title, isCompleted, handleChangeCompleted, handleTaskDelete }) => {
  return (
    <div className='todo__list__item'>
      <div className='todo__list__item__check' onClick={() => handleChangeCompleted(id)}>
        {isCompleted && <i className={'fas fa-check'} />}
      </div>
      <div className='todo__list__item__text'>
        <span className={isCompleted ? 'completed text' : 'text'}>{title}</span>
      </div>
      <i className="fas fa-times todo__list__item__del" onClick={() => handleTaskDelete(id)}/>
    </div>
  );
};

ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  handleChangeCompleted: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default ToDoItem;