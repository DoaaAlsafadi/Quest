(function () {

    function homeService($http) {

        // delete book from the data base
        function isDeleted(data) {
            $http.post("server Url", data)
                .then(function (data) {
                    console.log("your data successfully deleted !!! :)")
                })
        }

        return {
            isDeleted: isDeleted,
        }
    }

    var app = angular.module("MainModule");

    app.factory('viewBooks', homeService)

}())