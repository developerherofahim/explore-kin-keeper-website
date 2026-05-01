import { createContext, useState } from "react";


export const FriendContext = createContext()

const FriendProvider = ({ children }) => {


    const [storedFriend, setStoredFriend] = useState([]);


    const handleInteraction = (currentFriend,type) => {
     

            setStoredFriend([...storedFriend, {...currentFriend, type}])
            // console.log(storedFriend, currentFriend, setStoredFriend)
        
    }

    const data = {
        handleInteraction,
        storedFriend,
        setStoredFriend
    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default FriendProvider;