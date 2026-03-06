# SIDE-lib

## Quick Start V3
The library is provided as an ES6 module. Add `SIDE-lib/side-lib.es.js` to your project to use it. The library contains six functions:
* `parse(json_str, { showSymptoms= true, showMisconceptions= true, showCounterSymptoms= false,showConcepts= false })`: Takes a string of Python source code and returns a JSON object containing information about the symptom and misconception indicators detected in the source code. In V3 and above, pass an object as an optional second parameter to configure whether or not to include information about symptoms, misconceptions, counter symptoms, and concepts. By default, only symptoms and misconceptions are included. Most Python source code will have many more detected counter symptoms and concepts than symptoms and misconceptions so enabling this information can substantially increase the size of the JSON object returned by the function.
* `feedback(json_str, includeParseOutput = false, parseOptions = {})`: Takes a string of Python source code and returns a JSON object containing basic information to provide guidance for each detected misconception indicator--it's type, location, the affected text, a brief message to notify the coder, and more detailed information in the form of URL parameters. The URL parameters can be used to link to extended online guidance. See the example for more. The `includeParseOutput` parameter is option and can be used to combine `parse` output with feedback. In V3 and above, pass an optional `parseOptions` object to configure which information to include in the parse output. See the `parse` documentation for information.
* `symptomInfo()`: Returns a JSON object listing all symptoms currently supported by SIDE-lib.
* `counterSymptomInfo()`: Returns a JSON object listing all counter symptoms currently supported by SIDE-lib. Counter symptoms are indicators that suggest a specific concept has been used correctly.
* `misconceptionInfo()`: Returns a JSON object listing all misconception indicators currently supported by SIDE-lib.
* `conceptInfo()`: Returns a JSON object listing all concept indicators currently supported by SIDE-lib. Concept indicators are the opposite of misconception indicators and suggest the coder does understand a specific concept.

Note: detailed documentation about the JSON objects returned by each function is coming soon (but not that soon...). In the meantime, please get in touch via the email address on [our Github page](https://github.com/Supportive-IDE) for more information and help.

A basic usage example is provided in this repo. For a more developed example of how the library can be used, see our online Python IDE: [demo](https://supportive-ide.github.io/web-IDE/)| [Github repo](https://github.com/Supportive-IDE/web-IDE).

## The misconception indicators
The misconceptions detected by SIDE-lib were derived from our analysis of 1332 Python programs written by beginner programming students. The misconceptions currently detected are described below.

|Misconception ID|Description|
|---|---|
|AssignCompares|A single equals is used where a boolean expression is expected, e.g. in a conditional statement. This may be a typo or confusion between single and double equals operators.|
|ColonAssigns|A colon is used between a variable name and a value. This may be a typo.|
|CompareMultipleValuesWithOr|A boolean expression has the form `a == some_value or other_value`, where other_value is non-boolean. There is likely a misunderstanding of the syntax of comparing multiple values.|
|ComparisonWithBoolLiteral|A boolean expression contains `== True` or `== False`. The programmer may believe that explicitly checking equality is always necessary in a boolean expression. This may also be a style preference.
|DeferredReturn|Code follows a return statement in a function. The programmer may not realise that a return statement causes the function to exit immediately.|
|ForLoopVarIsLocal|An iterating variable in a for loop overwrites a variable declared before the loop and the value is different from the overwritten value, or the values cannot be determined. This potential misconception is similar to IteratorInitialisedOutsideLoop.|
|FunctionCallsNoParentheses|An undefined variable has the same name as a function. There may be a misunderstanding about how to call a function. Caution: functions in Python are first class objects, so it is possible that use of the function name without parentheses is intended and there is no misconception.|
|FunctionCallsUseSquareBrackets|The name of a function is called followed by square brackets rather than parentheses. The programmer may not be aware of when to use which type of bracket.|
|IterationRequiresTwoLoops|A while loop with an integer loop variable contains a nested for loop. The while loop variable is only modified in the nested for loop and is used to count items in the variable iterated in the for loop. The two nested loops could be replaced with a single for loop using `enumerate()` or `range()`.|
|TargetInitialisedOutsideLoop|The target variable in a for loop is initialised before the loop with the same value. The programmer may not know that the iterating variable is initialised in the for loop definition.|
|LocalVariablesAreGlobal|An undefined variable in document scope has the same name as a variable with function scope. This may indicate a misunderstanding of variable scope.|
|LoopCounter|A for loop target variable is modified in the loop and the modified variable is not used. This may indicate confusion over how loops use loop variables.|
|MapToBooleanWithIf|A conditional statement checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly.|
|MapToBooleanWithTernaryOperator|A ternary checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly.|
|NoKeyword|A block definition keyword (e.g. def, if, while) is missing where one is expected. The programmer may not realise that the keyword is required.|
|NoReservedWords|Any string that meets naming character constraints can be used as an identifier (name of a variable, function, method, or class).|
|ParameterMustBeAssignedInFunction|A user defined function has named parameter but the parameter value is overwritten in the function before it is used e.g. by prompting for command line input. This indicates potential misconceptions about the purpose or use of function parameters.|
|ParenthesesOnlyIfArgument|An undefined variable has the same name as a user-defined function with no arguments. There may be a misunderstanding of the syntax of function calls.|
|PrintSameAsReturn|A call to a function that prints but does not return (including the `print()` function) is assigned or passed, or a call to a function that prints before returning a value is not assigned or passed. There may be confusion about printing a value versus returning a value.|
|ReturnCall|Function return values are surrounded by parentheses. There may be a belief that return needs to be called like a function.|
|ReturnWaitsForLoop|A return statement in a loop causes the loop to consistently exit on the first iteration. Typically due to a missing if statement, there may be an expectation that the loop implicitly knows when to return and when to continue.|
|ConditionalIsSequence|If statements with very similar conditional statements appear in a sequence. There may be a belief that subsequent if statements will only execute if the previous condition does not. The programmer may not be aware of the efficiency drawbacks of using sequential if statements where a multiway conditional would be more appropriate.|
|StringMethodsModifyTheString|A string method is called but the result is not saved or passed. There may be an assumption that string methods mutate the string.|
|TypeConversionModifiesArgument|A type conversion function (e.g. `int()`, `float()`) is called but the return value is not saved or used.|
|TypeMustBeSpecified|A value that is guaranteed to have a particular data type is passed to a type conversion function that returns the same data type. In the case of literals, there may be a belief that type must be specified as in strongly typed languages. In other cases, there may be a misunderstanding or lack of confidence in how Python dynamically determines type.|
|UnusedReturn|The result of a call to a function / method that returns a value is not used in some way.|
|WhileSameAsIf|A while loop does not modify any of its loop variables and may also always exit during the first iteration. Where this behaviour is intentional, the while definition would be better replaced with an if statement. Where the loop does not exit, there is a risk of an infinite loop.|

## More information
For more detailed information on how the library works and its limitations, please see: [https://supportive-ide.github.io/symptom-checker/](https://supportive-ide.github.io/symptom-checker/)
