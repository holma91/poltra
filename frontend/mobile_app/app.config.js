require('dotenv').config();

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      clerkKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  };
};
