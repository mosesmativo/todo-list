import { Button } from "./Buttons/Button"
import { FiList, FiEyeOff, FiCheckCircle } from "react-icons/fi"



function Filter() {

    function handleFilter() {

    }
    return (

        <>
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
        </>
    )
}



export default Filter;