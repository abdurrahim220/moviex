import { useEffect, useState } from "react";

import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch()
  const {url}=useSelector((state)=>state.home)
  // console.log(url)
  useEffect(() => {
    fetchDataFromApi("/movie/popular").then((res) => {
      // console.log(res);
      dispatch(getApiConfiguration(res))
    });
  }, []);

  return <>
  <div>
    {url?.total_pages}
  </div>
  </>;
}

export default App;
