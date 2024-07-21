import React, { useState } from 'react';
import Header from "../components/header";

const url = 'https://covid-193.p.rapidapi.com/statistics';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '66129a222fmshcb15fef642d1503p1e94f9jsn5608c8044300',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
};

async function getData(setData) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        const specificData = result.response.map(item => ({
            continent: item.continent,
            country: item.country,
            totalCases: item.cases.total
        }));

        setData(specificData);
    } catch (error) {
        console.error(error);
        setData('Error fetching data');
    }
}

function Stats() {
    const [data, setData] = useState('Data to be displayed');

    return (
        <div>
            <Header />
            <button onClick={() => getData(setData)}>Fetch Data</button>
            <div>
                {Array.isArray(data) ? data.map((item, index) => (
                    <div key={index}>
                        <p>Continent: {item.continent}</p>
                        <p>Country: {item.country}</p>
                        <p>Total Cases: {item.totalCases}</p>
                        <p>------------------------------</p>
                    </div>
                )) : <p>{data}</p>}
            </div>
        </div>
    );
}

export default Stats;
