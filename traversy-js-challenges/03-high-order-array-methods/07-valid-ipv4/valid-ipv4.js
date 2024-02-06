const isValidIPv4 = (ipStr) => {
  const ipArr = ipStr.split('.');

  if (ipArr.length !== 4) return false;
  console.log(ipArr);

  const validIp = ipArr.every((ipNode) => {
    ipNum = parseInt(ipNode);
    return (
      !ipNode.startsWith('0') &&
      isFinite(ipNum) &&
      !(ipNum < 0) &&
      !(ipNum > 255)
    );
  });

  return validIp;
};

module.exports = isValidIPv4;
