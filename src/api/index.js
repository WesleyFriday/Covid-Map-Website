import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://disease.sh/v3/covid-19/nyt/usa');
  
      return data.map(({ cases, deaths, date }) => ({ cases, deaths, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
