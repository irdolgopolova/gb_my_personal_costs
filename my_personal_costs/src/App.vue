<template>
  <div id="app">
    <h1 class="title">Мои личные расходы</h1>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./scss/variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  text-align: center;
}

.primary_btn {
  border: $dark_green_border;
  border-radius: 4px;
  background-color: $color_btn_green;
  color: $color_btn_white;
  text-transform: uppercase;

  &:hover {
    background-color: $color_btn_dark_green;
  }

  &:active {
    background-color: $color_btn_white;
    color: $color_btn_green;
  }

  &:disabled {
    background-color: $color_btn_white;
    color: $color_btn_gray;
    border-color: $color_btn_gray;
  }
}
</style>
