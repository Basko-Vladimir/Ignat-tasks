import React from "react";
import "../../App.css";
import {setTheme} from "../../redux/settings-reducer";
import {connect} from "react-redux";

const Wednesday = (props) => {
    const onSetTheme = (e) => {
        props.setTheme(e.currentTarget.value);

    };

    return (
        <div className={`wednesday ${props.themeStyle}`}>
            {props.themeStyle && <h1>Selected { props.themeStyle} theme</h1>}
            <div className={'themeChoose'}>
                <h3>Select theme page: </h3>
                <label>
                    <input type="radio" name="theme" value="dark" onClick={onSetTheme}/>
                    Dark theme
                </label>
                <label>
                    <input type="radio" name="theme" value="light" onClick={onSetTheme}/>
                    Light theme
                </label>
                <label>
                    <input type="radio" name="theme" value="color" onClick={onSetTheme}/>
                    Color theme
                </label>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        themeStyle: state.settings.style
    }
};

export default connect(mapStateToProps, {setTheme})(Wednesday);