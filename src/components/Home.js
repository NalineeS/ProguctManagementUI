import React, { useEffect, useState } from "react";
import ProductService from "../service/product-service";
import { Link } from "react-router-dom";

const Home = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    init();
  }, []);
  const [msg, setMsg] = useState("");
  const init = () => {
    ProductService.getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProductlist(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteProduct = (id) => {
    ProductService.deleteProduct(id)
      .then((res) => {
        setMsg("Product deleted successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
        setMsg("Something went wrong");
      });
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header text-center">
                <h3 className="text-danger">List Of All Products</h3>
              </div>
              <div className="card-body">
                {msg && <p className="fs-6 text-center text-success">{msg}</p>}
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productlist.map((p, num) => (
                      <tr key={p.id}>
                        <td>{num + 1}</td>
                        <td>{p.productname}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <Link to={'/editproduct/'+p.id} className="btn btn-warning btn-sm">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-danger btn-sm ms-1">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
