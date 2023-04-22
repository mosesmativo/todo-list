import { useState, useEffect } from 'react'
import axios from 'axios'
import { Config } from '../util/Configs'

export function useIncomplete() {
    const [inCompletedItems, setInCompletedItems] = useState([]);

    useEffect(() => {
        async function fetchCompletedItems() {
            try {
                const response = await axios.get('https://api.todoist.com/sync/v9/projects/get_data?project_id=2311672712', Config);

                setInCompletedItems(response.data.items);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCompletedItems();
    }, []);

    return inCompletedItems;
}
