const utils = {
    add: (a, b) => a + b,
    makeUser: (name, age) => ({ name, age, gender: undefined }),
    makeThrow: () => {
        throw new Error("foreverchoi");
    },
    makeAsync: cb => {
        setTimeout(() => {
            cb("foreverchoi")
        }, 3000)
    }

}

module.exports = utils;