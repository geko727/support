angular.module('myApp.controllers')
    .controller('UpgradeController', ['$scope', function($scope) {
     
      $scope.allTickets = [];
      // $scope.getAllTickets =function(){
      Parse.initialize("6MOaLqbspioqwFGiWa7Zn7OXgfh7wa1lMYcji8mz", "5vY2KiRA8sW0FEKuaDvzDIeikDVX8lAKqAgiZwg1");

      var Ticket = Parse.Object.extend("Ticket");
      var query = new Parse.Query(Ticket);
      query.find().then(function(results){
      //   for(var i=0; i<results.length; i++)
      //   {
      //     $scope.allTickets.push(results[i].attributes);

      //   }
      $scope.allTickets = results;
      $scope.$apply();

      });
  // }


  
  // $scope.getAllTickets();
  console.log($scope);
  console.log($scope.allTickets);


}]);