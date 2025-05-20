const cutStringByLength = (str: string, length: number = 45) => {
  const array = str.split(" ");
  let finalString = "";
  array.forEach((t) => {
    if ((t + finalString).length > length) {
      return finalString;
    }
    finalString += ` ${t}`;
  });
  return finalString.length > length
    ? `${finalString}...`.trim()
    : finalString.trim();
};

export default cutStringByLength;
