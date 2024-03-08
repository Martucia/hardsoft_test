import { StageType, TaskType } from "../common/types";
import TrashIcon from "../shared/icons/trash-icon";
import {
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} from "../hooks/useTaskQuery";

const Task = ({ task }: { task: TaskType }) => {
  const removeTaskMutation = useRemoveTaskMutation();

  const handleRemove = () => removeTaskMutation.mutate(task.id);

  const updateTaskMutation = useUpdateTaskMutation();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stage: StageType = e.target.value as StageType;
    updateTaskMutation.mutate({ id: task.id, data: { stage } });
  };

  return (
    <div className="rounded-xl bg-gr text-white py-4 px-3 sm:px-6 flex justify-between items-start gap-4 flex-col-reverse sm:flex-row">
      <span className="pl-2 sm:pl-0 line leading-8">{task.title}</span>

      <div className="flex gap-6 items-center justify-between sm:justify-start w-full sm:w-max">
        <select
          value={task.stage}
          onChange={handleSelectChange}
          className="bg-blgr border border-blgr text-sm rounded-lg block py-1 px-2 w-max"
        >
          <option value="new">Очікує виконання</option>
          <option value="inProgress">В процесі</option>
          <option value="done">Виконаний</option>
        </select>
        <button onClick={handleRemove} className="text-red-700 text-xl">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default Task;
