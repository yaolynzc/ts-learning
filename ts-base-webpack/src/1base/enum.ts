// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role)
// Role.Reporter = 0
console.log(Role.Reporter)

// 异构枚举
enum Char {
    a,
    b = Char.a,
    c = 1 + 3,
    d = Math.random(),
    e = '123'.length,
    f = 4
}
console.log(Char)