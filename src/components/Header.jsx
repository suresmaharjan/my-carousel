import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import { FcAbout, FcServices } from "react-icons/fc";
import "./header.css";

const Header = () => {
    const [active, setActive] = useState(1);
    const [fixed, setFixed] = useState(false);
    const navbar = useRef()
    const menuItems = [
        { title: "Home", id: "1", path: "/" },
        { title: "About", id: "2", path: "about" },

    ]

    window.onscroll =  function (){
        return this.scrollY ? setFixed(true) : setFixed(false);
    }

    return (
        <Navbar
            collapseOnSelect="true"
            className={fixed ? "dark" : "light"}
            variant="dark"
            fixed="top"
            expand="lg"
            ref={navbar} >
            <Link to="/"
                className="navbar-brand"
            // onClick={() => setActive(0)}
            >
                Sures Man</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="placeHolder"></div>

                    {menuItems.map(menuItem => (
                        <Nav.Link
                            as={Link}
                            key={menuItem.id}
                            onClick={() => setActive(menuItem.id)}
                            className={active === menuItem.id ? "active" : ""}
                            to={menuItem.path}
                            href={menuItem.path}
                        >

                            {/* <menuItem.icon /> */}
                            {menuItem.icon && <menuItem.icon />}
                            {menuItem.title}
                        </Nav.Link>
                    ))}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;