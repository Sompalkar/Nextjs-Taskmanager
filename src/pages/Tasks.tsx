import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import Navbar from './Navbar';
import AddIcon from '@mui/icons-material/Add';

export default function Home(): JSX.Element {
  const [task, setTask] = useState<{ title: string; desc: string; status: string }>({
    title: '',
    desc: '',
    status: '',
  });

  const addTodo = () => {
    if ( task.title.trim() === '') {
      alert('Please fill  title  field');
      return;
    }

    if ( task.desc.trim() === '') {
      alert('Please fill Description  field');
      return;
    }

    if ( task.status !=='Todo' && task.status !=='InProgress' && task.status !=='Completed'  ) {
      alert('Status field Should be Appropriate');
      return;
    } 
    

    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      let tasksJSON = JSON.parse(tasks);
      if (tasksJSON.filter((value: { title: string }) => value.title === task.title).length > 0) {
        alert('Task with this title already exists');
      } else {
        tasksJSON.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasksJSON));
        alert('Task has been added');
        setTask({ title: '', desc: '', status: '' });
      }
    } else {
      localStorage.setItem('tasks', JSON.stringify([task]));
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <div className="container bg-white px-5 py-24 h-full mx-auto flex flex-wrap items-center">
        <div className="bg-[#5EBEC4] rounded-lg p-8 flex flex-col m-auto w-1/2 mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 border-b-2">Add a Task</h2>

          <div className="relative mb-4">
            <label htmlFor="title" className="leading-7 text-sm text-gray-800">
              Task Title
            </label>
            <input
              placeholder="Title"
              onChange={onChange}
              value={task.title}
              type="text"
              id="title"
              name="title"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="desc" className="leading-7 text-sm text-gray-800">
              Task Description
            </label>
            <input
              placeholder="Description"
              onChange={onChange}
              value={task.desc}
              type="text"
              id="desc"
              name="desc"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="status" className="leading-7 text-sm text-gray-800">
              Task Status
            </label>
            <input
              placeholder="Todo | InProgress | Completed"
              onChange={onChange}
              value={task.status}
              type="text"
              id="status"
              name="status"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <button
            onClick={addTodo}
            className="text-white bg-[#BD1E51] border-0 py-2 px-8 focus:outline-none w-fit hover:bg-indigo-600 rounded text-lg"
          >
            Add Task <AddIcon className="align-center ml-5" />
          </button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </>
  );
}
