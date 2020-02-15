<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="table-body">
      <tr v-for="(item, index) in list" :key="index">
        <td>{{item.sNo}}</td>
        <td>{{item.name}}</td>
        <td>{{item.sex ? '女' : "男"}}</td>
        <td>{{item.email}}</td>
        <td>{{getBirth(item.birth)}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.address}}</td>
        <td>
          <button class="btn edit" @click="setStu(true, item)">编辑</button>
          <button class="btn del" @click="delStu(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Axios from "axios";
export default {
  created() {
    this.getStuList();
  },
  methods: {
    delStu(sNo) {
      this.$store.dispatch("delStu", sNo);
    },
    getBirth(year) {
      return new Date().getFullYear() - year;
    },
    setStu(bool, item) {
      this.setShowModal(bool);
      this.setEditStu(item);
    },
    ...mapActions(["getStuList"]),
    ...mapMutations(["setShowModal", "setEditStu"])
  },
  computed: {
    ...mapState(["list"])
  }
};
</script>

<style>
</style>