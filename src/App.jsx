import { useState } from 'react'
import { data } from './data.js'
import { List } from './List.jsx'
import { Footer } from './Footer'





export const App = () => {


  const today = () => {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return (`${day}/${month}/${year}`)
  }


  const [friends, setFriends] = useState(data)





  return (

    <main className='flex flex-col items-center bg-yellow-50'>
      <h1 className='text-2xl text-neutral-900 pt-4 pb-3 font-fjalla'>Birthday Reminder</h1>


      {/* principal container */}
      <section className='bg-red-200 p-3 rounded-md flex flex-col items-center w-5/6'>

        <div className='flex gap-3 text-sm pb-2'>
          <h2>{today()}</h2>
          <h3>{friends.length} birthdays today</h3>
        </div>

        <List
          friends={friends}
          setFriends={setFriends}
        ></List>

        <button className='bg-neutral-900 rounded-md text-red-200 pl-4 pr-4 pt-1 pb-1 m-2'
          onClick={() => setFriends([])}
        >clear all</button>



      </section>
      <Footer />

    </main>
  )

}
