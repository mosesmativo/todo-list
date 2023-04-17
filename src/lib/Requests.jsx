import axios from 'axios';
import toast from "react-hot-toast";
import { Config } from '../util/Configs';

export const GetAllItems = async (setTasks) => {
    try {
        const response = await axios.get('https://api.todoist.com/sync/v9/projects/get_data?project_id=2311383316', Config);
        setTasks(response.data);

    } catch (e) {
        console.log(e);
    }
}

export const GetCompleteTodoItems = async (setTasks) => {
    try {
        const response = await axios.get('https://api.todoist.com/sync/v9/completed/get_all', {
            headers: {
                'Authorization': `Bearer 55c63d4af64afc2b071408c43b92bfe0ffaad810`
            }
        });
        setTasks(response.data);
    } catch (error) {
        console.log(error);
    }
}

export const createTodoItems = (title, description) => {
    const data = {
        commands: JSON.stringify([
            {
                type: "item_add",
                temp_id: `${crypto.randomUUID()}`,
                uuid: `${crypto.randomUUID()}`,
                args: {
                    content: title,
                    description: description,
                    project_id: "2311383316",
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

export const UpdateTodoItem = (id, description, title) => {
    const data = {
        commands: JSON.stringify([
            {
                type: "item_update",
                uuid: `${crypto.randomUUID()}`,
                args: {
                    id: id,
                    content: title,
                    description: description,
                    project_id: "2311383316",
                }
            }
        ])
    };

    axios
        .post('https://api.todoist.com/sync/v9/sync', data, Config)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const DeleteTodoItems = (id) => {
    const data = {
        commands: JSON.stringify([
            {
                type: "project_delete",
                uuid: `${crypto.randomUUID()}`,
                args: {
                    id: id,
                }
            }
        ])
    };

    try {
        axios.delete('https://api.todoist.com/sync/v9/sync', data, Config)
        toast.success('Your Task been Deleted succesfully!.');

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }

}