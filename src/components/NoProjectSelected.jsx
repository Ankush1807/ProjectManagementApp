import Button from "./Button";
import Image from "../assets/no-projects.png";
export default function NoProjectSelected({ onAdd }) {
  return (
    <div className=" mt-24 text-center w-2/3">
      <img src={Image} alt="" className="h-16 w-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAdd}>Create new project</Button>
      </p>
    </div>
  );
}
