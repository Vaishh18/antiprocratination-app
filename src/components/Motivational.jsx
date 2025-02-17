/* eslint-disable no-unused-vars */
import React from 'react'


const quotes=[
   "Small steps add up!",
  "Just start – momentum will follow",
  "1% better every day",
  "Procrastination is the thief of time.",
"Do not put off until tomorrow what you can do today.",
"The only way to get rid of procrastination is to do it.",
"Start anywhere.",
"The best time to plant a tree was 20 years ago. The second best time is today.",
"Someday is a disease that kills all your dreams.",
"The journey of a thousand miles begins with a single step."
  
]
function Motivational() {
    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  return (
    <div>{randomQuote}</div>
  )
}

export default Motivational