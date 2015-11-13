/**
 * Created by hsenid on 11/10/15.
 */

var app=angular.module("myapp",[]);

app.controller("FormCtrl1",["$scope","$http",function($scope,$http){

        $scope.type=[
            "Type 1","Type 2","Type 3","Type 4","Type 5"
        ];


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

            console.log($scope.form);
            $http({
                method: 'POST',
                url: "localhost/3008/",
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
app.directive('pwCheck', function() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            $(elem).add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ctrl.$setValidity('pwcheck', v);
                });
            });
        }
    }
});

app.controller("sidebarCntrl",["$scope","$http",function($scope,$http){
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
}]);

