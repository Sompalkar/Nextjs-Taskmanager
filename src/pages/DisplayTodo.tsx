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

  // fetching all Tasks from Local storage 

  useEffect(() => {
    let tasksData = localStorage.getItem('tasks');
    if (tasksData) {
      setTask(JSON.parse(tasksData));
    }
  }, [ ]);

  //deleting task using title 

  const deleteTodo = (title: string): void => {


    // here we will be filtering task upon title of the task 

    let newTask = tasks.filter((item) => item.title !== title);


    // after filtering it will exclude the matched Task with title and asign all remaining to local storage 
    localStorage.setItem('tasks', JSON.stringify(newTask));


    setTask(newTask);

  };

  const EditTodo = (first: string, second: string,third: string): void => {
    // Implement your EditTodo logic
  };

  return (

    <>
    <Navbar /> 

      <div className=" container  ">
        
        
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mt-10 text-gray-900">Your Tasks </h1>
          {tasks.length === 0 && (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your  Tasks  will show up here
            </p>
          )}
        </div>
        <div className="flex flex-col w-1/2 m-auto mt-10 ">
          {tasks.map((item) => (
            <div className=" w-full  p-4 m-4 rounded bg-[#eebbea]  border border-slate-100 hover:border-green-800  shadow hover:shadow-lg " key={item.title}>
              <div className=" w-full  flex flex-col  text-center"> 
                <div className=" w-full flex-row flex-wrap   ">

                         <div className='flex flex-col justify-around items-start '>
                           <h2 className="title-font font-medium text-lg text-gray-900 mb-5 border-b-2 ">{item.title}</h2>
                           <p className="mb-4  ">{item.desc}</p>
                         </div> 
                 
                         <div className='flex justify-around border-t-2 align-center text-center '> 
                         
                         <p className='m-4    min-h-10 w-1/4'> { item.status}</p> 

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
