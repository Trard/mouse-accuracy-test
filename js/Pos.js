export default class Pos {
    constructor({ x, y } = { x: 0, y: 0 }) {
        this.x = x;
        this.y = y;
    }
    
    subtract(anotherPos) {
        return new Pos({
            x: this.x - anotherPos.x,
            y: this.y - anotherPos.y
        });
    };

    toString() {
        return `x: ${this.x}, y: ${this.y}`
    }
}