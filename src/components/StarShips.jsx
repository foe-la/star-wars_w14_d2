import React, { useState, useEffect } from 'react';

function StarShips() {
  const [state, setState] = useState({ ships: [], isLoading: true });

  useEffect(() => {
    async function fetchStarShips() {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        if (response.ok) {
          const data = await response.json();
          const allStarships = data.results;

          if (Array.isArray(allStarships)) {
            
            const randomStarships = shuffleArray(allStarships);

            setState({ starships: randomStarships.slice(0, 10), isLoading: false });
          }
        }
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }

    fetchStarships();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  }
  //somethings not working

export default StarShips;