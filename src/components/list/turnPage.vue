<template>
  <div class="page">
    <ul class="turn-page">
      <li class="prev" @click="changePage(-1)" :class="{'not': nowPage == 1}">&lt;</li>
      <template v-if="totalPage < 8">
        <li
          class="number"
          v-for="item in totalPage"
          :key="item"
          :class="{'active-page': nowPage == item}"
          @click="changePage(item)"
        >{{item}}</li>
      </template>
      <template v-else>
        <template v-if="nowPage <= 4">
          <li
            class="number"
            v-for="item in 6"
            :key="item"
            :class="{'active-page': nowPage == item}"
            @click="changePage(item)"
          >{{item}}</li>
        </template>
        <template v-if="nowPage > 4">
          <li @click="changePage(1)" class="number">1</li>
          <li class="number">...</li>
        </template>

        <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
          <li
            class="number"
            v-for="item in 5"
            :key="item"
            :class="{'active-page': item == 3}"
            @click="changePage(nowPage - 3 + item)"
          >{{nowPage - 3 + item}}</li>
        </template>

        <template v-if="nowPage <= totalPage - 4">
          <li class="number">...</li>
          <li class="number" @click="changePage(totalPage)">{{totalPage}}</li>
        </template>
        <template v-if="nowPage > totalPage - 4">
          <li
            class="number"
            v-for="item in 6"
            :key="item"
            :class="{'active-page': nowPage == totalPage - 6 + item}"
            @click="changePage(totalPage - 6 + item)"
          >{{totalPage - 6 + item}}</li>
        </template>
      </template>
      <li class="next" @click="changePage(0)" :class="{'not': nowPage == totalPage}">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
 computed: {
   nowPage() {
     return this.$store.state.nowPage;
   },
   totalPage() {
     return this.$store.state.totalPage;
   }
 },
  methods: {
    changePage(n) {
      this.$store.dispatch('turnPage', n);
    }
  }
};
</script>

<style scoped>
.turn-page {
  user-select: none;
}
.turn-page > li {
  list-style: none;
  display: inline-block;
  margin: 0 5px;
  border-radius: 4px;
  border: 1px solid #abcdef;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
}
.turn-page > li:hover {
  color: #abcdef;
  background-color: #fff;
}
.active-page {
  color: #fff;
  background-color: #abcdef;
  border: none;
}
.prev,
.next {
  /* font-size: 20px; */
  font-weight: bold;
}
.not:hover {
  cursor: not-allowed;
}
</style>