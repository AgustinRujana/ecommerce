//Images
import Facebook from './img/Facebook.svg';
import Instagram from './img/Instagram.svg';
import Linkedin from './img/Linkedin.svg';
import Youtube from './img/Youtube.svg';

const SocialMediaIcons = () =>{
    return <>
    <img width={32} height={32} className="mr-3" src={Instagram} alt='Instagram Link'/>
    <img width={32} height={32} className="mr-3" src={Facebook} alt='Facebook Link'/>
    <img width={32} height={32} className="mr-3" src={Linkedin} alt='Linkedin Link'/>
    <img width={32} height={32} className="mr-3" src={Youtube} alt='Youtube Link'/>
    </>
}

export default SocialMediaIcons;