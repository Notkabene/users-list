<template>
  <NuxtLink href='/' class='link'>Вернуться на главную</NuxtLink>
  <form class='form' action='#'>
    <label for='name'>
      <input
        id='name'
        v-model='dataForm.userName'
        :class='{"error-input": errorText}'
        type='text'
        placeholder='Имя'
        required>
    </label>
    <label for='lastname'>
      <input id='lastname' v-model='dataForm.lastname' type='text' placeholder='Фамилия'>
    </label>
    <label for='company'>
      <input id='company' v-model='dataForm.company' type='text' placeholder='Организация'>
    </label>
    <label for='department'>
      <input id='department' v-model='dataForm.department' type='text' placeholder='Подразделение'>
    </label>
    <label for='prof'>
      <input id='prof' v-model='dataForm.prof' type='text' placeholder='Должность'>
    </label>

    <span v-if='errorText' class='error-text'>{{ errorText }}</span>
    <button type='button' class='btn' @click='addUser'>Сохранить</button>

  </form>
</template>

<script setup lang='ts'>
import { userType } from '~/interfaces';

const { $locally } = useNuxtApp();
const route = useRoute();
const router = useRouter();

const usersList = ref<userType[]>([]);
const changeUser = ref<userType>();
const errorText = ref<string>('');

const dataForm = ref<userType>({
  userName: '',
  lastname: '',
  company: '',
  department: '',
  prof: '',
});

function addUser() {
  if (!dataForm.value.userName) {
    errorText.value = 'Имя обязательно для заполнения';
    return;
  }
  if (changeUser.value && usersList.value) {
    usersList.value = usersList.value.map(item => {
      if (item.userName === changeUser.value?.userName) {
        item = { ...dataForm.value };
      }
      return item;
    });
  } else {
    usersList.value.push(dataForm.value);
  }
  $locally.setItem('form', JSON.stringify(usersList.value));
  router.push('/');
}

onMounted(() => {
  if ($locally.getItem('form')) {
    usersList.value = JSON.parse($locally.getItem('form'));
  }

  if (route.query.id && usersList.value) {
    changeUser.value = usersList.value.find(item => item.userName === route.query.id);
    dataForm.value = { ...changeUser.value };
  }
});
</script>

<style scoped lang='scss'>
  .form {
    max-width: 500px;
    margin-top: 40px;
    display: flex;
    gap: 20px;
    flex-direction: column;

    input {
      padding: 5px 10px;
    }
  }

  .error-text {
    color: #a10000;
  }

  .error-input {
    border: 1px solid #a10000;
  }
</style>