import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  const fetchGreeting = async () => {
    const response = await fetch('http://localhost:3000/greetings/random');
    const data = await response.json();
    setGreeting(data.greeting);
  };

  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
