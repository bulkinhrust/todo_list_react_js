import ToDoItem from '../ToDoItem';
import PropTypes from 'prop-types';

import './styles.scss';

const ToDoList = ({ tasks, handleChangeCompleted, handleTaskDelete }) => {
  return (
    <div className='todo__list'>
      {
        tasks.map((task) => (
          <ToDoItem key={task.id}
                    handleChangeCompleted={handleChangeCompleted}
                    handleTaskDelete={handleTaskDelete}
                    {...task} />
        ))
      }
    </div>
  )
};

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  handleChangeCompleted: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  tasks: [],
};

export default ToDoList;