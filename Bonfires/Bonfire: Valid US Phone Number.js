function telephoneCheck(str) {
  // Good luck!
  //var regEx = new RegExp(\(?\d{1,3}\)?(-|\s)?\d{3}(-|\s)?\d{3,4}(\s\d{4})?$);
  var Regex = /\(?\d{1,3}\)?(-|\s)?\d{3}(-|\s)?\d{3,4}(\s\d{4})?$/;
  return Regex.test(str);
}



console.log(telephoneCheck("555-555-5555"));