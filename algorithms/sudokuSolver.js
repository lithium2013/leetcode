/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
	doFill(0);

	function doFill(startPos) {
		if (startPos === 81) return board;

		var position = idx2Position(startPos),
			row = position[0],
			col = position[1];

		if (board[row][col] !== '.') {
			return doFill(startPos + 1);
		};

		for (var val = 1; val < 10; val++) {
			if (!isInRect(row, col, val) && !isInCol(col, val) && !isInRow(row, val)) {
				board[row][col] = val.toString();

				var res = doFill(startPos + 1);

				if (!res) {
					board[row][col] = '.';
				} else {
					return res;
				}
			}
		}

		return false;
	}

	function idx2Position(idx) {
		if (idx >= 81) return false;
		return [Math.floor(idx / 9), idx % 9];
	}

	function getRectIdx(row, col) {
		var col1 = Math.floor(col / 3),
			row1 = Math.floor(row / 3);
		
		return row1 * 3 + col1;
	}

	function isInRow(row, val) {
		for (var i = 0; i < 9; i++) {
			if (board[row][i] === val.toString()) {
				return true;
			}
		}
		return false;
	}

	function isInCol(col, val) {
		for (var i = 0; i < 9; i++) {
			if (board[i][col] === val.toString()) {
				return true;
			}
		}

		return false;
	}

	function isInRect(row, col, val) {
		var rectIdx = getRectIdx(row, col),
			topLeftRow = Math.floor(rectIdx / 3) * 3,
			topLeftCol = Math.floor(rectIdx % 3) * 3;
		
		for (var i = topLeftRow; i < topLeftRow + 3; i++) {
			for (var j = topLeftCol; j < topLeftCol + 3; j++) {
				if (board[i][j] === val.toString()) return true;
			}
		}

		return false;
	}
};
