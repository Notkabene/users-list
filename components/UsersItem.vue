<template>
  <div class='users-list__item'>
    <div class='users-list__info'>
      <p v-if='item.userName || item.lastname' class='users-list__name'>{{ item.userName }} {{ item.lastname }}</p>
      <p v-if='item.company' class='users-list__comp'>Компания: {{ item.company }}</p>
      <p v-if='item.department' class='users-list__comp'>Подразделение: {{ item.department }}</p>
      <p v-if='item.prof' class='users-list__comp'>Должность: {{ item.prof }}</p>
    </div>
    <div class='users-list__buttons'>
      <!--        <button class='users-list__change btn' type='button'>Изменить</button>-->
      <NuxtLink :to="{ path: '/form', query: { id: item.userName }}" class='btn'>Изменить</NuxtLink>
      <button class='users-list__del btn' type='button' @click='deleteUser'>Удалить</button>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { userType } from '~/interfaces';

const props = defineProps({
  item: {
    type: Object as PropType<userType>,
    required: true,
  },
});

const emit = defineEmits(['userDel']);

function deleteUser() {
  emit('userDel', props.item.userName);
}

</script>

<style scoped lang='scss'>
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
</style>