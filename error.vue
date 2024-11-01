<template>
  <div class="wrapper">
    <main class="main">
      <div class="not-found">
        <div class="container">
          <h1 class="not-found__title title--main">
            Упс, страницы не существует
          </h1>
          <p class="not-found__text">
            Уверены, ты найдешь нужную тебе информацию на нашей главной странице
          </p>
          <NuxtLink class="btn" :to="{name: 'index'}">
            Перейти на главную
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>
