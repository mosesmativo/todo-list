import { useState } from "react"
import PropTypes from 'prop-types'
import { Button } from "./Buttons/Button"
import { FiList, FiEyeOff, FiCheckCircle } from "react-icons/fi"
import { useCompleted } from "../hooks/useCompleted"
import { useIncomplete } from "../hooks/useIncomplete"


function Filter() {
    const [allItems, setAllItems] = useState([])

    const completeItems = useCompleted()
    const inCompleteItems = useIncomplete()

    function handleFilter() {

    }
    return (
        // Filter Buttons (All Complete and Incomplete Tasks)
        <>
            {/* <pre>
                {JSON.stringify(completeItems, null, 2)}
                {JSON.stringify(inCompleteItems, null, 2)}
            </pre> */}
            <div className="filter-holder">
                <Button
                    label="All"
                    onClick={() => handleFilter('allItems')}
                    primary>
                    <FiList />
                </Button>
                <Button
                    label="Commplete"
                    onClick={() => handleFilter('complete')}
                    primary
                ><FiCheckCircle /></Button>
                <Button
                    label="Incommplete"
                    onClick={() => handleFilter('incomplete')}
                    primary>
                    <FiEyeOff />
                </Button>
            </div>
            .
        </>
    )
}

Filter.propTypes = {
    type: PropTypes.oneOf(['allItems', 'complete', 'incomplete'])
}

export default Filter;