export interface User {
  id: string;
  avatar: string;
  name: string;
}

export interface Task {
  id: string;
  title: string;
  userId: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string
}
