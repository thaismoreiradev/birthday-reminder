import { useState } from 'react'
import Data from './Data.jsx'
import List from './List.jsx'

function App() {

  const [friends, setFriends] = useState(Data)

  return (
    <main>

      {/* principal container */}
      <section>
        <h1>Birthday Reminder</h1>
        <h3>{friends.length} birthdays today</h3>
        <List
          friends={friends}
        ></List>
        <button>Clear All</button>


      </section>
    </main>
  )
}

export default App
