import React from "react";
import "../../App.css";
import {setTheme, updateCheckbox} from "../../redux/settings-reducer";
import {connect} from "react-redux";
import {api} from "../../DAL/api";
import {setLoading} from "../../redux/loading-reducer";
import Preloader from "../../common/Preloader/Preloader";

class Wednesday extends React.Component {

    state = {
        isLoading: false,
        responseMessage: ''
    };

    styleMessage = '';

    onSetTheme = (e) => {
        this.props.setTheme(e.currentTarget.value);
    };

    changeCheckbox = (e) => {
        this.props.updateCheckbox(e.currentTarget.checked)
    };

    sendMessage = async () => {
        this.setState({isLoading: true});
        const response = await api.sendMessage(this.props.isChecked);
        this.styleMessage = response.status === 200 ? 'messageSuccess' : 'messageError';
        this.setState({
            isLoading: false,
            responseMessage: response.data.errorText
        });
    };

    closeMessageBlock = () => {
        this.setState({responseMessage: ''})
    };

    render() {
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
                        <input type="checkbox" value={this.props.isChecked} onChange={this.changeCheckbox}/>
                        Choose true or false for send
                    </label>
                    <div className={'sendButtonBlock'}>
                        <button onClick={this.sendMessage} disabled={this.state.isLoading}> Send</button>
                    </div>
                </div>
                {this.state.responseMessage && <div className={`messageBlock ${this.styleMessage}`}>
                                                   <h3>{this.state.responseMessage}</h3>
                                                   <button onClick={this.closeMessageBlock}>Close</button>
                                               </div>
                }
                { this.state.isLoading && <div className={'wednesdayPreloader'}>
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
        isChecked: state.settings.isChecked
    }
};

export default connect(mapStateToProps, {setTheme, updateCheckbox, setLoading})(Wednesday);