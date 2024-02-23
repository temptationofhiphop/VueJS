export default{

	template:`
		<button :class="{
			'border rounded px-5 py-5 disabled:cursor-not-allowed': true,
			'bg-green-200 hover:bg-green-400': type === 'primary',
			'bg-red-200 hover:bg-red-400': type === 'secondary',
			'bg-gray-200 hover:bg-gray-400': type === 'muted',
			'is-loading': processing 
		}"  
		:disabled="processing"
		>
			<slot />
			</button>
	`,

	props:{
		type: {
			type: String,
			default: 'primary'
		},

		processing: {
			type: Boolean,
			default: false
		}
	}
}

