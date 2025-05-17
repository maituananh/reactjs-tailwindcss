const cutStringByLength = (str: string, length: number = 45) => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
};

export default cutStringByLength;
