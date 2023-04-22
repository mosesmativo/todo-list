import PopTypes from 'prop-types'
import { Button } from '../Buttons/Button'

const TaskFormButtons = ({ setIsTaskFormOpen, id, disabled }) => {

  return (
    <>
      <div className='taskForm__buttons'>
        <Button
          disabled={disabled}
          label={setIsTaskFormOpen && id ? 'Save' : 'Add Task'}
          primary
          type='submit'
          value=''
        />
        <Button
          label="Cancel"
          onClick={() => setIsTaskFormOpen(false)}
          type='button'
          value=''
        />
      </div>
    </>
  )
}

TaskFormButtons.propTypes = {
  id: PopTypes.string,
  disabled: PopTypes.bool,
  setIsTaskFormOpen: PopTypes.func,
}
export default TaskFormButtons;
