let mygame = [];
let mygamerow = [];
for (let x = 0; x < 8; x++) {
	for (let y = 0; y < 8; y++) {
		if ((x + y) % 2 == 0) {
			mygamerow.push('black');
		} else {
			mygamerow.push('white');
		}
	}
	mygame.push(mygamerow);
	mygamerow = [];
}
console.table(mygame);
