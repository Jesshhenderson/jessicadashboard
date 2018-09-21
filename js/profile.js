// PROFILE COMPONENT

'use strict';

var profile = {
    fname: 'Dashboard',
    status: true,
    image: 'img/bblogowhite.png'
}


Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img class="beachbum" v-bind:src="image">
              </div>
              <h2>{{ fname }}</h2>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status">ACTIVE</p>
                <p v-else>OFFLINE</p>
              </div>
              <div class="profile-links">
                  <ul>
                    <li><a href="#" id="btnlite" class="btnlite">Light Mode</a></li>
                    <li><a href="#" id="btndark" class="btndark">Dark Mode</a></li>
                  </ul>
              </div>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})