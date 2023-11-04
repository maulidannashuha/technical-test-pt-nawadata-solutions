const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


(async() => {
  try {
    minimumBus = 0
    const MAX_PERSON_IN_BUS = 4

    const familyTotal = await prompt("Input the number of families : ");
    let families = await prompt("Input the number of members in the family (separated by a space) : ");
    families = families.split(' ').sort()

    if(familyTotal != families.length){
        console.log('Input must be equal with count of family')
    }else{
        while (families.length > 0) {
            let i = 1
            while (i < families.length) {
                if(parseInt(families[0]) + parseInt(families[i]) > MAX_PERSON_IN_BUS){
                     break
                }
    
                i++
            }
    
            families.splice(i-1, 1)
            if(i-1 > 0)
                families.splice(0, 1)
    
            minimumBus++
        }
    
        console.log(`Minimum bus required is : ${minimumBus}`)
    }

    rl.close();
  } catch (e) {
    console.error(e);
  }
})();

rl.on('close', () => process.exit(0));