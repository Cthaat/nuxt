<template>
  <v-app theme="dark">
      <v-layout>
        <v-app-bar title="My App"/>
        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Home" to="/"/>
            <v-list-item title="User" to="/user"/>
          </v-list>
        </v-navigation-drawer>
          <v-main>
            <slot />
          </v-main>
        </v-layout>
  </v-app>
</template>

<script setup>
</script>

<style>
::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-color: #d4aa70;
  border-radius: 100px;
}
</style>