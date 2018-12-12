import Promise from 'promise';
import request from 'request';

const getPlaceHolderData = (title) => {
  return new Promise((resolve, reject)  => {
    request('www.placeholder.com', (error, response, body)  => {
      if (!error && response.status === 200) {
        resolve(JSON.parse(body));
      }
      else {
        reject(error);
      }
    });
  });
};
export default getPlaceHolderData;
