import List from "./components/List";
import { useTaskQuery } from "./hooks/useTaskQuery";
import CreateTaskForm from "./components/CreateTaskForm";
import { Spinner } from "@chakra-ui/react";

function App() {
  const { data, isLoading, isSuccess } = useTaskQuery();

  const stages = ["new", "inProgress", "done"];

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner
          thickness="4px"
          speed="0.5s"
          emptyColor="gray.200"
          color="gray.400"
          size="xl"
        />
      </div>
    );

  const getTitleByStage = (stage: string): string => {
    switch (stage) {
      case "new":
        return "Очікує виконання";
      case "inProgress":
        return "В процесі";
      case "done":
        return "Виконані";
      default:
        return "";
    }
  };

  if (data && isSuccess) return (
    <div className="max-w-[90%] mx-auto w-[1200px] py-10">
      <CreateTaskForm />
      {stages.map((stage) => {
        const tasks = data.filter((task) => task.stage === stage) || [];

        return (
          <List key={stage} title={getTitleByStage(stage)} tasks={tasks} />
        );
      })}
    </div>
  );
}

export default App;
