const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const isVowel = (c) => {
    vowels = "aiueo".split('')

    return vowels.indexOf(c.toLowerCase()) !== -1
}

const pushChar = (obj, c) => {
    if(obj[c] !== undefined)
        obj[c]++
    else
        obj[c] = 1

    return obj
}

const printWords = (obj) => {
    words = ""

    Object.keys(obj).forEach(key => {
        words += key.repeat(obj[key])
    })

    return words
}

(async() => {
  try {
    const vowels = {}
    const consonants = {}
    const words = await prompt("Input one line of words (S) : ");
    words.split('').forEach(element => {
        if(element !== ' ')
            if(isVowel(element))
                pushChar(vowels, element.toLowerCase())
            else
                pushChar(consonants, element.toLowerCase())
    });

    console.log(`Vowel Characters : \n${printWords(vowels)}`)
    console.log(`Consonant Characters : \n${printWords(consonants)}`)

    rl.close();
  } catch (e) {
    console.error(e);
  }
})();

rl.on('close', () => process.exit(0));