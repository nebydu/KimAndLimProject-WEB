<template>
  <br><br>
  <div>
    <h2>외부 API 호출 페이지</h2>
    <ul>'https://jsonplaceholder.typicode.com/users/'</ul>
  </div>
  <br>

  <div class="table-responsive" id="example-1">
    <h3> 테이블 연습 </h3><br>
    <table  class="table table-hover" style="margin-left: auto; margin-right: auto;">
      <thead>
      <th>이름</th>
      <th>주소</th>
      <th>전화번호</th>
      </thead>
      <tbody>
      <tr v-bind:key="user.index" v-for="user in users">
        <td> {{ user.name }}</td>
        <td> {{ user.email }}</td>
        <td> {{ user.phone }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <!--  <ul id="example-2">
      <li v-bind:key="user.index" v-for="user in users" class="hello" >
        {{ user.email }}
      </li>
      <li v-bind:key="user.index" v-for="user in users" class="hello2" >
        {{ user.name }}
      </li>
    </ul>-->
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login-item',
  data() {
    return {
      users: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => this.users = response.data)
        .catch();

    console.log(this.users);
  }
}
</script>

<style>
ul {color: #C4A4B0}
</style>