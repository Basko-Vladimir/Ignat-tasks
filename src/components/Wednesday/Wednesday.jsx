import React from "react";
import "../../App.css";
import {setTheme} from "../../redux/settings-reducer";
import {connect} from "react-redux";
import {sendMessage, setResponseMessage, updateCheckbox} from "../../redux/loading-reducer";
import Preloader from "../../common/Preloader/Preloader";

class Wednesday extends React.Component {

    onSetTheme = (e) => {
        this.props.setTheme(e.currentTarget.value);
    };

    changeCheckbox = (e) => {
        this.props.updateCheckbox(e.currentTarget.checked)
    };

    sendMessage = () => {
        this.props.sendMessage(this.props.isChecked);
    };

    closeMessageBlock = () => {
        this.props.setResponseMessage('');
    };

    render() {
        const styleMessage = this.props.status === 200 ? 'messageSuccess' : 'messageError';
        return (
            <div className={`wednesday ${this.props.themeStyle}`}>
                {this.props.themeStyle && <h1>Selected {this.props.themeStyle} theme</h1>}
                <div className={'themeChoose'}>
                    <h3>Select theme page: </h3>
                    <label>
                        <input type="radio" name="theme" value="dark" onClick={this.onSetTheme}/>
                        Dark theme
                    </label>
                    <label>
                        <input type="radio" name="theme" value="light" onClick={this.onSetTheme}/>
                        Light theme
                    </label>
                    <label>
                        <input type="radio" name="theme" value="color" onClick={this.onSetTheme}/>
                        Color theme
                    </label>
                </div>
                <div>
                    <label className={'checkboxBlock'}>
                        <input type="checkbox" checked={this.props.isChecked} onChange={this.changeCheckbox}/>
                        Choose true or false for send
                    </label>
                    <div className={'sendButtonBlock'}>
                        <button onClick={this.sendMessage} disabled={this.props.isLoading}> Send</button>
                    </div>
                </div>
                {this.props.responseMessage && <div className={`messageBlock ${styleMessage}`}>
                                                   <h3>{this.props.responseMessage}</h3>
                                                   <button onClick={this.closeMessageBlock}>Close</button>
                                               </div>
                }
                { this.props.isLoading && <div className={'wednesdayPreloader'}>
                                              <Preloader/>
                                              <span>Loading...</span>
                                          </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeStyle: state.settings.style,
        isChecked: state.loading.isChecked,
        status: state.loading.status,
        isLoading: state.loading.isLoading,
        responseMessage: state.loading.responseMessage,
    }
};

export default connect(mapStateToProps, {setTheme, setResponseMessage, updateCheckbox, sendMessage})(Wednesday);