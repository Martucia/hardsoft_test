import { useForm } from "react-hook-form";
import { useAddTaskMutation } from "../hooks/useTaskQuery";
import { Button, Input } from "@chakra-ui/react";
import DoneIcon from "../shared/icons/done-icon";

const CreateTaskForm = () => {
  const {
    register,
    handleSubmit: submit,
    reset,
  } = useForm<{
    title: string;
  }>();

  const addTaskMutation = useAddTaskMutation();

  const handleSubmit = submit((data) =>
    addTaskMutation.mutate(data, {
      onSuccess() {
        reset();
      },
    })
  );

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        placeholder="Назва завдання"
        {...register("title", { required: true })}
        className="w-full p-3 rounded-xl bg-gr"
      />
      <Button
        type="submit"
        className="p-3 rounded-xl bg-blgr w-12 h-12"
      >
        <DoneIcon />
      </Button>
    </form>
  );
};

export default CreateTaskForm;
