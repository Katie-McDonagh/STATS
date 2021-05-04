import fs from 'fs'
import { dateStringToDate } from './utils'
export class CsvFileReader {

  data: string[][] = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      // leave this flag below to recieve a string of the CSV file
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0])
        ]
      })
  }
}