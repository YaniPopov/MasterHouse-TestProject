import fs from 'fs';

export class CommonWrapper {


    public static async readCSVFile(fileLocation: string):Promise<string[][]> {
      
        const stream = await fs.promises.readFile(fileLocation, { encoding: 'utf-8' })
        let data = stream.split("\r\n")
        return data.map(item => item.split("\t"))
        

    }

    public static randomInteger(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
}