import Facebook from './img/Facebook.png';
import Instagram from './img/Instagram.png';
import Linkedin from './img/Linkedin.png';
import Youtube from './img/Youtube.png';

const SocialMediaIcons = () =>{
    return <>
    <img width={32} height={32} className="mr-3" src={Instagram} alt='Instagram Link'/>
    <img width={32} height={32} className="mr-3" src={Facebook} alt='Facebook Link'/>
    <img width={32} height={32} className="mr-3" src={Linkedin} alt='Linkedin Link'/>
    <img width={32} height={32} className="mr-3" src={Youtube} alt='Youtube Link'/>
    </>
}

export default SocialMediaIcons;