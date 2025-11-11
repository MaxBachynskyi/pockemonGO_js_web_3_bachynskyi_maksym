function generateLog(firstPerson, secondPerson) {
    const logs = [
        `${firstPerson} згадав щось важливе, але несподівано ${secondPerson}, не тямлячи себе від переляку, ударив його по руці.`,
        `${firstPerson} поперхнувся, і за це ${secondPerson} від страху врізав коліном у лоба ворога.`,
        `${firstPerson} забувся, але в цей час нахабний ${secondPerson}, прийнявши вольове рішення, підкрався і вдарив.`,
        `${firstPerson} прийшов до тями, але несподівано ${secondPerson} випадково наніс потужний удар.`,
        `${firstPerson} здивувався, а ${secondPerson}, похитнувшись, завдав підлого удару.`,
        `${firstPerson} висморкався, але ${secondPerson} несподівано провів дроблячий удар.`,
        `${firstPerson} похитнувся, і зненацька нахабний ${secondPerson} без причини вдарив у ногу.`,
        `${firstPerson} розсердився, як раптом ${secondPerson} випадково врізав стопою в живіт супротивника.`,
        `${firstPerson} намагався щось сказати, але ${secondPerson} зі скуки розбив брову супернику.`,
    ];

    return logs[random(logs.length - 1)];
}
