import { FaTrashAlt } from 'react-icons/fa'





const removePerson = (id) => {
    setFriends(friends.filter(person => person.id !== id))
}


export const List = ({ friends, setFriends }) => (



    <>


        {friends.map((person) => {
            const { id, name, age, image } = person;
            return <article key={id} className="flex gap-3 bg-red-300 w-full rounded-md p-3 mb-1 text-xs justify-center">

                <img src={image}
                    className="w-20 rounded-full"
                />

                <div className='flex flex-col justify-center gap-1'>

                    <div>
                        <h4>{name}</h4>
                        <p>{age} years old</p>
                    </div>

                    <div className='flex gap-1'>
                        <button className='bg-neutral-900 rounded-md text-red-200 pl-2 pr-2 pt-[1px] pb-1'>message</button>
                        <button><FaTrashAlt
                            onClick={() => removePerson(person.id)}
                            className='text-base text-neutral-900' /></button>
                    </div>

                </div>



            </article>

        })}

    </>

)