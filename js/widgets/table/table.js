'use strict';

{
  (function () {
    var task1 = document.querySelector('#task1'),
        task2 = document.querySelector('#task2'),
        task4 = document.querySelector('#task4');

    task1.addEventListener('mdl-componentupgraded', function () {
      task1.MaterialProgress.setProgress(44);
    });
    task2.addEventListener('mdl-componentupgraded', function () {
      task2.MaterialProgress.setProgress(14);
    });
    task4.addEventListener('mdl-componentupgraded', function () {
      task4.MaterialProgress.setProgress(31);
    });

    setTimeout(function () {
      document.querySelector('.projects-table .is-selected td > label').classList.add('is-checked');
      componentHandler.upgradeDom();
    }, 100);
  })();
}