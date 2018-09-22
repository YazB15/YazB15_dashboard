// DASH MENU COMPONENT

'use strict';

var menu = {
    title: '',
    menus: [
    {
      title: 'Workflow ',
      link: 'addsection.html',
      icon: 'fa fa-plus-circle',
      isActive: true
    },
    {
      title: 'To do list',
      link: 'editsections.html',
      icon: 'fa fa-pencil',
      isActive: false

    },
    {
      title: 'Messages',
      link: 'movesections.html',
      icon: 'fa fa-arrows-alt',
      isActive: false

    },
    ]
}


Vue.component('dash-menu', {
  template: `<div class="dash-menu">
              <h3>{{ title }}</h3>
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">
                    {{ menu.title }}
                    <i :class="menu.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
            `,
  data: function() {
    return menu;
  }
})

var dashMenu = new Vue({
  el: '#dashmenu'
})