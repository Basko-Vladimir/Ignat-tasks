import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

class Navbar extends React.Component {

    state = {
        isShowMenu: false
    };

    showMenu = () => {
        this.setState({
            isShowMenu: true
        })
    };

    hideMenu = () => {
        this.setState({
            isShowMenu: false
        })
    };

    render() {
        return (
            <div className={this.state.isShowMenu ? s.showMenu : s.navbar}
                 onMouseOver={this.showMenu}
                 onMouseOut={this.hideMenu}>
                <div className={s.daysBlock} >
                    <NavLink className={s.link} activeClassName={s.active} to={'/monday'}>
                        <span>Monday </span>
                    </NavLink>
                    <NavLink className={s.link} activeClassName={s.active} to={'/tuesday'}>
                        <span>Tuesday</span>
                    </NavLink>
                    <NavLink className={s.link} activeClassName={s.active} to={'/wednesday'}>
                        <span>Wednesday</span>
                    </NavLink>
                    <NavLink className={s.link} activeClassName={s.active} to={'/thursday'}>
                        <span>Thursday</span>
                    </NavLink>
                </div>
                <div className={this.state.isShowMenu ? s.titleHide : s.title }>Menu</div>
            </div>
        )
    }

}

export default Navbar;