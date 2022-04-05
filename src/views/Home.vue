<template>
  <div>
    <router-link to='/login'>
      <b-button variant="success">로그인 페이지로 이동</b-button>
    </router-link>
    <HelloWorld msg="KimAndLimProject"/>
    <!-- 메인 문구에 Home 표시를 해주자 -->

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