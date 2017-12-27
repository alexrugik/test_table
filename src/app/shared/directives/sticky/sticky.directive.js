export default angular.module('ky3p.buyer.vendor-management.sticky', [])
    .directive('setClassWhenAtTop', setClassWhenAtTop)
    .name;

/* @ngInject */
function setClassWhenAtTop($window) {
    return {
        scope: {},
        restrict: 'A',
        link: function (scope, element, attrs) {
            const elem = element[0];
            const elemTopPosition = elem.getBoundingClientRect().top;
            $window.onscroll = (e) => {
                const windowsPageYOffset = $window.pageYOffset;
                console.log('windowsPageYOffset = ', windowsPageYOffset);
                console.log('elemTopPosition = ', elemTopPosition);
                if (windowsPageYOffset >= elemTopPosition) {
                    element.addClass('test');
                } else {
                   element.removeClass('test');
                }
            };
        }
    };
}