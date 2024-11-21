import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import AppContext from "../context/AuthContext";

const ProductDetailsPage = () => {
  const param = useParams();
  const [product, setProduct] = useState(null);
  const { authState, loadingTrue, loadingFalse } = useContext(AppContext);

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3000/products/${id}`)
  //       .then((res) => setProduct(res.data))
  //       .catch(() => setProduct(null))
  //       .finally(() => setLoading(false));
  //   }, [id]);
  console.log(param);
  async function fetchingData(param) {
    try {
      let response = await axios.get(
        `http://localhost:3000/products/${param.id}`
      );
      //   let data = await response.json();
      console.log(response);

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData(param);
  }, []);
  console.log(product);
  if (authState.isLoading) return <Loading />;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p className="category">{product.category}</p>
      <p className="price">Price: {product.price}</p>
      <p className="location">Location: {product.location}</p>
      <p className="seller">Seller: {product.seller?.name}</p>
      <p className="email">Email: {product.seller?.email}</p>
      <div className="images">
        <img src={product.images} alt={product.title} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
