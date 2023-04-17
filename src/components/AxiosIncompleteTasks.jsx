import { useState, useEffect } from 'react'
import { GetCompleteTodoItems } from '../lib/Requests'
import Task from './Task/Task';


const AxiosIncompleteTasks = () => {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        GetCompleteTodoItems(setTasks);
    }, []);

    const CompleteTaskresult = tasks.items;
    console.log(CompleteTaskresult);

    return (
        <>

            <div>
                <ol>
                    <h1>Completed Tasks:</h1>
                    {CompleteTaskresult && CompleteTaskresult.length > 0 && CompleteTaskresult.map(item => (
                        <Task key={item.id} task={item} />
                    ))}
                </ol>
            </div>
        </>
    )
}

export default AxiosIncompleteTasks