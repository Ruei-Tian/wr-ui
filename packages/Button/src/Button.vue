 <template>
  <span class="wr-btn" @click="handleClick">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "WrBtn", // 這個名字很重要
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
  },
};
</script>
<style lang="scss" scoped>
.wr-btn {
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 4px;
  font-size: 4px;
  text-align: center;
  background: #09aeaf;
  color: white;
}
</style>