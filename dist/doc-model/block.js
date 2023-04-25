"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Block=void 0;var _expression=require("./expression.js");function _createForOfIteratorHelper(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function _classPrivateMethodInitSpec(t,e){_checkPrivateRedeclaration(t,e),e.add(t)}function _classPrivateFieldInitSpec(t,e,i){_checkPrivateRedeclaration(t,e),e.set(t,i)}function _checkPrivateRedeclaration(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function _classPrivateFieldGet(t,e){return _classApplyDescriptorGet(t,_classExtractFieldDescriptor(t,e,"get"))}function _classApplyDescriptorGet(t,e){return e.get?e.get.call(t):e.value}function _classPrivateFieldSet(t,e,i){return _classApplyDescriptorSet(t,_classExtractFieldDescriptor(t,e,"set"),i),i}function _classExtractFieldDescriptor(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function _classApplyDescriptorSet(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}var _blockEntity=new WeakMap,_parentBlock=new WeakMap,_childBlocks=new WeakMap,_indentation=new WeakMap,_startLine=new WeakMap,_alternateBranches=new WeakMap,_blockExits=new WeakMap,_hasAltOfEntity=new WeakSet,_isAScopeBlock=new WeakSet,Block=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_expression.ExpressionEntity.DocumentDefinition,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;_classCallCheck(this,t),_classPrivateMethodInitSpec(this,_isAScopeBlock),_classPrivateMethodInitSpec(this,_hasAltOfEntity),_classPrivateFieldInitSpec(this,_blockEntity,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_parentBlock,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_childBlocks,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_indentation,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_startLine,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_alternateBranches,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_blockExits,{writable:!0,value:!1}),_classPrivateFieldSet(this,_blockEntity,e),_classPrivateFieldSet(this,_parentBlock,i),_classPrivateFieldSet(this,_childBlocks,[]),_classPrivateFieldSet(this,_indentation,r),_classPrivateFieldSet(this,_startLine,n),_classPrivateFieldSet(this,_alternateBranches,new Set)}return _createClass(t,[{key:"getBlockEntity",value:function(){return _classPrivateFieldGet(this,_blockEntity)}},{key:"getId",value:function(){return"".concat(_classPrivateFieldGet(this,_startLine),"-").concat(_classPrivateFieldGet(this,_blockEntity).name)}},{key:"getParentBlock",value:function(){return _classPrivateFieldGet(this,_parentBlock)}},{key:"setParentBlock",value:function(t){_classPrivateFieldSet(this,_parentBlock,t)}},{key:"getChildBlocks",value:function(){return _classPrivateFieldGet(this,_childBlocks)}},{key:"addChildBlock",value:function(t){_classPrivateFieldGet(this,_childBlocks).push(t),t.setParentBlock(this)}},{key:"getIndentation",value:function(){return _classPrivateFieldGet(this,_indentation)}},{key:"getStartLine",value:function(){return _classPrivateFieldGet(this,_startLine)}},{key:"getScope",value:function(){if(_classPrivateMethodGet(this,_isAScopeBlock,_isAScopeBlock2).call(this,this))return this;for(var t=this.getParentBlock();void 0!==t&&!_classPrivateMethodGet(this,_isAScopeBlock,_isAScopeBlock2).call(this,t);)t=t.getParentBlock();return void 0!==t?t:this}},{key:"addAlternate",value:function(t){_classPrivateFieldGet(this,_alternateBranches).add(t);var e=t.getAlternateBranches();e.has(this)||t.addAlternate(this);var i,n=_createForOfIteratorHelper(_classPrivateFieldGet(this,_alternateBranches));try{for(n.s();!(i=n.n()).done;){var r=i.value;r===t||e.has(r)||t.addAlternate(r)}}catch(t){n.e(t)}finally{n.f()}}},{key:"hasAlternateBranches",value:function(){return _classPrivateFieldGet(this,_alternateBranches).size>0}},{key:"getAlternateBranches",value:function(){return _classPrivateFieldGet(this,_alternateBranches)}},{key:"isInAlternateBranch",value:function(t){if(this===t||this.hasChild(t)||t.hasChild(this))return!1;if(_classPrivateFieldGet(this,_alternateBranches).has(t))return!0;var e,i=_createForOfIteratorHelper(_classPrivateFieldGet(this,_alternateBranches));try{for(i.s();!(e=i.n()).done;){if(e.value.hasChild(t))return!0}}catch(t){i.e(t)}finally{i.f()}var n,r=_createForOfIteratorHelper(t.getAlternateBranches());try{for(r.s();!(n=r.n()).done;){if(n.value.hasChild(this))return!0}}catch(t){r.e(t)}finally{r.f()}var a=[_expression.ExpressionEntity.IfDefinition,_expression.ExpressionEntity.ElifDefinition,_expression.ExpressionEntity.ElseDefinition],s=this.getNearestParentOfAny(a);s===this&&void 0!==this.getParentBlock()&&(s=this.getParentBlock().getNearestParentOfAny(a));var l=t.getNearestParentOfAny(a);return l===t&&void 0!==t.getParentBlock()&&(l=t.getParentBlock().getNearestParentOfAny(a)),void 0!==s&&void 0!==l&&s!==l&&(s.isInAlternateBranch(t)||l.isInAlternateBranch(this))}},{key:"getStepsToParentBlock",value:function(t){if(void 0===t||!t.hasChild(this))return-1;if(t===this)return 0;for(var e=this.getParentBlock(),i=1;e!==t;)e=e.getParentBlock(),i++;return i}},{key:"isBranchOfExhaustiveConditional",value:function(){return _classPrivateFieldGet(this,_blockEntity)===_expression.ExpressionEntity.IfDefinition||_classPrivateFieldGet(this,_blockEntity)===_expression.ExpressionEntity.ElifDefinition?_classPrivateMethodGet(this,_hasAltOfEntity,_hasAltOfEntity2).call(this,_expression.ExpressionEntity.ElseDefinition):_classPrivateFieldGet(this,_blockEntity)===_expression.ExpressionEntity.ElseDefinition?_classPrivateMethodGet(this,_hasAltOfEntity,_hasAltOfEntity2).call(this,_expression.ExpressionEntity.IfDefinition):_classPrivateFieldGet(this,_blockEntity)===_expression.ExpressionEntity.TryDefinition&&_classPrivateMethodGet(this,_hasAltOfEntity,_hasAltOfEntity2).call(this,_expression.ExpressionEntity.ExceptDefinition)}},{key:"setBlockExits",value:function(){_classPrivateFieldSet(this,_blockExits,!0)}},{key:"isExitBlock",value:function(){return _classPrivateFieldGet(this,_blockExits)}},{key:"hasChild",value:function(t){if(this===t)return!0;for(var e=t.getParentBlock();void 0!==e;){if(e===this)return!0;e=e.getParentBlock()}return!1}},{key:"hasChildOfEntity",value:function(t){var e,i=_createForOfIteratorHelper(this.getChildBlocks());try{for(i.s();!(e=i.n()).done;){var n=e.value;if(n.getBlockEntity()===t)return!0;if(n.getChildBlocks().length>0)return n.hasChildOfEntity(t)}}catch(t){i.e(t)}finally{i.f()}return!1}},{key:"hasChildOfAny",value:function(t){return this.getMatchingChildBlocks(t).length>0}},{key:"getMatchingChildBlocks",value:function(t){var e,i=[],n=new Set(t),r=_createForOfIteratorHelper(this.getChildBlocks());try{for(r.s();!(e=r.n()).done;){var a=e.value;n.has(a.getBlockEntity())&&i.push(a),a.getChildBlocks().length>0&&i.concat(a.getMatchingChildBlocks(t))}}catch(t){r.e(t)}finally{r.f()}return i}},{key:"hasParentOfEntity",value:function(t){return this.stepsToParentBlockOfEntity(t)>=0}},{key:"stepsToParentBlockOfEntity",value:function(t){if(_classPrivateFieldGet(this,_blockEntity)===t)return 0;for(var e=this.getParentBlock(),i=1;void 0!==e;){if(e.getBlockEntity()===t)return i;e=e.getParentBlock(),i++}return-1}},{key:"stepsToNearestParentOfAny",value:function(t){var e=this.getNearestParentOfAny(t);return void 0===e?-1:this.stepsToParentBlockOfEntity(e.getBlockEntity())}},{key:"getNearestParentOfAny",value:function(t){if(t.includes(_classPrivateFieldGet(this,_blockEntity)))return this;for(var e=this.getParentBlock();void 0!==e;){if(t.includes(e.getBlockEntity()))return e;e=e.getParentBlock()}}},{key:"getNearestCommonParent",value:function(t){for(var e=this;void 0!==e;){if(e.hasChild(t))return e;e=e.getParentBlock()}return e}},{key:"toJSON",value:function(){return{id:this.getId(),startLine:_classPrivateFieldGet(this,_startLine),children:_classPrivateFieldGet(this,_childBlocks).map((function(t){return t.toJSON()}))}}}]),t}();function _hasAltOfEntity2(t){var e,i=_createForOfIteratorHelper(_classPrivateFieldGet(this,_alternateBranches));try{for(i.s();!(e=i.n()).done;){if(e.value.getBlockEntity()===t)return!0}}catch(t){i.e(t)}finally{i.f()}return!1}function _isAScopeBlock2(t){return t.getBlockEntity()===_expression.ExpressionEntity.DocumentDefinition||t.getBlockEntity()===_expression.ExpressionEntity.FunctionDefinition||t.getBlockEntity()===_expression.ExpressionEntity.ListComprehension}exports.Block=Block;