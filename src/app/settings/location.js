// angular.module('ngLocale', [], ['$provide', ($provide) => {
//   let PLURAL_CATEGORY = { ZERO: 'zero', ONE: 'one', TWO: 'two', FEW: 'few', MANY: 'many', OTHER: 'other' };

//   $provide.value('$locale', {
//     DATETIME_FORMATS: {
//       AMPMS: [
//         'AM',
//         'PM'
//       ],
//       DAY: [
//         'Domingo',
//         'Lunes',
//         'Martes',
//         'Mi\u00e9rcoles',
//         'Jueves',
//         'Viernes',
//         'S\u00e1bado'
//       ],
//       ERANAMES: [
//         'antes de Cristo',
//         'despu\u00e9s de Cristo'
//       ],
//       ERAS: [
//         'a.C.',
//         'd.C.'
//       ],
//       FIRSTDAYOFWEEK: 6,
//       MONTH: [
//         'Enero',
//         'Febrero',
//         'Marzo',
//         'Abril',
//         'Mayo',
//         'Junio',
//         'Julio',
//         'Agosto',
//         'Septiembre',
//         'Octubre',
//         'Noviembre',
//         'Diciembre'
//       ],
//       SHORTDAY: [
//         'Dom',
//         'Lun',
//         'Mar',
//         'Mi\u00e9',
//         'Jue',
//         'Vie',
//         'S\u00e1b'
//       ],
//       SHORTMONTH: [
//         'Ene',
//         'Feb',
//         'Mar',
//         'Abr',
//         'May',
//         'Jun',
//         'Jul',
//         'Ago',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dic'
//       ],
//       STANDALONEMONTH: [
//         'Enero',
//         'Febrero',
//         'Marzo',
//         'Abril',
//         'Mayo',
//         'Junio',
//         'Julio',
//         'Agosto',
//         'Septiembre',
//         'Octubre',
//         'Noviembre',
//         'Diciembre'
//       ],
//       WEEKENDRANGE: [
//         5,
//         6
//       ],
//       fullDate: 'EEEE, d \'de\' MMMM \'de\' y',
//       longDate: 'd \'de\' MMMM \'de\' y',
//       medium: 'd MMM y h:mm:ss a',
//       mediumDate: 'd MMM y',
//       mediumTime: 'h:mm:ss a',
//       short: 'd/M/yy h:mm a',
//       shortDate: 'd/M/yy',
//       shortTime: 'h:mm a'
//     },
//     NUMBER_FORMATS: {
//       CURRENCY_SYM: '$',
//       DECIMAL_SEP: ',',
//       GROUP_SEP: '.',
//       PATTERNS: [
//         {
//           gSize: 3,
//           lgSize: 3,
//           maxFrac: 3,
//           minFrac: 0,
//           minInt: 1,
//           negPre: '-',
//           negSuf: '',
//           posPre: '',
//           posSuf: ''
//         },
//         {
//           gSize: 3,
//           lgSize: 3,
//           maxFrac: 2,
//           minFrac: 2,
//           minInt: 1,
//           negPre: '\u00a4-',
//           negSuf: '',
//           posPre: '\u00a4',
//           posSuf: ''
//         }
//       ]
//     },
//     id: 'es-ve',
//     localeID: 'es_VE',
//     pluralCat: (n, opt_precision) => {
//       return n === 1 ? PLURAL_CATEGORY.ONE : PLURAL_CATEGORY.OTHER;
//     }
//   });
// }]);
