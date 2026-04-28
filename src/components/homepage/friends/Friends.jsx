import { use } from "react";

const friendPromise = fetch('/data.json').then((res) => res.json());

const Friends = () => {

    const friends = use(friendPromise);
    console.log(friends)

    return (
        <div>
            Friends
        </div>
    );
};

export default Friends;