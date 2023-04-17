import { useState } from 'react'
import PropTypes from 'prop-types';
// import TaskFormName from './TaskFormName';
// import TaskFormDesc from './TaskFormDesc';
import TaskFormDueDate from './TaskFormDueDate';
import TaskFormButtons from './TaskFormButtons';
import { InputField } from '../Inputs/InputField';
import { createTodoItems } from '../../lib/Requests';
const TaskForm = ({ setIsTaskFormOpen, inModal }) => {

  const [inputTitle, setInputTitle] = useState("")
  const [inputDesc, setInputDesc] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setInputTitle(value);
    }
    if (name === 'description') {
      setInputDesc(value);
    }
  }
  const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    createTodoItems(inputTitle, inputDesc)

    setInputTitle("")
    setInputDesc("")
  };

  return (
    <form
      className={`taskForm ${inModal}`}
      data-cy='taskForm'
      onSubmit={handleTaskFormSubmit}>

      <div className='taskForm__inputs'>
        {/* <TaskFormName /> */}
        <InputField
          autoFocus
          className='taskForm__input taskForm__name'
          data-cy='taskForm__name'
          id='taskName'
          label="Task Name"
          name='name'
          onChange={handleChange}
          placeholder='Task name'
          required
          type='text'
          value={inputTitle}
        />
        <InputField
          autoFocus
          className='taskForm__input taskForm__description'
          data-cy='taskForm__desc'
          id='taskDesc'
          label="Comments Here"
          name='description'
          onChange={handleChange}
          placeholder='Description'
          required
          type='textarea'
          value={inputDesc}
        />

        <div className='task__selects'>
          <TaskFormDueDate />
        </div>
      </div>
      <TaskFormButtons setIsTaskFormOpen={setIsTaskFormOpen} />
    </form>
  );
};

TaskForm.propTypes = {
  inModal: PropTypes.bool,
  setIsTaskFormOpen: PropTypes.func
}
export default TaskForm;
