import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';

import CarrotIcon from '../icons/img/CarrotIcon_White.svg';
import RadishIcon from '../icons/img/RadishIcon_White.svg';
import OilIcon from '../icons/img/OilIcon_White.svg';
import FlourIcon from '../icons/img/FlourIcon_White.svg';
import SeedsIcon from '../icons/img/SeedsIcon_White.svg';


const FooterCategoryList = () => {

    return <>
    <Media>
        <img width={32} height={32} className="mr-3" src={CarrotIcon} alt="Generic placeholder"/>
        <Media.Body>
            <Link to={`/categories/Frutas`}><p className='mt-1'>Frutas</p></Link>
        </Media.Body>
    </Media>
    <Media>
        <img width={32} height={32} className="mr-3" src={RadishIcon} alt="Generic placeholder"/>
        <Media.Body>
            <Link to={`/categories/Verduras`}><p className='mt-1'>Verduras</p></Link>
        </Media.Body>
    </Media>
    <Media>
        <img width={32} height={32} className="mr-3" src={OilIcon} alt="Generic placeholder"/>
        <Media.Body>
            <Link to={`/categories/Aceites`}><p className='mt-1'>Aceites</p></Link>
        </Media.Body>
    </Media>
    <Media>
        <img width={32} height={32} className="mr-3" src={SeedsIcon} alt="Generic placeholder"/>
        <Media.Body>
            <Link to={`/categories/Semillas`}><p className='mt-1'>Semillas</p></Link>
        </Media.Body>
    </Media>
    </>
}

export default FooterCategoryList;