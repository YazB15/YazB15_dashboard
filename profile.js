// PROFILE COMPONENT

'use strict';

var profile = {
    fname: '',
    sname: '',
    status: false,
    // image: 'img/svg/company-logo.svg'
}

Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <h2>{{ fname }} {{ sname }}</h2>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status">ACTIVE</p>
                <p v-else></p>
              </div>
              <div class="profile-links">
                  <ul>
                    
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