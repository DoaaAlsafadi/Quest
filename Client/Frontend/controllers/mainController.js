(function () {

    var app = angular.module("MainModule");

    function homeFunction(books) {
        vm = this;
        vm.book = function (){
            books.Postbook(vm.userName , vm.email , vm.phone , vm.treatment ,vm.date , vm.time ,vm.note);
        }
    

        //  books.getBooks();
        // console.log(vm.getData);

        
    }

    app.controller("mainController", ["books", homeFunction]);

}())