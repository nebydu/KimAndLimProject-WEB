<template>
  <br>
  <div className="table-responsive" id="example-1">
    <h3> PCR검사 병원 정보 </h3><br>
    <div id="si_name" style="display: inline-block; width: 40%">
      <label style="width:20%; " id="si_label">시</label>
      <select style="width:70%;" class="form-select" @change="onNewChange($event)" v-model="si_selected">
        <option value="All" selected>모든 지역</option>
        <option v-for="si in si_meta" v-bind:value="si" :key="si">{{ si }}</option>
      </select>
      </div>
    <div id="gu_name" style="display: inline-block; width: 40%">
      <label style="width:20%;"  id="gu_label">군구</label>
      <select style="width:70%;" class="form-select" @change="onNewChange($event)" v-model="si_selected">
        <option value="All" selected>모든 지역</option>
        <option v-for="si in si_meta" v-bind:value="si" :key="si">{{ si }}</option>
      </select>
    </div>
    <br><br><br>
    <table className="table table-hover" style="margin-left: auto; margin-right: auto;">
      <thead>
      <th>시</th>
      <th>구</th>
      <th>병원이름</th>
      </thead>
      <tbody>
      <tr v-bind:key="hospital.index" v-for="hospital in hospitals">
        <td> {{ hospital.siname }}</td>
        <td> {{ hospital.guname }}</td>
        <td> {{ hospital.hospitalname }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
let si_meta = ['서울시', '경기도'];
// 시 구로 나눠서 해보기!
let hospitals_original = [
  {
    hospitalid: 1,
    siname: "서울시",
    guname: "강남",
    hospitalname: "가가가"
  },
  {
    hospitalid: 2,
    siname: "서울시",
    guname: "강남",
    hospitalname: "나나나"
  },
  {
    hospitalid: 1,
    siname: "경기도",
    guname: "수원시 장안구",
    hospitalname: "다다다다"
  },
]
let hospitals = [
  {
    hospitalid: 1,
    siname: "서울시",
    guname: "강남",
    hospitalname: "가가가"
  },
  {
    hospitalid: 2,
    siname: "서울시",
    guname: "강남",
    hospitalname: "나나나"
  },
  {
    hospitalid: 1,
    siname: "경기도",
    guname: "수원시 장안구",
    hospitalname: "다다다다"
  },
]
let si_selected;
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "OldList",
  el: "#example-1",
  data() {
    return {
      hospitals: hospitals,
      hospitals_original: hospitals_original,
      si_selected: "All",
      si_meta: si_meta,
    }
  },
  methods: {
    onNewChange: function (event) {
      // 필터를 다시 만질때마다 원래 데이터를 채워줌
      this.hospitals = this.hospitals_original;
      si_selected = event.target.value;
      if (si_selected === 'All') {
        this.hospitals = this.hospitals_original;
      } else {
        // 선택한 옵션에 따라 데이터를 분류하여 보여줌
        this.hospitals = this.hospitals.filter((function (element) {
          return element.siname == si_selected;
        }));
      }
    }
  }
}
</script>

<style scoped>
.form-select {
  width: 200px;
}
label{
  float: left;
  width: 40px;
  font-size: 16px;
  padding: 6px 0;
  text-align: center;
}
</style>