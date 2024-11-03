<script setup lang="ts">
// Components 
import TaskComponent from '@/components/TaskComponent.vue';

//  Import Pinia Store
import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()

</script>

<template>
	<div v-if="taskStore.toggleTasksView.all" class="w-full h-full">
		<!-- Task Component -->
		<div v-for="task in taskStore.tasks" :key="task.id" class="w-full">
			<TaskComponent :task=task />
		</div>
	</div>
</template>
