Vue.component('componente1',{
	template:
	`
	<div style='backgroud:red;padding:2px;'>
	<h2>Componente 1: {{ numero }} </h2>
	<button @click="numeroComponente1++">+</button>
	<componente2 numero="numeroComponente1" @nombreComp2="nombreComp1 = $event"</componente2>
	{{ nombreComp1 }}
	</div>
	`
	data(){
		return{
			numero: 0,
			nombreComp1: ''
		}
	}
})