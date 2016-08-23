var contactsApp = angular.module('contactsApp', []);

contactsApp.controller('ContactsController', ['$scope', function($scope) {
  $scope.title = "Minnie Mouse";
  $scope.contacts = [
    {
      name: 'Mickey Mouse',
      description: 'The main character of Disney.',
      phone: '425-123-4567'
    }, {
      name: 'Minnie Mouse',
      description: 'Looks like Mickey Mouse except with eye lashes and a bow.',
      phone: '425-234-5678'
    }, {
      name: 'Donald Duck',
      description: 'Mickey and Minnie best friend.',
      phone: '425-345-6789'
    }
  ];
}]);