const getSummary = state => state.users.summary;

const getUser = state => state.users.user;

const getError = state => state.users.error;

const getToken = state => state.users.token;

const getRefreshToken = state => state.users.refreshToken;

export default {
  getSummary,
  getUser,
  getError,
  getToken,
  getRefreshToken,
}