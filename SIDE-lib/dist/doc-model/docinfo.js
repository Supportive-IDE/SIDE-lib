"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocInfo = void 0;

var _enums = require("./enums.js");

var _statement = require("./statement.js");

var _block = require("./block.js");

var _identifiers = require("./identifiers.js");

var _symptom = require("../problem-finder/symptom.js");

var _misconception = require("../problem-finder/misconception.js");

var _rawtextprocessing = require("./rawtextprocessing.js");

var _ast = require("./ast.js");

var _constants = require("../utils/constants.js");

var _utils = require("../utils/utils.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _text = /*#__PURE__*/new WeakMap();

var _statements = /*#__PURE__*/new WeakMap();

var _documentRoot = /*#__PURE__*/new WeakMap();

var _variables = /*#__PURE__*/new WeakMap();

var _userDefinedFunctions = /*#__PURE__*/new WeakMap();

var _modules = /*#__PURE__*/new WeakMap();

var _processSource = /*#__PURE__*/new WeakSet();

var _findAllScopeBlocks = /*#__PURE__*/new WeakSet();

var _findSymptoms = /*#__PURE__*/new WeakSet();

var _summariseVariables = /*#__PURE__*/new WeakSet();

var _summariseUserDefinedFunctions = /*#__PURE__*/new WeakSet();

var _checkVariablesWithSameNameAsUserDefinedFunctions = /*#__PURE__*/new WeakSet();

var _findFunctionWithSameNameAsBuiltIns = /*#__PURE__*/new WeakSet();

var _convertBuiltIns = /*#__PURE__*/new WeakSet();

var _findAllFunctions = /*#__PURE__*/new WeakSet();

var _processUnconnectedFunctions = /*#__PURE__*/new WeakSet();

var _isImportedEntity = /*#__PURE__*/new WeakSet();

var _getVariableNamesMatchingTypeNames = /*#__PURE__*/new WeakSet();

var _updateBlock = /*#__PURE__*/new WeakSet();

var _processListComprehensions = /*#__PURE__*/new WeakSet();

var _prepareListComprehensions = /*#__PURE__*/new WeakSet();

var _createNewBranchBlock = /*#__PURE__*/new WeakSet();

var _createNewFunctionBlock = /*#__PURE__*/new WeakSet();

var _shiftCurrentBlock = /*#__PURE__*/new WeakSet();

/**
 * A class storing information about a Python document, including the variables used, functions defined, and any detected symptoms and misconceptions.
 */
var DocInfo = /*#__PURE__*/function () {
  /** @type {string} */
  // The raw text in the document

  /** @type {Statement} */

  /** @type {StatementBlock} */

  /** @type {Map<String, UserDefinedFunctionExpression>} */

  /** @type {Map<string, ModuleInfo>} */

  /**
   * Creates a new DocInfo object from Python raw text
   * @param {string} text The raw text of the Python file
   */
  function DocInfo(_text2) {
    _classCallCheck(this, DocInfo);

    _classPrivateMethodInitSpec(this, _shiftCurrentBlock);

    _classPrivateMethodInitSpec(this, _createNewFunctionBlock);

    _classPrivateMethodInitSpec(this, _createNewBranchBlock);

    _classPrivateMethodInitSpec(this, _prepareListComprehensions);

    _classPrivateMethodInitSpec(this, _processListComprehensions);

    _classPrivateMethodInitSpec(this, _updateBlock);

    _classPrivateMethodInitSpec(this, _getVariableNamesMatchingTypeNames);

    _classPrivateMethodInitSpec(this, _isImportedEntity);

    _classPrivateMethodInitSpec(this, _processUnconnectedFunctions);

    _classPrivateMethodInitSpec(this, _findAllFunctions);

    _classPrivateMethodInitSpec(this, _convertBuiltIns);

    _classPrivateMethodInitSpec(this, _findFunctionWithSameNameAsBuiltIns);

    _classPrivateMethodInitSpec(this, _checkVariablesWithSameNameAsUserDefinedFunctions);

    _classPrivateMethodInitSpec(this, _summariseUserDefinedFunctions);

    _classPrivateMethodInitSpec(this, _summariseVariables);

    _classPrivateMethodInitSpec(this, _findSymptoms);

    _classPrivateMethodInitSpec(this, _findAllScopeBlocks);

    _classPrivateMethodInitSpec(this, _processSource);

    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _statements, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _documentRoot, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _variables, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userDefinedFunctions, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _modules, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _text, _text2);

    _classPrivateFieldSet(this, _documentRoot, new _block.ScopeBlock());

    _classPrivateFieldSet(this, _variables, new Map());

    _classPrivateFieldSet(this, _modules, new Map());

    _symptom.SymptomFinder.symptoms = [];

    _classPrivateMethodGet(this, _processSource, _processSource2).call(this, _text2);
  } //#region setup

  /**
   * Main processing method. Converts the raw source code to an AST
   * @param {String} text 
   */


  _createClass(DocInfo, [{
    key: "getUserDefinedFunctions",
    value: //#endregion

    /**
     * Gets all UserDefinedFunctions in the document.
     * @returns {Map<String, UserDefinedFunctionExpression>} A Map, where each key is the name of a function and each value is a UserDefinedFunction object
     */
    function getUserDefinedFunctions() {
      return _classPrivateFieldGet(this, _userDefinedFunctions);
    }
    /**
     * Gets all variables defined in the document.
     * @returns {Map<String, VariableInfo[]>}
     */

  }, {
    key: "getVariables",
    value: function getVariables() {
      return _classPrivateFieldGet(this, _variables);
    }
    /**
     * Gets all symptoms in the document.
     * @returns {Symptom[]} An array of all symptoms in the document.
     */

  }, {
    key: "getSymptoms",
    value: function getSymptoms() {
      return _symptom.SymptomFinder.symptoms;
    }
    /**
     * Gets all misconceptions in the document.
     * @returns {Map<MisconceptionType, Misconception>} A Map of all misconceptions found in the document
     */

  }, {
    key: "getMisconceptions",
    value: function getMisconceptions() {
      return (0, _misconception.identifyMisconceptions)(_symptom.SymptomFinder.symptoms, _classPrivateFieldGet(this, _variables)
      /*, this.#userDefinedFunctionsOLD*/
      );
    }
    /**
     * Gets the raw text in the document.
     * @returns {string} The raw text of the document.
     */

  }, {
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _text);
    }
    /**
     * Gets all blocks in the document
     * @returns {Block} The document root block, which contains references to all child blocks.
     */

  }, {
    key: "getBlocks",
    value: function getBlocks() {
      return _classPrivateFieldGet(this, _documentRoot);
    } //#endregion

  }]);

  return DocInfo;
}();

