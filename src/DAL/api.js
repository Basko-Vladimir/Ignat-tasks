import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
});

export const api = {
    sendMessage: async (isChecked) =>  {
        try {
            return await instance.post('', {success: isChecked});
        } catch(err) {
            return err.response;
        }
    }
};