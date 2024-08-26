import Button from "./Button";

export default function SideBar({ onAdd, projectsArray, onSelectProject }) {
  return (
    <aside className="bg-slate-950 text-stone-50 w-1/4 h-full rounded-r-xl text-center min-w-80 md:w-80">
      <h1 className="text-xl pt-20 pb-5 font-bold text-white-700 my-4">
        YOUR PROJECTS
      </h1>
      <Button onClick={onAdd}>+Add Project</Button>
      <ul className="mt-8 text-left">
        {projectsArray.map((project, index) => {
          return (
            <li className="mt-6 " key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className=" text-start w-full px-4 py-1 rounded-md my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
