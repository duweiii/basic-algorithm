const tree = require('./tree.js')

function levelOrder(tree){
  function enQueue(queue, node){
    queue.push( node )
  }  
  // init
  let queue = [];
  enQueue( queue, tree )
  while( queue.length !== 0 ){
    let node = queue.shift();
    console.log( node.name )
    node.children.forEach( item => queue.push( item ))
  }
}

levelOrder( tree )