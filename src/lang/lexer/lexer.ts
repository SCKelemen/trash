import { Char } from './../Util/char'
import { EOF } from './../Util/eof'

class Lexer {
    Input: string;
    Head: number;
    Read: number;
    Current: Char | EOF ;

    constructor(input: string) {
        this.Input = input;

        this.readChar()
    }
    
    readChar() {
        if (this.Read >= this.Input.length) {
            this.Current = EOF; 
        } else {
            this.Current = Char(this.Input[this.Read])
        }
        
        this.Head = this.Read;
        this.Read++;
    }
}