exports.DocInfo = DocInfo;

function _processSource2(text) {
  _classPrivateFieldSet(this, _statements, []);

  var currentBlock = _classPrivateFieldGet(this, _documentRoot);

  var textLines = text.split(/\r?\n/);

  if (textLines.length > 0) {
    var lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[0], 0, 0);

    _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine)); // Block processing


    if (!lastSourceLine.continuesOnNextLine()) {
      currentBlock = _classPrivateMethodGet(this, _updateBlock, _updateBlock2).call(this, _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1], currentBlock);
    }

    for (var i = 1; i < textLines.length; i++) {
      var varsWithTypeNames = currentBlock.isScopeBlock() ? _classPrivateMethodGet(this, _getVariableNamesMatchingTypeNames, _getVariableNamesMatchingTypeNames2).call(this, currentBlock) : _classPrivateMethodGet(this, _getVariableNamesMatchingTypeNames, _getVariableNamesMatchingTypeNames2).call(this, currentBlock.getScope());
      var moduleNames = Array.from(currentBlock.getScope().findAllModules().keys());
      var options = {
        varsWithTypeNames: varsWithTypeNames,
        moduleNames: moduleNames
      };
      var docStartIndex = lastSourceLine.getDocumentStartIndex() + lastSourceLine.getText().length + 1;

      if (lastSourceLine.continuesOnNextLine()) {
        options.groupCharCounts = lastSourceLine.getOpenGroupChars();
        options.lastLineExpressions = lastSourceLine.getExpressions();

        if (lastSourceLine.hasOpenComment()) {
          options.multilineCommentDelimiter = lastSourceLine.getCommentDelimiter();
        }

        if (lastSourceLine.hasOpenString()) {
          options.stringLiteralDelimiter = lastSourceLine.getStringLiteralDelimiter();
        }

        lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[i], i, docStartIndex, options);

        _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1].continueFromSource(lastSourceLine);
      } else if (lastSourceLine.followedBySeparateStatement()) {
        // start from text end index
        i--;
        var localStartFrom = lastSourceLine.getLineEndIndex() + 1;
        options.startFrom = localStartFrom;
        lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[i], i, lastSourceLine.getDocumentStartIndex(), options);

        _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine));
      } else {
        lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[i], i, docStartIndex, options);

        _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine));
      } // Block processing


      if (!lastSourceLine.continuesOnNextLine()) {
        currentBlock = _classPrivateMethodGet(this, _updateBlock, _updateBlock2).call(this, _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1], currentBlock);
      }
    }
  }

  _classPrivateMethodGet(this, _summariseVariables, _summariseVariables2).call(this);

  _classPrivateMethodGet(this, _summariseUserDefinedFunctions, _summariseUserDefinedFunctions2).call(this);

  _classPrivateMethodGet(this, _findSymptoms, _findSymptoms2).call(this);
}

