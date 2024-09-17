<script setup lang="js">
import { ref } from 'vue';


const drawer = ref(false)

const menuItems = ref([
    {
        title: "Scan",
        location: "/"
    },
    {
        title: "List",
        location: "/list"
    }
])

</script>
<template>
  <v-app id="app">

      <v-layout>
        <v-app-bar app position="fixed" color="primary" prominent>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>AccessGo</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>

          <v-list v-for="item in menuItems" :key="item">
            <v-list-item :to="item.location">
              {{ item.title }}
            </v-list-item>
          </v-list>

        </v-navigation-drawer>

        <v-main>
          <router-view></router-view>
        </v-main>

      </v-layout>

  </v-app>
</template>