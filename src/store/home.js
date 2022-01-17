import { reqgetCategoryList, reqGetBannerList, reqFloorList } from "@/api";
//home模块的仓库
const state = {
  //home仓库中存储三级菜单的数据
  categoryList: [],
  //轮播图的数据
  bannerList: [],
  //floor组件的数据
  floorList:[],
  //测试数据
  dataList:[],
  message:'仓库数据'
};
//mutions是唯一修改state的地方
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList){
     state.floorList = floorList;
  },
  GETLIST(state,dataList){
    state.dataLiat = dataList
  }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async getCategoryList({ commit }) {
    //reqgetCategoryList返回的是一个Promise对象
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      //提交mutation
      commit("GETFLOORLIST", result.data);
    }
  },
  async getList({commit}){
    let data = await reqGetBannerList()
    console.log('获取数据',data);
    if(data.code==200){
      commit('GETLIST',data.data)
    }
  }
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