function _findAllScopeBlocks2() {
  return [_classPrivateFieldGet(this, _documentRoot)].concat(_classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.FunctionDefinition)).concat(_classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.ClassDefinition)).concat(_classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.ListComprehension));
}

function _findSymptoms2() {
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator = _createForOfIteratorHelper(allScopeBlocks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var block = _step.value;

      var _iterator4 = _createForOfIteratorHelper(block.getStatements()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var statement = _step4.value;

          var _iterator5 = _createForOfIteratorHelper(statement.getExpressions()),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var expression = _step5.value;
              expression.checkForSymptoms();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (statement.isBlockStatement()) {
            statement.checkRules(statement);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables).values()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var vInfoArr = _step2.value;

      var _iterator6 = _createForOfIteratorHelper(vInfoArr),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var vInfo = _step6.value;
          vInfo.checkRules(vInfo);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _userDefinedFunctions).values()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var exp = _step3.value;
      var funcDefinition = exp.getParent();

      if (funcDefinition !== undefined && funcDefinition.is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
        var minArgs = funcDefinition.getParameters().length - funcDefinition.getOptionalParameterCount();
        var maxArgs = funcDefinition.getParameters().length;
        var funcCalls = Array.from(exp.getObservers()).filter(function (e) {
          return e.is(_enums.ExpressionEntity.UserDefinedFunctionCall);
        });

        var _iterator7 = _createForOfIteratorHelper(funcCalls),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var call = _step7.value;
            var numArgs = call.getArguments();

            if (numArgs.length < minArgs || numArgs.length > maxArgs) {
              _symptom.SymptomFinder.symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.WrongArgNumber, [call], 0, 0, {
                expectedMinArgs: minArgs,
                expectedMaxArgs: maxArgs,
                receivedArgs: numArgs.length
              }));
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  _classPrivateFieldGet(this, _documentRoot).checkRules(_classPrivateFieldGet(this, _documentRoot));
}

function _summariseVariables2() {
  var allVariables = new Map();

  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator8 = _createForOfIteratorHelper(allScopeBlocks),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var block = _step8.value;
      var scopeVars = block.getVariableMap();
      var userFunctions = block.getUserDefinedFunctions();

      var _iterator9 = _createForOfIteratorHelper(scopeVars),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _step9$value = _slicedToArray(_step9.value, 2),
              name = _step9$value[0],
              vInfo = _step9$value[1];

          var movedToParent = false;
          var varExp = vInfo.getUsages()[0].getVariable();

          if (varExp.getDataType() === _enums.DataType.NotParsed && !varExp.isAssignedOrChanged() && !varExp.isParameter()) {
            if (_rawtextprocessing.StatementProcessor.checkIfVariableExistsInParent(vInfo, block)) {
              movedToParent = true;
            } else if (userFunctions.has(name)) {
              varExp.setDataType(_enums.DataType.Function);
            } else {
              vInfo.getUsages()[0].getVariable().setDataType(_enums.DataType.Undefined);
              vInfo.checkAndAdjustUndefined();
            }
          }

          if (!allVariables.has(name)) {
            allVariables.set(name, []);
          }

          if (!movedToParent) {
            allVariables.get(name).push(vInfo);
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  _classPrivateFieldSet(this, _variables, allVariables);
}

function _summariseUserDefinedFunctions2() {
  _classPrivateFieldSet(this, _userDefinedFunctions, _classPrivateMethodGet(this, _findAllFunctions, _findAllFunctions2).call(this));

  var functions = _classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.FunctionDefinition);

  var _iterator10 = _createForOfIteratorHelper(functions),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var f = _step10.value;
      var lastLines = f.getLastExecutedStatements();
      var alwaysReturns = f.alwaysReturnsAValue();

      if (alwaysReturns) {
        lastLines = lastLines.filter(function (s) {
          return s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement);
        });
      } // Add to function call expression


      if (_classPrivateFieldGet(this, _userDefinedFunctions).has(f.getFunctionName()) && _classPrivateFieldGet(this, _userDefinedFunctions).get(f.getFunctionName()).is(_enums.ExpressionEntity.FunctionName)) _classPrivateFieldGet(this, _userDefinedFunctions).get(f.getFunctionName()).addReturns(lastLines, !alwaysReturns);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  _classPrivateMethodGet(this, _processUnconnectedFunctions, _processUnconnectedFunctions2).call(this);

  var overriddenBuiltIns = _classPrivateMethodGet(this, _findFunctionWithSameNameAsBuiltIns, _findFunctionWithSameNameAsBuiltIns2).call(this);

  _classPrivateMethodGet(this, _convertBuiltIns, _convertBuiltIns2).call(this, overriddenBuiltIns);

  _classPrivateMethodGet(this, _checkVariablesWithSameNameAsUserDefinedFunctions, _checkVariablesWithSameNameAsUserDefinedFunctions2).call(this);
}

