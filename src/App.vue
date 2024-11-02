<script setup lang="ts">

</script>

<template>
	<div class="w-full bg-gray-100 h-[100vh]">
		<!-- TO-DO-List Overwiew -->
		<section class="w-full container items-center py-6 flex flex-col">
			<h1 class="text-4xl mb-2 font-serif font-bold">TO-DO List</h1>
			<p class="text-gray-600 font-light font-serif">Your to do options</p>
			<div class="flex items-center mt-5 gap-5 w-full">
				<button class="p-2 w-full  bg-white text-[1.15rem] font-bold text-gray-600 rounded-full">All</button>
				<button class="p-2 w-full bg-green-400 text-[1.15rem] font-bold text-white rounded-full">Deleted</button>
			</div>
		</section>

		<!-- TO-DO-List Preview -->
		<section class="w-full container py-6 flex flex-col">
			<h2 class="text-2xl mb-2 font-serif ">Tasks</h2>

			<!-- Task-List -->
			<div>

			</div>

			<div class="flex items-center mt-5 gap-5 w-full">
				<button class="p-2 w-full  bg-green-400 text-[1rem] font-bold text-white rounded-full">Completed</button>
				<button class="p-2 w-full  bg-green-400 text-[1rem] font-bold text-white rounded-full">Uncomplited</button>
				<button class="w-1/4 p-2 bg-green-400 text-[1rem] font-bold text-white rounded-full">+</button>
			</div>
		</section>
	</div>
</template>
