import footerLogo from '../../assets/images/logo-xl.png'
import Twitter from '../../assets/images/twitter.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-primary-content p-12">
            <div className='flex flex-col gap-4'>
                <figure className='flex justify-center items-center'>
                    <img src={footerLogo} alt="" />
                </figure>
                <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <nav className='flex flex-col justify-center items-center gap-6 mt-6'>
                <h2 className='text-xl font-medium text-white text-center'>Social Links</h2>
                <div className="flex gap-3">
                    <a>
                      <img src={Twitter} alt="" />
                    </a>
                    <a>
                      <img src={Instagram} alt="" /> 
                    </a>
                    <a>
                        <img src={Facebook} alt="" /> 
                    </a>
                </div>
            </nav>
            <div className="h-0.5 bg-white/30 my-6 mx-10 lg:mx-50"></div>
            <div className='flex justify-between items-center w-full px-50 flex-col gap-4 lg:flex-row'>
                <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <ul className='flex gap-4 justify-between items-center'>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Terms Of Services</a></li>
                    <li><a>Cookies</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;