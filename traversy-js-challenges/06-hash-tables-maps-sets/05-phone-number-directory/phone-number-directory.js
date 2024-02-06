function phoneNumberDirectory(phoneArr) {
  const phoneDirMap = new Map();
  phoneArr.forEach(function (namePhone) {
    const [name, phone] = namePhone.split(':');
    phoneDirMap.set(name, phone);
  });

  return phoneDirMap;
}
module.exports = phoneNumberDirectory;
