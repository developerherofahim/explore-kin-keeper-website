import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";


const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='bg-[#F8FAFC] py-20 px-16 md:px-40 lg:px-60'>
                <div className='flex flex-col justify-center items-center px-8 py-20 bg-white shadow-sm rounded-2xl'>
                    <h2 className='text-5xl font-bold text-[#244D3F]'>404</h2>
                    <h2 className='text-3xl font-bold text-[#244D3F] mt-4'>Page Not Found</h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;