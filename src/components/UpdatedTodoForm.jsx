import { useState } from 'react'
import PropTypes from 'prop-types'
import { UpdateTodoItem } from '../lib/Requests'

function UpdatedTodoForm({ title, id, description }) {
    const [updateTitle, setUpdateTitle] = useState(title)
    const [updateDesc, setUpdateDesc] = useState(description)

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'title') {
            setUpdateTitle(value);
        }
        if (name === 'description') {
            setUpdateDesc(value);
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        UpdateTodoItem(id, updateDesc, updateTitle)
        console.log(id, updateTitle)
    }

    return (
        <>
            <form>
                <input name='title' onChange={handleChange} type="text" value={updateTitle} />
                <button
                    onClick={handleUpdate}
                >Update Task</button>
            </form>
        </>
    )
}
UpdatedTodoForm.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
}
export default UpdatedTodoForm;