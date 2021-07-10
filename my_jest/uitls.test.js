const { } = require("jest");
const utils = require("./utils");

//기본테스트케이스문법
test("1은 1", () => {
    expect(1).toBe(1);
});

//expect(테스트대상).toBe(기대값)
test("2 더하기 3는 5", () => {
    expect(utils.add(2, 3)).toBe(5);
});

//expect(테스트대상).not.toBe(기대값)
test("3 더하기 3는 5", () => {
    expect(utils.add(3, 3)).not.toBe(5);
});

test("0.1 더하기 0.2는 0.3이다", () => {
    expect(utils.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// ========대상이 객체나 배열일경우 toBe()가 아닌 toEqual()나 toStrictEqual()를 사용========
// ===============toStrictEqual()는 toStrict()과 다르게 엄격하게 비교한다.===============
//expect(테스트대상).not.toStrictEqual(기대값)
test("이름과 나이를 받아 객체로 반환", () => {
    expect(utils.makeUser("foreverchoi", 27)).toStrictEqual({
        name: "foreverchoi",
        age: 27,
    });
});

//expect(테스트대상).not.toEqual(기대값)
test("이름과 나이를 받아 객체로 반환", () => {
    expect(utils.makeUser("foreverchoi", 27)).toEqual({
        name: "foreverchoi",
        age: 27,
    });
});

//expect(테스트대상).not.toContain(기대값)
test("이름과 나이를 받아 객체로 반환", () => {
    const names = ["foreverchoi", "foreverkim", "foreverlee"]
    expect(names).toContain("foreverchoi");
})


// ================================================================================
// toBeNull         값이 null이다
// toBeUndefined    값이 undefined이다
// toBeDefined      값이 정의되어있다.

//expect(테스트대상).toBeNull()
test("테스트대상은 null이다.", () => {
    expect(null).toBeNull();
});

//expect(테스트대상).toBeUndefined()
test("테스트대상은 정의되어있지 않다.", () => {
    expect(undefined).toBeUndefined();
});

//expect(테스트대상).toBeDefined()
test("테스트대상은 정의되어있다.", () => {
    expect(1).toBeDefined();
});


// ================================================================================
// toBeTruthy       값이 참이다
// toBeFalsy        값이 거짓이다

//expect(테스트대상).toBeTruthy()
test("0은 true이다", () => {
    expect(utils.add(1, -1)).toBeTruthy();
});

//expect(테스트대상).toBeFalsy()
test("0은 false이다", () => {
    expect(utils.add(1, -1)).toBeFalsy();
});

// ================================================================================
// toBeGreaterThan          크다
// toBeGreaterThanOrEqual   크거나 같다
// toBeLessThan             작다
// toBeLessThanOrEqual      작거나 같다

test("ID는 10자 이하여야 한다.", () => {
    const ID = "foreverchoi"
    expect(ID.length).toBeLessThan(10);
});

test("ID는 10자 이하여야 한다.", () => {
    const ID = "foreverchoi"
    expect(ID.length).toBeGreaterThan(10);
});


// ================================================================================
// toThrow      에러인지
test("에러를 발생시킨다", () => {
    expect(utils.makeThrow).toThrow("foreverchoi");
});


// ================================================================================
// 테스트대상이 비동기일경우 test함수의 콜백인자인 done을 사용
test("3초후에 foreverchoi를 리턴함", (done) => {
    utils.makeAsync((name) => {
        expect(name).toBe("foreverchoi");
        done();
    })
});