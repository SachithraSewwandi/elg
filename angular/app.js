/**
 * Created by hsenid on 11/10/15.
 */

angular.module("myapp",[])
    .controller("ctrl1",["$scope","$http",function($scope,$http){

       $scope.items=[
            {
                name:"One",
                sub:[{name:"one"},
                    {name:"one"},
                    {name:"one" }
                ],
                selected:false
            },
            {
                name:"two",
                sub:[{name:"one"},
                    {name:"one"},
                    {name:"one" }
                ],
                selected:false
            },
            {
                name:"three",
                sub:[{name:"one"},
                    {name:"one"},
                    {name:"one" }
                ],
                selected:false
            },

        ];




        $scope.type=[
            "Type 1","Type 2","Type 3","Type 4","Type 5"
        ];



        $scope.checkAll=function(){
            $scope.select = true;
            angular.forEach($scope.items, function (obj) {
                obj.selected = true;
            });
        };

        $scope.uncheckAll=function(){
            $scope.select = true;
            angular.forEach($scope.items, function (obj) {
                obj.selected = false
                ;
            });
        };

        $scope.save = function() {

            console.log($scope.form);
           var data={
               type:JSON.stringify($scope.form.types),
               userName: JSON.stringify($scope.form.userName),
               NameSinhala:JSON.stringify($scope.form.NameSinhala),
               NameTamil:JSON.stringify($scope.form.NameTamil),
               NIC:JSON.stringify($scope.form.NIC),
               active:JSON.stringify($scope.form.active),
               user:JSON.stringify($scope.form.user),
               password:JSON.stringify($scope.form.password),
               confpassword:JSON.stringify($scope.form.confpassword),
               startDate:JSON.stringify($scope.form.startDate),
               regDate:JSON.stringify($scope.form.regDate),
            };

            console.log($scope.form.type);
            $http({
                method: 'POST',
                url: "localhost/5730/",
                data: $.param(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function(data){
                $scope.form = {}; // clear the form so our user is ready to enter another
                console.log(data);
            }) .error(function(data) {
                console.log('Error: ' + data);
            });
        };
}])
    .directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {

                var me = attrs.ngModel;
                var matchTo = attrs.pwCheck;

                scope.$watch('[me, matchTo]', function(value){
                    ctrl.$setValidity('pwmatch', scope[me] === scope[matchTo] );
                });

            }
        }
    }]);