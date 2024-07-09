const { cleanText, fixEncoding, removeDiacritics, removeInvalidCharacters, removeInvalidEncoding } = require('./index');

const example1 = "Leï¿½Ons De Clinique Mï¿½Dicale, Faites Ï¿½ L'hï¿½Pital De La Charitï¿½";
const example2 = "Salluste, Jules Cï¿½Sar, C. Vellï¿½Ius Paterculus Et A. Florus (Ï¿½D.1865)";
const example3 = "pä±Narbasä± (Sitio Arqueologico)";
const example4 = "Egyéb példa ékezetes szavakkal";

console.log(cleanText(example1));
console.log(cleanText(example2));
console.log(cleanText(example3));
console.log(cleanText(example4));
