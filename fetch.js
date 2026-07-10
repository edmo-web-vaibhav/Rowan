
import * as fs from 'fs/promises';

async function fetching(){
    let id = "7706f813-e771-411e-8355-8cb63e092a85"
    let h = "7a521c36-b3a6-4120-8293-c7e8a93d6bef"
    let file = "Address"
    let date = new Date('2026-01-01');
    let next_date = new Date('2026-01-02');
    let curr_date = new Date();
    console.log(curr_date)
    while(date < curr_date){
        try{
            console.log(next_date)
            let res = await fetch(`https://apply-global.rowan.edu/manage/query/run?id=${id}&cmd=service&output=json&h=${h}&since=${date.toISOString().split('T')[0]}&until=${next_date.toISOString().split('T')[0]}`)
            let data = await res.json()
            await fs.appendFile(file + ".json",JSON.stringify(data, null, 2));
        }catch{
            console.log(`Breaked at ${date}`)
        }
        date.setDate(date.getDate() + 1);
        next_date.setDate(next_date.getDate() + 1);
    }
        
}

fetching();
