import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../Navbar";
interface Task {
  title: string;
  desc: string;
  status:string;
}
 

const Edit = ( ) => {
  
  const router = useRouter()
  const { title } = router.query

  const [task, setTask] = useState<Task>({ title: '', desc: '',status:'' });

  const updateTask = () => {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      let tasksJSON: Task[] = JSON.parse(tasks);
      if (tasksJSON.filter(value => value.title === title).length > 0) {
        let index = tasksJSON.findIndex(value => value.title === title);
        tasksJSON[index].title = task.title;
        tasksJSON[index].desc = task.desc; 
        tasksJSON[index].status = task.status; 
        localStorage.setItem('tasks', JSON.stringify(tasksJSON));
        alert('Task has been updated');
      } else {
        alert('Task does not exist');
      }
    } else {
      localStorage.setItem('tasks', JSON.stringify([task]));
    }
  };

  useEffect(() => {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      let tasksJSON: Task[] = JSON.parse(tasks);
      let ftodo = tasksJSON.filter(e => title == e.title);
      console.log(ftodo);
      if (ftodo.length > 0) {
        setTask(ftodo[0]);
      }
    }
  }, [router?.isReady]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(task);
  };

  return (
    <>


       <Navbar />
       
    <div className="my-2 text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Update a Task</h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                Task Title
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
                Task Text
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
              onClick={updateTask}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-indigo-600 rounded text-lg"
            >
              Update Task
            </button>
            <p className="text-xs text-gray-500 mt-3">The best task list app out there!</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Edit;
