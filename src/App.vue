<script setup lang="ts">
// Components
import AllTasksList from '@/components/AllTasksList.vue';
import CompletedTasksList from '@/components/CompletedTasksList.vue';
import UnCompletedTasksList from '@/components/UnCompletedTasksList.vue';
import EditTaskWindow from '@/components/EditTaskWindow.vue';
import AddTaskWindow from '@/components/AddTaskWindow.vue';

//  Import Pinia Store
import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()

</script>

<template>
	<div class="w-full relative bg-gray-100 h-[100vh]">
		<!-- TO-DO-List Overwiew -->
		<section class="w-full container items-center pt-[5rem] md:pt-[10rem] flex flex-col">
			<h1 class="text-4xl mb-2 font-serif font-bold">TO-DO List</h1>
			<p class="text-gray-600 font-light font-serif">Your to do options</p>
			<div class="flex items-center mt-5 gap-5 w-full">
				<button @click="taskStore.showAllTasks"
					:class="!taskStore.toggleTasksView.all ? 'btn-custom hover:bg-green-800' : 'btn-custom-triggered'"
					class="">All</button>
				<button class="btn-custom hover:bg-green-800">Deleted</button>
			</div>
		</section>

		<!-- TO-DO-List Preview -->
		<section class="w-full container py-6 flex flex-col">
			<h2 class="text-2xl mb-2 font-serif ">Tasks</h2>

			<!-- Task-List -->
			<div class="w-full h-full">
				<div class="w-full max-h-[190px]  md:max-h-[300px] overflow-y-auto scroll-auto">

					<!-- All Tasks -->
					<AllTasksList />

					<!-- Completed Tasks -->
					<CompletedTasksList />

					<!-- UnCompleted Tasks -->
					<UnCompletedTasksList />
				</div>
			</div>

			<!-- Options -->
			<div class="flex items-center mt-5 gap-5 w-full">
				<button @click="taskStore.showCompletedTasks"
					:class="!taskStore.toggleTasksView.completed ? 'btn-custom2 hover:bg-green-800' : 'btn-custom2-triggered'"
					class="">Completed</button>
				<button @click="taskStore.showUnCompletedTasks"
					:class="!taskStore.toggleTasksView.uncompleted ? 'btn-custom2 hover:bg-green-800' : 'btn-custom2-triggered'"
					class="">Uncompleted</button>
				<button @click="taskStore.toggleToAdd = true"
					class="w-1/4 p-2 bg-[#38a169] text-[1rem] font-bold hover:bg-green-800 text-white rounded-full">+</button>
			</div>

			<!-- Add New Task Window -->
			<AddTaskWindow />

			<!-- Eddit Task Window -->
			<EditTaskWindow />
		</section>
	</div>
</template>
