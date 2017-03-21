//Módulo (Dentro del tag html)
var app = angular.module("Menu",[]); //Recibe 2 parámetros NOMBRE DEL MÓDULO y MÓDULOS DE LOS CUALES ÉSTE DEPENDE.
//CONTROLADOR (Dentro del tag Body)
app.controller("ControladorLinks",function($scope){

  $scope.nuevoComentario = {};
  //externo 2, local 1, local interno 1.
  var link = 0;
  var local_interno = "#";
  var local = "";
  var externo = "http://";
  var setted = "";
  $scope.link = [
    {
      local_interno : "#",
      local : "",
      externo : "http://",
      setted : ""
    }
  ];
  $scope.comentarios = [
    {
      comentario: "www.twitter.com",
      username: "Twitter",
      link: externo
    },
    {
      comentario: "www.facebook.com",
      username: "Facebook",
      link: externo
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
});
