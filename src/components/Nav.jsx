import React from 'react';

function Nav() {
  const handleRefreshClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <header>
      <h1>Star Wars Starships</h1>
      <button onClick={handleRefreshClick}>Generate New Starships</button>
    </header>
  );
}

export default Nav;