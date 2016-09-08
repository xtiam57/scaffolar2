angular.module('app')
  .service('DateUtil', ($filter) => ({
    isSame(date1, date2) {
      date1 = moment($filter('date')(date1, 'yyyy-MM-dd'));
      date2 = moment($filter('date')(date2, 'yyyy-MM-dd'));
      return date1.isSame(date2);
    },
    isAfter(date1, date2, includeLimits) {
      date1 = moment($filter('date')(date1, 'yyyy-MM-dd'));
      date2 = moment($filter('date')(date2, 'yyyy-MM-dd'));
      if (includeLimits) {
        return date1.isAfter(date2) || date1.isSame(date2);
      }
      return date1.isAfter(date2);
    },
    isBefore(date1, date2, includeLimits) {
      date1 = moment($filter('date')(date1, 'yyyy-MM-dd'));
      date2 = moment($filter('date')(date2, 'yyyy-MM-dd'));
      if (includeLimits) {
        return date1.isBefore(date2) || date1.isSame(date2);
      }
      return date1.isBefore(date2);
    },
    isBetween(date1, min, max, includeLimits) {
      return this.isAfter(date1, min, includeLimits) && this.isBefore(date1, max, includeLimits);
    },
  }))


  .service('TimeUtil', ($filter) => ({
    getDuration(date1, date2, period) {
      return Math.round(moment(date1).diff(moment(date2), period, true) * 100000) / 100000;
    },
    setTime(date1, time) {
      if (_(date1).isDate() && _(time).isDate()) {
        date1.setHours(time.getHours());
        date1.setMinutes(time.getMinutes());
        date1.setSeconds(time.getSeconds());
      }
      return date1;
    },
    addDuration(date1, duration, period) {
      return moment(date1).add(duration, period).toDate();
    },
    subtractDuration(date1, duration, period) {
      return moment(date1).subtract(duration, period).toDate();
    },
    isSame(date1, date2) {
      date1 = moment($filter('date')(date1, 'yyyy-MM-dd HH:mm'));
      date2 = moment($filter('date')(date2, 'yyyy-MM-dd HH:mm'));
      return date1.isSame(date2);
    },
    isAfter(date1, date2, includeLimits) {
      date1 = moment($filter('date')(date1, 'yyyy-MM-dd HH:mm'));
      date2 = moment($filter('date')(date2, 'yyyy-MM-dd HH:mm'));
      if (includeLimits) {
        return date1.isAfter(date2) || date1.isSame(date2);
      }
      return date1.isAfter(date2);
    },
    isBefore(date1, date2, includeLimits) {
      date1 = moment($filter('date')(date1, 'yyyy-MM-dd HH:mm'));
      date2 = moment($filter('date')(date2, 'yyyy-MM-dd HH:mm'));
      if (includeLimits) {
        return date1.isBefore(date2) || date1.isSame(date2);
      }
      return date1.isBefore(date2);
    },
    isBetween(date1, min, max, includeLimits) {
      return this.isAfter(date1, min, includeLimits) && this.isBefore(date1, max, includeLimits);
    },
  }))


  .service('StringUtil', ($filter) => ({
    getGUID() {
      let d = new Date().getTime();

      if (window.performance && typeof window.performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }
      let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });

      return uuid;
    },
    lorempixel(width = 200, height = 200) {
      return `http://lorempixel.com/${width}/${height}/`;
    },
  }))


  .service('NumericUtil', ($filter) => ({
    round(value, decimals) {
      return parseFloat($filter('number')(value, decimals));
    },
    /**
    * Returns a random integer between min (inclusive) and max (inclusive)
    * Using Math.round() will give you a non-uniform distribution!
    */
    random(min, max, isInteger = true) {
      return isInteger ?
                Math.floor(Math.random() * (max - min + 1)) + min :
                (Math.random() * (max - min + 1)) + min;
    },
    toFraction(value) {
      return isNaN(value) ? value : Ratio.parse(value).simplify().toQuantityOf(2, 3, 4, 5, 8, 16, 32, 40).toLocaleString();
    },
  }))


  .service('ArrayUtil', ($filter) => ({

  }));









