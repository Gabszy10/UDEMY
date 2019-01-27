import {username, password} from './secrets';
import axios from 'axios';
export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json){
    const {memes} = json.data;

    return{
        type: RECEIVE_MEMES,
        memes
    }
}

function fetchMemesJson(){
    return axios.get('https://api.imgflip.com/get_memes')
     .then(res => {
        return res.data
     })

        // return fetch('https://api.imgflip.com/get_memes')
        // .then(res => {
        //     console.log('res',res.json());
            
        // })
}

export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
}

export function newMeme(meme){
    return{
        type: NEW_MEME,
        meme
    }
}

function postMemeJson(params){
    params["username"] = username;
    params["password"] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log('bodyParams', bodyParams);

    return axios.post(`https://api.imgflip.com/caption_image?${bodyParams}`, {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        console.log('res', res);
        return res.data.data
    }) 
}

export function createMeme(new_meme_object){
    return function(dispatch){
        return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}