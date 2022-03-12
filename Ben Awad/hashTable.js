function hashStringToInt() {
  return 5;
}

class HashTable {
  table = new Array(100);

  setItem = (key, value) => {
    const idx = hashStringToInt(key);
    this.table[idx] = value;
  };

  getItem = (key) => {
    const idx = hashStringToInt(key);
    return this.table[idx];
  };
}

const myTable = new HashTable();
myTable.setItem("fistname", "bob");
myTable.getItem("firstname");

console.log(myTable.getItem("firstname"));
