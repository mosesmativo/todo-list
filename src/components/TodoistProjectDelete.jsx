import axios from 'axios';

export function TodoistProjectDelete() {
  const handleDeleteProject = async () => {
    try {
      const response = await axios.delete('https://api.todoist.com/sync/v9/sync', {
        commands: [{
          type: 'project_delete',
          args: {
            id: 6793938654
          }
        }]
      }, {
        headers: {
          'Authorization': 'Bearer 55c63d4af64afc2b071408c43b92bfe0ffaad810'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete a Todoist Project: 6793938654</h2>
      <button onClick={handleDeleteProject}>Delete Project</button>
    </div>
  );
}