function _checkVariablesWithSameNameAsUserDefinedFunctions2() {
  var _this = this;

  var funcNames = _classPrivateFieldGet(this, _userDefinedFunctions).keys();

  var matchingVarNames = Array.from(funcNames).filter(function (name) {
    return _classPrivateFieldGet(_this, _variables).has(name);
  });

  var _iterator11 = _createForOfIteratorHelper(matchingVarNames),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var name = _step11.value;

      var func = _classPrivateFieldGet(this, _userDefinedFunctions).get(name).getParent();

      if (func !== undefined) {
        var _iterator12 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables).get(name)),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var vInfo = _step12.value;

            if (vInfo.getUsages().length > 0) {
              var vExp = vInfo.getUsages()[0].getVariable();

              _symptom.SymptomFinder.symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.VariableWithSameNameAsFunction, [vExp], 0, 0, {
                funcType: _constants.USER_DEFINED_FUNCTION,
                numArgsExpected: func.getParameters().length - func.getOptionalParameterCount(),
                varIsParameter: vExp.isParameter()
              }));
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function _findFunctionWithSameNameAsBuiltIns2() {
  var funcNames = _classPrivateFieldGet(this, _userDefinedFunctions).keys();

  var overrides = [];

  var _iterator13 = _createForOfIteratorHelper(funcNames),
      _step13;

  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var name = _step13.value;
      var knownEntity = (0, _utils.keywordLookup)(name);

      if (knownEntity.category === _enums.ExpressionCategory.BuiltInFunctions) {
        overrides.push(name);
      }
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return overrides;
}

function _convertBuiltIns2(functionNames) {
  if (functionNames.length > 0) {
    var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this); // find all calls, convert to userdefined function, change return type


    var _iterator14 = _createForOfIteratorHelper(allScopeBlocks),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var block = _step14.value;
        var statements = block.getStatements();

        var _iterator15 = _createForOfIteratorHelper(statements),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var s = _step15.value;
            var expressions = s.getExpressions();
            var funcCalls = expressions.flatMap(function (e) {
              return e.getExpressionsOfKind(_enums.ExpressionEntity.BuiltInFunctionCall);
            });

            var _iterator16 = _createForOfIteratorHelper(funcCalls),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var f = _step16.value;

                if (functionNames.includes(f.getFunctionName())) {
                  f.convertToUserDefinedFunction(_classPrivateFieldGet(this, _userDefinedFunctions).get(f.getFunctionName()));
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }
}

function _findAllFunctions2() {
  var funcMap = new Map();

  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator17 = _createForOfIteratorHelper(allScopeBlocks),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var block = _step17.value;
      var userFunctions = block.getUserDefinedFunctions();

      var _iterator18 = _createForOfIteratorHelper(userFunctions),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _step18$value = _slicedToArray(_step18.value, 2),
              name = _step18$value[0],
              funcExp = _step18$value[1];

          funcMap.set(name, funcExp);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  return funcMap;
}

