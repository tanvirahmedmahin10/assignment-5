import logo from './Images/logo-text.png';

const Footer = () => {
    return (
        <div>
        <div className='container mx-auto flex justify-between my-15'>
            <div>
                <img className='my-2' src={logo} alt="" />
                <p className='my-4 text-slate-400'>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                    
                        <ul className='flex gap-4'>
                <li className='font-semibold'><a href="https://github.com/tanvirahmedmahin10">GitHub</a></li>
                <li className='font-semibold'><a href="https://x.com/UniqueMahin10">Twitter</a></li>
                <li className='font-semibold'><a href="https://www.linkedin.com/in/tanvir-ahmed-mahin-720255289/">Linkedin</a></li>
                </ul>
                
            </div>
            <div>
                <h2 className='font-semibold my-2'>PRODUCT</h2>
                <ul>
                <li className='my-1 text-slate-400'><a href="">Home</a></li>
                <li className='my-1 text-slate-400'><a href="">Technologies</a></li>
                <li className='my-1 text-slate-400'><a href="">Projects</a></li>
                
                </ul>
            </div>
            <div>
                <h2 className='font-semibold my-2'>COMPANY</h2>
                <ul>
                <li className='my-1 text-slate-400'><a href="">About</a></li>
                <li className='my-1 text-slate-400'><a href="">Contact</a></li>
                <li className='my-1 text-slate-400'><a href="">Careers</a></li>
                </ul>
            </div>
            <div>
                <h2 className='font-semibold my-2'>LEGAL</h2>
                <ul>
                <li className='my-1 text-slate-400'><a href="">Privacy Policy</a></li>
                <li className='my-1 text-slate-400'><a href="">Term of Service</a></li>
                </ul>
                
            </div>
        </div>
        <div className="divider my-9"></div>
        <div className='flex justify-between container mx-auto my-7'>
        <p className='text-slate-400'>© 2026 Dev Stack. All rights reserved.</p>
        <div className='flex gap-4'>
        <a className='text-slate-400' href="">Privacy</a>
        <a className='text-slate-400' href="">Terms</a>
        </div>
        </div>

        </div>
    );
};

export default Footer;