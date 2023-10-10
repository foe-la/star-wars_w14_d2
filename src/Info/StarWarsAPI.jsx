const getInfo = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/`);
    const data = await response.json();
    if (response.ok) {
      return data.results;
    } else {
      throw new Error("Error");
    }
  };
  
  export default getInfo;