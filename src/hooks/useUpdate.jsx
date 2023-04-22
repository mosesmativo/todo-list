import axios from 'axios'
import { Config } from '../util/Configs'
import toast from "react-hot-toast"

export const useUpdate = (id, description, title, dueDate) => {
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
            style: {
                fontWeight: 'bold',
            }
        })
    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }
}