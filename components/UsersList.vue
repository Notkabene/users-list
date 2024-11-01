<template>

  <h1 class='title'>Список сотрудников</h1>
  <p class='text'>{{usersList.length ? `Сотрудников: ${usersList.length} чел.` : 'У Вас еще нет сотрудников'}}</p>

  <NuxtLink href='/form' class='users-list__add btn'>Добавить сотрудника</NuxtLink>

  <div v-if='usersList.length' class='users-list'>
    <UsersItem v-for='item in usersList' :key='item.userName' class='users-list__item' :item='item' @userDel='onUserDel'/>
  </div>

</template>

<script setup lang='ts'>
import UsersItem from '~/components/UsersItem.vue';
import { userType } from '~/interfaces';

const { $locally } = useNuxtApp();

const usersList = ref<userType[]>([]);

onMounted(() => {
  if ($locally.getItem('form')) {
    usersList.value = JSON.parse($locally.getItem('form'));
  }
});

function onUserDel(name:string) {
  usersList.value = usersList.value.filter(item => item.userName !== name);
  $locally.setItem('form', JSON.stringify(usersList.value));
}
</script>

<style lang='scss'>
  .users-list {
    margin-top: 80px;
    max-width: 1000px;
    width: 100%;
  }

  .users-list__item {
    padding: 15px 30px;
    border: 1px solid black;
    margin-bottom: 20px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: flex-start;

  }

  .users-list__buttons {
    display: flex;
    gap: 30px;
  }
  
  .users-list__del {
    background-color: #a10000;
  }

  .title {
    margin-bottom: 10px;
  }

  .text {
    margin-bottom: 40px;
  }

</style>