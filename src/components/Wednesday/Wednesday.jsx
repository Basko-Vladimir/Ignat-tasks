import React from "react";
import "../../App.css";
import {setTheme, updateCheckbox} from "../../redux/settings-reducer";
import {connect} from "react-redux";
import axios from "axios";

const Wednesday = (props) => {
    const onSetTheme = (e) => {
        props.setTheme(e.currentTarget.value);

    };

    const changeCheckbox = (e) => {
        props.updateCheckbox(e.currentTarget.checked)
    };

    const sendMessage = () => {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: props.isChecked})
    };

    const tryCatch = async (func) => {
        try{
            const response = await func();
            console.log('answer:', response.data);
            return response;
        } catch(err) {
            console.log('error:', {...err}, err.name + ' -', err.message);
            return err;
        }
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
            <div>
                <label className={'checkboxBlock'}>
                    <input type="checkbox" value={props.isChecked} onChange={changeCheckbox} />
                    Choose true or false for send
                </label>
                <div className={'sendButtonBlock'}>
                    <button onClick={() => tryCatch(sendMessage)}> Send</button>
                </div>

            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        themeStyle: state.settings.style,
        isChecked: state.settings.isChecked
    }
};

export default connect(mapStateToProps, {setTheme, updateCheckbox})(Wednesday);