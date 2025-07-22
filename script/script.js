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
        $scope.pathfinder = [
            { "place": "Pathfinder Global", "Year": "Oct 2019 - Jul 2020", "Topic": "Proleaz_Dashboard", "Description": "An web application to show the dashboard regarding the airport details to their management with the help of each and every terminal and building with the siteName of their airport.", "Role": "Software Developer" },
        ];
        $scope.hubino = [
            { "place": "Hubino", "Year": "Jul 2020 - Present", "Topic": "Rozie Care Agents", "Description": " A web application to help the agents to guide their clients about their queries. Core component is a softphone component which is used to communicate and capture the conversation between customer and agent with real time transcript. Based on Realtime conversation, the guidance component provides guide links to the agent automatically.", "Role": "Software Developer" },
            { "place": "Hubino", "Year": "Feb 2021 - Present", "Topic": "Xago", "Description": "Crypto Currency (XRP, ZAR) Trading system. Monitoring live updates of XRP and ZAR current stock price. Trading of ZAR using XRP and vice versa.", "Role": "Software Developer" },
            { "place": "Hubino", "Year": "May 2021 - Present", "Topic": "Apple pass", "Description": "It is a wallet pass (Equivalent to QR Code) generation service. It accepts the information provided by the user and converts it into the wallet pass which can be accessible by apple scan.", "Role": "Software Developer" },
            { "place": "Hubino", "Year": "May 2021 - Present", "Topic": "Experience Builder", "Description": "A web application to show the concept skills with hierarchy relationship diagrams using joint technology. Displaying the concept values with conditional blocks like expression block, statement block, etc.", "Role": "Software Developer" },
        ];
        $scope.ariveguru = [
            { "place": "Ariveguru technologies", "Year": "Jul 2018 - Jan 2019", "Topic": "Sharanasangama App", "Description": "PWA application both mobile browser and desktop browser for a community based social media. (Vuetify Material)", "Role": "UI Developer" },
            { "place": "Ariveguru technologies", "Year": "Jan 2018 - Sep 2019", "Topic": "Flip2Flex", "Description": "Cisco team generates an offer for partner and their client. They need to manage the offer list with licOPS team and the client’s.(Angular Material)", "Role": "UI Developer" },
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
        $scope.role = "Software Developer"
        $scope.citCollege = "The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956. CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987"
        $scope.intro = "Software Engineer with 7+ years of experience in developing web applications. Proficient in JS, React, Node.js, AWS, and Git. Strong background in leading teams, building scalable front-end/back-end systems, and delivering business-critical features.";
        $scope.department = "M.Sc.Software Engineering (Integrated Course)";
        $scope.institute = "Coimbatore Institute of Technology";
        $scope.percentage = "72.3%";
        $scope.academic = [
            { "topic": "Smart Speed Monitor", "description": "Designed a speed monitoring system using Intel Galileo board and providing functions like vehicle tracking, over speed notification.(Arduino C)" },
            { "topic": "Firewall", "description": "Firewall is an application which is used to block the unwanted IP packets. It will secure our system. (Java, script language)." }
        ];
        $scope.techskill = [
            { "skill": "HTML" },
            { "skill": "CSS" },
            { "skill": "AngularJS" },
            { "skill": "Angular" },
            { "skill": "React" },
            { "skill": "Node" },
            { "skill": "Git" },
            { "skill": "AWS" },
            { "skill": "Visual studio code" },
            { "skill": "Postman" },
        ],
            $scope.techide = [

            ],
            $scope.Ariveguru = function (ev) {
                $mdDialog.show({
                    clickOutsideToClose: true,
                    scope: $scope,
                    preserveScope: true,
                    templateUrl: 'Ariveguru.html',
                    controller: function DemoCtrl($scope, $mdDialog) {
                        $scope.closeDialog = function () {
                            $mdDialog.hide();
                        }
                    }
                });
            };
        $scope.Pathfinder = function (ev) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: 'Pathfinder.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };
        $scope.Hubino = function (ev) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: 'Hubino.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };
        $scope.IBM = function (ev) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: 'IBM.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };
        $scope.Toshiba = function (ev) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: 'Toshiba.html',
                controller: function DemoCtrl($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        }
    });
