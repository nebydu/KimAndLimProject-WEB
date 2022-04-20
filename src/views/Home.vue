<template>
  <br><br>
  <img alt="Vue logo" src="../assets/logo3.png">
  <br><br>
  <div>
    <HelloWorld msg="New PCR 병원 정보"/>
  </div>
  <br>
  <div>
    <router-link to='/old/list'>
      <b-button variant="outline-secondary">리스트 연습</b-button>
    </router-link>&nbsp;&nbsp;&nbsp;
    <router-link to='/hospital/list'>
      <b-button variant="outline-secondary">병원 정보 찾기</b-button>
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