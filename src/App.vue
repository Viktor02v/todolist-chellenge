<script setup lang="ts">
import { ref } from 'vue'
import Close from 'vue-material-design-icons/DeleteOutline.vue'
import Edit from 'vue-material-design-icons/PencilOutline.vue'

</script>

<template>
	<div class="w-full bg-gray-100 h-[100vh]">
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
			<div class="w-full">
				<div class="flex w-full bg-white  justify-between items-center px-5 py-2 md:py-4 rounded-full">
					<div class="flex gap-5 w-full items-center">
						<input class="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" type="checkbox">
						<p class="text-[1.10rem] md:text-[1.25rem] w-[78%] ">Something </p>
					</div>
					<div class="flex gap-2 items-center">
						<Edit :size="'25px'" class="p-1 rounded-full border" />
						<Close :size="'25px'" class="p-1 rounded-full border" />
					</div>
				</div>
			</div>

			<div class="flex items-center mt-5 gap-5 w-full">
				<button class="btn-custom2">Completed</button>
				<button class="btn-custom2">Uncomplited</button>
				<button class="w-1/4 p-2 bg-[#38a169] text-[1rem] font-bold text-white rounded-full">+</button>
			</div>
		</section>
	</div>
</template>
