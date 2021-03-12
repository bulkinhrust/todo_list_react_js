import { useState } from 'react';
import ToDoList from 'Components/ToDoList';
import ToDoInput from 'Components/ToDoInput';

import './styles.scss';

const TASKS = [
  { id: 1, title: 'add todo list', isCompleted: true },
  { id: 2, title: 'add todo input', isCompleted: false },
  { id: 3, title: 'add todo analytic', isCompleted: false },
];

function ToDo() {
  const [tasks, changeTasks] = useState(TASKS);
  const [taskName, changeTaskName] = useState('');
  const [isError, changeInputError] = useState(false);
  const handleChangeCompleted = (id) => {
    changeTasks(tasks.map((task) => task.id === id
      ? {...task, isCompleted: !task.isCompleted}
      : task
    ));
  };

  const handleTaskDelete = (id) => {
    changeTasks(tasks.filter((task) => task.id !== id));
  };

  const addNewTask = () => {
    if (taskName.length <= 3) {
      changeInputError(true);
      return;
    }
    changeTasks(tasks.concat({
      id: (new Date()).getTime(),
      title: taskName,
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

  return (
    <div className='wrapper'>
      <ToDoInput value={taskName}
                 isError={isError}
                 handleInputChange={changeTaskName}
                 handleInputKeyPress={handleInputKeyPress}
                 addNewTask={addNewTask} />
      <ToDoList tasks={tasks}
                handleChangeCompleted={handleChangeCompleted}
                handleTaskDelete={handleTaskDelete} />
      <div>analytic and clear all/done</div>
    </div>
  );
}

export default ToDo;