import ToDoItem from '../ToDoItem';
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

export default ToDoList;