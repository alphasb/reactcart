import Food from "./Food";

const lang = 'en'; // hard-coded for now

const ProductCallDev = new Promise( (resolve) => {
    const result=[];
    
    Object.keys(Food).forEach(el => {
      const folder = el.split('_')[0];
      result.push({
        id: Food[el].id,
        name: Food[el][lang].name,
        descr: Food[el][lang].descr,
        keys: Food[el][lang].keys,
        img: `./${folder}/${el}.png`
      })
    });

    resolve (result);
  });
  const ProductCallProd = () => {
      
  };  

const ProductApi = {
    loadProductList: () => 
      (process.env.REACT_APP_ENV === 'PROD' ?  ProductCallProd : ProductCallDev)  
  }
  
  export default ProductApi;


