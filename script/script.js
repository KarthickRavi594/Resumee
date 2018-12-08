angular.module('BlankApp', ['ngMaterial', 'ngMessages'])
    .controller('DemoCtrl', function ($scope, $mdDialog) {
        $scope.coc = {
            "id": "Participated in Kriya-2012, Login-2014, Login-2016 event organized by P.S.G college of Engineering",
            "id": "Participated in “Hack the Country” game event organized by P.S.G college of Engineering",
        };
        $scope.respons = {
            "id": "Presented a poster on “Emergency Traffic Regulator” in the National Conference on Computational Intelligence for Engineering Quality Software (CiQS) (August 2014)",
            "id": "Currently working on “Reliable Data Delivery For Ad hoc Networks” for presenting in IEEE conference",
        };
        $scope.hobbies = {
            "id": "Solving analytical and mathematical problems",
            "id": "Playing games like Cricket, Chess, Carom, Achieved 131072 in 4x4 2048."
        };
        $scope.contact =
            { "address": "49/110, Paramakudi Nanusamy Street,Salem-636001", "mobile": "Mobile - +91-9791672094, +91-8778968934", "email": "Email-ID - karthickravi594@gmail.com" };
        $scope.profile = {
            "profile": "Pursued M.Sc.Software Engineering (5 year integrated course) in Coimbatore Institute of Technology. Seeking for a role in software field to show my academic ability and technical knowledge"
        };
        $scope.ariveguru = [
            { "place": "Ariveguru technologies", "Year": "Jan 2018 - Present", "Topic": "Sharanasangama App", "Description": "PWA application both mobile browser and desktop browser for a community based social media. (Vuetify Material)", "Role": "UI Developer" },
            { "place": "Ariveguru technologies", "Year": "Jan 2018 - Present", "Topic": "Flip2Flex", "Description": "Cisco team generates an offer for partner and their client. They need to manage the offer list with licOPS team and the client’s.(Angular Material)", "Role": "UI Developer" },
        ];
        $scope.ibm = {
            "place": "IBM India pvt ltd", "Year": "Jan 2017 - Jun - 2017", "Topic": "Certification As A Service", "Description": "IBM product teams that use IBM JDK need to certify their product by running the JCK test suite. But since JCK has already been run against the IBM JDK builds we just do a comparison of the JDK listings (Customer list with Reference list) in order to certify the IBM product.", "Role": "Java Developer" 
        };
        $scope.toshiba = {
            "place": "Toshiba Software India pvt ltd", "Year": "Jun 2015 - Nov - 2015", "Topic": "Finance Regimentation", "Description": "The project is used to keep track of the Statement of Work (SOW) and to maintain the financial status of all the projects and invoice of Toshiba Company.", "Role": "Java Developer"
        };
        $scope.Designation = [
            { "role": "Java Developer" },
            { "role": "UI Developer" },
        ];
        $scope.citCollege = "The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956. CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987"
        $scope.intro = "Currently pursuing as a UI Developer in Ariveguru Technologies pvt ltd. Also have one year internship experience in two various companies (Toshiba Software India pvt ltd & IBM India pvt ltd) as a Web Application Developer.";
        $scope.department = "M.Sc.Software Engineering (Integrated Course)";
        $scope.institute = "Coimbatore Institute of Technology";
        $scope.percentage = "72.3%";
        $scope.academic = [
            {"topic":"Smart Speed Monitor","description":"Designed a speed monitoring system using Intel Galileo board and providing functions like vehicle tracking, over speed notification.(Arduino C)"},
            {"topic":"Firewall","description":"Firewall is an application which is used to block the unwanted IP packets. It will secure our system. (Java, script language)."}
        ];
        $scope.techskill = [
            {"skill":"C"},
            {"skill":"Java"},
            {"skill":"J2EE"},
            {"skill":"HTML"},
            {"skill":"CSS"},
            {"skill":"AngularJS"},
            {"skill":"Angular Material Design"},
            {"skill":"Vuetify Material Design"},
            {"skill":"Katalon script Automation"},
        ],
        $scope.techide = [
            {"ide":"Netbeans"},
            {"ide":"Eclipse"},
            {"ide":"Visual studio code"},
            {"ide":"Katalon"},
        ],
        $scope.Ariveguru = function (ev) {
            $mdDialog.show ({
                clickOutsideToClose: true,
                scope: $scope,        
                preserveScope: true,           
                templateUrl: 'Ariveguru.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                   $scope.closeDialog = function() {
                      $mdDialog.hide();
                   }
                }
             });
        };
        $scope.IBM = function (ev) {
            $mdDialog.show ({
                clickOutsideToClose: true,
                scope: $scope,        
                preserveScope: true,           
                templateUrl: 'IBM.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                   $scope.closeDialog = function() {
                      $mdDialog.hide();
                   }
                }
             });
        };
        $scope.Toshiba = function (ev) {
            $mdDialog.show ({
                clickOutsideToClose: true,
                scope: $scope,        
                preserveScope: true,           
                templateUrl: 'Toshiba.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                   $scope.closeDialog = function() {
                      $mdDialog.hide();
                   }
                }
             });
        };
        $scope.cancel = function(){
            $mdDialog.cancel();
        }
    });