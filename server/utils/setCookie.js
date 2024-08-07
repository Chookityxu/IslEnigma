//@author :TerryXU
const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;

const cookieHelpers = {
  setAuthCookie: (res, token) => {
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: sevenDaysInMilliseconds,
    });
  },
  clearAuthCookie: (res) => {
    res.clearCookie('token');
  },
};
module.exports = cookieHelpers;
