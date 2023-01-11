"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSweetAging = void 0;
/*
I dolci in vendita invecchiano ed in
base al tempo trascorso dalla loro messa in vendita hanno prezzi diversi: primo giorno prezzo pieno, secondo giorno costano l’80%, il terzo giorno il 20%. Il quarto giorno non sono commestibili e devono essere ritirati dalla vendita.
*/
const roundNumberToTwoDecimals = (number) => {
    return Math.round(number * 100) / 100;
};
const handleSweetAging = (sweet) => {
    const today = new Date();
    const sweetCreationDate = new Date(sweet.createdAt);
    const difference = today.getTime() - sweetCreationDate.getTime();
    const days = difference / (1000 * 3600 * 24);
    if (days >= 4)
        return Object.assign(Object.assign({}, sweet), { price: 0 });
    if (days >= 3)
        return Object.assign(Object.assign({}, sweet), { price: roundNumberToTwoDecimals(sweet.price * 0.2) });
    if (days >= 2)
        return Object.assign(Object.assign({}, sweet), { price: roundNumberToTwoDecimals(sweet.price * 0.8) });
    return sweet;
};
exports.handleSweetAging = handleSweetAging;
//# sourceMappingURL=sweetAging.js.map