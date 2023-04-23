import PopTypes from 'prop-types'
import { Button } from '../Buttons/Button'

const TaskFormButtons = ({ isOpen, id, disabled }) => {

  return (
    <>
      <div className='taskForm__buttons'>
        <Button
          disabled={disabled}
          label={isOpen && id ? 'Save' : 'Add Task'}
          primary
          type='submit'
          value=''
        />
        <Button
          label="Cancel"
          onClick={() => isOpen(false)}
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
  isOpen: PopTypes.func,
}
export default TaskFormButtons;
