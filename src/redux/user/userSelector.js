const getSummary = state => state.users.summary;

const getUser = state => state.users.user;

const getError = state => state.users.error;

export default {
  getSummary,
  getUser,
  getError,
}