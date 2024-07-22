import React, { useState } from "react";
import Header from "../components/header";
import Card from "../components/cards";
import "../css/index.css";

const url = "https://covid-193.p.rapidapi.com/statistics";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "66129a222fmshcb15fef642d1503p1e94f9jsn5608c8044300",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

async function getData(setData, setLoading) {
  setLoading(true);
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    const specificData = result.response.map((item) => ({
      continent: item.continent,
      country: item.country,
      totalCases: item.cases.total,
    }));

    setData(specificData);
  } catch (error) {
    console.error(error);
    setData("Error fetching data");
  } finally {
    setLoading(false);
  }
}

function Stats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShowStats = () => {
    console.log("Show statistics clicked");
    getData(setData, setLoading);
  };

  return (
    <div>
      <Header />
      <div className="stats-main">
        <div className="stats-buttons-block">
          <Card prop={{ name: "World Map" }} />
          <Card prop={{ name: "Heat Map" }} />
          <Card prop={{ name: "Show statistics" }} onClick={handleShowStats} />
        </div>
        <div className="stats-blocks">
          {loading ? (
            <div className="loader"></div>
          ) : Array.isArray(data) ? (
            data.map((item, index) => (
              <div key={index}>
                <strong>{item.country}:</strong> {item.totalCases} cases
                <br />
              </div>
            ))
          ) : (
            <p>{data}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
