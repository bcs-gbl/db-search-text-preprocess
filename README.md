# Text Cleaning Utility

This utility is designed to clean and fix text strings by removing invalid characters, correcting encoding issues, and standardizing text. It is particularly useful for processing data that may contain various special characters, diacritics, and encoding errors, which are common in datasets from diverse sources.

## Features

- **Fix Encoding**: Corrects common encoding errors.
- **Remove Diacritics**: Strips diacritical marks from characters.
- **Remove Invalid Characters**: Cleans up invalid or special characters.
- **Standardize Text**: Ensures text is standardized for further processing.

## How It Works

The utility processes text through several steps:
1. **Remove Invalid Encoding**: Identifies and removes invalid encoding characters.
2. **Fix Encoding**: Replaces incorrectly encoded characters with the correct ones.
3. **Remove Diacritics**: Removes diacritical marks from characters.
4. **Remove Invalid Characters**: Strips out any remaining special or invalid characters.
5. **Clean Text**: Combines all the above steps to provide a clean, standardized text string.

## File Structure

- **index.js**: Main module containing the text cleaning functions.
- **replacements-*.js**: Separate files for different character sets and their replacements.
- **test.js**: Script for testing the text cleaning functions with various examples.

## Usage

### Installation

```bash
npm install text-cleaning-utility
```

### Importing the Module

```javascript
const { cleanText, fixEncoding, removeDiacritics, removeInvalidCharacters, removeInvalidEncoding } = require('text-cleaning-utility');
```

### Cleaning Text

```javascript
const text = "Salluste, Jules Cï¿½Sar, C. Vellï¿½Ius Paterculus Et A. Florus (Ï¿½D.1865)";
const cleanedText = cleanText(text);
console.log(cleanedText);
```

### Testing

To test the text cleaning utility, use the test.js script which contains multiple examples:

```bash
node test.js
```

### Example

Here is an example of how the text cleaning functions are used:

```javascript
const { cleanText } = require('./index');

const example = "GarcÃ­a MÃ¡rquez, Gabriel";
console.log(cleanText(example)); // Output: "García Márquez, Gabriel"
```

### Expanding the Utility

To expand the utility, you can add more replacement rules to the respective replacements-*.js files. Ensure there are no duplicates in the replacement arrays.

#### Adding a New Replacement Rule

1. Open the appropriate replacements-*.js file.
2. Add the new replacement rule to the array, ensuring it follows the format:

```javascript
// replacements-latin.js
module.exports = [
  // existing replacements
  ['Ã¤', 'ä'],  // new replacement
];
```
3. Import the updated replacement file in index.js:

```javascript
const replacementsLatin = require('./replacements-latin');
// ... other imports

const replacements = [
  ...replacementsLatin,
  // ... other replacements
];
```

Certainly! Here's the expanded test.js file with more examples, followed by a detailed README.md file.
Expanded test.js

javascript

const { cleanText, fixEncoding, removeDiacritics, removeInvalidCharacters, removeInvalidEncoding } = require('./index');

const example1 = "Leï¿½Ons De Clinique Mï¿½Dicale, Faites Ï¿½ L'hï¿½Pital De La Charitï¿½";
const example2 = "Salluste, Jules Cï¿½Sar, C. Vellï¿½Ius Paterculus Et A. Florus (Ï¿½D.1865)";
const example3 = "pä±Narbasä± (Sitio Arqueologico)";
const example4 = "Egyéb példa ékezetes szavakkal";
const example5 = "KÃ¤stner, Erich";
const example6 = "GarcÃ­a MÃ¡rquez, Gabriel";
const example7 = "FranÃ§ois Hollande";
const example8 = "Björk Guðmundsdóttir";
const example9 = "São Paulo";
const example10 = "René Descartes";
const example11 = "Göteborg";
const example12 = "Curaçao";
const example13 = "Håkan Nesser";
const example14 = "České Budějovice";
const example15 = "Øystein Sunde";
const example16 = "Jürgen Klopp";
const example17 = "Ångström";
const example18 = "Grønland";
const example19 = "München";
const example20 = "Löwe";
const example21 = "Île-de-France";
const example22 = "Fañch";
const example23 = "Łódź";
const example24 = "Dvořák";
const example25 = "Smørrebrød";
const example26 = "Ærø";
const example27 = "Tōkyō";
const example28 = "Beijing 北京";
const example29 = "Москва";
const example30 = "Αθήνα";

