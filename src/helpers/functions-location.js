const ISS_URL = 'https://api.wheretheiss.at/v1/satellites/25544';

export const fetchApi = async (setIsLoading, setLongitude, setLatitude) => {
  setIsLoading(true);
  try {
    let data = await fetch(ISS_URL);
    data = await data.json();
    setLongitude(data.longitude);
    setLatitude(data.latitude);
  } catch (error) {
    console.error(error);
  }
  setIsLoading(false);
};
