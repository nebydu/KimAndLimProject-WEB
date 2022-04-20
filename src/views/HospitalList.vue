<template>
  <br>
  <div className="table-responsive" id="example-1">
    <h3> PCR검사 병원 정보 </h3><br>
    <div id="si_name" style="display: inline-block; width: 30%">
      <label style="width:20%;" id="si_label">시</label>
      <select style="width:70%;" class="form-select" @change="onCityChange($event)" v-model="city_selected">
        <option value="All" selected>모든 지역</option>
        <option v-for="si in city_meta" v-bind:value="si" :key="si">{{ si }}</option>
      </select>
    </div>
    <div id="gu_name" style="display: inline-block; width: 30%">
      <label style="width:20%;"  id="gu_label">군구</label>
      <select style="width:70%;" class="form-select" @change="onDistrictChange($event)" v-model="district_selected">
        <option value="All" selected>모든 지역</option>
        <option v-for="gu in district_meta" v-bind:value="gu" :key="gu">{{ gu }}</option>
      </select>
    </div>
    <br><br><br>
    <table className="table table-hover" style="margin-left: auto; margin-right: auto;">
      <thead>
      <th>시</th>
      <th>구</th>
      <th>병원명</th>
      <th>전화번호</th>
      </thead>
      <tbody>
      <tr v-bind:key="hospital.index" v-for="hospital in hospitalData_Changed">
        <td> {{ hospital.city }}</td>
        <td> {{ hospital.district }}</td>
        <td> {{ hospital.hospitalName }}</td>
        <td> {{ hospital.telNo}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import region from '../data/region.js'
import axios from "axios";

let city_selected,district_selected, regionList;
let city_meta =[];
let district_meta =[];

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HospitalList",
  el: "#example-1",
  data() {
    return {
      regionList: region.Region, //region.js 파일을 불러옴
      hospitalData: [], //변하지않는 데이터
      hospitalData_sub: [], //city까지만 구분된 데이터
      hospitalData_Changed: [], //district까지 구분된 데이터
      district_selected : "All",
      city_selected: "All",
      city_meta: city_meta,
      district_meta : district_meta,
    }
  },
  created() {
    axios.get('/api/v1/myHospital/findAllDesc')
        .then(response => this.hospitalData = response.data)
        .catch();
    axios.get('/api/v1/myHospital/findAllDesc')
        .then(response => this.hospitalData_Changed = response.data)
        .catch();
    regionList = region.Region;
    for (let i = 0; i < regionList.length; i++) {
      city_meta[i] = regionList[i].city;
    }
  },
  methods: {
    onCityChange: function (event) {
      // 데이터 및 필터 선택자 초기화
      this.hospitalData_sub =[];
      district_selected = 'All';
      district_meta.splice(0,district_meta.length);
      this.hospitalData_Changed = this.hospitalData;
      // 선택한 city 값 셋팅
      city_selected = event.target.value;
      if (city_selected === 'All') {
        this.hospitalData_Changed = this.hospitalData;
      } else {
        // 선택한 city 옵션에 따라 데이터를 분류하여 보여줌
        this.hospitalData_Changed = this.hospitalData.filter((function (element) {
          return element.city == city_selected;
        }));
        // 선택한 city 레벨의 데이터를 sub 배열에 할당
        this.hospitalData_sub = this.hospitalData_Changed;
        // 선택한 city에 해당하는 district 옵션들을 조회
        this.findDistrict();
      }

    },
    findDistrict: function(){
      for (let i = 0; i < regionList.length; i++) {
        if(city_selected === "세종") { //세종 데이터있을때 테스트 필요
          console.log("찾았다. 세종")
        }else if(regionList[i].city == city_selected){
          for (let j = 0; j < regionList[i].district.length; j++) {
            district_meta[j] = regionList[i].district[j];
          }
      }}
    },
    onDistrictChange: function (event) {
      // 데이터 및 필터 선택자 초기화
      this.hospitalData_Changed = this.hospitalData;
      // 선택한 district 값 셋팅
      district_selected = event.target.value;
      if (district_selected === 'All') {
        this.hospitalData_Changed = this.hospitalData_sub;
      } else {
        this.hospitalData_Changed = this.hospitalData_sub.filter(
            (function (element) {
              element.city = city_selected;
              return element.district == district_selected;
            })
        );
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