module.exports = (array, object, identifier) => {
  for (let [index, entry] of array.entries()) {
    if (entry[identifier] === object[identifier]) {
      array.splice(index, 1);
      return array;
    };
  };
};
