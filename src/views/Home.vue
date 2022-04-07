<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <div>
    <router-link to='/login'>
      <b-button variant="success">외부 API 테스트</b-button>
    </router-link>&nbsp;&nbsp;&nbsp;
    <router-link to='/hello'>
      <b-button variant="danger">Hello API 테스트</b-button>
    </router-link>
  </div>
  <br>
  <div>
    <HelloWorld msg="Welcome to KimAndLimProject"/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home-item',
  components: {
    HelloWorld,
  },
};
</script>