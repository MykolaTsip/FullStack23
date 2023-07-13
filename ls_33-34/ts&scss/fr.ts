let a: number = 2;
let name1: string = 'Vasya';
let isMarrid: boolean = false;
let nu: null = null; 
let un: undefined = undefined;
let symb: symbol = Symbol('dddd');
let symb1: Symbol = Symbol('dddd'); // bad practice

let func: Function = () => {}; // bad practice
let func1: () => void = function() {}
let func2: () => number = function() {return 2}
let func3: (param: number) => void = function (params) {}  // bad practice


let obj: Object = {  // bad practice
    a: 1
}
let obj1: object = {  // bad practice
    a: 1
}


let obj2: {a: number} = {a: 33}

console.log(a);

// un = 1
let data: any = 'dsfsdfsdfs'
data = 1;
data = true;

console.log(data);

// const a: never = 'd';

const arr: Array<number | string> = [3, 5, 4, 3];
const arr1: any[] = ['dfdf', 'dfsdfsdf', 43543, true, null, undefined];
const arr2: [string, string, number] = ['dfdf', 'dfsdfsdf', 43543];

let uni: string | number;

uni = 111;
uni = '54654fdsfsdfsd';  
console.log(uni);


const nFun = function(num: number, list: string[] | number[]): void {
}

let arrOb: {user: [] | number}[] = [{user: []}, {user: 4}];

let objArr: {user1: string[], user2: number[]} = {
    user1: ['dfdf'],
    user2: [1, 4]
}

interface IPerson {
    user1: string[];
    user2: number[];
}

let objArr2: Partial<IPerson> = {};

type personType = {
    user1: string[];
    user2: number[];
}

interface NP extends IPerson {
    user3: any
}

const np: NP = {user1: [''], user2: [1],  user3: [1]};

type npt = personType & {user3: any};

const nnn: npt = {user1: [''], user2: [1], user3: true};

type MyType = number | string;

const mt: MyType = 'ddd';

const mm: IPerson = {
    user1: [''],
    user2: [3],
}


interface IUser {
    id: number
    name?: string;
    email: string;
}


let users: IUser[];
// axios(..).then((data) => users = data.result)

users = [{id: 1, email: 'eee', name: 'ddd'}];

enum BUTTONS {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGTH = 'RIGTHT'
};

let btn: BUTTONS = BUTTONS.UP;

console.log(btn);