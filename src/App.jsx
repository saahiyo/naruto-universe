import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Tags from "./components/Tags";
import Cards from "./components/Cards";
import axios from "axios";

const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://narutodb.xyz/api/character?page=1&limit=84"
      );
      const dataLength = res.data.characters.length;
      dataLength > 0 && setdata(res.data.characters);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container bg-[#111] w-full h-screen flex justify-center items-center">
        <h1 className="text-orange-500 text-3xl">Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-container bg-[#111] w-full h-screen flex justify-center items-center">
        <h1 className="text-orange-600 text-3xl">we got some Error</h1>
      </div>
    );
  }

  return (
    <div className="main-container w-full bg-[#111] min-h-screen">
      <Navbar />
      <Tags />
      <div className="cardContain flex flex-wrap gap-4 p-6">
        {data.map((item) => (
          <Cards key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
