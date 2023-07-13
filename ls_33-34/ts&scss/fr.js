var a = 2;
var name1 = 'Vasya';
var isMarrid = false;
var nu = null;
var un = undefined;
var symb = Symbol('dddd');
var symb1 = Symbol('dddd'); // bad practice
var func = function () { }; // bad practice
var func1 = function () { };
var func2 = function () { return 2; };
var func3 = function (params) { }; // bad practice
var obj = {
    a: 1
};
var obj1 = {
    a: 1
};
var obj2 = { a: 33 };
console.log(a);
// un = 1
var data = 'dsfsdfsdfs';
data = 1;
data = true;
console.log(data);
// const a: never = 'd';
var arr = [3, 5, 4, 3];
var arr1 = ['dfdf', 'dfsdfsdf', 43543, true, null, undefined];
var arr2 = ['dfdf', 'dfsdfsdf', 43543];
var uni;
uni = 111;
uni = '54654fdsfsdfsd';
console.log(uni);
var nFun = function (num, list) {
};
var arrOb = [{ user: [] }, { user: 4 }];
var objArr = {
    user1: ['dfdf'],
    user2: [1, 4]
};
var objArr2 = {};
var np = { user1: [''], user2: [1], user3: [1] };
var nnn = { user1: [''], user2: [1], user3: true };
var mt = 'ddd';
var mm = {
    user1: [''],
    user2: [3],
};
var users;
// axios(..).then((data) => users = data.result)
users = [{ id: 1, email: 'eee', name: 'ddd' }];
var BUTTONS;
(function (BUTTONS) {
    BUTTONS["UP"] = "UP";
    BUTTONS["DOWN"] = "DOWN";
    BUTTONS["LEFT"] = "LEFT";
    BUTTONS["RIGTH"] = "RIGTHT";
})(BUTTONS || (BUTTONS = {}));
;
var btn = BUTTONS.UP;
console.log(btn);
