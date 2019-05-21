
Vue.component('saludo',{
				template:
				`
					<div>
						<h1>saludo estático</h1>
						<h3>0</h3>
					</div>
				`,
				data() {
					return{
					saludo: 'Hola desde un componente'
					}
				}
			})