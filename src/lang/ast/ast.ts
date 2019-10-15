import { Token, TokenKind, Tokens } from  "./../token/token";
import {None} from "./../Util/none"; 

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
class ExpressionStmt extends Statement {Expression: Expression}
class ReturnStmt  extends Statement {Value: Expression}

// expressions
class IdentifierExpr extends Expression {Value: string }
class IntegerLiteralExpr extends Expression {Value: Number}

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

class BooleanExpr extends Expression {
   Value: Boolean 

   String(): string {
       return this.Token.Literal;
   }
}

class IfExpr extends Expression {
    Condition: Expression; 
    Consequence: BlockStmt; 
    Alternative: BlockStmt | None ;

    String(): string {
        let pre = `if ${this.Condition.String()} ${this.Consequence.String()}` 
        if (this.Alternative != None) {            
            return `${pre} else ${(this.Alternative as BlockStmt).String()}`
        }
        return pre; 
    }
}


class BlockStmt extends Statement {
    Statements: Statement[] 

    String(): string {
        return this.Statements.map(stmt => stmt.String()).join(" ");
    }
}


class FunctionLiteral extends Expression { // this probably needs return params too
    Arguments:  IdentifierExpr[]
    Body: BlockStmt
}


class InvocationExpr extends Expression {
    Function: Expression // Identifier || FunctionLiteral
    Arguments: Expression[] // probably need return params as well

    String(): string {
        return `${this.Function.String()}(${this.Arguments.map(arg => arg.String()).join(", ")})`;
    }
}


class LetStmt extends Statement {
    Name: IdentifierExpr
    Value: Expression

    String(): string {
        return `${this.TokenLiteral()} ${this.Name.String()} = ${this.Value.String};`
    }
}
