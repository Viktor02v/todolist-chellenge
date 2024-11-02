<script setup lang="ts">
import { ref } from 'vue'
import Delete from 'vue-material-design-icons/DeleteOutline.vue'
import Edit from 'vue-material-design-icons/PencilOutline.vue'

const tasks = ref([]);

const toggler = ref(false);

const taskContent = ref('');
const isCompleted = ref(false);
let nextId = 1;

const handleContent = (event) => {
	taskContent.value = event.target.value
};

const addTask = () => {
	const newTask = {
		id: nextId,
		content: taskContent.value,
		status: isCompleted.value,
	};
	tasks.value.push(newTask);
	nextId++,
		toggler.value = false;
}

const deleteTask = (id) => {
	const index = tasks.value.findIndex(task => task.id === id);
	if (index !== -1) { 
		tasks.value.splice(index,1)
	}
};
</script>

<template>
	<div class="w-full relative bg-gray-100 h-[100vh]">
		<!-- TO-DO-List Overwiew -->
		<section class="w-full container items-center py-6 flex flex-col">
			<h1 class="text-4xl mb-2 font-serif font-bold">TO-DO List</h1>
			<p class="text-gray-600 font-light font-serif">Your to do options</p>
			<div class="flex items-center mt-5 gap-5 w-full">
				<button class="btn-custom">All</button>
				<button class="btn-custom">Deleted</button>
			</div>
		</section>

		<!-- TO-DO-List Preview -->
		<section class="w-full container py-6 flex flex-col">
			<h2 class="text-2xl mb-2 font-serif ">Tasks</h2>

			<!-- Task-List -->
			<div class="w-full h-full">
				<div class="w-full max-h-[200px] overflow-y-auto scroll-auto">
					<div v-for="task in tasks" :key="task.id" class="w-full">
						<!-- Task Component -->
						<div class="flex mb-3 w-full bg-white  justify-between items-center px-5 py-2 md:py-4 rounded-full">
							<div class="flex gap-5 w-full items-center">
								<input v-model="task.status" class="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" type="checkbox">
								<p class="text-[1.10rem] md:text-[1.25rem] w-[78%] ">{{ task.content }}</p>
							</div>
							<div class="flex gap-2 items-center">
								<Edit :size="'25px'" class="p-1 rounded-full border" />
								<Delete @click="deleteTask(task.id)" :size="'25px'" class="p-1 rounded-full cursor-pointer border" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex items-center mt-5 gap-5 w-full">
				<button class="btn-custom2">Completed</button>
				<button class="btn-custom2">Uncomplited</button>
				<button @click="toggler = true"
					class="w-1/4 p-2 bg-[#38a169] text-[1rem] font-bold text-white rounded-full">+</button>
			</div>

			<!-- Add New Task Window -->
			<div v-show="toggler"
				class="w-full md:w-[800px] absolute top-0 left-0 md:top-[10%] md:left-[22%] flex flex-col items-center py-[200px] md:py-[150px] md:h-[500px] h-[100vh] gap-8 bg-gray-100 md:bg-gray-100 md:shadow-2xl">
				<h1 class="text-3xl font-serif font-bold">Create a New Task</h1>
				<div class="relative">
					<input @input="handleContent" class="border pl-[40px] p-2 rounded-full border-none" type="text">
					<Edit :size="'30px'" class="p-1 absolute top-0 left-0 rounded-full border" />
				</div>
				<div class="flex items-center gap-2">
					<button @click="toggler = false"
						class="w-[6rem] md:w-[8rem] p-2 bg-[#38a169] text-[1rem] font-bold text-white rounded-full">Back</button>
					<button @click="addTask"
						class="w-[6rem] md:w-[8rem] p-2 bg-[#38a169] text-[1rem] font-bold text-white rounded-full">Create</button>
				</div>
			</div>
		</section>
	</div>
</template>
