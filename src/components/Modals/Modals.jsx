import TaskModal from './TaskModal';

const Modals = (isTaskModalOpen) => {
  return (
    <>
      {isTaskModalOpen && <TaskModal />}
    </>
  );
};

export default Modals;
