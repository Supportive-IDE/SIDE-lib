"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Line=void 0;var _expression=require("./expression.js"),_character=require("./character.js"),_identifiers=require("./identifiers.js");function _createForOfIteratorHelper(e,t){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,o=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return a=e.done,e},e:function(e){o=!0,n=e},f:function(){try{a||null==s.return||s.return()}finally{if(o)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,i=new Array(t);s<t;s++)i[s]=e[s];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classPrivateMethodInitSpec(e,t){_checkPrivateRedeclaration(e,t),t.add(e)}function _classPrivateFieldInitSpec(e,t,s){_checkPrivateRedeclaration(e,t),t.set(e,s)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(e,t){return _classApplyDescriptorGet(e,_classExtractFieldDescriptor(e,t,"get"))}function _classApplyDescriptorGet(e,t){return t.get?t.get.call(e):t.value}function _classPrivateMethodGet(e,t,s){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return s}function _classPrivateFieldSet(e,t,s){return _classApplyDescriptorSet(e,_classExtractFieldDescriptor(e,t,"set"),s),s}function _classExtractFieldDescriptor(e,t,s){if(!t.has(e))throw new TypeError("attempted to "+s+" private field on non-instance");return t.get(e)}function _classApplyDescriptorSet(e,t,s){if(t.set)t.set.call(e,s);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=s}}var _startingDocIndex=new WeakMap,_lineNum=new WeakMap,_rawContent=new WeakMap,_indentSize=new WeakMap,_expressions=new WeakMap,_lastExpression=new WeakMap,_continuesOnNextLine=new WeakMap,_isContinuation=new WeakMap,_multilineCommentDelimiter=new WeakMap,_stringLiteralDelimiter=new WeakMap,_functionCalls=new WeakMap,_variableUsages=new WeakMap,_otherIdentifiers=new WeakMap,_builtInFunctions=new WeakMap,_modules=new WeakMap,_groupCharCounts=new WeakMap,_rawContentStartIndex=new WeakMap,_rawContentEndIndex=new WeakMap,_exits=new WeakMap,_countSpacesAtStartOfLine=new WeakSet,_parseLine=new WeakSet,_isLineSeparator=new WeakSet,_checkIfContinues=new WeakSet,_processSingleLineComment=new WeakSet,_processBlockCommentOrString=new WeakSet,_processBlockComment=new WeakSet,_processStringLiteral=new WeakSet,_processIdentifierOrKeyword=new WeakSet,_processNamedImport=new WeakSet,_processFunction=new WeakSet,_processVariable=new WeakSet,_processPossibleModule=new WeakSet,_processNumberLiteral=new WeakSet,_processMultiCharacterOperator=new WeakSet,_processSingleCharacter=new WeakSet,_updateGroupCharCounts=new WeakSet,_getIdentifierOrKeyword=new WeakSet,_getIdentifierEntity=new WeakSet,_getNumber=new WeakSet,_getNextNonSpaceCharacter=new WeakSet,_isIdentifierOrKeyword=new WeakSet,_isNumber=new WeakSet,_isPossibleMultiCharacterOperator=new WeakSet,_isStartOfMultilineComment=new WeakSet,Line=function(){function e(t,s,i,r){var n=r.continuationLine,a=void 0!==n&&n,o=r.multilineCommentDelimeter,l=void 0===o?void 0:o,c=r.stringLiteralDelimeter,_=void 0===c?void 0:c,p=r.groupCharCounts,h=void 0===p?{"(":0,"[":0,"{":0}:p,d=r.lastExpression,u=void 0===d?void 0:d,v=r.rawContentStartIndex,x=void 0===v?0:v;_classCallCheck(this,e),_classPrivateMethodInitSpec(this,_isStartOfMultilineComment),_classPrivateMethodInitSpec(this,_isPossibleMultiCharacterOperator),_classPrivateMethodInitSpec(this,_isNumber),_classPrivateMethodInitSpec(this,_isIdentifierOrKeyword),_classPrivateMethodInitSpec(this,_getNextNonSpaceCharacter),_classPrivateMethodInitSpec(this,_getNumber),_classPrivateMethodInitSpec(this,_getIdentifierEntity),_classPrivateMethodInitSpec(this,_getIdentifierOrKeyword),_classPrivateMethodInitSpec(this,_updateGroupCharCounts),_classPrivateMethodInitSpec(this,_processSingleCharacter),_classPrivateMethodInitSpec(this,_processMultiCharacterOperator),_classPrivateMethodInitSpec(this,_processNumberLiteral),_classPrivateMethodInitSpec(this,_processPossibleModule),_classPrivateMethodInitSpec(this,_processVariable),_classPrivateMethodInitSpec(this,_processFunction),_classPrivateMethodInitSpec(this,_processNamedImport),_classPrivateMethodInitSpec(this,_processIdentifierOrKeyword),_classPrivateMethodInitSpec(this,_processStringLiteral),_classPrivateMethodInitSpec(this,_processBlockComment),_classPrivateMethodInitSpec(this,_processBlockCommentOrString),_classPrivateMethodInitSpec(this,_processSingleLineComment),_classPrivateMethodInitSpec(this,_checkIfContinues),_classPrivateMethodInitSpec(this,_isLineSeparator),_classPrivateMethodInitSpec(this,_parseLine),_classPrivateMethodInitSpec(this,_countSpacesAtStartOfLine),_classPrivateFieldInitSpec(this,_startingDocIndex,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_lineNum,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_rawContent,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_indentSize,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_expressions,{writable:!0,value:[]}),_classPrivateFieldInitSpec(this,_lastExpression,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_continuesOnNextLine,{writable:!0,value:!1}),_classPrivateFieldInitSpec(this,_isContinuation,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_multilineCommentDelimiter,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_stringLiteralDelimiter,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_functionCalls,{writable:!0,value:new Map}),_classPrivateFieldInitSpec(this,_variableUsages,{writable:!0,value:[]}),_classPrivateFieldInitSpec(this,_otherIdentifiers,{writable:!0,value:new Set}),_classPrivateFieldInitSpec(this,_builtInFunctions,{writable:!0,value:new Set}),_classPrivateFieldInitSpec(this,_modules,{writable:!0,value:new Map}),_classPrivateFieldInitSpec(this,_groupCharCounts,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_rawContentStartIndex,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_rawContentEndIndex,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_exits,{writable:!0,value:!1}),_classPrivateFieldSet(this,_startingDocIndex,t),_classPrivateFieldSet(this,_lineNum,s),_classPrivateFieldSet(this,_rawContent,i),_classPrivateFieldSet(this,_isContinuation,a),_classPrivateFieldSet(this,_multilineCommentDelimiter,l),_classPrivateFieldSet(this,_stringLiteralDelimiter,_),_classPrivateFieldSet(this,_indentSize,_classPrivateMethodGet(this,_countSpacesAtStartOfLine,_countSpacesAtStartOfLine2).call(this,i)),_classPrivateFieldSet(this,_groupCharCounts,h),_classPrivateFieldSet(this,_lastExpression,u),_classPrivateFieldSet(this,_rawContentStartIndex,x);var g=i.trimEnd();if(_classPrivateFieldSet(this,_rawContentEndIndex,g.length-1),void 0!==l){var y=_classPrivateMethodGet(this,_processBlockComment,_processBlockComment2).call(this,_classPrivateFieldGet(this,_indentSize),!0);_classPrivateMethodGet(this,_parseLine,_parseLine2).call(this,y+1)}else if(void 0!==_){var E=_classPrivateMethodGet(this,_processStringLiteral,_processStringLiteral2).call(this,_character.Character.getCategory(_.charCodeAt(0)),_classPrivateFieldGet(this,_indentSize));_classPrivateMethodGet(this,_parseLine,_parseLine2).call(this,E+1)}else x>0?_classPrivateMethodGet(this,_parseLine,_parseLine2).call(this,x):_classPrivateMethodGet(this,_parseLine,_parseLine2).call(this)}return _createClass(e,[{key:"reevaluateLastExpression",value:function(e){if(_classPrivateFieldGet(this,_expressions).length>0&&e.is(_expression.ExpressionEntity.OpenParenthesis)){var t=this.getLastExpression(),s=(0,_expression.keywordLookup)(t.getValue());t.is(_expression.ExpressionEntity.VariableName)?(s.category===_expression.ExpressionCategory.BuiltInFunctions?t.convert(s.entity,s.category,_expression.builtInReturnLookup.get(s.entity)):(t.convert(_expression.ExpressionEntity.FunctionName,_expression.ExpressionCategory.Identifiers),_classPrivateMethodGet(this,_processFunction,_processFunction2).call(this,t.getValue(),_classPrivateFieldGet(this,_expressions).length-1,!1)),_classPrivateFieldGet(this,_variableUsages).pop()):t.is(_expression.ExpressionEntity.PropertyName)&&(s.category===_expression.ExpressionCategory.BuiltInMethods?t.convert(s.entity,s.category,_expression.builtInReturnLookup.get(s.entity)):t.convert(_expression.ExpressionEntity.MethodName,_expression.ExpressionCategory.OtherMethods))}}},{key:"getStartingDocIndex",value:function(){return _classPrivateFieldGet(this,_startingDocIndex)}},{key:"getEndingDocIndex",value:function(){return _classPrivateFieldGet(this,_startingDocIndex)+(_classPrivateFieldGet(this,_rawContentEndIndex)-_classPrivateFieldGet(this,_rawContentStartIndex))+(this.isFullyProcessed()?1:0)}},{key:"getLineNumber",value:function(){return _classPrivateFieldGet(this,_lineNum)}},{key:"getRawContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return _classPrivateFieldGet(this,_rawContent).substring(e?0:_classPrivateFieldGet(this,_indentSize))}},{key:"getIndent",value:function(){return _classPrivateFieldGet(this,_indentSize)}},{key:"getGroupCharCounts",value:function(){return _classPrivateFieldGet(this,_groupCharCounts)}},{key:"isContinuation",value:function(){return _classPrivateFieldGet(this,_isContinuation)}},{key:"containsMultipleLines",value:function(){return _classPrivateFieldGet(this,_rawContentStartIndex)>0||_classPrivateFieldGet(this,_rawContentEndIndex)<_classPrivateFieldGet(this,_rawContent).trimEnd().length-1}},{key:"isFullyProcessed",value:function(){return _classPrivateFieldGet(this,_rawContentEndIndex)===_classPrivateFieldGet(this,_rawContent).trimEnd().length-1}},{key:"getNextLineStartIndex",value:function(){return this.isFullyProcessed()?0:_classPrivateFieldGet(this,_rawContentEndIndex)+1}},{key:"continuesOnNextLine",value:function(){return _classPrivateFieldGet(this,_continuesOnNextLine)}},{key:"getMultilineCommentDelimiter",value:function(){return _classPrivateFieldGet(this,_multilineCommentDelimiter)}},{key:"getStringLiteralDelimiter",value:function(){return _classPrivateFieldGet(this,_stringLiteralDelimiter)}},{key:"getFunctionCalls",value:function(){return _classPrivateFieldGet(this,_functionCalls)}},{key:"getBuiltInFunctions",value:function(){return _classPrivateFieldGet(this,_builtInFunctions)}},{key:"getOtherIdentifiers",value:function(){return _classPrivateFieldGet(this,_otherIdentifiers)}},{key:"getVariableUsages",value:function(){return _classPrivateFieldGet(this,_variableUsages)}},{key:"insertVariableUsage",value:function(e,t){_classPrivateMethodGet(this,_processVariable,_processVariable2).call(this,e,t)}},{key:"getModules",value:function(){return _classPrivateFieldGet(this,_modules)}},{key:"isBlank",value:function(){var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(this,_expressions));try{for(t.s();!(e=t.n()).done;){if(e.value.getCategory()!==_expression.ExpressionCategory.Comment)return!1}}catch(e){t.e(e)}finally{t.f()}return!0}},{key:"isBlockDefinition",value:function(){return _classPrivateFieldGet(this,_expressions).length>0&&_classPrivateFieldGet(this,_expressions)[0].getCategory()===_expression.ExpressionCategory.BlockDefinitions}},{key:"getExpressions",value:function(){return _classPrivateFieldGet(this,_expressions).length>0&&_classPrivateFieldGet(this,_continuesOnNextLine)&&this.getLastExpression().is(_expression.ExpressionEntity.ContinuationLine)?_classPrivateFieldGet(this,_expressions).slice(0,-1):_classPrivateFieldGet(this,_expressions)}},{key:"addExpression",value:function(e){_classPrivateFieldGet(this,_expressions).push(e)}},{key:"getFirstExpression",value:function(){if(_classPrivateFieldGet(this,_expressions).length>0)return _classPrivateFieldGet(this,_expressions)[0]}},{key:"getLastExpression",value:function(){return _classPrivateFieldGet(this,_expressions).length>0?_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1]:0===_classPrivateFieldGet(this,_expressions).length&&this.isContinuation()?_classPrivateFieldGet(this,_lastExpression):void 0}},{key:"getSecondLastExpression",value:function(){if(_classPrivateFieldGet(this,_expressions).length>1)return _classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-2]}},{key:"getExpressionsOfEntity",value:function(e){var t,s=[],i=_createForOfIteratorHelper(_classPrivateFieldGet(this,_expressions));try{for(i.s();!(t=i.n()).done;){var r=t.value;r.getEntity()===e&&s.push(r)}}catch(e){i.e(e)}finally{i.f()}return s}},{key:"contains",value:function(e){var t,s=_createForOfIteratorHelper(_classPrivateFieldGet(this,_expressions));try{for(s.s();!(t=s.n()).done;){if(t.value.getEntity()===e)return!0}}catch(e){s.e(e)}finally{s.f()}return!1}},{key:"containsOneOf",value:function(e){var t,s=_createForOfIteratorHelper(_classPrivateFieldGet(this,_expressions));try{for(s.s();!(t=s.n()).done;){var i=t.value;if(e.indexOf(i.getEntity())>=0)return!0}}catch(e){s.e(e)}finally{s.f()}return!1}},{key:"index",value:function(e){for(var t=0;t<_classPrivateFieldGet(this,_expressions).length;t++)if(_classPrivateFieldGet(this,_expressions)[t].getEntity()===e)return t;return-1}},{key:"getSequencesOfPattern",value:function(e){for(var t=[],s=0,i=[],r=0;r<_classPrivateFieldGet(this,_expressions).length;r++)_classPrivateFieldGet(this,_expressions)[r].isOneOfEntities(e[s])?(i.push(r),++s===e.length&&(t.push(i),i=[],s=0)):s>0&&(i=[],s=0);return t}},{key:"indexOfValue",value:function(e){for(var t=0;t<_classPrivateFieldGet(this,_expressions).length;t++)if(_classPrivateFieldGet(this,_expressions)[t].getValue()===e)return t;return-1}},{key:"isExit",value:function(){return _classPrivateFieldGet(this,_exits)}}]),e}();function _countSpacesAtStartOfLine2(e){for(var t=0,s=e.charCodeAt(t);e.length>0&&_character.Character.getCategory(s)===_character.Character.Space||_character.Character.getCategory(s)===_character.Character.Tab;)t++,s=e.charCodeAt(t);return t}function _parseLine2(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_classPrivateFieldGet(this,_indentSize);e<_classPrivateFieldGet(this,_rawContent).length;e++){var t=_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(e));if(t===_character.Character.Hash)e=_classPrivateMethodGet(this,_processSingleLineComment,_processSingleLineComment2).call(this,e),_classPrivateFieldSet(this,_rawContentEndIndex,e);else if(t.isQuote())e=_classPrivateMethodGet(this,_processBlockCommentOrString,_processBlockCommentOrString2).call(this,t,e);else if(_classPrivateMethodGet(this,_isIdentifierOrKeyword,_isIdentifierOrKeyword2).call(this,t))e=_classPrivateMethodGet(this,_processIdentifierOrKeyword,_processIdentifierOrKeyword2).call(this,e);else if(_classPrivateMethodGet(this,_isNumber,_isNumber2).call(this,t,e,0===e||_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(e-1))===_character.Character.Space))e=_classPrivateMethodGet(this,_processNumberLiteral,_processNumberLiteral2).call(this,e);else if(_classPrivateMethodGet(this,_isPossibleMultiCharacterOperator,_isPossibleMultiCharacterOperator2).call(this,t))e=_classPrivateMethodGet(this,_processMultiCharacterOperator,_processMultiCharacterOperator2).call(this,e);else if(t!==_character.Character.Space&&t!==_character.Character.Tab&&(_classPrivateMethodGet(this,_processSingleCharacter,_processSingleCharacter2).call(this,e),e<_classPrivateFieldGet(this,_rawContentEndIndex)&&_classPrivateMethodGet(this,_isLineSeparator,_isLineSeparator2).call(this,t))){_classPrivateFieldSet(this,_rawContentEndIndex,e);break}}_classPrivateMethodGet(this,_checkIfContinues,_checkIfContinues2).call(this)}function _isLineSeparator2(e){return e===_character.Character.Semicolon||!!(e===_character.Character.Colon&&_classPrivateFieldGet(this,_expressions).length>0&&_classPrivateFieldGet(this,_expressions)[0].isOneOfEntities([_expression.ExpressionEntity.IfDefinition,_expression.ExpressionEntity.ElifDefinition,_expression.ExpressionEntity.ElseDefinition,_expression.ExpressionEntity.FunctionDefinition,_expression.ExpressionEntity.ClassDefinition,_expression.ExpressionEntity.ForDefinition,_expression.ExpressionEntity.WhileDefinition,_expression.ExpressionEntity.TryDefinition,_expression.ExpressionEntity.ExceptDefinition])&&0===_classPrivateFieldGet(this,_groupCharCounts)["{"]&&0===_classPrivateFieldGet(this,_groupCharCounts)["("]&&0===_classPrivateFieldGet(this,_groupCharCounts)["["])}function _checkIfContinues2(){(void 0!==_classPrivateFieldGet(this,_multilineCommentDelimiter)||void 0!==_classPrivateFieldGet(this,_stringLiteralDelimiter)||_classPrivateFieldGet(this,_groupCharCounts)["("]>0||_classPrivateFieldGet(this,_groupCharCounts)["["]>0||_classPrivateFieldGet(this,_groupCharCounts)["{"]>0||_classPrivateFieldGet(this,_expressions).length>0&&(this.getLastExpression().isOneOfEntities([_expression.ExpressionEntity.ContinuationLine,_expression.ExpressionEntity.AddOperator,_expression.ExpressionEntity.Comma])||this.getExpressionsOfEntity(_expression.ExpressionEntity.OpenParenthesis).length>this.getExpressionsOfEntity(_expression.ExpressionEntity.CloseParenthesis).length||this.getExpressionsOfEntity(_expression.ExpressionEntity.OpenSquareBracket).length>this.getExpressionsOfEntity(_expression.ExpressionEntity.CloseSquareBracket).length||this.getExpressionsOfEntity(_expression.ExpressionEntity.OpenBrace).length>this.getExpressionsOfEntity(_expression.ExpressionEntity.CloseBrace).length))&&_classPrivateFieldSet(this,_continuesOnNextLine,!0)}function _processSingleLineComment2(e){var t=_expression.Expression.create(_expression.ExpressionEntity.SingleLineComment,_classPrivateFieldGet(this,_lineNum),e);return this.addExpression(t),_classPrivateFieldGet(this,_rawContent).length-1}function _processBlockCommentOrString2(e,t){return _classPrivateMethodGet(this,_isStartOfMultilineComment,_isStartOfMultilineComment2).call(this,e,t)?_classPrivateMethodGet(this,_processBlockComment,_processBlockComment2).call(this,t):_classPrivateMethodGet(this,_processStringLiteral,_processStringLiteral2).call(this,e,t+1)}function _processBlockComment2(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){var t=_classPrivateFieldGet(this,_rawContent).substring(e,e+3);_classPrivateFieldSet(this,_multilineCommentDelimiter,t);var s=_expression.Expression.create(_expression.ExpressionEntity.MultiLineCommentDelimiter,_classPrivateFieldGet(this,_lineNum),e,t);this.addExpression(s),e+=3}if(e<_classPrivateFieldGet(this,_rawContent).length){var i=_classPrivateFieldGet(this,_rawContent).substring(e).indexOf(_classPrivateFieldGet(this,_multilineCommentDelimiter));if(i>-1){if(i>e){var r=_expression.Expression.create(_expression.ExpressionEntity.MultiLineComment,_classPrivateFieldGet(this,_lineNum),e);this.addExpression(r)}var n=_expression.Expression.create(_expression.ExpressionEntity.MultiLineCommentDelimiter,_classPrivateFieldGet(this,_lineNum),i,_classPrivateFieldGet(this,_multilineCommentDelimiter));return this.addExpression(n),_classPrivateFieldSet(this,_multilineCommentDelimiter,void 0),e+(i+3)-1}var a=_expression.Expression.create(_expression.ExpressionEntity.MultiLineComment,_classPrivateFieldGet(this,_lineNum),e);this.addExpression(a)}return _classPrivateFieldGet(this,_rawContent).length-1}function _processStringLiteral2(e,t){var s=e===_character.Character.SingleQuote?"'":'"',i=void 0!==_classPrivateFieldGet(this,_stringLiteralDelimiter)&&_classPrivateFieldGet(this,_stringLiteralDelimiter).length>1||t<_classPrivateFieldGet(this,_rawContent).length-2&&_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(t))===e&&_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(t+1))===e;void 0===_classPrivateFieldGet(this,_stringLiteralDelimiter)&&_classPrivateFieldSet(this,_stringLiteralDelimiter,i?s+s+s:s),i&&(t+=2);for(var r=t;r<_classPrivateFieldGet(this,_rawContent).length;r++){var n=_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(r));if(n===_character.Character.BackSlash&&r===_classPrivateFieldGet(this,_rawContent).length-1){var a=_expression.Expression.create(_expression.ExpressionEntity.StringLiteral,_classPrivateFieldGet(this,_lineNum),t+1,_classPrivateFieldGet(this,_rawContent).substring(t,r)),o=_expression.Expression.create(_expression.ExpressionEntity.ContinuationLine,_classPrivateFieldGet(this,_lineNum),r);return this.addExpression(a),this.addExpression(o),r}if(n===_character.Character.BackSlash)r++;else if(n===e&&(!i||r<_classPrivateFieldGet(this,_rawContent).length-2&&_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(r+1))===n&&_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(r+2))===n)){var l=_expression.Expression.create(_expression.ExpressionEntity.StringLiteral,_classPrivateFieldGet(this,_lineNum),t+1,_classPrivateFieldGet(this,_rawContent).substring(t,r));return this.addExpression(l),_classPrivateFieldSet(this,_stringLiteralDelimiter,void 0),i?r+2:r}}return _classPrivateFieldGet(this,_rawContent).length-1}function _processIdentifierOrKeyword2(e){var t=_classPrivateMethodGet(this,_getIdentifierOrKeyword,_getIdentifierOrKeyword2).call(this,e),s=_classPrivateMethodGet(this,_getIdentifierEntity,_getIdentifierEntity2).call(this,t,_classPrivateMethodGet(this,_getNextNonSpaceCharacter,_getNextNonSpaceCharacter2).call(this,e+t.length));if(this.addExpression(_expression.Expression.create(s,_classPrivateFieldGet(this,_lineNum),e,t)),s===_expression.ExpressionEntity.FunctionName){var i=_classPrivateFieldGet(this,_expressions).length>1&&_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-2].getEntity()===_expression.ExpressionEntity.FunctionDefinition;_classPrivateMethodGet(this,_processFunction,_processFunction2).call(this,t,_classPrivateFieldGet(this,_expressions).length-1,i)}else s===_expression.ExpressionEntity.VariableName||s===_expression.ExpressionEntity.ModuleName||_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1].is(_expression.ExpressionCategory.BuiltInModules)?_classPrivateMethodGet(this,_processVariable,_processVariable2).call(this):s===_expression.ExpressionEntity.ModuleName||s===_expression.ExpressionEntity.ClassName?_classPrivateFieldGet(this,_otherIdentifiers).add(t):s===_expression.ExpressionEntity.NamedImport?_classPrivateMethodGet(this,_processNamedImport,_processNamedImport2).call(this,t,s,_expression.ExpressionCategory.ImportedEntities):_expression.moduleLookup.has(s)&&_classPrivateMethodGet(this,_processNamedImport,_processNamedImport2).call(this,t,s,(0,_expression.keywordLookup)(t));return _classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1].isOneOfCategories([_expression.ExpressionCategory.BuiltInFunctions,_expression.ExpressionCategory.BuiltInMethods,_expression.ExpressionCategory.ModuleFunctions])&&_classPrivateFieldGet(this,_builtInFunctions).add(s),s!==_expression.ExpressionEntity.ReturnKeyword&&s!==_expression.ExpressionEntity.BreakKeyword&&s!==_expression.ExpressionEntity.ExitFunction&&s!==_expression.ExpressionEntity.SysExit||_classPrivateFieldSet(this,_exits,!0),e+t.length-1}function _processNamedImport2(e,t,s){if(_classPrivateFieldGet(this,_expressions).length>1&&(_classPrivateFieldGet(this,_expressions)[1].is(_expression.ExpressionCategory.BuiltInModules)||_classPrivateFieldGet(this,_expressions)[1].is(_expression.ExpressionEntity.ModuleName))){var i=_classPrivateFieldGet(this,_expressions)[1].getValue();_classPrivateFieldGet(this,_modules).has(i)&&_classPrivateFieldGet(this,_modules).get(i).addDirectImport(e,(0,_identifiers.directImport)(t,s))}}function _processFunction2(e,t,s){if(!s){_classPrivateFieldGet(this,_functionCalls).has(e)||_classPrivateFieldGet(this,_functionCalls).set(e,[]);var i=new _identifiers.FunctionUsage(_classPrivateFieldGet(this,_lineNum),t);_classPrivateFieldGet(this,_functionCalls).get(e).push(i)}}function _processVariable2(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_classPrivateFieldGet(this,_expressions).length-1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLastExpression(),s=new _identifiers.VariableUsage(e,_classPrivateFieldGet(this,_lineNum),this.getStartingDocIndex()+_classPrivateFieldGet(this,_expressions)[e].getLocalIndex());s.addObserver(t),_classPrivateFieldGet(this,_variableUsages).push(s),_classPrivateMethodGet(this,_processPossibleModule,_processPossibleModule2).call(this)}function _processPossibleModule2(){var e=_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1];if(e.is(_expression.ExpressionEntity.ModuleName)||e.is(_expression.ExpressionCategory.BuiltInModules)){var t=new _identifiers.Module(e.getValue(),e.getEntity());_classPrivateFieldGet(this,_modules).set(e.getValue(),t)}}function _processNumberLiteral2(e){var t=_classPrivateMethodGet(this,_getNumber,_getNumber2).call(this,e),s=t.indexOf(".")>=0?_expression.ExpressionEntity.FloatLiteral:_expression.ExpressionEntity.IntLiteral;return this.addExpression(_expression.Expression.create(s,_classPrivateFieldGet(this,_lineNum),e,t)),e+t.length-1}function _processMultiCharacterOperator2(e){for(var t=_classPrivateFieldGet(this,_rawContent).charAt(e),s=t,i=e;("!"===s||(0,_expression.keywordLookup)(s).entity!==_expression.ExpressionEntity.Unknown)&&i<_classPrivateFieldGet(this,_rawContent).length;)t=s,i++,s+=_classPrivateFieldGet(this,_rawContent).charAt(i);var r=(0,_expression.keywordLookup)(t).entity;if("*"===t&&_classPrivateFieldGet(this,_expressions).length>0&&_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1].is(_expression.ExpressionEntity.ImportKeyword)){r=_expression.ExpressionEntity.ImportAll;for(var n=_classPrivateFieldGet(this,_expressions).length-1;n>=0;){if(_classPrivateFieldGet(this,_expressions)[n].is(_expression.ExpressionEntity.ModuleName)||_classPrivateFieldGet(this,_expressions)[n].is(_expression.ExpressionCategory.BuiltInModules)){_classPrivateFieldGet(this,_modules).get(_classPrivateFieldGet(this,_expressions)[n].getValue()).setImportAll();break}n--}}return this.addExpression(_expression.Expression.create(r,_classPrivateFieldGet(this,_lineNum),e,t)),e+t.length-1}function _processSingleCharacter2(e){var t=_classPrivateFieldGet(this,_rawContent).charAt(e),s=(0,_expression.keywordLookup)(t).entity;_classPrivateMethodGet(this,_updateGroupCharCounts,_updateGroupCharCounts2).call(this,t),s===_expression.ExpressionEntity.OpenSquareBracket&&_classPrivateFieldGet(this,_expressions).length>0&&_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1].isOneOfEntities([_expression.ExpressionEntity.VariableName,_expression.ExpressionEntity.PropertyName])&&_classPrivateFieldGet(this,_variableUsages).length>0&&_classPrivateFieldGet(this,_variableUsages)[_classPrivateFieldGet(this,_variableUsages).length-1].setSubscripted(),this.addExpression(_expression.Expression.create(s,_classPrivateFieldGet(this,_lineNum),e,t))}function _updateGroupCharCounts2(e){_classPrivateFieldGet(this,_groupCharCounts).hasOwnProperty(e)?_classPrivateFieldGet(this,_groupCharCounts)[e]++:")"===e?_classPrivateFieldGet(this,_groupCharCounts)["("]--:"]"===e?_classPrivateFieldGet(this,_groupCharCounts)["["]--:"}"===e&&_classPrivateFieldGet(this,_groupCharCounts)["{"]--}function _getIdentifierOrKeyword2(e){for(var t=e,s=e+1;s<_classPrivateFieldGet(this,_rawContent).length;s++){var i=_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(s));if(i!==_character.Character.Underscore&&i!==_character.Character.Letter&&i!==_character.Character.Digit)break;t=s}return _classPrivateFieldGet(this,_rawContent).substring(e,t+1)}function _getIdentifierEntity2(e,t){if(_classPrivateFieldGet(this,_expressions).length>0){var s=this.getLastExpression();if(s.getEntity()===_expression.ExpressionEntity.FunctionDefinition)return _expression.ExpressionEntity.FunctionName;if(s.getEntity()===_expression.ExpressionEntity.ClassDefinition)return _expression.ExpressionEntity.ClassName;if(s.getEntity()===_expression.ExpressionEntity.FromKeyword||this.contains(_expression.ExpressionEntity.ImportKeyword)&&!this.contains(_expression.ExpressionEntity.FromKeyword)){if(!(s.getEntity()===_expression.ExpressionEntity.AsKeyword&&_classPrivateFieldGet(this,_expressions).length>1)){var i=(0,_expression.keywordLookup)(e).entity;return i===_expression.ExpressionEntity.Unknown?_expression.ExpressionEntity.ModuleName:i}var r=_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-2].getValue();if(_classPrivateFieldGet(this,_modules).has(r)){var n=_classPrivateFieldGet(this,_modules).get(r);return n.setAlias(e),_classPrivateFieldGet(this,_modules).set(e,n),_classPrivateFieldGet(this,_modules).delete(r),n.getEntity()}}else{if(this.contains(_expression.ExpressionEntity.FromKeyword)&&this.contains(_expression.ExpressionEntity.ImportKeyword)){if(_classPrivateFieldGet(this,_expressions).length>=2&&_classPrivateFieldGet(this,_expressions)[1].is(_expression.ExpressionCategory.BuiltInModules)){var a=(0,_expression.keywordLookup)(e);if(a.category===_expression.ExpressionCategory.ModuleFunctions||a.category===_expression.ExpressionCategory.ModuleProperties){var o=_expression.moduleLookup.has(a.entity)?_expression.moduleLookup.get(a.entity):void 0;return o&&this.contains(o)?a.entity:_expression.ExpressionEntity.NamedImport}return a.entity===_expression.ExpressionEntity.Unknown?_expression.ExpressionEntity.NamedImport:a.entity}return _expression.ExpressionEntity.NamedImport}if(s.getEntity()===_expression.ExpressionEntity.AsKeyword||("sep"===e||"end"===e)&&(s.getEntity()!==_expression.ExpressionEntity.Comma||"="!=t))return _expression.ExpressionEntity.VariableName}}var l=(0,_expression.keywordLookup)(e);return t===_expression.ExpressionEntity.OpenParenthesis.name?(l.category!==_expression.ExpressionCategory.BuiltInFunctions||void 0!==this.getLastExpression()&&(void 0===this.getLastExpression()||this.getLastExpression().is(_expression.ExpressionEntity.Dot)))&&(l.category!==_expression.ExpressionCategory.BuiltInMethods&&l.category!==_expression.ExpressionCategory.MagicMethods&&l.category!==_expression.ExpressionCategory.ModuleFunctions||void 0===this.getLastExpression()||!this.getLastExpression().is(_expression.ExpressionEntity.Dot))?l.entity===_expression.ExpressionEntity.Format?void 0!==this.getLastExpression()&&this.getLastExpression().is(_expression.ExpressionEntity.Dot)?_expression.ExpressionEntity.Format:_expression.ExpressionEntity.FormatFunction:_classPrivateFieldGet(this,_expressions).length>0&&this.getLastExpression().getEntity()===_expression.ExpressionEntity.Dot?"exit"===e?_expression.specialCaseLookup[e].entity:_expression.ExpressionEntity.MethodName:_expression.specialCaseLookup.hasOwnProperty(e)?_expression.specialCaseLookup[e].entity:l.category!==_expression.ExpressionCategory.BuiltInFunctions&&l.category!==_expression.ExpressionCategory.BuiltInMethods&&l.category!==_expression.ExpressionCategory.Unknown&&l.category!==_expression.ExpressionCategory.ModuleFunctions?l.entity:_expression.ExpressionEntity.FunctionName:l.entity:l.category===_expression.ExpressionCategory.OtherKeywords||l.category===_expression.ExpressionCategory.BlockDefinitions||l.category===_expression.ExpressionCategory.LogicalOperators||l.category===_expression.ExpressionCategory.Types||l.category===_expression.ExpressionCategory.BuiltInExceptions||l.category===_expression.ExpressionCategory.SpecialVariables?(0!==_classPrivateFieldGet(this,_expressions).length||"sep"!==e&&"end"!==e)&&(l.entity!==_expression.ExpressionEntity.R&&l.entity!==_expression.ExpressionEntity.F||"'"===t||'"'===t)?l.entity:_expression.ExpressionEntity.VariableName:l.category===_expression.ExpressionCategory.BuiltInFunctions&&(0,_expression.typeLookup)(e).entity!==_expression.ExpressionEntity.Unknown&&"="!==t?(0,_expression.typeLookup)(e).entity:_classPrivateFieldGet(this,_expressions).length>0&&this.getLastExpression().getEntity()===_expression.ExpressionEntity.Dot?l.category===_expression.ExpressionCategory.ModuleProperties?l.entity:_expression.ExpressionEntity.PropertyName:_expression.ExpressionEntity.VariableName}function _getNumber2(e){for(var t=e,s=e+1;s<_classPrivateFieldGet(this,_rawContent).length;s++){var i=_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(s));if(i!==_character.Character.Digit&&i!==_character.Character.Decimal)break;t=s}return _classPrivateFieldGet(this,_rawContent).substring(e,t+1)}function _getNextNonSpaceCharacter2(e){for(;_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(e))===_character.Character.Space;)e++;return _classPrivateFieldGet(this,_rawContent).charAt(e)}function _isIdentifierOrKeyword2(e){return e===_character.Character.Underscore||e===_character.Character.Letter}function _isNumber2(e,t,s){if(e===_character.Character.Minus&&void 0!==this.getLastExpression()&&!s){var i=this.getLastExpression();if(i.isOneOfCategories([_expression.ExpressionCategory.Identifiers])||i.isOneOfEntities([_expression.ExpressionEntity.CloseBrace,_expression.ExpressionEntity.CloseParenthesis,_expression.ExpressionEntity.CloseSquareBracket]))return!1}for(var r=0,n=0,a=0,o=t;o<_classPrivateFieldGet(this,_rawContent).length&&(e===_character.Character.Digit||e===_character.Character.Decimal||e===_character.Character.Minus&&o===t);)e===_character.Character.Digit?r++:e===_character.Character.Decimal?n++:a++,o++,e=_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(o));return r>=1&&n<=1&&a<=1}function _isPossibleMultiCharacterOperator2(e){return e===_character.Character.Equals||e===_character.Character.Exclamation||e===_character.Character.Minus||e===_character.Character.Plus||e===_character.Character.Asterisk||e===_character.Character.ForwardSlash||e===_character.Character.Modulo||e===_character.Character.GreaterThan||e===_character.Character.LessThan}function _isStartOfMultilineComment2(e,t){return!(_classPrivateFieldGet(this,_expressions).length>0&&_classPrivateFieldGet(this,_expressions)[_classPrivateFieldGet(this,_expressions).length-1].is(_expression.ExpressionEntity.AssignmentOperator))&&(_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(t+1))===e&&_character.Character.getCategory(_classPrivateFieldGet(this,_rawContent).charCodeAt(t+2))===e)}exports.Line=Line;
