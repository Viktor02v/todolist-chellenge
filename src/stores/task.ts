import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
	const tasks = ref([]);

	const toggleToAdd = ref(false);
	const toggleToEddit = ref(false);
	
	const toggleTasksView = reactive({
		all: true,
		completed: false,
		uncompleted: false,
	});
	
	const taskContent = ref('');
	const editedTaskContent = ref('');
	const currentEditingTaskId = ref(null);
	const isCompleted = ref(false);
	let nextId = 1;
	
	const handleContent = (event) => {
		taskContent.value = event.target.value
	};
	const handleEditContent = (event) => {
		editedTaskContent.value = event.target.value
	};
	
	const addTask = () => {
		const newTask = {
			id: nextId,
			content: taskContent.value.trim(),
			status: isCompleted.value,
		};
	
		if (taskContent.value.length <= 4) {
			alert(" You need to type at least 5 characters");
		} else {
			tasks.value.push(newTask);
			nextId++,
				toggleToAdd.value = false
		}
	}
	
	const deleteTask = (id) => {
		const index = tasks.value.findIndex(task => task.id === id);
		if (index !== -1) {
			tasks.value.splice(index, 1)
		}
	};
	
	const editTask = (id) => {
		const taskIndex = tasks.value.findIndex(task => task.id === id);
	
		if (taskIndex === -1) {
			alert("Task not found");
		} else {
			tasks.value[taskIndex].content = editedTaskContent.value;
			toggleToEddit.value = false;
		}
	};
	
	const startEditingTask = (task) => {
		editedTaskContent.value = task.content; // pre-fill with existing content
		toggleToEddit.value = true; // open the edit modal
		currentEditingTaskId.value = task.id; // store the id of the task being edited
	};
	
	const completedTasks = computed(() => {
		return tasks.value.filter(task => task.status === true);
	});
	
	const unCompletedTasks = computed(() => {
		return tasks.value.filter(task => task.status === false);
	});
	
	const showCompletedTasks = () => {
		toggleTasksView.all = false;
		toggleTasksView.completed = true;
		toggleTasksView.uncompleted = false;
		console.log(toggleTasksView.completed);
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
return { tasks, toggleToAdd, toggleToEddit, toggleTasksView, handleContent, handleEditContent, addTask, deleteTask, editTask, startEditingTask, completedTasks, unCompletedTasks, showCompletedTasks, showAllTasks, showUnCompletedTasks };
})
