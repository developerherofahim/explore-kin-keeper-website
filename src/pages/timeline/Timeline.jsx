import { useContext, useEffect,useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import Call from '../../assets/images/call.png'
import Text from '../../assets/images/text.png'
import Video from '../../assets/images/video.png'
import { ChevronDown } from 'lucide-react';

const Timeline = () => {

    const { storedFriend } = useContext(FriendContext);
    console.log(storedFriend);
    const [sortingType, setSortingType] = useState("")
    // console.log(sortingType, 'sortingType')

    const [filterStoredFriend, setFilterStoredFriend] = useState(storedFriend);

    useEffect(() => {
        if (!sortingType) {
            // show all data
            setFilterStoredFriend(storedFriend);
        } else {
            const filtered = storedFriend.filter(
                (item) => item.type === sortingType
            );
            setFilterStoredFriend(filtered);
        }
    }, [sortingType, storedFriend]);

      if (storedFriend.length == "0") {
        return <div className='bg-[#F8FAFC] py-20 px-16 md:px-40 lg:px-60'>
            <div className='flex justify-center items-center px-8 py-20 bg-white shadow-sm rounded-2xl'>
                <h2 className='text-5xl font-bold text-[#244D3F]'>No Data Available</h2>
            </div>
        </div>
    }

    return (
        <div className='bg-[#F8FAFC] py-20 px-16 md:px-40 lg:px-60'>
            <h2 className='text-5xl font-bold text-[#1F2937]'>Timeline</h2>
            <div className="dropdown mt-6">
                <div tabIndex={0} role="button" className="btn m-1"><span>Filter Timeline</span><span><ChevronDown /></span></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSortingType("")}><a>All</a></li>
                    <li onClick={() => setSortingType("call")}><a>Call</a></li>
                    <li onClick={() => setSortingType("text")}><a>Text</a></li>
                    <li onClick={() => setSortingType("video")}><a>Video</a></li>
                </ul>

            </div>
            <div className='flex flex-col gap-y-3 mt-6'>
                {
                    filterStoredFriend.map((friend, index) =>
                        <div key={index} className='flex gap-4 p-4 bg-white shadow-sm'>
                            <img src={friend.type == 'call' ? Call : friend.type == 'video' ? Video : Text} alt="Call Icon" />
                            <div>
                                <h2><span className='text-xl font-medium text-[#244D3F]'>{friend.type == 'call' ? 'Call' : friend.type == 'text' ? 'Text' : 'Video'} With</span> <span className='text-[18px] text-[#64748B]'>{friend.name}</span></h2>
                                <p className='text-[#64748B]'>{new Date().toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Timeline;