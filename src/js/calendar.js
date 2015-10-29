/**
 * Created with JetBrains WebStorm.
 * User: Alex
 * Date: 6.9.15
 * Time: 18.48
 * To change this template use File | Settings | File Templates.
 */

angular.module('app', ['ngAnimate'])
    .controller('calendarCtrl', calendarCtrl)
    .directive('calendar', calendar)
    .directive('day', day);

function calendarCtrl($scope, $timeout, $element) {
    var ctrl = $scope.ctrl = this;
    $scope.$watch('ctrl.day', function () { ctrl.updateDate(ctrl); });

    this.months = 'January February March April May June July August September October November December'.split(' ');
    this.day = new Date();
    this.preDays = [];
    this.days = [];
    this.postDays = [];
    this.headings = [''];
    this.monthName = '';
    this.back = false;
    this.locked = false;
    this.lockTime = 500 + 350 * 2;


    this.next = function () {
        if (this.locked) return;
        this.locked = true;
        $timeout(function () { this.locked = false; }.bind(this), this.lockTime);
        this.day.setMonth(this.day.getMonth() + 1);
        this.back = false;
        $element.removeClass('back');
        this.updateDate();
    };
    this.prev = function () {
        if (this.locked) return;
        this.locked = true;
        $timeout(function () { this.locked = false; }.bind(this), this.lockTime);
        this.day.setMonth(this.day.getMonth() - 1);
        this.back = true;
        $element.addClass('back');
        this.updateDate();
    };
    this.updateDate = function (day) {
        this.day.setDate(1);
        this.preDays = this.getDays(this.day.getDay(), 0);
        this.days = this.getDays(this.getDaysInMonth(), this.preDays.length);
        this.postDays = this.getDays(
            (7 - (this.preDays.length + this.days.length) % 7) % 7,
            this.preDays.length + this.days.length
        );
        this.monthName = this.months[this.day.getMonth()];
        this.headings = [{ month: this.monthName, year: this.day.getFullYear() }];
    };
    this.setDelay = function (item) {
        var left = item.prop('offsetLeft') - $element.prop('offsetLeft'),
            top = item.prop('offsetTop') - $element.prop('offsetTop'),
            dist = Math.sqrt(left * left + top * top),
            delay = dist * 0.75;
        item.css('transition-delay', delay + 'ms');
    };
    this.getDays = function (count, start) {
        var days = [], i;
        for (i = start; i < count + start; i++) {
            days.push({ col: i % 7, row: Math.floor(i / 7) });
        }
        return days;
    };
    this.getDaysInMonth = function () {
        switch (this.day.getMonth()) {
            case 1: return new Date(this.day.getFullYear(), 1, 29).getMonth() == 1 ? 29 : 28;
            case 3: case 5: case 8: case 10: return 30;
            default: return 31;
        }
    };
}
function calendar() {
    return {
        template: '\
      <header>\
        <a ng-click="ctrl.prev()" class="back" ng-class="{ disabled: ctrl.locked }"></a>\
        <div class="date-wrapper">\
          <span class="title" ng-repeat="heading in ctrl.headings">{{heading.month}} {{heading.year}}</span>\
        </div>\
        <a ng-click="ctrl.next()" class="forward" ng-class="{ disabled: ctrl.locked }"></a>\
      </header>\
      <section class="day-header">\
        <div class="day">Sun</div>\
        <div class="day">Mon</div>\
        <div class="day">Tue</div>\
        <div class="day">Wed</div>\
        <div class="day">Thu</div>\
        <div class="day">Fri</div>\
        <div class="day">Sat</div>\
      </section>\
      <section class="day-content">\
        <day ng-repeat="day in ctrl.preDays" class="inactive" data-col="{{day.col}}" data-row="{{day.row}}"></day>\
        <day ng-repeat="day in ctrl.days" data-col="{{day.col}}" data-row="{{day.row}}">{{$index + 1}}</day>\
        <day ng-repeat="day in ctrl.postDays" class="inactive" data-col="{{day.col}}" data-row="{{day.row}}"></day>\
      </section>\
    ',
        controller: 'calendarCtrl'
    };
}
function day($timeout, $window) {
    return { require: '^calendar', link: link };
    function link(scope, element, attr, ctrl) {}
}