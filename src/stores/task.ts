import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
	
	type Tasks  = {
		id:number,
		content:string,
		status: boolean,
		time: string,
	};
	
	const tasks = ref<Tasks[]>((JSON.parse(localStorage.getItem('tasks') || '[]')));
	const toggleToAdd = ref(false);
	const toggleToEddit = ref(false);
	
	const toggleTasksView = reactive({
		all: true,
		completed: false,
		uncompleted: false,
	});
	
	const taskContent = ref('');
	const editedTaskContent = ref('');
	const currentEditingTaskId = ref<number | null>(null);
	const isCompleted = ref(false);

	let nextId = tasks.value.length > 0 ? Math.max(...tasks.value.map(task => task.id)) + 1 : 1;

	const getFormattedTime = (): string => {
		const date = new Date();
		return `${date.getFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}`;
	};
	
	const handleContent = (event: Event) => {
		taskContent.value = (event.target as HTMLInputElement).value
	};
	const handleEditContent = (event:Event) => {
		editedTaskContent.value = (event.target as HTMLInputElement).value
	};
	
	const addTask = () => {
		const newTask: Tasks = {
			id: nextId,
			content: taskContent.value.trim(),
			status: isCompleted.value,
			time: getFormattedTime(),
		};
	
		if (taskContent.value.length <= 4) {
			alert(" You need to type at least 5 characters");
		} else {
			tasks.value.push(newTask);
			nextId++;
			toggleToAdd.value = false;
		}
	}
	
	const deleteTask = (id:number) => {
		const index = tasks.value.findIndex(task => task.id === id);
		if (index !== -1) {
			tasks.value.splice(index, 1)
		}
	};
	
	const editTask =(id:number) =>{
		const taskIndex = tasks.value.findIndex(task => task.id === id);
	
		if (taskIndex === -1) {
			alert("Task not found");
		} else {
			toggleToEddit.value = false;
			tasks.value[taskIndex].content = editedTaskContent.value;
		}
	}
	
	const startEditingTask = (task:Tasks) => {
		editedTaskContent.value = task.content; 
		toggleToEddit.value = true;
		currentEditingTaskId.value = task.id; 
	};
	
	const completedTasks = computed(() => {
		return tasks.value.filter(task => task.status);
	});
	
	const unCompletedTasks = computed(() => {
		return tasks.value.filter(task => !task.status );
	});
	
	const showCompletedTasks = () => {
		toggleTasksView.all = false;
		toggleTasksView.completed = true;
		toggleTasksView.uncompleted = false;
	};
	
	const showAllTasks = () => {
		toggleTasksView.all = true;
		toggleTasksView.completed = false;
		toggleTasksView.uncompleted = false;
	};
	
	const showUnCompletedTasks = () => {
		toggleTasksView.all = false;
		toggleTasksView.completed = false;
		toggleTasksView.uncompleted = true;
	};

	const saveTasks = () =>{
		localStorage.setItem('tasks', JSON.stringify(tasks.value))
	}
return { tasks, toggleToAdd, toggleToEddit, toggleTasksView, handleContent, handleEditContent, addTask, deleteTask, editTask, startEditingTask, completedTasks, unCompletedTasks, showCompletedTasks, showAllTasks, showUnCompletedTasks, saveTasks };
})
