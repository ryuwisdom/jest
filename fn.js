let listbox = document.getElementById('list');

const fn = {
  cost: [
    { id: 1, current_price: 0.03408772054151 },
    { id: 2, current_price: 24.07845258390245 },
    { id: 3, current_price: 13.92718804000009887189361 },
    { id: 4, current_price: 158.9856767330143 },
    { id: 5, current_price: 4.11871883045218 },
    { id: 6, current_price: 4000.05296680227347 },
    { id: 7, current_price: 0 },
    { id: 8, current_price: -300.1234 },
    { id: 9, current_price: 'hello' },
    { id: 10, current_price: 30034265675685234.1234 },
  ],

  displayList: () => {
    for (let i = 0; i < fn.cost.length; i++) {
      const li = document.createElement('li');
      li.textContent =
        fn.cost[i].current_price === 0 ? 'N/A' : `${fn.cost[i].current_price}`;
      listbox.appendChild(li);
    }
  },

  converter: function () {
    return this.cost.map((v) => {
      if (typeof v.current_price === 'string') {
        v.current_price = 'N/A';
      }
      // console.log(typeof v.current_price);
      // console.log(v.current_price);
      if (v.current_price === 0 || v.current_price === null) {
        v.current_price = 'N/A';
      }

      if (v.current_price < 1) {
        v.current_price = v.current_price.toFixed(6);
      }

      if (v.current_price > 1 && v.current_price < 100) {
        v.current_price = v.current_price.toFixed(3);
      }

      if (v.current_price > 100 && v.current_price < 10000) {
        v.current_price = v.current_price.toFixed(1);
      }

      if (v.current_price > 1000000000000000 || v.current_price < 0) {
        v.current_price = '-';
      }

      v.current_price = String(v.current_price);
      return v;
    });
  },

  // separatedDecimal: ()=> {
  //   return fn.cost.map((_,idx)=> {
  //     let
  //   })
  // }
  // add: (num1, num2) => num1 + num2,
  // makeUser: (name, age) => ({ name, age, gender: undefined }),
  // throwErr: () => {
  //   throw new Error('+_+');
  // },
  // getName: (callback) => {
  //   const name = 'bonnie';
  //   setTimeout(() => {
  //     // callback(name);
  //     throw new Error('server err..');
  //   }, 3000);
  // },

  // costCalculated(){

  // }
};
// fn.displayList();
module.exports = fn;
