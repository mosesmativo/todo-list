
import ProjectForm from '../ProjectForm/ProjectForm'

function EditModal() {

  return (
    <div className='modal__bgOverlay' ref={null}>
      <div className='modal__formContainer'>
        <ProjectForm />
      </div>
    </div>
  );
}

export default EditModal;
