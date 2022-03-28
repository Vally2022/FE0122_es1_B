import { Task } from "./models/task";

export async function getTasks(): Promise<Task[]> {
  return await (await fetch('assets/db.json')).json();
}