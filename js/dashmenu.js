// DASH MENU COMPONENT

'use strict';

var menu = {
  title: '',
    menus: [
    {
      title: 'Dashboard',
      link: 'addsection.html',
      isActive: true
    },
    {
      title: 'Staff Discount',
      link: 'addsection.html',
      isActive: false
    },
    {
      title: 'Holiday Log',
      link: 'editsections.html',
      isActive: false

    },
    {
      title: 'Payroll',
      link: 'movesections.html',
      isActive: false

    },
    {
      title: 'Pricelist',
      link: 'movesections.html',
      isActive: false

    },
    {
      title: 'Stock Count',
      link: 'movesections.html',
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