angular.module('cobraApp').controller('editProfileCtrl', editProfileCtrl);
editProfileCtrl.$inject = ['$scope', 'profileService', '$location'];

function editProfileCtrl($scope, profileService, $location) {
    $scope.fields = {
        name: '',
        username: '',
        email: '',
        newEmail: '',
        newPassword: '',
        currentPassword: ''
    };

    profileService.getProfile().then(
        function success(profileData) {
            var fields = $scope.fields;
            fields.name = profileData.firstName + ' ' + profileData.lastName;
            fields.username = profileData.username;
            fields.email = profileData.email;
        },
        function error() {
            // Freak out
        }
    );

    $scope.updateEmail = function (form) {
        profileService.postEmail($scope.fields.newEmail).then(
            function success(response) {
                $scope.fields.newEmail = '';
            },
            function error(response) {
                // TODO
            }
        );
    };

    $scope.updatePassword = function (form) {
        profileService.postPassword($scope.fields.newPassword, $scope.fields.currentPassword).then(
            function success(response) {
                $scope.fields.newPassword = '';
                $scope.fields.currentPassword = '';
            },
            function error(response) {
                // TODO
            }
        );
    };
}
