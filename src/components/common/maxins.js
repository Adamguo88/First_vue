import BackTop from "@/components/content/backtop/BackTop";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
};
