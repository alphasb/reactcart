const ProductService =  {

    listProductsInCart: (cart, products) => {
     return Object.keys(cart.lst).reduce( (acc, el) => {
        const res = products
        .filter(elem => (cart.lst[el] &&  elem.id === parseInt(el, 10)))
        .map(({id, name, img, descr}) => {
          return { id, name, img, descr: `${descr[0]} ...`, qty: cart.lst[el] } 
        });
        return [...acc, ...res];
      },[]);
    },

    sumCartQty: (cart) => {
      return Object.keys(cart.lst).reduce((acc,el) => {return acc+cart.lst[el] }, 0);
    },

    loadProductKeywords: () => {
      return [
        {full:"french", short:'fr'},
        {full:"italian", short:'it'},
        {full:"spanish", short:'es'},
        {full:"beef"},
        {full:"pork"},
        {full:"chicken"},
        {full:"seafood"},
        {full:"cheese"},  
        {full:"wine"},
        {full:"all"}        
      ];
    }
}
export default ProductService; 