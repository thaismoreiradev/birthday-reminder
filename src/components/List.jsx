import { FaTrashAlt } from 'react-icons/fa'





export const List = ({ friends, setFriends, setModalVisible, setModalName }) => (



    <>


        {friends.map((person) => {
            const { id, name, age, image } = person;
            return <article key={id} className="flex gap-3 bg-red-100 w-full xs:w-4/5 rounded-md p-3 mb-1 text-xs justify-center">

                <img src={image}
                    className="w-20 rounded-full"
                />

                <div className='flex flex-col justify-center gap-1'>

                    <div>
                        <h4>{name}</h4>
                        <p>{age} years old</p>
                    </div>

                    <div className='flex gap-1'>
                        <button className='bg-neutral-800 rounded-md text-red-100 pl-3 pr-3 pt-[1px] pb-1'

                            onClick={() => {

                                setModalVisible(true)
                                setModalName(person.name)
                            }}
                        >message</button>



                        <button
                            onClick={
                                () => setFriends(prevFriends => prevFriends.filter((person) => person.id !== id))
                            }
                        ><FaTrashAlt

                                className='text-base text-neutral-800' /></button>
                    </div>

                </div>





            </article>

        })}

    </>

)