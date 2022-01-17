export default {
 
  bind(el,bind){
    console.log('el',el.parentNode);
    console.log(bind.value);
  },
  //inserted 可用于获取上级节点，进行操作
  inserted(el){
   console.log('加载完成后的dom,可获取上层节点',el.parentNode);
  }
}