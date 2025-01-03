
// const replacementsCyrillicHtmlCodes = require('./replacements-cyrillic-html-codes');
const replacementsLatin = require('./replacements-latin');
const replacementsDevanagari = require('./replacements-devanagari');
const replacementsCyrillic = require('./replacements-cyrillic');
const replacementsArabic = require('./replacements-arabic');
const replacementsThai = require('./replacements-thai');
const replacementsTamil = require('./replacements-tamil');
const replacementsHindi = require('./replacements-hindi');
const replacementsMisc = require('./replacements-misc');
const he = require('he');

const replacements = [
  // ...replacementsCyrillicHtmlCodes,
  ...replacementsLatin,
  ...replacementsDevanagari,
  ...replacementsCyrillic,
  ...replacementsArabic,
  ...replacementsThai,
  ...replacementsTamil,
  ...replacementsHindi,
  ...replacementsMisc,
];

// HTML entity decode
// const replaceHtmlSpecialChars = (str) => {
//   let decodedString = he.decode(str);
//   // handling missing ; from HTML entity
//   const regexWithoutSemicolon = /&#(\d+)(?!;)/g; // Match `&#...` without ;
//   decodedString = decodedString.replace(regexWithoutSemicolon, (match, num) => {
//     return String.fromCharCode(num);
//   });
//   return decodedString;
// };

const fixEncoding = (str) => {
  replacements.forEach(([bad, good]) => {
    str = str.replace(new RegExp(bad, 'g'), good);
  });
  return str;
};

const removeDiacritics = (str) => {
  // RegExp to match words containing ï¿½
  const regex = /(\S*ï¿½\S*)/g;

  // Split the string by words containing ï¿½ and other parts
  const parts = str.split(regex);

  // Function to remove diacritics from a word
  const removeDiacriticsFromWord = (word) => {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  };

  // Process each part
  const processedParts = parts.map(part => {
    // If the part contains ï¿½, return it as is, otherwise remove diacritics
    if (part.includes('ï¿½')) {
      return part;
    } else {
      return removeDiacriticsFromWord(part);
    }
  });

  // Join the parts back together
  return processedParts.join('');
};

// Filter out invalid characters 
// !! It is very important that this runs after encoding problems have been fixed !!
// !! and before the part that removes duplicate whitespaces runs. !!
const removeInvalidCharacters = (str) => {
  return str.replace(/[-_~`!@#$%^&*()+={}[\];:'"<>.,/\\?«»%|^„–’‚‘”“~`¨¸—‹›ˆ…€¢¥§©®µ¶·•¿¡¦°±²³´¹º¼½¾˘˙˛˜˝ˇ™]/g, ' ').replace(/ {2}/g, ' ').trim();
};

// Remove invalid characters
const removeInvalidEncoding = (str) => {
  const invalidChars = /[ÂâÃ]/g; // additional problematic characters can be added if necessary
  return str.replace(invalidChars, '');
};

// Remove stop words
// const removeStopWords = (str) => {
//   return str.replace(/\bthe\b/gi, '').trim();
// };
const removeStopWords = (str) => {
  // const stopWords = ['the', 'and', 'is', 'in', 'at', 'of', 'a', 'az', 'ez', 'van', 'és'];
  const stopWords = ['the', 'a', 'an'];
  const regex = new RegExp(`\\b(${stopWords.join('|')})\\b`, 'gi');
  return str.replace(regex, '').replace(/\s+/g, ' ').trim();
};

// Clean text
const cleanText = (text) => {
  let cleanedText = text;

  // decode html entity chars
  // cleanedText = replaceHtmlSpecialChars(cleanedText);

  // This completely removes incorrectly encoded characters (so there will be no unexpected results with removeDiacritics):
  cleanedText = removeInvalidEncoding(cleanedText);

  // Fix encoding errors:
  cleanedText = fixEncoding(cleanedText);                                                  

  // Removes diacritical characters
  cleanedText = removeDiacritics(cleanedText);

  // Removes all invalid characters
  cleanedText = removeInvalidCharacters(cleanedText);

  // Remove stop words like "the"
  cleanedText = removeStopWords(cleanedText);

  // Removes spaces:
  cleanedText = cleanedText.replace(/ {2}/g, ' ').trim();

  return cleanedText;
};

module.exports = {
  fixEncoding,
  removeDiacritics,
  removeInvalidCharacters,
  removeInvalidEncoding,
  cleanText
};
