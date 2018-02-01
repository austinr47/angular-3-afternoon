angular.module('swagShot').component("swag", {
    templateUrl: 'app/swag/swag.template.html',
    controllerAs: 'swagCtrl',
    binding: {
        item: '<',
        action: '&',
        actionLabel: '@'
    }
})