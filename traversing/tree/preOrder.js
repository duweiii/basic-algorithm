const tree = require('./tree.js')
// 先序、中序、后序结构相同
function preOrder(tree){
  if( tree ){
    console.log(tree.name);
    preOrder( tree.children[0] )
    preOrder( tree.children[1] )
  }
}
preOrder(tree)