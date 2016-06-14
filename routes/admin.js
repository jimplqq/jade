var alertBox;
var app = angular.module('x-admin', [])
app.controller('x-controller', function($scope, $http) {
    $scope.currentUser = "questiny";
    $scope.content = '/welcome.html';


    $scope.menus = [{
        text: "信息发布",
        enabled: true,
        id: 'message',
        subMenus: [{
            text: "新消息",
            enabled: true,
            action: "/message/newMsg"
        }]
    }, {
        text: "信息管理",
        enabled: true,
        id: 'main',
        subMenus: [{
            text: "西语",
            enabled: true,
            action: "/main/spanish"
        }, {
            text: "拉美文化/生活",
            enabled: true,
            action: "/main/life"
        }, {
            text: "拉美旅行",
            enabled: true,
            action: "/main/travel"
        }]
    }, {
        text: "个人中心",
        enabled: true,
        id: 'setting',
        subMenus: [{
            text: "信息修改",
            enabled: true,
            action: "/setting/userSetting"
        }]
    }];

    $scope.setContent = function(action) {
        //console.log(action);
        $scope.content = action;
    };

    alertBox = $scope.alerts = [];
    $scope.closeAlert = function() {
        alertBox.splice(0, alertBox.length)
    }
});


function alertMessage(type, msg) {
    alertBox.splice(0, alertBox.length)
    alertBox.push({
        type: type,
        msg: msg
    });
    return alertBox
}
