import axios from 'axios'
import { Config } from '../util/Configs'
import toast from "react-hot-toast"

// This Hook gets complete and incomplete tasks and concats to all tasks array
export const useAll = () => {
    const fetchAll = async () => {
        try {
            const complete = axios.get('https://api.todoist.com/sync/v9/archive/items?project_id=2311672712', Config)
            const incomplete = axios.get('https://api.todoist.com/sync/v9/projects/get_data?project_id=2311672712', Config)

            const [response1, response2] = await axios.all([complete, incomplete]);
            const combinedData = [...response2.data.items, ...response1.data.items];


            return combinedData

        } catch (e) {
            console.log(e);
            toast.error('Sorry, something went wrong!')
        }
    }

    return { fetchAll }
}