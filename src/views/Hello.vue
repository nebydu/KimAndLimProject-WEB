<template>
  <br><br>
  <div>
    <h2>hello API 호출 페이지---</h2>
    1. /hello 화면 로딩과 함께 호출<br>
    <span style="color: #fb0101;">"  {{ helloApiData.data }}  "<br></span>
    위에 hello라 찍히면 정상!!!
  </div>
  <br>
  <div>
    2. 버튼 동작 테스트<br>
    <b-button v-on:click="btnCheck">버튼 동작</b-button>
    <br>
    {{ btnCheckData }}
  </div>
  <br>
  <div>
    3. /hello/dto param 실어 호출<br>
    <form v-on:submit="onSubmitForm">
<!--      <input type="text" v-model="inputName">-->
        <input class="form-control input-group-sm" type="text" v-model="inputName"  placeholder="Enter your name">
        <button>Submit</button>
      <br>
      response : {{ helloName }}님, 안녕하세요~!
    </form>
  </div>
<!--  <br><br><br><br>-->
<!--  <form class="row g-3">
    <div class="col-auto">
      <label for="staticEmail2" class="visually-hidden">Email</label>
      <input type="text" class="form-control" id="staticEmail2" value="email@example.com">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
    </div>
  </form>-->


</template>

<script>
import axios from 'axios'

export default {
  name: "Hello-item",
  data() {
    return {
      helloApiData: [],
      btnCheckData: "Hello,Anyone",
      helloName: "",
      inputName: "",
    }
  },
  created() {
    axios.get('/hello')
        .then(response => this.helloApiData = response)
        .catch();
    console.log(this.helloApiData);
  },
  methods: {
    btnCheck: function () {
      this.btnCheckData = 'Hello,Hyona';
    },
    onSubmitForm(e) {
      e.preventDefault();
      axios.get('/hello/dto',
          {params: {name: String(this.inputName)}})
          .then(response => this.helloName = response.data.name)
          .catch();
    },
  }
}
</script>

<style scoped>

</style>