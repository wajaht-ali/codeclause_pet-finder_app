import '../styling/Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { MdMail, MdPhone } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterCircle, AiFillGooglePlusSquare, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
    return (
        <div className='header'>
            <div className="topbar">
                <div className="contact-info">
                    <MdPhone />
                    <p>123-555-555</p>
                    <MdMail />
                    <p>info@petfinder.com</p>
                </div>
                <div className="icons">
                    <NavLink className="svg" to={"http://www.facebook.com"}><AiFillFacebook /></NavLink>

                    <NavLink className="svg" to={"http://www.facebook.com"}><AiFillTwitterCircle /></NavLink>

                    <NavLink className="svg" to={"http://www.facebook.com"}><AiFillGooglePlusSquare /></NavLink>

                    <NavLink className="svg" to={"http://www.facebook.com"}><AiFillLinkedin /></NavLink>

                </div>
            </div>
            <div className="navbar">
                <div className="logo">
                    <MdMail />
                    <Link to={'/'} className='link'><h2>Pet Finder</h2></Link>
                </div>
                <div className="nav-items">
                    <ul>
                        <li className='current'>
                            <Link to={"/"} >Home</Link>
                        </li>
                        <li>About</li>
                        <li>
                            <Link className='link' to={"/services"}> Services </Link>
                        </li>
                        <li>
                        <Link className='link' to={"/pricing"}> Pricing </Link>
                        </li>
                        <li>
                            <Link className='link' to={"/contact"}> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;