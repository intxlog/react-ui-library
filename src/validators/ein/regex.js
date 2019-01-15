export default function (string) {

    const campus = {
        andover: ['10', '12'],
        atlanta: ['60', '67'],
        austin: ['50', '53'],
        brookhaven: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
        cincinnati: ['30', '32', '35', '36', '37', '38', '61'],
        fresno: ['15', '24'],
        internet: ['20', '26', '27', '45', '46', '47'],
        kansas: ['40', '44'],
        memphis: ['94', '95'],
        ogden: ['80', '90'],
        philadelphia: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
        sba: ['31']
      };

      const prefixes = [];

for (const location in campus) {
  prefixes.push(...campus[location]);
}

prefixes.sort();

     let re =  /^\d{2}[- ]{0,1}\d{7}$/

     return re.test(string)
   }