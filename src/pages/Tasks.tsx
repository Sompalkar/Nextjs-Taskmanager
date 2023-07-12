import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import Navbar from './Navbar';

export default function Home(): JSX.Element {
  const [task, setTask] = useState<{ title: string; desc: string }>({ title: '', desc: '' });

  const addTodo = () => {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      let tasksJSON = JSON.parse(tasks);
      if (tasksJSON.filter((value: { title: string; }) => value.title === task.title).length > 0) {
        alert('Task with this title already exists');
      } else {
        tasksJSON.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasksJSON));
        alert('Task has been added');
        setTask({ title: '', desc: '' });
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
       <Navbar/>
    
    <div className="my-2 text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add a Todo</h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                Todo Title
              </label>
              <input
                onChange={onChange}
                value={task.title}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">
                Todo Text
              </label>
              <input
                onChange={onChange}
                value={task.desc}
                type="text"
                id="desc"
                name="desc"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={addTodo}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-indigo-600 rounded text-lg"
            >
              Add Todo
            </button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
