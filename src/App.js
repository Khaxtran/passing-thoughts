import React, { useState } from 'react';
import './style.css';

import {AddThoughtForm} from './AddThoughtForm';
import {Thoughts} from './Thoughts';
import {generateId, getNewExpirationTime} from './utilities';

const App = () => {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    }

  ])
  const addThought = (thought) => {
    setThoughts((prev) => [thought, 
    ...prev]);
  }
  return (
   <div className='App'>
     <header>
       <h1>💭 Passing Thoughts</h1>
     </header>
     <main>
       <AddThoughtForm />
       <ul>
         {thoughts.map((thought) => (
           <Thoughts key={thought.id}
                    thought={thought}/>
         ))}
       </ul>
     </main>
   </div>
  );
}

export default App;
