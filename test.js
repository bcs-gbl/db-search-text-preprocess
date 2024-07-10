const { cleanText } = require('./index');

const examples = [
  "Leï¿½Ons De Clinique Mï¿½Dicale, Faites Ï¿½ L'hï¿½Pital De La Charitï¿½",
  "Salluste, Jules Cï¿½Sar, C. Vellï¿½Ius Paterculus Et A. Florus (Ï¿½D.1865)",
  "pä±Narbasä± (Sitio Arqueologico)",
  "Egyéb példa ékezetes szavakkal",
  "KÃ¤stner, Erich",
  "GarcÃ­a MÃ¡rquez, Gabriel",
  "FranÃ§ois Hollande",
  "Björk Guðmundsdóttir",
  "São Paulo",
  "René Descartes",
  "Göteborg",
  "Curaçao",
  "Håkan Nesser",
  "České Budějovice",
  "Øystein Sunde",
  "Jürgen Klopp",
  "Ångström",
  "Grønland",
  "München",
  "Löwe",
  "Île-de-France",
  "Fañch",
  "Łódź",
  "Dvořák",
  "Smørrebrød",
  "Ærø",
  "Tōkyō",
  "Beijing 北京",
  "Москва",
  "Αθήνα"
];

examples.forEach(example => {
  console.log(cleanText(example));
});
