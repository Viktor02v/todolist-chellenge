<script setup lang="ts">
import { computed, watch } from 'vue';
// Components
import AllTasksList from '@/components/AllTasksList.vue';
import CompletedTasksList from '@/components/CompletedTasksList.vue';
import UnCompletedTasksList from '@/components/UnCompletedTasksList.vue';
import EditTaskWindow from '@/components/EditTaskWindow.vue';
import AddTaskWindow from '@/components/AddTaskWindow.vue';

// Import Pinia Store
import { useTaskStore } from '@/stores/task';
const taskStore = useTaskStore();

const currentTaskList = computed(() => {
	if (taskStore.toggleTasksView.completed) return 'CompletedTasksList';
	if (taskStore.toggleTasksView.uncompleted) return 'UnCompletedTasksList';
	return 'AllTasksList';
});

const TaskListComponent = computed(() => {
	switch (currentTaskList.value) {
		case 'CompletedTasksList':
			return CompletedTasksList;
		case 'UnCompletedTasksList':
			return UnCompletedTasksList;
		default:
			return AllTasksList;
	}
});

watch(taskStore.tasks, taskStore.saveTasks, { deep: true })
</script>

<template>
	<div class="w-full relative bg-gray-100 h-[100vh]">
		<!-- TO-DO-List Overview Header -->
		<header class="w-full container items-center pt-[5rem] md:pt-[10rem] flex flex-col">
			<h1 class="text-4xl mb-2 font-serif font-bold">TO-DO List</h1>
			<p class="text-gray-600 font-light font-serif">Your to-do options</p>
			<div class="flex items-center mt-5 gap-5 w-full" aria-label="Task filters">
				<button @click="taskStore.showAllTasks"
					:class="taskStore.toggleTasksView.all ? 'btn-custom-triggered' : 'btn-custom hover:bg-green-800'"
					aria-label="Show all tasks">
					All
				</button>
				<button class="btn-custom hover:bg-green-800" aria-label="Show deleted tasks">Deleted</button>
			</div>
		</header>

		<!-- Main TO-DO-List Content -->
		<main class="w-full container py-6 flex flex-col">
			<h2 class="text-2xl mb-2 font-serif">Tasks</h2>

			<!-- Task List Section -->
			<section class="w-full h-full" aria-labelledby="task-list-heading">
				<h3 id="task-list-heading" class="sr-only">Task List</h3>
				<div class="w-full max-h-[190px] md:max-h-[300px] overflow-y-auto scroll-auto">
					<keep-alive>
						<component :is="TaskListComponent" />
					</keep-alive>
				</div>
			</section>

			<!-- Task Filter and Add Button -->
			<section class="flex items-center mt-5 gap-5 w-full" aria-label="Task management options">
				<button @click="taskStore.showCompletedTasks"
					:class="taskStore.toggleTasksView.completed ? 'btn-custom2-triggered' : 'btn-custom2 hover:bg-green-800'"
					aria-label="Show completed tasks">
					Completed
				</button>
				<button @click="taskStore.showUnCompletedTasks"
					:class="taskStore.toggleTasksView.uncompleted ? 'btn-custom2-triggered' : 'btn-custom2 hover:bg-green-800'"
					aria-label="Show uncompleted tasks">
					Uncompleted
				</button>
				<button @click="taskStore.toggleToAdd = true"
					class="w-1/4 p-2 bg-[#38a169] text-[1rem] font-bold hover:bg-green-800 text-white rounded-full"
					aria-label="Add a new task">
					+
				</button>
			</section>

			<!-- Add New Task Modal -->
			<AddTaskWindow role="dialog" aria-labelledby="add-task-title" />

			<!-- Edit Task Modal -->
			<EditTaskWindow role="dialog" aria-labelledby="edit-task-title" />
		</main>
	</div>
</template>
