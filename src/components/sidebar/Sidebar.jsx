// import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C5103AQHI6p8E8J-pyw/profile-displayphoto-shrink_200_200/0/1567059412900?e=1648080000&v=beta&t=GBZztxZ0Fb4yJyUwLyBlVj8oWJ8IacW9pDN_tvxcDVU"
                    alt=""
                />
                <p>Hello!!
                    I'm Afsana Akter Eva. I'm a React Developer. I have graduated B.Sc focused on Computer Science & Engineering from
                    Southeast University. I am a
                    hard-working, self-learner, and passionate about solving problems
                    while working in a team.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">

                        Life

                    </li>
                    <li className="sidebarListItem">

                        Music

                    </li>
                    <li className="sidebarListItem">

                        Sport

                    </li>
                    <li className="sidebarListItem">

                        Style

                    </li>
                    <li className="sidebarListItem">

                        Tech
                    </li>

                    <li className="sidebarListItem">

                        Cinema

                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
