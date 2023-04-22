import axios from 'axios'
import { Config } from '../util/Configs'
import toast from "react-hot-toast"

export const useClose = (id) => {
    const data = 'commands=' + encodeURIComponent(JSON.stringify([
        {
            type: 'item_close',
            uuid: `${crypto.randomUUID()}`,
            args: { id: id }
        }
    ]));

    try {
        axios.post('https://api.todoist.com/sync/v9/sync', data, Config, { withCredentials: true })
        toast('Task has been closed succesfully!',
            {
                icon: '👏👏',
                style: {
                    borderRadius: '10px',
                    background: '#87A96B',
                    fontWeight: 'bold',
                    color: '#fff',
                },
            }
        )

    } catch (e) {
        console.log(e);
        toast.error('Sorry something went wrong!');
    }
}