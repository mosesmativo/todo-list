import { useState } from 'react'
import PropTypes from 'prop-types';
import TaskFormButtons from './TaskFormButtons';
import { InputField } from '../Inputs/InputField';
import { createTodoItems } from '../../lib/Requests';
const TaskForm = ({ setIsTaskFormOpen, inModal, task }) => {

  const [inputTitle, setInputTitle] = useState("")
  const [inputDesc, setInputDesc] = useState("")
  const [inputDue, setInputDue] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setInputTitle(value);
    }
    if (name === 'description') {
      setInputDesc(value);
    }
    if (name === 'due') {
      setInputDue(value);
    }
  }
  const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    createTodoItems(inputTitle, inputDesc, inputDue)

    setIsTaskFormOpen(false)

    setInputTitle("")
    setInputDesc("")
    setInputDue("")
  };

  return (
    <form
      className="taskForm taskForm--inModal" data-cy='taskForm'
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
          <InputField
            autoFocus
            className='taskForm__input taskForm__description'
            data-cy='taskForm__desc'
            id='taskDue'
            label=""
            name='due'
            onChange={handleChange}
            placeholder='Sheduel'
            required
            type='date'
            value={inputDue}
          />
          {/* <TaskFormDueDate  onChange={handleChange} value={inputDue}/> */}
        </div>
      </div>
      <TaskFormButtons setIsTaskFormOpen={setIsTaskFormOpen} />
    </form>
  );
};

TaskForm.propTypes = {
  inModal: PropTypes.string,
  setIsTaskFormOpen: PropTypes.func,
  task: PropTypes.object,
}
export default TaskForm;
