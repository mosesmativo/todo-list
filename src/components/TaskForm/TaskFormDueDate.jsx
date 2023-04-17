
const TaskFormDueDate = () => {
  const { taskForm, setTaskForm } = () => { };

  return (
    <input
      className='taskForm__select'
      onChange={(e) => {
        setTaskForm({ ...taskForm, dueDate: e.target.value });
      }}
      placeholder='Schedule'
      type='date'
      value={taskForm}
    />
  );
};

export default TaskFormDueDate;
