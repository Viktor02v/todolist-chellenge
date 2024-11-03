<script setup lang="ts">
// Components 
import TaskComponent from '@/components/TaskComponent.vue';

//  Import Pinia Store
import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()
</script>

<template>
	<div v-if="taskStore.toggleTasksView.uncompleted" class="w-full h-full">
		<div v-for="task in taskStore.unCompletedTasks" :key="task.id" class="w-full">
			<!-- Task Component -->
			<TaskComponent :task=task />
		</div>
	</div>
</template>
