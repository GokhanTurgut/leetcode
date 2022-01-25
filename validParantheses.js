function isValid(s) {
  let parenthesis = 0;
  let brackets = 0;
  let curlyBrackets = 0;

  let stack = [];

  for (let char of s) {
    switch (char) {
      case "(":
        stack.push("(");
        parenthesis++;
        break;
      case ")":
        if (stack.pop() !== '(') return false;
        if (parenthesis < 1) return false;
        parenthesis--;
        break;
      case "[":
        stack.push("[");
        brackets++;
        break;
      case "]":
        if (stack.pop() !== '[') return false;
        if (brackets < 1) return false;
        brackets--;
        break;
      case "{":
        stack.push("{");
        curlyBrackets++;
        break;
      case "}":
        if (stack.pop() !== '{') return false;
        if (curlyBrackets < 1) return false;
        curlyBrackets--;
        break;
    }
  }

  if (parenthesis !== 0 || brackets !== 0 || curlyBrackets !== 0) return false;
  return true;
}
