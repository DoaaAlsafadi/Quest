(function () {

    var app = angular.module("MainModule");

    function homeFunction($http, viewBooks, $window, books) {

        var vm = this;
        vm.x = null;
        vm.books;

        if (!vm.books) {
            $http.get("http://localhost:54459/Home/getBooks")
                .then(function (response) {
                    console.log("I get the books Data !!! Thank me.....:)   ")
                    vm.books = response.data
                    console.log(vm.books[0]);
                    vm.books.forEach(addToBooks);
                }, function () {
                    console.log("doneeeeeeeeeesh")
                })

        }


        //delete Appointement from the DB
        vm.delete = function (index) {
            $window.alert("your an Appointment successfully deleted !!! thank you ... :)");
            var user = vm.books[index];
            vm.books.splice(index, 1);
            $http.post("http://localhost:54459/Home/DeleteAppointment", user)
                .then(function (response) {
                    console.log("I post the Data !!! Thank me.....:)   ")
                })
        }

        //find user from his/her index
        vm.Index = function (index) {
            vm.x = vm.books[index];
        }

        //update the data in DB
        vm.Save = function () {
            user = vm.x;
            $http.post("http://localhost:54459/Home/UpdateAppointment", user)
                .then(function (response) {
                    console.log("I Update the Data !!! Thank me.....:)   ");
                })
        }

        addToBooks = function (obj) {

            switch (obj.treatmentID) {
                case 4: obj.treatment = "Alf Layla Wa Layla spa"; break;
                case 5: obj.treatment = "Al-Pasha Turkish Bath spa"; break;
                case 6: obj.treatment = "Zara Spa"; break;
            }

            switch (obj.timeSlotID) {
                case 4: obj.timeSlot = 9; break;
                case 5: obj.timeSlot = 10; break;
                case 6: obj.timeSlot = 11; break;
                case 7: obj.timeSlot = 12; break;
                case 8: obj.timeSlot = 13; break;
                case 9: obj.timeSlot = 14; break;
                case 10: obj.timeSlot = 15; break;
                case 11: obj.timeSlot = 16; break;
                case 12: obj.timeSlot = 17; break;                
            }
        }

    }

    app.controller("viewController", ["$http", 'viewBooks', "$window", "books", homeFunction]);

}())