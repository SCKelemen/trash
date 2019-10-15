enum CharType { }
export type Char = string & CharType 
const isChar=(str: string): str is Char => /^(.|\n)$/.test(
  str
)

export function Char(char: string): Char {
//you can also use is char here for to test whether actually is char
   if (!isChar(char)){
       throw new Error('not a char')
   }
   return char
}