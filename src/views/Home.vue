<template>
  <br><br>
  <img alt="Vue logo" src="../assets/logo3.png">
  <br><br>
  <div>
    <HelloWorld msg="New PCR 병원 정보"/>
  </div>
  <br>
  <div>
    <router-link to='/login'>
      <b-button variant="outline-secondary">외부 API 테스트</b-button>
    </router-link>&nbsp;&nbsp;&nbsp;
    <router-link to='/hello'>
      <b-button variant="outline-secondary">Hello API 테스트</b-button>
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

<style scoped>

</style>