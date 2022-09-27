let api_url = "https://api.hh.ru/vacancies";

let request_params = {
	text: "",
	area: [1002, 1004, 1003, 1006, 1007],
	per_page: 100,
	period: 2,
	host: "rabota.by",
	order_by: "publication_time",
};

const parserModule = angular.module("parser", []);

parserModule.controller("BodyController", function ($scope, $http) {
	$scope.searchVacancies = function (string) {
		request_params.text = string;
		$http({
			method: "GET",
			url: api_url,
			params: request_params,
		}).then(
			function (response) {
				$scope.items = response.data.items;
			},
			function (error) {}
		);
	};
});
