import { Archive, Bell, Trash2 } from "lucide-react";
import { useLoaderData, useParams } from "react-router";
import Call from '../../assets/images/call.png'
import Text from '../../assets/images/text.png'
import Video from '../../assets/images/video.png'
import { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";


const FriendDetails = () => {
    const { friendId: friendParamsId } = useParams();
    const friends = useLoaderData();
    // console.log(friendParamsId)
    // console.log(friends)

    const expectedFriend = friends.find((friend) => friend.id === Number(friendParamsId))
    // console.log(expectedFriend)

    const {
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date
    } = expectedFriend;

    // const friendData = useContext(FriendContext);
    // console.log(friendData);


  const {handleInteraction}= useContext(FriendContext);

    return (
        <div className="py-20 px-16 md:px-40 lg:px-60 bg-[#F8FAFC]">
            <div className=" flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/3 flex flex-col gap-y-2 lg:gap-x-2">
                    <div className="card bg-base-100 shadow-sm">

                        <figure className="px-10 pt-10">
                            <img
                                src={picture}
                                alt={name}
                                className="rounded-full w-24 h-24 object-cover"
                            />
                        </figure>

                        <div className="card-body items-center text-center">

                            <h2 className="card-title text-xl font-semibold">
                                {name}
                            </h2>

                            <div className={`badge mt-2 text-xs font-medium rounded-full ${status === 'overdue' ? 'bg-red-500 text-white' : ''} ${status === 'almost due' ? 'bg-yellow-500 text-white' : ''} ${status === 'on-track' ? 'bg-green-700 text-white' : ''}`}>
                                {status}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {
                                    tags?.map((tag, index) => (
                                        <span key={index} className="badge badge-success text-[12px] font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>

                            <p className="text-[#64748B] text-[14px] font-medium italic">"{bio}"</p>

                            <p className="text-[#64748B] text-[14px]">Email: {email}</p>

                        </div>
                    </div>
                    <div className="bg-white shadow-sm rounded-2xl p-4">
                        <div className="flex gap-2 justify-center items-center">
                            <span><Bell /></span>
                            <h2 className="font-medium">Snooze 2 Weeks</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm rounded-2xl p-4">
                        <div className="flex gap-2 justify-center items-center">
                            <span><Archive /></span>
                            <h2 className="font-medium">Archive</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm rounded-2xl p-4">
                        <div className="flex gap-2 justify-center items-center">
                            <span className="text-red-500"><Trash2 /></span>
                            <h2 className="font-medium text-red-500 text-center">Delete</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
                        <div className="bg-white shadow-sm rounded-2xl p-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-3xl text-[#244D3F] text-center">{days_since_contact}</h2>
                                <p className="text-[18px] text-center">Days Since Contact</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-sm rounded-2xl p-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-3xl text-[#244D3F] text-center">{goal}</h2>
                                <p className="text-[18px] text-center">Goal (Days)</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-sm rounded-2xl p-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-3xl text-[#244D3F] text-center">{next_due_date}</h2>
                                <p className="text-[18px] text-center">Next Due</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm rounded-2xl p-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-medium text-[#244D3F]">RelationShip Goal</h2>
                            <button className="btn text-[14px] ">Edit</button>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <span className="text-[18px]">Connect Every</span>
                            <span className="text-[18px] font-bold">{goal} days</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm rounded-2xl p-6">
                        <h2 className="text-xl font-medium text-[#244D3F]">Quick Check-In</h2>
                        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-6 mt-4">
                            <button onClick={()=>handleInteraction(expectedFriend,'call')}  className="cursor-pointer bg-white shadow-sm rounded-2xl p-8 flex flex-col justify-center items-center gap-2">
                                <img src={Call} alt="Call-Icon" />
                                <p className="text-[18px]">Call</p>
                            </button>
                            <button onClick={()=>handleInteraction(expectedFriend,'text')} className="bg-white cursor-pointer shadow-sm rounded-2xl p-8 flex flex-col justify-center items-center gap-2">
                                <img src={Text} alt="Text-Icon" />
                                <p className="text-[18px]">Text</p>
                            </button>
                            <button onClick={()=>handleInteraction(expectedFriend,'video')} className="bg-white cursor-pointer shadow-sm rounded-2xl p-8 flex flex-col justify-center items-center gap-2">
                                <img src={Video} alt="Video-Icon" />
                                <p className="text-[18px]">Video</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
// {
//     "id": 1,
//     "name": "Arafat Hossain",
//     "picture": "https://randomuser.me/api/portraits/men/32.jpg",
//     "email": "arafat.hossain@gmail.com",
//     "days_since_contact": 18,
//     "status": "overdue",
//     "tags": ["college", "close friend"],
//     "bio": "We studied Computer Science together at university and built multiple class projects late at night.",
//     "goal": 14,
//     "next_due_date": "2026-04-10"
//   },