const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  result: "",

  getLength() {
    return this.chain.length;
  },
  addLink(value = "(  )") {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      String(position).includes(".") ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= this.getLength()
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join("~~");
    this.chain.length = 0;
    return this.result;
  },
};

module.exports = {
  chainMaker
};
