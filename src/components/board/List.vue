<template>
  <br>
  <div>
    <h2>게시판 리스트</h2>
    <b-button v-on:click="getList">Get Data</b-button>&nbsp;&nbsp;&nbsp;
    <!--    <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>-->

    <router-link to="/board/write">
      <b-button variant="success">글쓰기</b-button>
    </router-link>
  </div>
  <br><br>
  <div class="table-responsive" id="example-1">
    <table class="table table-hover" style="margin-left: auto; margin-right: auto;">
      <thead>
      <th>{{ namelabel }}</th>
      <th>{{ emaillabel }}</th>
      <th>{{ phonelabel }}</th>
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
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  data() {
    return {
      users: [],
      namelabel: "",
      emaillabel: "",
      phonelabel: "",
    }
  },
  methods: {
    getList() {
      axios.get("https://jsonplaceholder.typicode.com/users/")
          .then((res) => {
            this.users = res.data;
            console.log(res);
            this.namelabel = "Name";
            this.emaillabel = "e-mail";
            this.phonelabel = "phone";
          })
          .then((err) => {
            console.log(err);
          })
    }
  }

}
</script>

<style scoped>
.tbAdd{border-top:1px solid #888;}
.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:#43b984}
.btnDelete{background:#f00;}
</style>