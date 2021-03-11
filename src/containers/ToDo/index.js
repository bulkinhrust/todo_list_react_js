import { useState } from 'react';
import ToDoList from 'Components/ToDoList';

import './styles.scss';

const TASKS = [
  { id: 1, title: 'add todo list', isCompleted: true },
  { id: 2, title: 'add todo input', isCompleted: false },
  { id: 3, title: 'add todo analytic', isCompleted: false },
];

function ToDo() {
  const [tasks, changeTasks] = useState(TASKS);
  const handleChangeCompleted = (id) => {
    changeTasks(tasks.map((task) => task.id === id
      ? {...task, isCompleted: !task.isCompleted}
      : task
    ));
  };

  const handleTaskDelete = (id) => {
    changeTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='wrapper'>
      <div>input</div>
      <ToDoList tasks={tasks}
                handleChangeCompleted={handleChangeCompleted}
                handleTaskDelete={handleTaskDelete} />
      <div>analytic and clear all/done</div>
    </div>
  );
}

export default ToDo;