import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

import './styles.scss';

function ToDo(
  {
    tasks, filter, fetchTasks,
    addTask, removeTask, completeTask, clearCompletedTasks, changeFilter
  }
) {
  const [taskName, changeTaskName] = useState('');
  const [isError, changeInputError] = useState(false);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(tasks => fetchTasks(tasks))
        .catch((e) => console.error(e))
    },
    []
  );

  const addNewTask = () => {
    if (taskName.trim().length <= 3) {
      changeInputError(true);
      return;
    }
    addTask({
      id: (new Date()).getTime(),
      title: taskName.trim(),
      isCompleted: false,
    });
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
      <ToDoList tasks={filterTasks(tasks, filter)}
                handleChangeCompleted={completeTask}
                handleTaskDelete={removeTask} />
      <Footer tasksCount={tasks.filter((t) => !t.isCompleted).length}
              filter={filter}
              changeFilter={changeFilter}
              clearCompletedTasks={clearCompletedTasks}/>
    </div>
  );
}

export default connect(
  ({ tasks, filter }) => ({
    tasks,
    filter
  }),
  {
    fetchTasks,
    addTask,
    removeTask,
    completeTask,
    clearCompletedTasks,
    changeFilter
  }
)(ToDo);