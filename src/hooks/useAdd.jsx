import axios from 'axios'
import { Config } from '../util/Configs'
import toast from "react-hot-toast"

export const useAdd = (title, description, dueDate) => {
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