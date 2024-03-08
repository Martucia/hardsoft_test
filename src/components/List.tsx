import { TaskType } from "../common/types";
import Task from "./Task";

const List = ({ title, tasks }: { title: string; tasks: TaskType[] }) => {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <h3 className="text-xl pb-4 font-bold">{title}</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <div className="text-xl text-whgr">Список пустий</div>
      )}
    </div>
  );
};

export default List;
