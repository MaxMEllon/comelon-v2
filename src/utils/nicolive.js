import Nico from 'nicolive';
import Promise from 'bluebird';

export const loginPromisfy = ({ email, password }) => new Promise((resolve, reject) => {
  Nico.login(email, password, (error, cookie) => {
    if (error) reject(error);
    else resolve(cookie);
  });
});

export const logoutPromisfy = () => new Promise((resolve, reject) => {
  Nico.logout((error) => {
    if (error) reject(error);
    else resolve({ cookie: '', isLogin: false });
  });
});

export const connectPromisfy = liveId => new Promise((resolve, reject) => {
  Nico.view(liveId, (error, viewer) => {
    if (error) reject(error);
    else resolve(viewer);
  });
});
