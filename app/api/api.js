'use strict';

angular.module('myApp.api', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/api', {
            templateUrl: 'api/api.html',
            controller: 'ApiCtrl'
        });
    }])

    .controller('ApiCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.repChoice = '';
        $scope.stateChoice = '';
        $scope.visable = false;
        $scope.repList = false;

        //consume the api with this function
        $scope.getApiInfo = function () {

            $scope.visable = false;
            $scope.repList = true;


            if ($scope.repChoice == ''){
                alert("Please choose a type of representative from the dropdown list.")
            }
            if ($scope.stateChoice == ''){
                alert("Please choose a state from the dropdown list.")
            }
            $http.get('http://localhost:3000/' + $scope.repChoice + '/' + $scope.stateChoice).
                success(function (data) {
                    $scope.politicians = data.results;

                });
                error(function()  {
                alert("Not able to retrieve data at this time.")
            })
        };
        //get the person object and add it to scope, so that we can print it to the page easily
        $scope.displayDetail = function (person) {
            $scope.repDetail = person;
            $scope.visable = true;
        };

        //United states array. could move to its own file if there is time
        $scope.usStates = [
            { name: 'ALABAMA', abbreviation: 'AL'},
            { name: 'ALASKA', abbreviation: 'AK'},
            { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
            { name: 'ARIZONA', abbreviation: 'AZ'},
            { name: 'ARKANSAS', abbreviation: 'AR'},
            { name: 'CALIFORNIA', abbreviation: 'CA'},
            { name: 'COLORADO', abbreviation: 'CO'},
            { name: 'CONNECTICUT', abbreviation: 'CT'},
            { name: 'DELAWARE', abbreviation: 'DE'},
            { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
            { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
            { name: 'FLORIDA', abbreviation: 'FL'},
            { name: 'GEORGIA', abbreviation: 'GA'},
            { name: 'GUAM', abbreviation: 'GU'},
            { name: 'HAWAII', abbreviation: 'HI'},
            { name: 'IDAHO', abbreviation: 'ID'},
            { name: 'ILLINOIS', abbreviation: 'IL'},
            { name: 'INDIANA', abbreviation: 'IN'},
            { name: 'IOWA', abbreviation: 'IA'},
            { name: 'KANSAS', abbreviation: 'KS'},
            { name: 'KENTUCKY', abbreviation: 'KY'},
            { name: 'LOUISIANA', abbreviation: 'LA'},
            { name: 'MAINE', abbreviation: 'ME'},
            { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
            { name: 'MARYLAND', abbreviation: 'MD'},
            { name: 'MASSACHUSETTS', abbreviation: 'MA'},
            { name: 'MICHIGAN', abbreviation: 'MI'},
            { name: 'MINNESOTA', abbreviation: 'MN'},
            { name: 'MISSISSIPPI', abbreviation: 'MS'},
            { name: 'MISSOURI', abbreviation: 'MO'},
            { name: 'MONTANA', abbreviation: 'MT'},
            { name: 'NEBRASKA', abbreviation: 'NE'},
            { name: 'NEVADA', abbreviation: 'NV'},
            { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
            { name: 'NEW JERSEY', abbreviation: 'NJ'},
            { name: 'NEW MEXICO', abbreviation: 'NM'},
            { name: 'NEW YORK', abbreviation: 'NY'},
            { name: 'NORTH CAROLINA', abbreviation: 'NC'},
            { name: 'NORTH DAKOTA', abbreviation: 'ND'},
            { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
            { name: 'OHIO', abbreviation: 'OH'},
            { name: 'OKLAHOMA', abbreviation: 'OK'},
            { name: 'OREGON', abbreviation: 'OR'},
            { name: 'PALAU', abbreviation: 'PW'},
            { name: 'PENNSYLVANIA', abbreviation: 'PA'},
            { name: 'PUERTO RICO', abbreviation: 'PR'},
            { name: 'RHODE ISLAND', abbreviation: 'RI'},
            { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
            { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
            { name: 'TENNESSEE', abbreviation: 'TN'},
            { name: 'TEXAS', abbreviation: 'TX'},
            { name: 'UTAH', abbreviation: 'UT'},
            { name: 'VERMONT', abbreviation: 'VT'},
            { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
            { name: 'VIRGINIA', abbreviation: 'VA'},
            { name: 'WASHINGTON', abbreviation: 'WA'},
            { name: 'WEST VIRGINIA', abbreviation: 'WV'},
            { name: 'WISCONSIN', abbreviation: 'WI'},
            { name: 'WYOMING', abbreviation: 'WY' }
        ];
    }]);

