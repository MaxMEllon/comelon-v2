import Nico from 'nicolive';
import Promise from 'bluebird';

export const loginPromisfy = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    Nico.login(email, password, (error, cookie) => {
      if (error) reject(error);
      resolve(cookie);
    });
  });
}
