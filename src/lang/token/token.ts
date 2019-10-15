interface Token { Kind: TokenKind, Literal: string} 

type TokenKind = ""

type AMP = "&"
type BAR = "|"
type FPIPE = "|>"
type RPIPE = "<|"

type COMMA = ","
type DOT = "."
type COLON = ":"
type SEMI = ";"

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

type Comparison = LT | GT | LTE | GTE


EOF
	TRIVIA
	COMMENT

	IDENT
	INT // for natural numbers

	LBRACK // [
	RBRACK // ]
	LBRACE // {
	RBRACE // }
	LPAREN // (
	RPAREN // )
	LCHEV  // <
	RCHEV  // >

	COMMA // ,
	DOT   // .
	COLON // :
	SEMI  // ;

	ASSIGN // ==

	PIPE // |
	AMP  // &
	BANG // !

	// arithmeticy bits
	NEG // -
	SUM // +
	MUL // *
	QUO // /

	EQL  // ==
	NEQL // !=



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

type Keywords = LET | RETURN | YIELD | BREAK | CONTINUE | IF | ELSE | IMPORT | BOOLEAN | SWITCH | CASE | MATCH | DEFAULT




