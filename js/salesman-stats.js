// Statistics per Salesman

'use strict';


Vue.component('salesman-stats', {
	props: [
		"name",	
		"position",
		"target",
		"img",
	],
	/*
		<img src="{{img}}" alt="{{name}}" />
	*/
	template: `
		<div class="card-sales-stats">
			
			<div class="profile-banner">
				<h2>{{name}}</h2>
				<h5>{{position}}</h5>
			</div>
			<div class="monthly-target">
				<h2>{{target}}</h2>
			</div>
			<div id="img-container">
                <img v-bind:src="img">
            </div>
		</div>
	`
});

var salesmanStats = new Vue({
  el: '#salesman-stats'
})


