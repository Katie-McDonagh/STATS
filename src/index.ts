import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  // leave this flag below to recieve a string of the CSV file
  encoding: 'utf-8'
})
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  })
//  enum (enumberation) is an object that stores some very closely related values
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

for (let match of matches) {
  // the 'H' is a magic string, we will get rid of this with typescript
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)