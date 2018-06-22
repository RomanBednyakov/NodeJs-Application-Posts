import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${'adssadas'}`;

  // if (token != null) {
  //   config.headers.Authorization = `Bearer ${'adssadas'}`;
  // }

  return config;
}, (err) => {
  return Promise.reject(err);
});

function Api() {}
const api = new Api();
Api.prototype = {
  get: (url) => {
    axios(url);
  },
  post: (url, data) => {
    console.log('##', url, data);
  },
};

export default api;


export function addPost(content) {
  return (dispatch) => {
    return axios.post('http://localhost:3000//posts/addPost', {
      date: '11.12.2-18',
      title: 'bla',
      content,
    })
      .then((response) => {
        console.log('response', response);
        console.log('dispatch', dispatch);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
