import { use } from "react";
import FriendsCard from "../../../ui/FriendsCard";

const friendPromise = fetch('/data.json').then((res) => res.json());

const Friends = () => {

    const friends = use(friendPromise);
    // console.log(friends)

    return (
        <div className="px-16 md:px-40 lg:px-60">
            <h2 className="text-2xl font-semibold">Your Friends</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    friends.map((friend,index)=><FriendsCard key={index} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;