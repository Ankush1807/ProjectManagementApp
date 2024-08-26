import { forwardRef } from "react";
import Input from "./Input";

const newProject = forwardRef(function NewProject({ onCancel, onSave }, ref) {
  return (
    <>
      <div className="w-[35rem] mt-[6rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={onSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={ref[0]} type="text" />
          <Input label="Description" textarea ref={ref[1]} />
          <Input label="Due Date" type="date" ref={ref[2]} />
        </div>
      </div>
    </>
  );
});
export default newProject;
