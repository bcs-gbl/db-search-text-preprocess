const replacements = [
  { bad: 'Â«', good: '«' },
  { bad: 'Â»', good: '»' },
  { bad: 'â«', good: '«' },
  { bad: 'â»', good: '»' },
  { bad: 'Â„–', good: '№' },
  { bad: 'â„–', good: '№' },
  { bad: 'Ã—', good: '×' },
  { bad: 'Ã©', good: 'é' },
  { bad: 'Ã¨', good: 'è' },
  { bad: 'Ã¼', good: 'ü' },
  { bad: 'Ã¶', good: 'ö' },
  { bad: 'Ã¡', good: 'á' },
  { bad: 'Ã³', good: 'ó' },
  { bad: 'Ãº', good: 'ú' },
  { bad: 'Ã±', good: 'ñ' },
  { bad: 'Ä±', good: 'ı' },
  { bad: 'ñ–', good: 'ñ' },
  { bad: 'Ã', good: 'Á' },
  { bad: 'â', good: 'a' },
  { bad: 'â€™', good: '’' },
  { bad: 'â€œ', good: '“' },
  { bad: 'â€', good: '”' },
  { bad: 'â€¢', good: '•' },
  { bad: 'â€“', good: '–' },
  { bad: 'â€”', good: '—' },
  { bad: 'â„', good: '℗' },
  { bad: 'â„¢', good: '™' },
  { bad: 'â‚¬', good: '€' },
  { bad: 'âš', good: '⚙' },
  { bad: 'âš¡', good: '⚡' },
  { bad: 'âŒ', good: '☒' },
  { bad: 'â›', good: '☣' },
  { bad: 'âœ', good: '✄' },
  { bad: 'â™', good: '♪' },
  { bad: 'â€Ž', good: '‎' },
  { bad: 'â€‹', good: '​' },
  { bad: 'à¤', good: 'अ' }, // Devanagari script fixes
  { bad: 'à¥', good: 'ा' }, // Devanagari script fixes
  { bad: 'à', good: 'अ' }, // Devanagari script fixes
  // { bad: 'ï¿½', good: 'ü' }, // 
  { bad: 'Ñ', good: 'я' },
  { bad: 'Ð»', good: 'л' },
  { bad: 'Ñž', good: 'ю' },
  { bad: 'ð±', good: 'б' },
  { bad: 'ð»', good: 'л' },
  { bad: 'ñž', good: 'ю' },
  { bad: 'Ðº', good: 'к' },
  { bad: 'Ð¾', good: 'о' },
  { bad: 'Ñ‚', good: 'т' },
  { bad: 'Ñ–', good: 'і' },
  { bad: 'Ñ”', good: 'є' },
  { bad: 'Ð°', good: 'а' },
  { bad: 'ñ–', good: 'и' },
  { bad: 'Ð¼', good: 'м' },
  { bad: 'ñ”', good: 'є' },
  { bad: 'Ñ‹', good: 'ы' },
  { bad: 'Ñ', good: 'с' },
  { bad: 'Ð¸', good: 'и' },
  { bad: 'Ä‘', good: 'đ' },
  { bad: 'Ð°', good: 'а' },
  { bad: 'Ñ‘', good: 'ё' },
  { bad: 'ð°', good: 'а' },
  { bad: 'ð¼', good: 'м' },
  { bad: 'ñ‚', good: 'т' },
  { bad: 'ð¸', good: 'и' },
  { bad: 'ð´', good: 'д' },
  { bad: 'ñ™', good: 'ј' },
  { bad: 'ð²', good: 'в' },
  { bad: 'ðˆ', good: 'Ш' },
  { bad: 'ð°', good: 'а' },
  { bad: 'ñ', good: 'н' }, // General replacement for common misencoding of 'ñ' with 'н'
  { bad: 'Ñ–', good: 'і' }, // General replacement for common misencoding of 'Ñ–' with 'і'
  // { bad: 'fï¿½r', good: 'für' }, // Speciális eset 'fï¿½r' helyett 'für'
  { bad: 'ø§', good: 'ا' },
  { bad: 'ø¨', good: 'ب' },
  { bad: 'ø±', good: 'ر' },
  { bad: 'ø²', good: 'ز' },
  { bad: 'ø­', good: 'ح' },
  { bad: 'ø¯', good: 'د' },
  { bad: 'ø§', good: 'ا' },
  { bad: 'ø«', good: 'ث' },
  { bad: 'ùš', good: 'ي' },
  { bad: 'ùˆ', good: 'و' },
  { bad: 'ù…', good: 'م' },
  { bad: 'ù„', good: 'ل' },
  { bad: 'ù‚', good: 'ق' },
  { bad: 'ùŠ', good: 'ي' },
  { bad: 'ù‡', good: 'ه' },
  { bad: 'ø¶', good: 'ض' },
  { bad: 'ø§', good: 'ا' },
  { bad: 'ø¬', good: 'ج' },
  { bad: 'ø§', good: 'ا' },
  { bad: 'ø¡', good: 'ء' },
  { bad: 'ø¨', good: 'ب' },
  { bad: 'ø§', good: 'ا' },
  { bad: 'ù„', good: 'ل' },
  { bad: 'ù‚', good: 'ق' },
  { bad: 'ø±', good: 'ر' },
  { bad: 'ø§', good: 'ا' },
  { bad: 'ù†', good: 'ن' },
  { bad: 'ø§', good: 'ا' },
  { bad: 'ù„', good: 'ل' },
  { bad: 'ùƒ', good: 'ك' },
  { bad: 'ø±', good: 'ر' },
  { bad: 'ùŠ', good: 'ي' },
  { bad: 'ù…', good: 'م' },
  { bad: 'ÙŠ', good: 'ي' },
  { bad: 'à¹€', good: 'เ' },
  { bad: 'à¸­', good: 'อ' },
  { bad: 'à¸', good: 'อ' },
  { bad: 'à¹€', good: 'เ' },
  { bad: 'à¸š', good: 'บ' },
  { bad: 'à¸£', good: 'ร' },
  { bad: 'à¸•', good: 'ต' },
  { bad: 'à¸', good: 'อ' },
  { bad: 'à¸¥', good: 'ล' },
  { bad: 'à¸²', good: 'า' },
  { bad: 'à¸¢', good: 'ย' },
  { bad: 'à¹€', good: 'เ' },
  { bad: 'à¸›', good: 'ป' },
  { bad: 'à¸™', good: 'น' },
  { bad: 'à¸ª', good: 'ส' },
  { bad: 'à¹', good: '้' },
  { bad: 'à¸”', good: 'ด' },
  { bad: 'à¸‡', good: 'ง' },
  { bad: 'à®ž', good: 'ஸ' },
  { bad: 'à®•', good: 'க' },
  { bad: 'à®ª', good: 'ப' },
  { bad: 'à¯†', good: 'ெ' },
  { bad: 'à®°', good: 'ர' },
  { bad: 'à®ÿ', good: 'ய' },
  { bad: 'à®š', good: 'ச' },
  { bad: 'à®¿', good: 'ி' },
  { bad: 'à®μ', good: 'வ' },
  { bad: 'à®ª', good: 'ப' },
  { bad: 'à¯', good: '்' },
  { bad: 'à®•', good: 'க' },
  { bad: 'à®•', good: 'க' },
  { bad: 'à¯', good: '்' },
  { bad: 'à®®', good: 'ம' },
  { bad: 'à®¾', good: 'ா' },
  { bad: 'à®±', good: 'ற' },
  { bad: 'à¯', good: '்' },
  { bad: 'à®•', good: 'க' },
  { bad: 'à®¿', good: 'ி' },
  { bad: 'à®±', good: 'ற' },
  { bad: 'à®¾', good: 'ா' },
  { bad: 'à®©', good: 'ன' },
  { bad: 'à¤', good: 'अ' },
  { bad: 'à¤—', good: 'ग' },
  { bad: 'à¤¬', good: 'ब' },
  { bad: 'à¤°', good: 'र' },
  { bad: 'à¤ÿ', good: 'य' },
  { bad: 'à¤²', good: 'ल' },
  { bad: 'à¤¾', good: 'ा' },
  { bad: 'à¤²', good: 'ल' },
  { bad: 'à¤¹', good: 'ह' },
  { bad: 'à¥‹', good: 'ो' },
  { bad: 'à¤—', good: 'ग' },
  { bad: 'à¤¯', good: 'य' },
  { bad: 'à¤¾', good: 'ा' },
  { bad: 'ã—', good: '×' }, // Common misencoding of '×'
  // { bad: 'ï¿½', good: '' }, ezeket ki kell hagyni, mert többféle karaktert is jelölhetnek (és mert a cím vagy szerző így van bent a rendszerben) - javasolt a DB manuális javítása
  { bad: 'ä±', good: 'ı' },
  { bad: 'pä±', good: 'pı' },
  { bad: 'nä±', good: 'nı' },
  { bad: 'sä±', good: 'sı' },
  { bad: 'ê¹', good: 'ч' },
  { bad: 'êº', good: 'я' }
];

const fixEncoding = (str) => {
  replacements.forEach(({ bad, good }) => {
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

// hibás karakterek kiszűrése
const removeInvalidCharacters = (str) => {
  return str.replace(/[-_~`!@#$%^&*()+={}[\];:'"<>.,/\\?«»%|^„–]/g, ' ').replace(/ {2}/g, ' ').trim();
};

// Hibás karakterek eltávolítása
const removeInvalidEncoding = (str) => {
  const invalidChars = /[ÂâÃ]/g; // hozzáadhatunk további hibás karaktereket is szükség szerint
  return str.replace(invalidChars, '');
};

// szöveg tisztítása
const cleanText = (text) => {
  let cleanedText = text;

  // ezt törli teljesen a hibásan encode-olt karaktereket (így a removeDiacritics -nél nem lesz váratlan eredmény):
  cleanedText = removeInvalidEncoding(text);

  // Encode hibák javítása:
  cleanedText = fixEncoding(cleanedText);                                                  

  // Eltávolítja a diacritikus karaktereket
  cleanedText = removeDiacritics(cleanedText);

  // eltávolítja az invalid karaktereket (mindet)
  cleanedText = removeInvalidCharacters(cleanedText);

  // kiszedi a duplikált szóközöket:
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
