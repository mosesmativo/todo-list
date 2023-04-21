import axios from 'axios'
import { Config } from '../util/Configs'
import toast from "react-hot-toast"

export const useUndo = (id) => {
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