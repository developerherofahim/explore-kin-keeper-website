import { Link } from "react-router";

const FriendsCard = ({ friend }) => {

    if (!friend) return null; // safety

    const { picture, name, status, days_since_contact, id, tags } = friend;

    return (
        <Link to={`/friendDetails/${id}`}>
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

                    <p>{days_since_contact} Days Ago</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                        {
                            tags?.map((tag, index) => (
                                <span key={index} className="badge badge-success text-[12px] font-medium rounded-full">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>

                   
                    <div className={`badge mt-2 text-xs font-medium rounded-full ${status === 'overdue'? 'bg-red-500 text-white':''} ${status === 'almost due'? 'bg-yellow-500 text-white':''} ${status === 'on-track'? 'bg-green-700 text-white':''}`}>
                        {status}
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;
//  {
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
