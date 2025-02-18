/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// StreakTracker.js
import React from 'react';

function StreakTracker({ streak }) {

  return (
    <div>
      <h3>🔥 Streak: {streak} days</h3>
      <p>Don&apos;t break the chain!</p>
    </div>
  );
}

export default StreakTracker;