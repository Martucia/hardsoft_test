export type StageType = "new" | "inProgress" | "done";

export type TaskType = {
  id: number;
  title: string;
  stage: StageType;
};

export type CreateTaskType = {
  title: string;
};

export type UpdateTaskType = {
  title?: string;
  stage?: StageType;
};