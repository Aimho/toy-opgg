const AppConfig = () => {
  const env = process.env.NODE_ENV;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const opggApi = process.env.REACT_APP_OP_GG_API;
  const itemApi = process.env.REACT_APP_ITEM_API;
  return {
    env,
    baseUrl,
    opggApi,
    itemApi
  };
};

export default AppConfig();
