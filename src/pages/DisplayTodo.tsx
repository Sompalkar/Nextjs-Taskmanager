import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from "./Navbar";
interface Task {
  title: string;
  desc: string;
  status: string;
}

const DisplayTodo = (): JSX.Element => {
  const [tasks, setTask] = useState<Task[]>([]);

  useEffect(() => {
    let tasksData = localStorage.getItem('tasks');
    if (tasksData) {
      setTask(JSON.parse(tasksData));
    }
  }, [ ]);

  const deleteTodo = (title: string): void => {
    let newTask = tasks.filter((item) => item.title !== title);
    localStorage.setItem('tasks', JSON.stringify(newTask));
    setTask(newTask);
  };

  const editTodo = (first: string, second: string,third: string): void => {
    // Implement your editTodo logic
  };

  return (

    <>
    <Navbar /> 

      <div className="  ">
        
        
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mt-4 text-gray-900">Your Tasks </h1>
          {tasks.length === 0 && (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your  Tasks  will show up here
            </p>
          )}
        </div>
        <div className="flex flex-col w-1/2 m-auto mt-10 ">
          {tasks.map((item) => (
            <div className=" w-full  p-4 m-4 rounded bg-[#E1F2F7]  border border-slate-100 hover:border-yellow-300  shadow hover:shadow-lg " key={item.title}>
              <div className=" w-full  flex flex-col  text-center"> 
                <div className=" w-full flex-row flex-wrap   ">

                         <div className='flex flex-col justify-around items-start '>
                           <h2 className="title-font font-medium text-lg text-gray-900 mb-5 border-b-2 ">{item.title}</h2>
                           <p className="mb-4  ">{item.desc}</p>
                         </div> 
                 
                         <div className='flex justify-around border-t-2 align-center text-center '> 
                         
                         <p className='m-4 bg-[#FB9039] border-2 min-h-10 w-1/4'> { item.status}</p> 

                           <div className='w-3/4 justify-around flex  align-middle mt-5 '> 

                            <a className="text-gray-900 cursor-pointer align-center" onClick={() => deleteTodo(item.title)}>
                            <DeleteIcon />
                           </a>
                           <a className=" ml-6 text-gray-900  cursor-pointer align-center" href={`/edit/${item.title}`}>
                              <EditIcon />
                            </a>

                            </div> 
                         </div>
                   
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </>
  );
};

export default DisplayTodo;