function _processUnconnectedFunctions2() {
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator19 = _createForOfIteratorHelper(allScopeBlocks),
      _step19;

  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var block = _step19.value;
      var unconnectedCalls = block.getUnconnectedFunctionCalls();

      var _iterator20 = _createForOfIteratorHelper(unconnectedCalls),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var func = _step20.value;

          var _iterator21 = _createForOfIteratorHelper(func[1]),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var call = _step21.value;

              if (_classPrivateFieldGet(this, _userDefinedFunctions).has(func[0])) {
                var f = _classPrivateFieldGet(this, _userDefinedFunctions).get(func[0]);

                f.addObserver(call);
                call.setDataType(f.getReturnType());
              } else if (_classPrivateMethodGet(this, _isImportedEntity, _isImportedEntity2).call(this, func[0], block)) {
                call.convertToImportedFunction();
              } else {
                call.setDataType(_enums.DataType.Unknown);

                _symptom.SymptomFinder.symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnknownFunction, [call], 0, 0));
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
}

function _isImportedEntity2(funcName, scopeBlock) {
  var currentBlock = scopeBlock;

  while (currentBlock !== undefined) {
    if (currentBlock.getModuleMap().has(funcName) || Array.from(currentBlock.getModuleMap().values()).filter(function (modInfo) {
      return modInfo.hasDirectImport(funcName);
    }).length > 0) {
      return true;
    }

    currentBlock = currentBlock.getParentBlock() !== undefined ? currentBlock.getParentBlock().getScope() : undefined;
  }

  return false;
}

function _getVariableNamesMatchingTypeNames2(currentBlock) {
  var typeNames = new Set(["int", "float", "bool", "str", "list", "set", "dict"]);
  var matches = Array.from(currentBlock.getVariableMap().keys()).filter(function (name) {
    return typeNames.has(name);
  });
  var currentScope = currentBlock;

  while (currentScope.getBlockEntity() !== _enums.ExpressionEntity.DocumentDefinition) {
    currentScope = currentScope.getParentBlock().getScope();
    matches = matches.concat(Array.from(currentScope.getVariableMap().keys()).filter(function (name) {
      return typeNames.has(name);
    }));
  }

  return matches;
}

function _updateBlock2(lastStatement, currentBlock) {
  if (!lastStatement.isBlank()) {
    var firstExpression = lastStatement.getFirstExpression();
    var statementIndent = lastStatement.getIndentation();
    var startLine = firstExpression.getStartLineNumber();
    var blockStatementToUpdate = undefined; // Need a way to get variables in list comprehensions (expressoinnode replaced with placeholder)

    var listComprehensions = _classPrivateMethodGet(this, _prepareListComprehensions, _prepareListComprehensions2).call(this, lastStatement);

    if (!currentBlock.isScopeBlock()) {
      var scopeBlock = currentBlock.getScope(); // Ask scope block for the statement to update

      blockStatementToUpdate = scopeBlock.getStatementToUpdate(statementIndent, startLine);
    }

    if (firstExpression.is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
      currentBlock = _classPrivateMethodGet(this, _createNewFunctionBlock, _createNewFunctionBlock2).call(this, currentBlock, lastStatement, statementIndent);
    } else {
      if (firstExpression.is(_enums.ExpressionCategory.BlockDefinitionStatement) && !firstExpression.is(_enums.ExpressionEntity.TernaryStatement)) {
        currentBlock = _classPrivateMethodGet(this, _createNewBranchBlock, _createNewBranchBlock2).call(this, currentBlock, lastStatement, statementIndent, blockStatementToUpdate);
      } else if (blockStatementToUpdate !== undefined) {
        currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, startLine);
        blockStatementToUpdate.addStatement(lastStatement, currentBlock);
      } else {
        currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, startLine);
        currentBlock.addStatement(lastStatement);
      }
    }

    if (listComprehensions.length > 0) {
      _classPrivateMethodGet(this, _processListComprehensions, _processListComprehensions2).call(this, listComprehensions, currentBlock);
    }
  }

  return currentBlock;
}

