
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const FriendContext = createContext()

const FriendProvider = ({ children }) => {


    const [storedFriend, setStoredFriend] = useState([]);


    const handleInteraction = (currentFriend, type) => {


        setStoredFriend([...storedFriend, { ...currentFriend, type }])
        // console.log(storedFriend, currentFriend, setStoredFriend)
        if (type === "call") {
            toast.success(`Successfully Call With ${currentFriend.name}`);
        }
        else if (type === "text") {
           toast.success (`Successfully Text With ${currentFriend.name}`);
        }
        else if (type === "video") {
            toast.success(`Successfully Video With ${currentFriend.name}`);
        }

    }

    const data = {
        handleInteraction,
        storedFriend,
        setStoredFriend
    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default FriendProvider;