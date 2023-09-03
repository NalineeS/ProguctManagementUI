import axios from "axios";

const base_url = "http://localhost:8080/product";
class ProductService {
  saveroduct(product) {
    return axios.post(base_url + "/saveproduct", product);
  }

  getAllProducts() {
    return axios.get(base_url + "/");
  }

  getProductById(id) {
    return axios.get(base_url + "/" + id);
  }

  deleteProduct(id) {
    return axios.delete(base_url + "/delete/" + id);
  }

  editProduct(product) {
    console.log("in service id"+product.id+ "product"+ product);
    return axios.put(base_url + "/edit/"+ product.id, product);
  }
}

export default new ProductService();
