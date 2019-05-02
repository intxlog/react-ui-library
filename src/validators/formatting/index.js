import React from 'react'

export  function ssn(string) {

  let val = string.replace(/\D/g, '');
  let newVal = '';
  if(val.length > 4) {
     string = val;
   }
  if((val.length > 3) && (val.length < 6)) {
     newVal += val.substr(0, 3) + '-';
     val = val.substr(3);
   }
  if (val.length > 5) {
     newVal += val.substr(0, 3) + '-';
     newVal += val.substr(3, 2) + '-';
     val = val.substr(5);
   }
   newVal += val;
   string = newVal.substring(0, 11);
   return string
}

export function phone(string) {

   let val = string.replace(/\D/g, '');
   let newVal = '';
   if(val.length > 4) {
      string = val;
   }
   if((val.length > 3) && (val.length < 6)) {
      newVal += val.substr(0, 3) + '-';
      val = val.substr(3);
   }
   if (val.length > 5) {
      newVal += val.substr(0, 3) + '-';
      newVal += val.substr(3, 3) + '-';
      val = val.substr(6);
   }
    newVal += val;
    string = newVal.substring(0, 12);
    return string
}
