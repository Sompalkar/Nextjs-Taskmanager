import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../Navbar";
interface task {
  title: string;
  desc: string;
}

const Edit = () => {
  const router = useRouter();
  const { title } = router.query;

  const [task, setTask] = useState<task>({ title: '', desc: ''});

  

  const updateTask = () => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      let tasksJson: task[] = JSON.parse(tasks);
      if (tasksJson.filter(value => value.title === title).length > 0) {
        let index = tasksJson.findIndex(value => value.title === title);
        tasksJson[index].title = task.title;
        tasksJson[index].desc = task.desc;
        localStorage.setItem("tasks", JSON.stringify(tasksJson));
        alert("task has been updated");
      } else {
        alert("task does not exist");
      }
    } else {
      localStorage.setItem("tasks", JSON.stringify([task]));
    }
  };
  










  useEffect(() => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      let tasksJson: task[] = JSON.parse(tasks);
      let ftask = tasksJson.filter(e => title == e.title);
      console.log(ftask);
      if (ftask.length > 0) {
        setTask(ftask[0]);
      }
    }
  }, [router.isReady]);


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
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Update a task</h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                task Title
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
                task Text
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
              onClick={updateTask}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-indigo-600 rounded text-lg"
            >
              Update task
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
