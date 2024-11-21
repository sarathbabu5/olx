import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import AppContext from "../context/AuthContext";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState();
  const { loadingTrue, loadingFalse, authState } = useContext(AppContext);
  const fetchData = async () => {
    try {
      loadingTrue();

      const res = await axios.get("http://localhost:3000/products");
      // console.log(res);
      setData(res.data);
      loadingFalse();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return authState.isLoading ? (
    <Loading />
  ) : (
    <div>
      <ProductCard data={data} />
    </div>
  );
};

export default Home;
