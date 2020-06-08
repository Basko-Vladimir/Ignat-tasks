import React, { ChangeEvent, MouseEvent } from "react";
import "../../App.css";
import {setThemeSuccess} from "../../redux/settings-reducer";
import {connect} from "react-redux";
import {
    sendMessage,
    setResponseMessageSuccess,
    updateCheckboxSuccess
} from "../../redux/loading-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {AppStateType} from "../../redux/store";


type MapStatePropsType = {
    themeStyle: string
    isChecked: boolean
    status: number | undefined
    isLoading: boolean
    responseMessage: string | undefined
}

type MapDispatchPropsType = {
    setThemeSuccess: (valueTheme: string) => void
    setResponseMessageSuccess: (responseMessage: string) => void
    updateCheckboxSuccess: (isChecked: boolean) => void
    sendMessage: (isChecked: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class Wednesday extends React.Component<PropsType> {

    onSetTheme = (event: MouseEvent<HTMLInputElement>) => {
        this.props.setThemeSuccess(event.currentTarget.value);
    };

    changeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.updateCheckboxSuccess(event.currentTarget.checked)
    };

    sendMessage = () => {
        this.props.sendMessage(this.props.isChecked);
    };

    closeMessageBlock = () => {
        this.props.setResponseMessageSuccess('');
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        themeStyle: state.settings.style,
        isChecked: state.loading.isChecked,
        status: state.loading.status,
        isLoading: state.loading.isLoading,
        responseMessage: state.loading.responseMessage,
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {setThemeSuccess, setResponseMessageSuccess, updateCheckboxSuccess, sendMessage})(Wednesday);