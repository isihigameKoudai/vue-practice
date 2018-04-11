var app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'Welcome Vue.js', //section1
      message: "Hello world", //section2
      lists: [ //section3
        {
          id:1,
          content:'影武者のラーメンおいしかった'
        },
        {
          id:2,
          content:'春日亭行きたい'
        },
        {
          id:3,
          content:'家系で一番美味しいところはどこか？'
        },
        {
          id:4,
          content:'壱弐参の牛カツはめっちゃうまい'
        },
        {
          id:5,
          content:'347cage&loungeの店内がインスタ映え'
        },
      ],
      isActive: false,
      counts:0,
      toggleFlag: false,
    }
  },
  methods: {
    countUp() {
      this.counts++;
    },
    toggle() {
      this.toggleFlag = !this.toggleFlag;
    }
  }
});