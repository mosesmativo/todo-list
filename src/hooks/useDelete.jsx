import axios from 'axios'
import { Config } from '../util/Configs'
import toast from "react-hot-toast"

export const useDelete = (id) => {
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
