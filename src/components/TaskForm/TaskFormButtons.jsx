import PopTypes from 'prop-types'
import { Button } from '../Buttons/Button'
const TaskFormButtons = ({ setIsTaskFormOpen, id }) => {

  return (
    <>

      <div className='taskForm__buttons'>
        <Button
          label={setIsTaskFormOpen && id ? 'Save' : 'Add Task'}
          primary
          type='submit'
          value=''
        />
        <Button
          label="Cancel"
          onClick={() => setIsTaskFormOpen(false)}
          type='submit'
          value=''
        />
      </div>
    </>
  );
};

TaskFormButtons.propTypes = {
  id: PopTypes.string,
  setIsTaskFormOpen: PopTypes.func,
}
export default TaskFormButtons;
