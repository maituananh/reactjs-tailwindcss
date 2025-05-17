const configApp = (): { API_URL: string } => {
  return {
    API_URL: process.env.REACT_APP_API_URL!,
  };
};

export default configApp();
