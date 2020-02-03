<template>
  <v-app>
    <sidebar></sidebar>

    <v-content class="grey lighten-2">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from "./views/layouts/Sidebar.vue";

// Setup Firebase
export default {
  name: "App",

  components: {
    sidebar
  },

  data: () => ({})
};
</script>
