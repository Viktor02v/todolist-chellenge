<script setup lang="ts">
// Icons
import Delete from 'vue-material-design-icons/DeleteOutline.vue'
import Edit from 'vue-material-design-icons/PencilOutline.vue'

const props = defineProps({
	task: Object,
})
//  Import Pinia Store
import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()
</script>
<template>
	<div class="flex mb-3 w-full bg-white  justify-between items-center px-5 py-2 md:py-4 rounded-full">
		<div class="flex gap-5 w-full items-center">
			<input v-model="props.task.status" class="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" type="checkbox">
			<p class="text-[1.10rem] md:text-[1.25rem] w-[100px] overflow-x-auto scroll-auto md:w-[88%]">{{ props.task.content }}</p>
		</div>
		<div class="flex gap-2 w-[80%] md:w-[25%] items-center">
			<p class="">{{ props.task.time }}</p>
			<Edit @click="taskStore.startEditingTask(task)" size="25px" class="p-1 cursor-pointer rounded-full border" />
			<Delete @click="taskStore.deleteTask(task.id)" size="25px" class="p-1 rounded-full cursor-pointer border" />
		</div>
	</div>
</template>
