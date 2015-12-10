'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.onload = function () {
			var dropdowns = document.getElementsByClassName("creative-dropdown");

			dropdowns = _defineProperty({}, Symbol.iterator, function () {
						var pre = 0,
						    cur = 1;
						return {
									next: function next() {
												var _ref = [cur, pre + cur];
												pre = _ref[0];
												cur = _ref[1];

												return { done: false, value: cur };
									}
						};
			});

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
						for (var _iterator = dropdowns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var i = _step.value;

									addEventListeners(i);
						}
			} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
			} finally {
						try {
									if (!_iteratorNormalCompletion && _iterator["return"]) {
												_iterator["return"]();
									}
						} finally {
									if (_didIteratorError) {
												throw _iteratorError;
									}
						}
			}
};

function addEventListeners(el) {
			var _this = this;

			var children = el.childNodes;
			var dropdown = undefined;

			dropdown = fetchDropdown(children);

			if (dropdown == undefined) return;

			dropdown.onfocus = function () {
						_this.toggle.checked = true;
						_this.icon.style.color = "rgb(63, 81, 181)";
			};

			dropdown.onblur = function () {
						_this.toggle.checked = false;
						_this.icon.style.color = "gray";
			};

			var ul = findUlElement(children);

			if (ul != undefined) {
						addSelectEventsForDropLi(ul, dropdown);
			}
}

function addSelectEventsForDropLi(ul, dropdown) {
			var _this2 = this;

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {

						for (var _iterator2 = ul.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var j = _step2.value;

									if (j.tagName === "LI") {
												j.inputEl = dropdown;

												j.onclick = function () {
															_this2.inputEl.value = _this2.textContent;
												};
									}
						}
			} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
			} finally {
						try {
									if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
												_iterator2["return"]();
									}
						} finally {
									if (_didIteratorError2) {
												throw _iteratorError2;
									}
						}
			}
}

function findUlElement(children) {
			var ul = undefined;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
						for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var i = _step3.value;

									if (i.tagName === "DIV") {
												var _iteratorNormalCompletion4 = true;
												var _didIteratorError4 = false;
												var _iteratorError4 = undefined;

												try {

															for (var _iterator4 = i[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
																		var j = _step4.value;

																		if (j.tagName === "UL") {
																					ul = j;
																					break;
																		}
															}
												} catch (err) {
															_didIteratorError4 = true;
															_iteratorError4 = err;
												} finally {
															try {
																		if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
																					_iterator4["return"]();
																		}
															} finally {
																		if (_didIteratorError4) {
																					throw _iteratorError4;
																		}
															}
												}
									}

									if (i.tagName === "UL") ul = i;
						}
			} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
			} finally {
						try {
									if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
												_iterator3["return"]();
									}
						} finally {
									if (_didIteratorError3) {
												throw _iteratorError3;
									}
						}
			}

			return ul;
}

function fetchDropdown(children) {
			var dropdown = undefined;
			var toggle = undefined,
			    icon = undefined;
			children = _defineProperty({}, Symbol.iterator, function () {
						var pre = 0,
						    cur = 1;
						return {
									next: function next() {
												var _ref2 = [cur, pre + cur];
												pre = _ref2[0];
												cur = _ref2[1];

												return { done: false, value: cur };
									}
						};
			});
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
						for (var _iterator5 = children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
									var i = _step5.value;

									if (i.tagName === "INPUT") {
												dropdown = i;
									}

									if (i.tagName === "LABEL" && (" " + i.className + " ").indexOf(" mdl-icon-toggle ") > -1) {
												var _iteratorNormalCompletion6 = true;
												var _didIteratorError6 = false;
												var _iteratorError6 = undefined;

												try {

															for (var _iterator6 = i.childNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
																		var j = _step6.value;

																		if (j.tagName === "INPUT") toggle = j;

																		if (j.tagName === "I") icon = j;
															}
												} catch (err) {
															_didIteratorError6 = true;
															_iteratorError6 = err;
												} finally {
															try {
																		if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
																					_iterator6["return"]();
																		}
															} finally {
																		if (_didIteratorError6) {
																					throw _iteratorError6;
																		}
															}
												}
									}
						}
			} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
			} finally {
						try {
									if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
												_iterator5["return"]();
									}
						} finally {
									if (_didIteratorError5) {
												throw _iteratorError5;
									}
						}
			}

			dropdown.toggle = toggle;
			dropdown.icon = icon;
			return dropdown;
}