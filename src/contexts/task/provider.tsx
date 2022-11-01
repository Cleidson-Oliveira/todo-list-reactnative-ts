import { ReactNode, useEffect, useState } from "react";
import { TaskContext } from "./context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from "../../components/taskItem";

interface TasksProviderProps {
    children: ReactNode
}

export const TasksProvider = ({children}: TasksProviderProps) => {
	const [ tasks, setTasks ] = useState([] as ITask[]);

	const [ completedTasksAmount, setCompletedTasksAmount ] = useState(0);

	const createTask = (description: string) => {
		const newTask = {
            id: uuidv4(),
			description,
			isCompleted: false
		};

		setTasks(prevState => [...prevState, newTask]);
		saveTasksOnStorage([...tasks, newTask]);
	};

	const setTaskAsCompleted = (id: string) => {
		let updatedTask = tasks;
		updatedTask = updatedTask.map((task) => (
			task.id === id ? {...task, isCompleted: !task.isCompleted} : task
		));
		setTasks(updatedTask);
		saveTasksOnStorage(updatedTask);
	};

	const deleteTask = (id: string) => {
		let updatedTasks = tasks;

		updatedTasks = updatedTasks.filter(task => (
			task.id !== id
		));

		setTasks(updatedTasks);
		saveTasksOnStorage(updatedTasks);
	};

	const saveTasksOnStorage = (tasks: ITask[]) => {
		AsyncStorage.setItem("@todo", JSON.stringify(tasks));
	};

	const getStoredTasks = async () => {
		const tasks = JSON.parse(await AsyncStorage.getItem("@todo") as string);
		if ( tasks ) {
			setTasks(tasks);
		}
	};

	useEffect(() => {
		getStoredTasks();
	}, []);

	useEffect(() => {
		const completedtasks = tasks.reduce((acumulator, task) => (
			task.isCompleted ? acumulator + 1 : acumulator
		), 0);

		setCompletedTasksAmount(completedtasks);
	}, [tasks]);

	return (
		<TaskContext.Provider value={{tasks, completedTasksAmount, createTask, setTaskAsCompleted, deleteTask}}>
			{children}
		</TaskContext.Provider>
	);
};