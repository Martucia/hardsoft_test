import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createTask,
  fetchTasks,
  removeTask,
  updateTask,
} from "../actions/tasks";
import { TaskType } from "../common/types";

const useTaskQuery = () => {
  const toast = useToast();

  return useQuery({
    queryFn: () => fetchTasks(),
    queryKey: ["tasks"],
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "bottom-left",
        });
      }
    },
  });
};

const useAddTaskMutation = () => {
  const toast = useToast();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTask,
    async onSettled(data) {
      if (data) {
        await queryClient.invalidateQueries({
          queryKey: ["tasks"],
        });
      }
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "bottom-left",
        });
      }
    },
  });
};

const useUpdateTaskMutation = () => {
  const toast = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess(data) {
      queryClient.setQueriesData(["tasks"], (prevData: any) => {
        const updatedData = prevData.map((task: TaskType) =>
          task.id == data.id ? data : task
        );

        return updatedData;
      });
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "bottom-left",
        });
      }
    },
  });
};

const useRemoveTaskMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeTask,
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "bottom-left",
        });
      }
    },
  });
};

export {
  useTaskQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
  useUpdateTaskMutation,
};
