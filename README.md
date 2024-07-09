# db-search-text-preprocess

A library for cleaning and fixing text for search fields.

## Installation

```bash
npm i db-search-text-preprocess
```

## Usage

```javascript
const { cleanText, fixEncoding, removeDiacritics, removeInvalidCharacters, removeInvalidEncoding } = require('db-search-text-preprocess');

const text = "pä±Narbasä± (Sitio Arqueologico)";
const cleanedText = cleanText(text);
console.log(cleanedText); // "pa±narbasa± sitio arqueologico"
```


## Functions

```javascript
    cleanText(text): Cleans the text by fixing encoding issues, removing diacritics, invalid characters, and duplicate spaces.
    fixEncoding(str): Fixes common encoding issues.
    removeDiacritics(str): Removes diacritics from the text.
    removeInvalidCharacters(str): Removes invalid characters from the text.
    removeInvalidEncoding(str): Removes invalid encoding characters from the text.
```    



