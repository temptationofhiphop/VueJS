export default{
	template: `
		<li>
			<label class="p-2 flex items-center justify-between">
				{{assignment.name}}

				<input type="checkbox" v-model="assignment.complete" class="ml-4">
			</label>
		</li>
		`,

		props:{
			assignment: Object
		}
}