import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const TimeChart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const lineChart = (
    dailyData[0] ? (
      <Line className={styles.line}
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.cases),
            label: 'Confirmed Cases',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      <h3 style={{margin: 'auto'}}>Confirmed Cases Vs Deaths in the USA Over Time</h3>
      {lineChart}
    </div>
  );
};

export default TimeChart;
