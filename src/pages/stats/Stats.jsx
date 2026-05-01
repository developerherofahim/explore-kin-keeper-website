import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';


const Stats = () => {

    const { storedFriend } = useContext(FriendContext);
    console.log(storedFriend);


    const callCount = storedFriend.filter(item => item.type === "call").length;
    const textCount = storedFriend.filter(item => item.type === "text").length;
    const videoCount = storedFriend.filter(item => item.type === "video").length;


    const data = [
        { name: 'Call', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' }
    ];


    if (storedFriend.length == "0") {
        return <div className='bg-[#F8FAFC] py-20 px-16 md:px-40 lg:px-60'>
            <div className='flex justify-center items-center px-8 py-20 bg-white shadow-sm rounded-2xl'>
                <h2 className='text-5xl font-bold text-[#244D3F]'>No Data Available</h2>
            </div>
        </div>
    }


    return (
        <div className='bg-[#F8FAFC] py-20 px-16 md:px-40 lg:px-60'>
            <h2 className='text-5xl font-bold text-[#1F2937]'>FriendShip Analytics</h2>
            <div className='px-8 py-6 bg-white shadow-sm mt-6 rounded-2xl' >
                <h2 className='text-xl font medium'>By Interaction Type</h2>
                <div className='flex justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="10%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                        />
                            
                        <Legend wrapperStyle={{marginTop: 24}} />

                        <Tooltip />
                    </PieChart>

                </div>
            </div>
        </div>
    )
};

export default Stats;