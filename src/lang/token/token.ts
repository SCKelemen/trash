
export interface Token { Kind: TokenKind, Literal: string} 



type AMP = "&"
type BAR = "|"
type FPIPE = "|>"
type RPIPE = "<|"

type COMMA = ","
type DOT = "."
type COLON = ":"
type SEMI = ";"
type BANG = "!"

type LBRACK = "["
type RBRACK = "["
type LBRACE = "{"
type RBRACE = "}"
type LPAREN = "("
type RPAREN = ")"

type Scopes = LBRACK | RBRACK | LBRACE | RBRACE | LPAREN | RPAREN

type ASSIGN = ":="

type LT = "<"
type GT = ">"
type LTE = "<=" 
type GTE = "=>"
type EQL = "=="
type NEQL = "!="

type Comparison = LT | GT | LTE | GTE


type EOF = ""
type TRIVIA = ""
type COMMENT = "//"
type IDENTITY = "identity"
type INT = "int"


// arithmeticy bits
type NEG = "-" 
type SUM = "+" 
type MUL = "*" 
type QUO = "/" 



type LET = "let"
type RETURN = "return"
type YIELD = "yield"
type BREAK = "break"
type CONTINUE = "continue"
type IF = "if"
type ELSE = "else"
type IMPORT = "import"
type SWITCH = "switch"
type CASE = "case"
type MATCH = "match"
type DEFAULT = "default"
type FUNC = "func"
type TRUE = "true"
type FALSE = "false"

type BOOLEAN = TRUE | FALSE

export type Keywords = LET | RETURN | YIELD | BREAK | CONTINUE | IF | ELSE | IMPORT | BOOLEAN | SWITCH | CASE | MATCH | DEFAULT | FUNC

export type Tokens = Keywords | NEG | SUM |QUO | MUL | EOF | TRIVIA | COMMENT | IDENTITY | INT | Comparison | ASSIGN | Scopes | AMP | BAR | FPIPE | RPIPE | COMMA | DOT | COLON | SEMI | BANG
export type TokenKind  = Keywords | NEG | SUM |QUO | MUL | EOF | TRIVIA | COMMENT | IDENTITY | INT | Comparison | ASSIGN | Scopes | AMP | BAR | FPIPE | RPIPE | COMMA | DOT | COLON | SEMI | BANG