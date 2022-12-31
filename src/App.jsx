import { useState } from 'react'
import { data } from './data.js'
import { List } from './components/List.jsx'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'




export const App = () => {


  const today = () => {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return (`${day}/${month}/${year}`)
  }

  const [friends, setFriends] = useState(data)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalName, setModalName] = useState("")


  return (

    <main className='flex flex-col p-2 items-center bg-red-50 h-full extraheight:h-screen '>

      {/* title */}
      <h1 className='text-3xl extraheight:text-4xl text-neutral-700 pb-2 extraheight:pb-1 font-fjalla extraheight:mt-7'>Birthday Reminder</h1>

      <div className='flex flex-col w-full h-full items-center extraheight:justify-around'>

        {/* principal container */}
        <section className='bg-red-200 p-3 extraheight:gap-2 rounded-md flex flex-col items-center justify-center w-5/6 min-h-[70vh] max-w-[400px]'>

          <div className='flex gap-3 text-sm pb-2'>
            <h2>{today()}</h2>
            <h3>{friends.length}
              {friends.length === 1 ? ' birthday ' : ' birthdays '}
              today</h3>
          </div>


          <List
            friends={friends}
            setFriends={setFriends}
            setModalVisible={setModalVisible}
            setModalName={setModalName}
          ></List>



          <button className='bg-neutral-700 rounded-md text-red-200 px-5 py-0 m-1'
            onClick={
              friends.length === 0 ?

                () => setFriends(data)
                :
                () => setFriends([])
            }
          >
            {
              friends.length === 0 ? "show again" : "clear all"
            }
          </button>



          {
            (friends.length >= 1 && friends.length !== data.length) &&
            <button className='text-neutral-800 text-xs'
              onClick={() => setFriends(data)}
            >
              show all birthdays again
            </button>
          }


          {/* modal for button message */}
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalName={modalName}
          />


        </section>
        <Footer />
      </div>
    </main>
  )
}
