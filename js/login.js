// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <form class="login-form middle">

                <h3>User Login</h3>

                <input v-on:click="focus" type="text" id="username" placeholder="Username">

                <input v-on:click="scream" type="password" id="password" placeholder="Password">

                <a href="#" class="forgot-link">Forgot Password?</a>

                <input v-on:click="checkpass" type="submit" value="Login" class="btn success">

              </form>
            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'jessica' && pass === 'beachbums18') {
        alert('Great Job! You may now continue to the site');

        window.location = "./dashboard.html";
        
      } else {
        alert('username: jessica password: beachbums18');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#ff0000";
      
    },
    
  }
});



var login = new Vue({
  el: '#login'
});
