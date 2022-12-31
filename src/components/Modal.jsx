
export const Modal = ({ modalVisible, setModalVisible, modalName }) => (

    <section className=

        {modalVisible === false ? "hidden" :
            "flex flex-col absolute items-center justify-center bg-neutral-700 w-2/3 max-w-[350px] h-1/2 max-h-[200px] rounded-md p-3 text-sm text-center text-red-200"
        }
    >


        <p>Hi, this is a simulation.</p>
        <p>But in real world, you would send a directly message or email to {modalName}</p>

        <button
            onClick={() => setModalVisible(false)}
            className="bg-red-200 rounded-md text-neutral-700 pl-4 pr-4 pt-1 pb-1 mt-3"
        >
            close
        </button>
    </section>
)