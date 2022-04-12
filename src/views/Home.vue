<template>
  <br><br>
  <img alt="Vue logo" src="../assets/logo3.png">
  <br><br>
  <div>
    <HelloWorld msg="Welcome to KimAndLimProject"/>
  </div>
  <div>
    <router-link to='/login'>
      <b-button variant="success">외부 API 테스트</b-button>
    </router-link>&nbsp;&nbsp;&nbsp;
    <router-link to='/hello'>
      <b-button variant="danger">Hello API 테스트</b-button>
    </router-link>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>