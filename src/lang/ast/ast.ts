import { Token, TokenKind, Tokens } from  "./../token/token";

interface Node { TokenLiteral(): string; String(): string}

abstract class Statement extends Node {
    Token: Token;
    Literal: string; 
    TokenLiteral(): string { return this.Token.Literal; }
    String(): string { return this.Literal; }
}

abstract class Expression extends Node {
    Token: Token;
    Literal: string; 
    TokenLiteral(): string { return this.Token.Literal; }
    String(): string { return this.Literal; }
}

class Program  { 
    Statements: Statement[] 
    String(): string {
        
        if (this.Statements.length == 0) { return ""}
        return this.Statements.map(stmt => stmt.String()).join("\n")
    }

}

// statements
class ExpressionStmt extends Statement {}
class ReturnStmt  extends Statement {}

// expressions
class IdentifierExpr extends Expression {}
class IntegerLiteralExpr extends Expression {}

class PrefixExpr extends Expression {
    Operator: string
    Right: Expression

    String(): string {
        return  `(${this.Operator}${this.Right.String()})`;
    }
}

class InfixExpr extends Expression {
    Left: Expression
    Operator: string
    Right: Expression 

    String(): string {
        return `(${this.Left.String()} ${this.Operator} ${this.Right.String()}`;
    }
}



