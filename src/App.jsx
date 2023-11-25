import { useEffect, useState } from "react";

import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url)
  useEffect(() => {
    fetchDataFromApi("/movie/popular").then((res) => {
      // console.log(res);
      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url));
    });
  }, []);

  return (
    <>
      <div>{url?.total_pages}</div>
    </>
  );
}

export default App;
