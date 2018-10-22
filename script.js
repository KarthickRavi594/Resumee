angular.module('BlankApp', ['ngMaterial', 'ngMessages'])
    .controller('DemoCtrl', function ($scope) {
        $scope.coc = {
            "id": "Participated in Kriya-2012, Login-2014, Login-2016 event organized by P.S.G college of Engineering",
            "id": "Participated in “Hack the Country” game event organized by P.S.G college of Engineering",
        };
        $scope.respons = {
            "id":"Presented a poster on “Emergency Traffic Regulator” in the National Conference on Computational Intelligence for Engineering Quality Software (CiQS) (August 2014)",
            "id":"Currently working on “Reliable Data Delivery For Ad hoc Networks” for presenting in IEEE conference",
        };
        $scope.hobbies = {
            "id":"Solving analytical and mathematical problems",
            "id":"Playing games like Cricket, Chess, Carom, Achieved 131072 in 4x4 2048."
        };
        $scope.contact = {
            "address":"49/110, Paramakudi Nanusamy Street,Salem-636001",
            "mobile":"Mobile: +91-9791672094, +91-8778968934",
            "email":"Email-ID: karthickravi594@gmail.com"
        };
        $scope.profile = {
            "profile":"Pursued M.Sc.Software Engineering (5 year integrated course) in Coimbatore Institute of Technology. Seeking for a role in software field to show my academic ability and technical knowledge"
        };
    });