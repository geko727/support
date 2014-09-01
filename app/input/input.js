 angular.module('myApp.controllers')
    .controller('InputController', ['$scope', function($scope) {
      $scope.nombre = "Carlos Manuel";
      
      $scope.asuntos = [
       {id: 1, name: 'Problema'},
       {id: 2, name: 'Queja'},
       {id: 3, name: 'Sugerencia'}
      ];

      $scope.servicios = [
       {id: 1, name: 'Residencial'},
       {id: 2, name: 'Business'},
       {id: 3, name: 'Metro Mesh'},
       {id: 4, name: 'Dedicated'}
      ];

      $scope.problemas = [
       {id: 1, name: 'Desconexion'},
       {id: 2, name: 'Lentitud'},
       {id: 3, name: 'Otro'},
      ];

    }]);