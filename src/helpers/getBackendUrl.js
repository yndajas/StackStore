export const getBackendUrl = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://localhost:3000";
    case "production": // fall through
    default:
      return "https://stackstore-backend.herokuapp.com";
  }
};
