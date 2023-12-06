/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

export const englishLoose = {

  id: 'english-loose',
  name: 'English (loose)',

  rules: {

    // Linking char (as in pa-o or pe-u)
    'endLinkChar': "'",

    // Vowels
    'aKikuI': 'é',              // པའི

    // Regular consonants
    'kha': 'k',                 // ཁ
    'ga': 'k',                  // ག
    'cha': 'ch',                // ཆ
    'th': 't',                  // བ
    'ba': 'p',                  // བ
    'tsha': 'ts',               // ཚ
    'ja': 'ch',                 // ཇ
    'pha': 'p',                 // ཕ
    'zha': 'sh',                // ཞ

    // Ratas
    'rata2': 'tr',              // ཁྲ  // 2nd column with rata

    // Yatas
    'gaYata': 'ky',             // གྱ
    'phaYata': 'ch',            // ཕྱ
    'baYata': 'ch',             // བྱ

  },

  exceptions: {

  }

}