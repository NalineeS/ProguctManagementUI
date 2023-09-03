import React, { useEffect, useState } from "react";
import ProductService from "../service/product-service";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productname: "",
    description: "",
    price: "",
    status: "",
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    ProductService.getProductById(id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const updateProduct = (e) => {
    e.preventDefault();
    console.log(product);
    ProductService.editProduct(product)
      .then((response) => {
        console.log(response.data);
        setMsg("Product Updated Successfully");
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setMsg("Error..! Something Went Wrong");
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">
              <h4>Edit Product Details</h4>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => updateProduct(e)}>
                <div className="mb-3">
                  <label>Enter Product Name</label>
                  <input
                    type="text"
                    name="productname"
                    value={product.productname}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Product Description</label>
                  <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Product Price</label>
                  <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Product Status</label>
                  <input
                    type="text"
                    name="status"
                    value={product.status}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    required
                  />
                </div>
                <button className="btn btn-primary col-md-12">
                  Update Product
                </button>
                {msg && <p className="fs-6 text-center text-success">{msg}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
