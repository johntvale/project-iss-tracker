const ISS_URL = 'https://api.wheretheiss.at/v1/satellites/25544';
const ISS_CREW_URL = `https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json`;

export const getCurrentLocation = async (setLongitude, setLatitude) => {
  try {
    let data = await fetch(ISS_URL);
    data = await data.json();
    setLongitude(data.longitude);
    setLatitude(data.latitude);
  } catch (error) {
    console.error(error);
  }
};

export const getCrewInfo = async (setCrewList, setPeopleInSpace, setIsLoading) => {
  setIsLoading(true);
  try {
    let data = await fetch(ISS_CREW_URL);
    data = await data.json();
    setCrewList(data.people.filter(p => p.iss));
    setPeopleInSpace(data.people.filter(p => p.iss).length);
  } catch (error) {
    console.error(error);
  }
  setIsLoading(false);
};
