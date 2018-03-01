const ProductService =  {

    listProductsInCart: (cart, products) => {
      const results = [];
      if(!cart|| !cart.lst) {return results;}
      Object.keys(cart.lst).forEach(el => {
        const index = products.findIndex(elem => elem.id === parseInt(el, 10));
        if(index >- 1 && cart.lst[el]){
          results.push({ 
            id: products[index].id,
            name: products[index].name, 
            img: products[index].img, 
            descr: `${products[index].descr[0]} ...`,
            qty: cart.lst[el]
          });
        }
      });
      return results;
    },

    sumCartQty: (cart) => {
      if(!cart || !cart.lst || cart.lst.length<1) {
        return 0;
      }
      const result = Object.keys(cart.lst).reduce((acc,el) => {return acc+cart.lst[el] }, 0);
      return result;
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