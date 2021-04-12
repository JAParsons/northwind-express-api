const normaliseRequestPathname = (req) => {
  const requestUrl = req.originalUrl;
  return requestUrl.replace(/\d+/g, '-');
};

export default normaliseRequestPathname;