console.log(cleanText(example1));
console.log(cleanText(example2));
console.log(cleanText(example3));
console.log(cleanText(example4));
console.log(cleanText(example5));
console.log(cleanText(example6));
console.log(cleanText(example7));
console.log(cleanText(example8));
console.log(cleanText(example9));
console.log(cleanText(example10));
console.log(cleanText(example11));
console.log(cleanText(example12));
console.log(cleanText(example13));
console.log(cleanText(example14));
console.log(cleanText(example15));
console.log(cleanText(example16));
console.log(cleanText(example17));
console.log(cleanText(example18));
console.log(cleanText(example19));
console.log(cleanText(example20));
console.log(cleanText(example21));
console.log(cleanText(example22));
console.log(cleanText(example23));
console.log(cleanText(example24));
console.log(cleanText(example25));
console.log(cleanText(example26));
console.log(cleanText(example27));
console.log(cleanText(example28));
console.log(cleanText(example29));
console.log(cleanText(example30));

Detailed README.md

markdown

# Text Cleaning Utility

This utility is designed to clean and fix text strings by removing invalid characters, correcting encoding issues, and standardizing text. It is particularly useful for processing data that may contain various special characters, diacritics, and encoding errors, which are common in datasets from diverse sources.

## Features

- **Fix Encoding**: Corrects common encoding errors.
- **Remove Diacritics**: Strips diacritical marks from characters.
- **Remove Invalid Characters**: Cleans up invalid or special characters.
- **Standardize Text**: Ensures text is standardized for further processing.

## How It Works

The utility processes text through several steps:
1. **Remove Invalid Encoding**: Identifies and removes invalid encoding characters.
2. **Fix Encoding**: Replaces incorrectly encoded characters with the correct ones.
3. **Remove Diacritics**: Removes diacritical marks from characters.
4. **Remove Invalid Characters**: Strips out any remaining special or invalid characters.
5. **Clean Text**: Combines all the above steps to provide a clean, standardized text string.

## File Structure

- **index.js**: Main module containing the text cleaning functions.
- **replacements-*.js**: Separate files for different character sets and their replacements.
- **test.js**: Script for testing the text cleaning functions with various examples.

## Usage

### Installation

```bash
npm install text-cleaning-utility
```

### Importing the Module

```javascript
const { cleanText, fixEncoding, removeDiacritics, removeInvalidCharacters, removeInvalidEncoding } = require('text-cleaning-utility');
```

### Cleaning Text

```javascript
const text = "Salluste, Jules Cï¿½Sar, C. Vellï¿½Ius Paterculus Et A. Florus (Ï¿½D.1865)";
const cleanedText = cleanText(text);
console.log(cleanedText);
```

### Testing

To test the text cleaning utility, use the test.js script which contains multiple examples:

```bash
node test.js
```

### Example

Here is an example of how the text cleaning functions are used:

```javascript
const { cleanText } = require('./index');

const example = "GarcÃ­a MÃ¡rquez, Gabriel";
console.log(cleanText(example)); // Output: "García Márquez, Gabriel"
```

### Expanding the Utility

To expand the utility, you can add more replacement rules to the respective replacements-*.js files. Ensure there are no duplicates in the replacement arrays.
Adding a New Replacement Rule

Open the appropriate replacements-*.js file.
Add the new replacement rule to the array, ensuring it follows the format:

```javascript
// replacements-latin.js
module.exports = [
  // existing replacements
  ['Ã¤', 'ä'],  // new replacement
];
```
Import the updated replacement file in index.js:

```javascript
const replacementsLatin = require('./replacements-latin');
// ... other imports

const replacements = [
  ...replacementsLatin,
  // ... other replacements
];
```

### Publishing to npm

To publish the package to npm, follow these steps:

#### Login to npm:

```bash
npm login
```

#### Update the version in package.json according to semantic versioning:

```json
{
  "version": "1.0.1"
}
```

#### Publish the package:

```bash
npm publish
```

### License

This project is licensed under the MIT License.
This `README.md` file provides a comprehensive overview of the utility, including its features, how it works, usage instructions, file structure, and steps for expanding and publishing the package.



