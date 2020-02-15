<template>
  <!--  编辑弹框区域  -->
  <div class="modal" id="modal">
    <!-- 遮罩层 -->
    <div class="mask" id="mask" @click="$store.commit('setShowModal', false)"></div>
    <!-- 编辑内容区 -->
    <div class="modal-content">
      <h3>编辑信息</h3>
      <form id="edit-form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            :value="setStu.name"
            @input="getValue($event, 'name')"
          />
        </div>
        <div>
          <label for>性别</label>
          <input
            type="radio"
            name="sex"
            id="male"
            value="0"
            :checked="setStu.sex == 0"
            @change="user.sex = 0"
          />
          <label for="male" class="label-sex">男</label>
          <input
            type="radio"
            name="sex"
            id="female"
            value="1"
            :checked="setStu.sex == 1"
            @change="user.sex = 1"
          />
          <label for="female" class="label-sex">女</label>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input
            type="text"
            id="sNo"
            name="sNo"
            :value="setStu.sNo"
            @input="getValue($event, 'sNo')"
          />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input
            type="text"
            id="email"
            name="email"
            :value="setStu.email"
            @input="getValue($event, 'email')"
          />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input
            type="text"
            id="birth"
            name="birth"
            :value="setStu.birth"
            @input="getValue($event, 'birth')"
          />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input
            type="text"
            id="phone"
            name="phone"
            :value="setStu.phone"
            @input="getValue($event, 'phone')"
          />
        </div>
        <div>
          <label for="address">住址</label>
          <input
            type="text"
            id="address"
            name="address"
            :value="setStu.address"
            @input="getValue($event, 'address')"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" id="edit-submit-btn" @click="commit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapState(["setStu"])
  },
  methods: {
    getValue(e, prop) {
      this.user[prop] = e.target.value;
    },
    commit() {
      const user = Object.assign({}, this.setStu, this.user);
      // this.updateStu(user);
      this.$store.dispatch("updateStu", user).then(options => {
        this.$toast(options);
      });
    }
  }
};
</script>

<style>
</style>