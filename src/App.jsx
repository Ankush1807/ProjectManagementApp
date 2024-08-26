import { useState, useRef, useEffect } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import Modal from "./components/Modal";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  const [tasksArray, setTasksArray] = useState({});
  const [subTask, setSubTask] = useState([]);

  const [selectedProjectId, setSelectedProjectId] = useState();
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function handleAddTask(task, id) {
    // debugger;
    setTasksArray((prevTasksArray) => {
      return {
        ...prevTasksArray,
        [id]: prevTasksArray[id] ? [...prevTasksArray[id], task] : [task],
      };
    });
  }
  useEffect(() => {
    console.log("ObjectArray", tasksArray);
    if (tasksArray != null) {
      tasks = tasksArray[selectedProjectId];
      setSubTask(tasksArray[selectedProjectId]);
      console.log("TaksArray", tasks);
    }
  }, [tasksArray, selectedProject]);

  function handleDeleteTask(index) {
    debugger;
    const filteredTasks = tasksArray[selectedProjectId].filter(
      (task, i) => i !== index
    );
    setSubTask(filteredTasks);
    setTasksArray((prevTasksArray) => {
      return {
        ...prevTasksArray,
        [selectedProjectId]: filteredTasks,
      };
    });
  }

  // console.log(projects);

  function handleAdd() {
    setIsProjectSelected(false);
    setAddButtonClicked(true);

    // alert("hi")
  }
  function handleDeleteProject(id) {
    alert(id);
    const filteredProjects = projects.filter((project) => project.id != id);
    setProjects(filteredProjects);
    setIsProjectSelected(false);
  }
  function handleCancel() {
    setAddButtonClicked(false);
  }

  var foundProject = null;
  var tasks = null;

  function handleSelectedProject(id) {
    setIsProjectSelected(true);
    setSelectedProjectId(id);

    foundProject = projects.find((project) => project.id === id);
    setSelectedProject(foundProject);
  }

  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      date.current.value.trim() === ""
    ) {
      //show modal
      dialog.current.showModal();
      return;
    }

    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          title: title.current.value,
          description: description.current.value,
          date: date.current.value,
          id: projects.length + 1,
        },
      ];
    });
    setAddButtonClicked(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Modal ref={dialog}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you add value for every input.
        </p>
      </Modal>
      <SideBar
        onAdd={handleAdd}
        projectsArray={projects}
        onSelectProject={handleSelectedProject}
      />

      {isProjectSelected ? (
        <SelectedProject
          project={selectedProject}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          tasksArray={subTask}
        />
      ) : addButtonClicked ? (
        <NewProject
          onCancel={handleCancel}
          ref={[title, description, date]}
          onSave={handleSave}
        />
      ) : (
        <NoProjectSelected onAdd={handleAdd} />
      )}
    </main>
  );
}
