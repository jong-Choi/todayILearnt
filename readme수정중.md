#2022-11-01
### 자바스크립트 딥다이브 16장 프로퍼티 어트리뷰트
1. 내부 슬롯, 내부 메서드
    `[[ ]]`로 감싸진 메서드와 프로퍼티는 자바스크립트엔진에서 동작하지만 개발자가 직접 접근할 수는 없다. 예외적으로 Prototype 등의 일부 내부 슬롯은 간접적으로 접근할 수 있다.   
2. 프로퍼티 어트리뷰트
   객체 내부에 프로퍼티를 정의할 때에, `[[Value]], [[Writable]], [[Enumerable]], [[Configurable]]`의 내부 슬롯을 자동으로 정의한다. 기본값은 true이다.   
3. 프로퍼티 디스크럽터
   Object.getOwnPropertyDescriptor(객체명, '프로퍼티 키값') 메서드를 호출하면 `{프로퍼티 디스크립터}`를 반환한다.
   Object.getOwnPropertyDescriptors(객체명)은 객체의 모든 프로퍼티에 대한 프로퍼티 디스크립터를 `키값: {프로퍼티 디스크립터}`를 반환한다.

4. 데이터 프로퍼티와 접근자 프로퍼티
   firstName, lastName이라는 데이터 프로퍼티가 있고, fullName이라는 접근자 프로퍼티가 있는 person 객체가 있다. 
```js
const person = {
    firstName: 'steve',
    lastName: 'jobs',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    get fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person.full)
// steve jobs
```

데이터 프로퍼티의 예시는 아래와 같다
```js
Object.getOwnPropertyDescriptor(person, 'firstName');
// {value: "steve", writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(person, 'fullName');
// {get: f, set: f, enumerable: true, configurable: true}
```
접근자 프로퍼티는 getter 혹은 setter를 가질 수 있다.  

prototype도 getOwnPropertyDescriptor를 통해 확인해보자. 
아래와 같이 객체의 __proto__는 접근자 프로퍼티이며, 함수의 prototype은 데이터 프로퍼티이다. 함수의 prototype 객체는 Constructor()가 작동할 때에 프로토타입을 넘겨주기 위해 사용된다.  
```js
Object.getOwnPropertyDescriptor(person, 'firstName');
// {value: "steve", writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(person, 'fullName');
// {get: f, set: f, enumerable: true, configurable: true}
```

5. 프로퍼티 정의
`Object.defineProperty(person, '프로퍼티명', {프로퍼티 디스크립터})`를 통해 프로퍼티를 재정의할 수 있다.   
`Object.defineProperties(person, {프로퍼티명: {프로퍼티 디스크립터}})`의 형태로 여러개의 프로퍼티를 동시에 정의할 수도 있다.  
이때 프로퍼티 디스크립터에 전달되지 않은 프로퍼티 value, get, set은 undefined를 기본값으로 정의되며, writable, enumerable, configurable은 false를 기본값으로 정의된다. 특히 configurable이 false인 경우 재정의가 불가능하여 삭제 및 프로퍼티 어트리뷰트 값의 변경이 금지됨에 유의(단, writable이 true인 경우 value값을 변경하거나 writable을 false로 바꾸는 것은 가능). 프로퍼티가 최초로 생성될 때 이들은 true로 초기화되는 것과는 상반된다.  

```js
Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`
    },
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// {get: f, set: undefined, enumerable: true, configurable: false}

delete person.fullName;
// Uncaught TypeError: Cannat redefine property: lastName
```

6. 객체 변경 금지
객체는 mutable하므로 값에 직접 접근하여 변경 및 삭제하거나 Object.defineProperty를 이용해 프로퍼티 어트리뷰트를 재정의할 수도 있다. 이를 방지하기 위해 아래의 메서드를 재공한다.  
객체 변경 금지 메서드로 금지된 행위는 무시되며, strict mode에서는 에러 메세지를 내보낸다.

|구분|메서드|check|프로퍼티 추가|삭제|프로퍼티 값 읽기|쓰기|프로퍼티 어트리뷰트 재정의|
|---|---|---|---|---|---|---|---|
|객체 확장 금지|Object.preventExtensions(객체명)|Object.isExtensible(객체명)|x|o|o|o|o|
|객체 밀봉|Object.seal(객체명)|Object.isSealed(객체명)|x|x|o|o|x|
|객체 동결|Object.freeze(객체명)|Object.isFrozen(객체명)|x|x|o|x|x|

```js
Object.freeze(person);

delete person.fullName;
console.log(person.fullName) // steve jobs
```

해당 변경금지 메서드는 얕은 금지만 가능하다. 중첩된 객체에도 적용하기 위해서는 재귀적으로 실행해야 한다. 아래의 재귀함수는  
1-target이 존재하며
2-target이 오브젝트이며
3-target이 Frozen상태가 아닌 경우
target을 freeze하고 target의 자식요소에 대해 재귀적으로 1~3을 반복하며 동결되지 않은 자식 객체들을 동결한다.  

```js
function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target; //처리된 타겟을 리턴하며 함수종료
}
```
이때 typeof 연산자는 피연산자의 평가전 자료형을 문자열 형태로 반환한다. 
