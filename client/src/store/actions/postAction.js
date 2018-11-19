import axios from 'axios';
import announceSuccess from './successAction'

export const POSTS_RECEIVED = 'POSTS_RECEIVED';

export const messagesReceivedAction = (posts) => {
  return {
    type: POSTS_RECEIVED,
    posts
  };
}
export const sendMessage = (sender,recipient,text,actionId) => dispatch => {
  axios.post('/api/posts/sendMessage/',{sender,recipient,text })
  .then(()=>dispatch(announceSuccess(actionId)))
  .catch(err => console.log(err))
}
 
export const getMessages = () => dispatch => {
  axios.get('/api/posts/')
  .then(e => dispatch(messagesReceivedAction(e.data)))
  .catch(err => console.log(err))
}

export default {
  sendMessage,
  getMessages 
}
