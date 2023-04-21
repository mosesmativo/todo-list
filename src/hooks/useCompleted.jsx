import { useState, useEffect } from 'react'
import axios from 'axios'
import { Config } from '../util/Configs'

export function useCompleted() {
    const [completedItems, setCompletedItems] = useState([]);

    useEffect(() => {
        async function fetchCompletedItems() {
            try {
                const response = await axios.get('https://api.todoist.com/sync/v9/archive/items?project_id=2311672712', Config);

                setCompletedItems(response.data.items);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCompletedItems();
    }, [completedItems]);

    return completedItems;
}
