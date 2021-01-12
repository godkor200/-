const Tree = function () {
  this.children = [];
};

/**
 * 직계 자녀를 추가합니다
 */
Tree.prototype.addChild = function (child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
 * 2개의 자녀 노드들의 가장 하위의 조상을 반환하세요
 * (아래 예시에서는 여성 만이 자식의 부모가 될 수 있다고 가정하고 있습니다)
 *
 * 추가 예시 :
 *   1.) 나와 형제 사이 -> 어머니
 *   2.) 나와 사촌 -> 할머니
 *   3.) 내 할머니와 내 할머니 (동일한 인물) -> 내 할머니
 *   4.) 나와 감자 -> null
 */
Tree.prototype.getClosestCommonAncestor = function () /*...*/
{
  // TODO: 여기에 함수를 작성하세요!
};

/**
 * 조상에서부터 현 노드까지의 경로를 반환하세요
 *
 * 추가 예시:
 *   1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
 *    - 증조할머니.getAncestorPath(나) -> [증조 할머니, 할머니, 어머니, 나]
 *
 *   2.) mom.getAncestorPath(me) -> [mom, me]
 *    - 어머니.getAncestorPath(나) -> [어머니, 나]
 *
 *   3.) me.getAncestorPath(me) -> [me]
 *    - 나.getAncestorPath(나) -> [나]
 *
 *   4.) grandma.getAncestorPath(H R Giger) -> null
 *    - 할머니.getAncestorPath(H R Giger) -> null
 */
Tree.prototype.getAncestorPath = function (node /*...*/) {
  console.log("node", node);

  //   console.log("this", this);
  if (this === node) {
    return this;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      let path = this.children[i].getAncestorPath(node);
      if (path) {
        return [this].concat(path);
      }
    }
  }
  // TODO: 여기에 함수를 작성하세요!
};

/**
 * 주어진 트리가 이미 this 의 자식인지 확인합니다
 * (트리 혹은 하위 트리 전부 확인합니다)
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // 'child'는 현재 트리의 직계 자녀입니다
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // 'child' 는 현재 트리의 자손입니다
        return true;
      }
    }
    return false;
  }
};

/**
 * 직계 자녀를 제거합니다
 */
Tree.prototype.removeChild = function (child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    // 자녀를 제거합니다
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

let grandma = new Tree();
let mom = new Tree();
grandma.addChild(mom);
let me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(grandma);
console.log("grandma.getAncestorPath(me)", grandma.getAncestorPath(me));

//console.log("grandma", grandma);
