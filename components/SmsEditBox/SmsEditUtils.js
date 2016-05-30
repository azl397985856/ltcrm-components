import {message} from 'antd';

// 在指定位置插入文字，然后聚焦在文字的位置
function insertAtCaret(ctrl, value) {
	if (document.selection) {
		// For browsers like Internet Explorer
		ctrl.focus();
		const sel = document.selection.createRange();
		sel.text = value;
		ctrl.focus();
	} else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
		// For browsers like Firefox and Webkit based
		const startPos = ctrl.selectionStart;
		const endPos = ctrl.selectionEnd;
		const scrollTop = ctrl.scrollTop;
		ctrl.value = ctrl.value.substring(0, startPos) + value + ctrl.value.substring(endPos, ctrl.value.length);
		ctrl.focus();
		ctrl.selectionStart = startPos + value.length;
		ctrl.selectionEnd = startPos + value.length;
		ctrl.scrollTop = scrollTop;
	} else {
		ctrl.value += value;
		ctrl.focus();
	}
	return ctrl.value;
}

// 获取光标位置函数
function getCursortPosition(ctrl) {
	let CaretPos = 0; // IE Support
	if (document.selection) {
		ctrl.focus();
		const Sel = document.selection.createRange();
		Sel.moveStart('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	} else {
		if (ctrl.selectionStart || ctrl.selectionStart == '0') {
			CaretPos = ctrl.selectionStart;
		}
	}
	return (CaretPos);
}

// 设置光标位置函数
function setCaretPosition(ctrl, pos) {
	if (ctrl.setSelectionRange) {
		ctrl.focus();
		ctrl.setSelectionRange(pos, pos);
	} else if (ctrl.createTextRange) {
		const range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

// 字符串比对，基于每次修改都是部分连续字符串差异
// 例如：
// abc -> abeeeec
// 不会出现多处差异
function getDiff(a, b, pos) {
	// 默认 b.len <= a.len
	const lenb = b.length;
	const lena = a.length;
	let target = {
		start: 0,
		end: 0,
		str: '',
		srtStr: '',
	};
	// 全删，或者从空粘进去
	if (lenb === 0) {
		target = {
			start: 0,
			end: lena,
			str: a,
			srtStr: '',
		};
		return target;
	}
	// 老逻辑
	// if (lenb < lena) {
	// 	for (let i = 1; i <= lenb; i++) {
	// 		const left = b.substr(0, i);
	// 		const right = b.substr(i, lenb - 1);
	// 		const leftLen = left.length;
	// 		const rightLen = right.length;
	// 		const leftIndex = a.indexOf(left);
	// 		const rightIndex = a.lastIndexOf(right);
	// 		if (leftIndex !== -1 && rightIndex !== -1) {
	// 			if (leftIndex + leftLen < rightIndex) {
	// 				if (leftIndex === 0 && rightIndex + rightLen === lena) {
	// 					target = {
	// 						start: leftLen,
	// 						end: rightIndex - 1,
	// 						str: a.substr(leftLen, lena - lenb),
	// 					};
	// 				}
	// 			} else if (leftIndex + leftLen === rightIndex) {
	// 				if (rightIndex + rightLen === lena) {
	// 					target = {
	// 						start: 0,
	// 						end: leftIndex - 1,
	// 						str: a.substr(0, lena - lenb),
	// 					};
	// 				} else if (leftIndex === 0) {
	// 					target = {
	// 						start: lenb,
	// 						end: lena - 1,
	// 						str: a.substr(lenb, lena - lenb),
	// 					};
	// 				}
	// 			}
	// 		}
	// 	}
	// 	if (target.str === '') {
	// 		target.start = 0;
	// 		target.end = 0;
	// 	}
	// } else if (lena === lenb) {
	// 	// 如果长度相等时，a为目标状态，b为上个状态
	// 	let start = 2000;
	// 	let end = 0;
	// 	// 是否修改过
	// 	let flag = true;
	// 	for (let i = 0; i < lena; i++) {
	// 		if (a[i] !== b[i]) {
	// 			flag = false;
	// 			start = i < start ? i : start;
	// 			end = i > end ? i : end;
	// 		}
	// 	}
	// 	// 如果没有修改过，则为空
	// 	if (flag) {
	// 		start = 0;
	// 		end = 0;
	// 	}
	// 	target = {
	// 		start,
	// 		end,
	// 		str: a.substr(start, end - start + 1),
	// 	};
	// }

	// 重新做的a、b逻辑
	if (a !== b) {
		let i = 0;
		let j = 0;
		for (; i < lenb; i++) {
			if (a[i] !== b[i]) {
				break;
			}
		}
		for (; j < lenb; j++) {
			if (a[lena - 1 - j] !== b[lenb - 1 - j]) {
				break;
			}
		}
		// 根据i、j计算变化内容
		const start = i;
		let end = 0;
		let len = 0;
		let str = '';
		let srtStr = '';
		if (i + j > lenb) {
			len = lena - lenb;
			end = start + len - 1;
			str = a.substr(start, len);
			srtStr = '';
		} else {
			end = lena - j - 1;
			len = end - start + 1;
			str = a.substr(start, len);
			if (i + j === lenb) {
				srtStr = '';
			} else {
				// 此种情况需要单独计算短串的字段
				srtStr = b.substr(start, lenb - j - start);
			}
		}
		target = {
			start: start,
			end: end,
			str: str,
			srtStr: srtStr,
		};
	}
	// 删除叠词时可能存在start和end错位的bug，用pos来解决这个问题
	if (target.start > pos) {
		const newStart = pos;
		const newEnd = target.end - target.start + pos;
		target.start = newStart;
		target.end = newEnd;
	}
	return target;
}

// 建立在修改模板并不会触发onchange事件
// 所以前后两个模板必然是相似的
function stringDiff(newStr, oldStr, pos) {
	let target = {
		// type true 增加 修改，false 删除
		type: '',
		// 差异的字符串
		diff: {},
	};
	if (oldStr.length < newStr.length) {
		target = {
			type: 'insert',
			diff: getDiff(newStr, oldStr, pos),
		};
	} else if (oldStr.length === newStr.length) {
		// 当表现为修改时，需要同时考量删去之前的内容和删去之后的内容
		// 如果人为插入了【、#、】，即修改前或者修改后涉及到这三个符号，应当还原上一个状态
		target = {
			type: 'change',
			diff: getDiff(newStr, oldStr, pos),
		};
	} else {
		target = {
			type: 'delete',
			diff: getDiff(oldStr, newStr, pos),
		};
	}
	return target;
}

// 检查是否有不合理标签
function checkTags(str, options) {
	const arr = str.match(/\u3010\#[^\#^\u3010^\u3011]*\#\u3011/g) || [];
	let bool = true;
	arr.forEach((val) => {
		const value = val.substr(2, val.length - 4);
		if (!options.includes(value)) {
			bool = false;
		}
	});
	return bool;
}
// 替换不合理标签
function replaceUntags(str, options) {
	const arr = str.match(/\u3010\#[^\#^\u3010^\u3011]*\#\u3011/g) || [];
	let target = str;
	const tags = [];
	arr.forEach((val) => {
		const value = val.substr(2, val.length - 4);
		if (!options.includes(value)) {
			tags.push(`【#${value}#】`);
			target = target.replace(`【#${value}#】`, '');
		}
	});
	return {target, tags};
}

// 校验输入文本
function validInputValue(data, method, ctrl) {
	// 获取上一次光标所在位置
	const lastPos = getCursortPosition(ctrl);
	// 新的光标所在位置
	let newPos = [false, undefined];
	// 生成正则数组与替换数组
	const {
		value, lastValue, options
	} = data;
	const diff = stringDiff(value, lastValue, lastPos);
	const {str, start, end, srtStr} = diff.diff;
	let target = value;
	let tips = '';
	// 当内容增加时
	if (diff.type === 'insert') {
		// 1、如果存在标签嵌套的情况，则重置
		if (target.match(/\u3010\#[^\#]*\u3010\#[^\u3010^\#]*\#\u3011[^\#]*\#\u3011/g)) {
			target = lastValue;
			newPos = [true, lastPos - str.length];
		}
		// 查找两个字符串的差异
		// 新增内容时，如果不是插入的，需要判断是否有人工输入的
		// 2、人工输入了【|】|#时，直接重置
		if (method === 'input' && target !== lastValue) {
			if (!str.match(/\u3010\#[^\u3010^\#]*\#\u3011/g)) {
				// 限制【、】、#、[、]的输入
				if (str.match(/\u3010|\#|\u3011|\[|\]/g) || srtStr.match(/\u3010|\#|\u3011|\[|\]/g)) {
					target = lastValue;
					newPos = [true, lastPos - str.length];
				}
			} else {
				// 如果输入的内容中有标签，则剔除非法标签
				const middle = replaceUntags(str, options);
				target = value.substr(0, start) + middle.target + value.substr(end + 1, value.length - end);
				// 有非法标签时，底部的提示需要说明
				if (middle.tags.length !== 0) {
					tips = `注意：输入内容中的非法标签：${middle.tags}，已被自动删除`;
				}
			}
		}
		// 3、如果添加的文字是在#】、【#中间，则删除
		if (value[end + 1] === '】' && value[start - 1] === '#' ||
			value[end + 1] === '#' && value[start - 1] === '【') {
			target = value.substr(0, start) + value.substr(end + 1, value.length - end);
			newPos = [true, start];
		}
		// 4、如果添加了文字之后，全局存在不合理的标签，则恢复上一次修改
		if (!checkTags(target, options)) {
			// 输入时有非法标签，主要是粘贴进来了非法标签
			target = lastValue;
			newPos = [true, lastPos - str.length];
		}
	} else if (diff.type === 'delete') {
		// 拆分左右两部分
		let newLeftStr = lastValue.substr(0, start);
		let newRightStr = lastValue.substr(end + 1, value.length - newLeftStr.length + 1);
		const backupLeft = newLeftStr;
		const backupRight = newRightStr;
		// 1、删除内容中寻找是否有半括号
		// 1.1、从左往右找，如果找到】，则向左检索另外一个半括号；遇到【停止检索
		let leftIndex = str.indexOf('】');
		let rightIndex = str.indexOf('【');
		if (rightIndex !== -1) {
			if (leftIndex !== -1 && leftIndex < rightIndex) {
				// 向左检索左半括号
				const newLen = newLeftStr.lastIndexOf('【');
				newLeftStr = newLeftStr.substr(0, newLen);
			}
		} else {
			if (leftIndex !== -1) {
				// 向左检索左半括号
				const newLen = newLeftStr.lastIndexOf('【');
				newLeftStr = newLeftStr.substr(0, newLen);
			}
		}
		// 1.2、从右往左找，如果找到【，则向右检索另一个半括号；遇到】停止检索
		leftIndex = str.lastIndexOf('】');
		rightIndex = str.lastIndexOf('【');
		if (leftIndex !== -1) {
			if (rightIndex !== -1 && leftIndex < rightIndex) {
				// 向右检索右半个括号
				const newLen = newRightStr.indexOf('】');
				newRightStr = newRightStr.substr(newLen + 1, newRightStr.length - newLen);
			}
		} else {
			if (rightIndex !== -1) {
				// 向右检索右半个括号
				const newLen = newRightStr.indexOf('】');
				newRightStr = newRightStr.substr(newLen + 1, newRightStr.length - newLen);
			}
		}
		// 2、如果删除内容中，起始位置、结束位置有#，那么去lastValue中寻找临近的【】，并匹配删除
		// 2.1、如果#左侧有【，则向右匹配
		if (str[0] === '#' && lastValue[start - 1] === '【') {
			newLeftStr = newLeftStr.substr(0, start - 1);
			const rightInStr = str.indexOf('】');
			if (rightInStr !== -1) {
				newRightStr = newRightStr;
			} else {
				const newLen = newRightStr.indexOf('】');
				newRightStr = newRightStr.substr(newLen + 1, newRightStr.length - newLen);
			}
		}
		// 2.2、如果#右侧有】，则向左匹配
		if (str[0] === '#' && lastValue[end + 1] === '】') {
			newRightStr = newRightStr.substr(1, newRightStr.length - 1);
			const leftInStr = str.indexOf('【');
			if (leftInStr !== -1) {
				newLeftStr = newLeftStr;
			} else {
				const newLen = newLeftStr.lastIndexOf('【');
				newLeftStr = newLeftStr.substr(0, newLen);
			}
		}
		// 3、如果删除的内容属于某个合法标签，则需要进行处理
		// 分别向其左右查找【、】，判断是否在某个标签内
		leftIndex = newLeftStr.lastIndexOf('【');
		rightIndex = newLeftStr.lastIndexOf('】');
		if (rightIndex !== -1) {
			if (leftIndex !== -1 && rightIndex < leftIndex) {
				newLeftStr = newLeftStr.substr(0, leftIndex);
			}
		} else {
			if (leftIndex !== -1) {
				newLeftStr = newLeftStr.substr(0, leftIndex);
			}
		}
		leftIndex = newRightStr.indexOf('【');
		rightIndex = newRightStr.indexOf('】');
		if (leftIndex !== -1) {
			if (rightIndex !== -1 && leftIndex > rightIndex) {
				newRightStr = newRightStr.substr(rightIndex + 1, newRightStr.length - rightIndex);
			}
		} else {
			if (rightIndex !== -1) {
				newRightStr = newRightStr.substr(rightIndex + 1, newRightStr.length - rightIndex);
			}
		}
		// 拼接字符串
		if (srtStr !== '' && newLeftStr === backupLeft && newRightStr === backupRight) {
			// 这里使用的srtStr 是指shortStr
			target = newLeftStr + srtStr + newRightStr;
			newPos = [true, newLeftStr.length + srtStr.length];
		} else {
			target = newLeftStr + newRightStr;
			newPos = [true, newLeftStr.length];
		}
	} else if (diff.type === 'change') {
		// 1、当内容修改时，如果修改的段里，value和lastValue该段内容中有#、【、】,则重置
		const newStr = str;
		const oldStr = lastValue.substr(start, end - start + 1);
		if (newStr.match(/\u3010|\#|\u3011/g) || oldStr.match(/\u3010|\#|\u3011/g)) {
			target = lastValue;
			newPos = [true, lastPos];
		}
	}
	// ps、如果经过以上处理后，还存在不合理标签，则将这些不规则标签清除掉
	// 可能存在标签定位不准的bug，需要容后再处理一下
	// 当删除标签内部文字之后，该标签进入了不符合规则的状态，而非删除逻辑
	if (!checkTags(target, options)) {
		// 非法标签删掉后需要提示
		const middle = replaceUntags(target, options);
		target = middle.target;
		tips = `注意：文本中所包含的非法标签：${middle.tags}，已被自动删除`;
	}
	// 最大长度强行限制
	if (target.length > 200) {
		target = target.substr(0, 200);
		newPos = [true, 200];
	}
	// hack 强制在传回之后手动修改当前光标 所在位置
	if (newPos[0] && method === 'input') {
		setTimeout(() => setCaretPosition(ctrl, newPos[1]), 10);
	}
	return {target, tips};
}

const SmsEditUtils = {
	insertAtCaret: insertAtCaret,
	validInputValue: validInputValue,
	// 获取当前光标所在位置
	// 设置光标所在位置
};

export default SmsEditUtils;
module.exports = exports['default'];