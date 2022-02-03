import "./footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li>UI Design</li>
                            <li>Java</li>
                            <li>Android</li>
                            <li>Templates</li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Contribute</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved. </p>
                       
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;