import axios from 'axios';
import toast from "react-hot-toast";
import { Config } from '../util/Configs';


export const getIncompleteItems = async (setTasks) => {
    try {
        const response = await axios.get('https://api.todoist.com/sync/v9/projects/get_data?project_id=2311672712', Config);

        setTasks(response.data);


    } catch (e) {
        console.log(e);
    }
}

export const getCompleteItems = async (setTasks) => {
    try {
        const response = await axios.get('https://api.todoist.com/sync/v9/archive/items?project_id=2311672712', Config)
        setTasks(response.data)
    } catch (error) {
        console.log(error)
    }
}

export const createTodoItems = (title, description, dueDate) => {
    const due = {
        date: dueDate,
    }
    const data = {
        commands: JSON.stringify([
            {
                type: "item_add",
                temp_id: `${crypto.randomUUID()}`,
                uuid: `${crypto.randomUUID()}`,
                args: {
                    content: title,
                    description: description,
                    due: due,
                    project_id: "2311672712",
                }
            }
        ])
    };

    try {
        axios.post('https://api.todoist.com/sync/v9/sync', data, Config)
        toast.success('Your Task been added succesfully!.');

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }

}

export const UpdateTodoItem = (id, description, title, dueDate) => {
    const due = {
        date: dueDate,
    }
    const data = {
        commands: JSON.stringify([
            {
                type: "item_update",
                uuid: `${crypto.randomUUID()}`,
                args: {
                    id: id,
                    content: title,
                    due: due,
                    description: description,
                    project_id: "2311672712",
                }
            }
        ])
    };

    try {
        axios.post('https://api.todoist.com/sync/v9/sync', data, Config, { withCredentials: true })
        toast('Good Job! Keep Going', {
            icon: '👏👏',
        });

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }
}


export const DeleteTodoItems = (id) => {
    const data = 'commands=' + encodeURIComponent(JSON.stringify([
        {
            type: 'item_delete',
            uuid: `${crypto.randomUUID()}`,
            args: {
                id: id,
            }
        }
    ]));

    try {
        axios.post('https://api.todoist.com/sync/v9/sync', data, Config, { withCredentials: true })
        toast.success('Your Task been Deleted succesfully!.');

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }

}

export const CloseTodo = (id) => {
    const data = 'commands=' + encodeURIComponent(JSON.stringify([
        {
            type: 'item_close',
            uuid: `${crypto.randomUUID()}`,
            args: { id: id }
        }
    ]));

    try {
        axios.post('https://api.todoist.com/sync/v9/sync', data, Config, { withCredentials: true })
        toast.success('Your Task been Closed succesfully!.');

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }
}

export const UnDoCloseTodo = (id) => {
    const data = 'commands=' + encodeURIComponent(JSON.stringify([
        {
            type: "item_uncomplete",
            uuid: `${crypto.randomUUID()}`,
            args: {
                id: id,
            },
        }
    ]));

    try {
        axios.post('https://todoist.com/API/v9.0/sync', data, Config, { withCredentials: true })
        toast('Task succesfully Undone!',
            {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: 'black',
                    color: '#fff',
                },
            }
        )

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }
}