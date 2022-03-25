import React, { useState } from 'react';
import { FunctionComponent } from 'react';

const Tasks: FunctionComponent<any> = ({ tasks }) => {
  const [list, setTasks] = useState(tasks);
  return (
    <>
      {list.map((task: any) => {
        return (
          <>
            <div
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              key={task.id}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0"></div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {task.day}
                  </div>

                  <p className="mt-2 text-gray-500">{task.text}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Tasks;
