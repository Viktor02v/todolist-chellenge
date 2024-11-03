<script setup lang="ts">
// Icons
import Edit from 'vue-material-design-icons/PencilOutline.vue'

//  Import Pinia Store
import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()
</script>

<template>
	<div v-show="taskStore.toggleToAdd"
		class="w-full md:w-[800px] absolute top-0 left-0 md:top-[10%] md:left-[22%] flex flex-col items-center py-[200px] md:py-[150px] md:h-[500px] h-[100vh] gap-8 bg-gray-100 md:bg-gray-100 md:shadow-2xl">
		<h1 class="text-3xl font-serif font-bold">Create a New Task</h1>
		<div class="relative">
			<input @input="taskStore.handleContent" class="border pl-[40px] p-2 rounded-full border-none" type="text">
			<Edit :size="'30px'" class="p-1 absolute top-0 left-0 rounded-full border" />
		</div>
		<div class="flex items-center gap-2">
			<button @click="taskStore.toggleToAdd = false"
				class="w-[6rem] md:w-[8rem] p-2 bg-[#38a169] text-[1rem] font-bold text-white hover:bg-green-800 rounded-full">Back</button>
			<button @click="taskStore.addTask"
				class="w-[6rem] md:w-[8rem] p-2 bg-[#38a169] text-[1rem] font-bold text-white hover:bg-green-800 rounded-full">Create</button>
		</div>
	</div>
</template>
