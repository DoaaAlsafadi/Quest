(function () {

    function homeService($http, $window, $location) {

        // send book data to the server (---)(--)(-)
        var Postbook = function (userName, email, phone, treatment, date, time , note) {
            var user = {
                userName: userName,
                email: email,
                phone: phone,
                treatment_Title: treatment,
                date: date,
                time: time,
                note:note
            }

            $http.post("http://localhost:54459/Home/BookAppointment", user)
                .then(function (response) {
                    console.log("your register successfully done")
                    console.log(response.data)
                    if(response.data === "Email is already exist"){
                        $window.alert("this E-mail is already exist !! Please try another Email");
                    }else {
                        $window.alert("your register successfuly done ... thank you <3");                        
                    }
                }, function () {
                    console.log("something wrong Please try later !!!")
                })
        }
        return {
            Postbook: Postbook,
        }
    }

    var app = angular.module("MainModule");

    app.factory('books', homeService)

}())