function _processListComprehensions2(listComprehensions, currentBlock) {
  var _iterator22 = _createForOfIteratorHelper(listComprehensions),
      _step22;

  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      var comp = _step22.value;
      var compBlock = new _block.ListComprehensionBlock(currentBlock, comp);
      currentBlock.addChildBlock(compBlock);
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
}

function _prepareListComprehensions2(statement) {
  var expressions = statement.getExpressions();
  var comprehensions = [];

  var _iterator23 = _createForOfIteratorHelper(expressions),
      _step23;

  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var e = _step23.value;
      var foundComps = e.getExpressionsOfKind(_enums.ExpressionEntity.ListComprehension);

      var _iterator24 = _createForOfIteratorHelper(foundComps),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var found = _step24.value;
          comprehensions.push(found.copyAndConvertToPlaceholder());
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }

  return comprehensions;
}

function _createNewBranchBlock2(currentBlock, lastStatement, statementIndent, blockStatementToUpdate) {
  var blockStatement = new _statement.BlockStatement(lastStatement, currentBlock.getScope().getId());
  var branchBlock = new _block.BranchBlock(currentBlock, blockStatement);

  var block = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, lastStatement.getFirstLineNumber());

  var isConditional = blockStatement.getFirstExpression().isOneOf([_enums.ExpressionEntity.ElifDefinitionStatement, _enums.ExpressionEntity.ElseDefinitionStatement]);
  var isExcept = blockStatement.getFirstExpression().is(_enums.ExpressionEntity.ExceptDefinitionStatement);

  if (blockStatement.isBlockStatement() && (isConditional || isExcept)) {
    var childStatements = blockStatementToUpdate ? blockStatementToUpdate.getStatements() : block.getStatements();
    var prevStatement = childStatements[childStatements.length - 1];
    var candidates = isConditional ? [_enums.ExpressionEntity.IfDefinitionStatement, _enums.ExpressionEntity.ElifDefinitionStatement, _enums.ExpressionEntity.ElseDefinitionStatement] : [_enums.ExpressionEntity.TryDefinitionStatement];

    if (prevStatement !== undefined && prevStatement.isBlockStatement() && prevStatement.getFirstExpression().isOneOf(candidates)) {
      var blockChildren = block.getChildBlocks();
      var lastBlock = blockChildren[blockChildren.length - 1];
      var lastBlockEntity = lastBlock.getBlockEntity();

      if (isConditional && (lastBlockEntity === _enums.ExpressionEntity.IfDefinition || lastBlockEntity === _enums.ExpressionEntity.ElifDefinition) || isExcept && lastBlockEntity === _enums.ExpressionEntity.TryDefinition) {
        var lastBlockSiblings = lastBlock.getSiblingConditionalBranches();

        var _iterator25 = _createForOfIteratorHelper(lastBlockSiblings),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var existing = _step25.value;
            branchBlock.addSibling(existing);
            existing.addSibling(branchBlock);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        lastBlock.addSibling(branchBlock);
        branchBlock.addSibling(lastBlock);
      }
    }
  }

  block.addChildBlock(branchBlock);
  blockStatementToUpdate ? blockStatementToUpdate.addStatement(blockStatement, branchBlock) : block.addStatement(blockStatement);
  return branchBlock;
}

function _createNewFunctionBlock2(currentBlock, lastStatement, statementIndent) {
  currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, lastStatement.getFirstLineNumber());
  var functionBlock = new _block.FunctionBlock(currentBlock, lastStatement);
  currentBlock.addChildBlock(functionBlock); //block = functionBlock;
  //functionBlock.addStatement(lastStatement);

  return functionBlock;
}

function _shiftCurrentBlock2(statementIndent, currentBlock, statementStartLine) {
  var currentIndent = currentBlock.getIndentation();
  var currentStatements = currentBlock.getStatements(); // edge case where body is on same line as definition of block

  if (currentStatements.length > 0 && currentStatements[currentStatements.length - 1].getLastLineNumber() === statementStartLine) {
    return currentBlock;
  }

  while (currentBlock.getBlockEntity() !== _enums.ExpressionEntity.DocumentDefinition && statementIndent <= currentIndent) {
    var parent = currentBlock.getParentBlock();
    currentBlock = parent !== undefined ? parent : _classPrivateFieldGet(this, _documentRoot);
    currentIndent = currentBlock.getIndentation();
  }

  return currentBlock;
}