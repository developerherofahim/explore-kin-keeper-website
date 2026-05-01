import Banner from "../../components/homepage/Banner";
import Friends from "../../components/homepage/friends/Friends";


const HomePage = () => {
    return (
        <div className="bg-[#F8FAFC] py-20">
            <Banner/>
            <Friends/>
        </div>
    );
};

export default HomePage;