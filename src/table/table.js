document.querySelector('#task1').addEventListener('mdl-componentupgraded', function () {
    this.MaterialProgress.setProgress(44);
});
document.querySelector('#task2').addEventListener('mdl-componentupgraded', function () {
    this.MaterialProgress.setProgress(14);
});

document.querySelector('#task4').addEventListener('mdl-componentupgraded', function () {
    this.MaterialProgress.setProgress(31);
});

setTimeout(() => {document.querySelector('.is-selected td > label').classList.add('is-checked');
                  componentHandler.upgradeDom();
}, 100);
