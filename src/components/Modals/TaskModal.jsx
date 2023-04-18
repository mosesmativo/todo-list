import { useState } from 'react'
import PropTypes from 'prop-types'
import TaskFormButtons from '../TaskForm/TaskFormButtons';
import { InputField } from '../Inputs/InputField';

const TaskModal = ({ isOpen, onCreate, onEdit, taskToEdit }) => {

  const [inputTitle, setInputTitle] = useState("")
  const [inputDesc, setInputDesc] = useState("")
  const [inputDue, setInputDue] = useState("")

  // If we are editing an existing task, populate the fields with its data
  if (onEdit) {
    const { name, description, } = taskToEdit;
    if (inputTitle === "" && inputDesc === "" && inputDue === "") {
      setInputTitle(name);
      setInputDesc(description);
      setInputDue(inputDue)
    }
  }

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

    if (onEdit) {
      onEdit(inputTitle, inputDesc, inputDue)
    } else {
      onCreate(inputTitle, inputDesc, inputDue)
    }

    isOpen(false)

    setInputTitle("")
    setInputDesc("")
    setInputDue("")
  };

  return (
    <>
      {isOpen && (<div className='modal__bgOverlay'>
        <div className='modal__formContainer'>
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
            <TaskFormButtons id={taskToEdit} setIsTaskFormOpen={isOpen} />
          </form>
        </div>
      </div>)}
    </>

  );
};

TaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onCreate: PropTypes.func,
  onEdit: PropTypes.func,
  task: PropTypes.object,
  taskToEdit: PropTypes.object,
}

export default TaskModal;
