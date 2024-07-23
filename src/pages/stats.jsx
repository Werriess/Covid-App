import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Card from "../components/cards";
import "../css/index.css";

async function getData(setData, setLoading) {
  setLoading(true);
  try {
    const response = await fetch('http://localhost:5000/api/data');
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchButton, setSearchButton] = useState(false);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  const handleShowStats = () => {
    console.log("Show statistics clicked");
    getData(setData, setLoading);
    setSearchButton(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="stats-main">
        <div className="stats-buttons-block">
          <Card prop={{ name: "World Map" }} />
          <Card prop={{ name: "Heat Map" }} />
          <Card prop={{ name: "Show statistics"}} onClick= {handleShowStats} />
        </div>
        <div className="stats-blocks">
          {searchButton && (
            <>
              <input
                type="text"
                id="searchBar"
                placeholder="Search for a country"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {loading ? (
                <div className="loader"></div>
              ) : Array.isArray(filteredData) ? (
                <div className="info-block">
                  <table>
                    <thead>
                      <tr>
                        <th>Continent</th>
                        <th>Country</th>
                        <th>Cases</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.continent}</td>
                          <td>{item.country}</td>
                          <td>{item.totalCases}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>{data}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
