//making our own prototype
String.prototype.yell = () => {
    return `OMG!!${this.toUpperCase()}!!!!!`;
}

Array.prototype.pop = function () {
    return `SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!`;
}