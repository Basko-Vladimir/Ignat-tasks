import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
});

type SendMessageResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}

export const api = {
    sendMessage: async (isChecked: boolean) =>  {
        try {
            return await instance.post<SendMessageResponseType>('', {success: isChecked});
        } catch(err) {
            return err.response;
        }
    }
};