import { Plus } from "lucide-react";


const Banner = () => {
    return (
        <div className="">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-7xl">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            <br />relationships that matter most.
                        </p>
                        <button className="btn font-semibold p-4 bg-[#244D3F] text-white"><Plus />Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-center items-center pt-10 mx-auto px-16 md:px-40 lg:px-60'>
                <div className='flex flex-col gap-2 justify-center items-center p-8 bg-white shadow-sm'>
                    <h2 className='text-3xl font-semibold text-center text-[#244D3F]'>10</h2>
                    <p className='text-center'>Total Friends</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center p-8 bg-white shadow-sm'>
                    <h2 className='text-3xl font-semibold text-center text-[#244D3F]'>3</h2>
                    <p className='text-center'>On Track</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center p-8 bg-white shadow-sm'>
                    <h2 className='text-3xl font-semibold text-center text-[#244D3F]'>6</h2>
                    <p className='text-center'>Need Attention</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center p-8 bg-white shadow-sm'>
                    <h2 className='text-3xl font-semibold text-center text-[#244D3F]'>12</h2>
                    <p className='text-center'>Interactions This Month</p>
                </div>
            </div>
            <div className="divider mx-10 lg:mx-60 mt-10"></div>
        </div>

    );
};

export default Banner;