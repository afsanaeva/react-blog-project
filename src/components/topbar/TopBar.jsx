import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft d-flex align-items-center justify-content-center">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topMiddle ">
                <ul className="topList d-flex justify-content-center">
                    <Link className="link topListIteam" to="/">HOME</Link>
                    <Link className="link topListIteam" to="/blogs">BLOG</Link>
                    <Link className="link topListIteam" to="/contact">CONTACT</Link>
                    <Link className="link topListIteam" to="/register">REGISTER</Link>
                </ul>
            </div>
            <div className="topRight d-flex align-items-center justify-content-center">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg  rounded-circle"
                            src="https://media-exp1.licdn.com/dms/image/C5103AQHI6p8E8J-pyw/profile-displayphoto-shrink_200_200/0/1567059412900?e=1648080000&v=beta&t=GBZztxZ0Fb4yJyUwLyBlVj8oWJ8IacW9pDN_tvxcDVU"
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>

            </div>















            {/* <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item  className="topLeft">
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="topMiddle">
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="topRight">
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav> */}
        </div>
    )
}
