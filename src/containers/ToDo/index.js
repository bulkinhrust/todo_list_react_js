import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTasks,
  addTask,
  removeTask,
  completeTask,
  clearCompletedTasks
} from 'Redux/reducers/tasks';
import { changeFilter } from 'Redux/reducers/filter';
import ToDoList from 'Components/ToDoList';
import ToDoInput from 'Components/ToDoInput';
import Footer from 'Components/Footer';
import Spinner from 'Components/Spinner';

import './styles.scss';

function ToDo() {
  const { isLoading, tasks, filter } = useSelector(({ tasks, filter}) => ({
    isLoading: tasks.isLoading,
    tasks: tasks.tasks,
    filter
  }));
  const dispatch = useDispatch();
  const [taskName, changeTaskName] = useState('');
  const [isError, changeInputError] = useState(false);

  useEffect(() => {
      dispatch(fetchTasks());
    },
    [dispatch]
  );

  const addNewTask = () => {
    if (taskName.trim().length <= 3) {
      changeInputError(true);
      return;
    }
    dispatch(addTask({
      id: (new Date()).getTime(),
      title: taskName.trim(),
      isCompleted: false,
    }));
    changeTaskName('');
  };

  const handleInputKeyPress = ({ key }) => {
    if (key === 'Enter') {
      addNewTask();
    }
    if (key !== 'Enter' && taskName.length >= 3 && isError) {
      changeInputError(false);
    }
  };

  const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  };

  return (
    <div className='wrapper'>
      <ToDoInput value={taskName}
                 isError={isError}
                 handleInputChange={changeTaskName}
                 handleInputKeyPress={handleInputKeyPress}
                 addNewTask={addNewTask} />
      {isLoading
        ? <Spinner />
        : <ToDoList tasks={filterTasks(tasks, filter)}
                    handleChangeCompleted={(id) => dispatch(completeTask(id))}
                    handleTaskDelete={(id) => dispatch(removeTask(id))} />
      }
      <Footer tasksCount={tasks.filter((t) => !t.isCompleted).length}
              filter={filter}
              changeFilter={(filter) => dispatch(changeFilter(filter))}
              clearCompletedTasks={() => dispatch(clearCompletedTasks())}/>
    </div>
  );
}

export default ToDo;