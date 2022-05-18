import React from 'react';
import {  Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

  const barChart = (
    confirmed ? (
      <Bar className={styles.bar}
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          plugins: {
            title: {
                display: true,
                text: 'Confirmed Cases Vs Recovered Vs Deaths'
            }
        }
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country && <h3 style={{margin: 'auto'}}>Confirmed Cases Vs Recovered Vs Deaths in {country}</h3>}
      {country ? barChart : null}
    </div>
  );
};

export default Chart;
