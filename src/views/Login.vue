<template>
  <br><br>
  <div>
    <h2>외부 API 호출 페이지</h2>
    'https://jsonplaceholder.typicode.com/users/'
  </div>
  <br>

  <div id="example-1">
    <h3> 테이블 연습 </h3>
    <table style="margin-left: auto; margin-right: auto;">
      <thead>
      <th>이름</th>
      <th>주소</th>
      </thead>
      <tbody>
      <tr v-bind:key="user.index" v-for="user in users">
        <td> {{ user.name }}</td>
        <td> {{ user.email }}</td>
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