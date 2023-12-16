import axios from "axios";

const CATEGORY_API = 'http://localhost:8282/api/categories/'; 
const PRODUCT_API = 'http://localhost:8282/api/products/'; 


class Services {

  getAllProducts(){
    return axios.get(PRODUCT_API);
  }

  getAllCategories(){
    return axios.get(CATEGORY_API);
  }
}

export default new Services();