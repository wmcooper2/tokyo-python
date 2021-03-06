// Basic structure;
// dec: String, hex: String, name: String, char: String
const asciiData = [
  { char: "\x00", name: "Null", hex: "00", dec: 0 },
  { char: "\x01", name: "Start of heading", hex: "01", dec: 1 },
  { char: "\x02", name: "Start of text", hex: "02", dec: 2 },
  { char: "\x03", name: "End of text", hex: "03", dec: 3 },
  { char: "\x04", name: "End of transmit", hex: "04", dec: 4 },
  { char: "\x05", name: "Enquiry", hex: "05", dec: 5 },
  { char: "\x06", name: "Acknowledge", hex: "06", dec: 6 },
  { char: "\x07", name: "Audible bell", hex: "07", dec: 7 },
  { char: "\x08", name: "Backspace", hex: "08", dec: 8 },
  { char: "\t", name: "Horizontal tab", hex: "09", dec: 9 },
  { char: "\n", name: "Line feed", hex: "0A", dec: 10 },
  { char: "\x0b", name: "Vertical tab", hex: "0B", dec: 11 },
  { char: "\x0c", name: "Form feed", hex: "0C", dec: 12 },
  { char: "\r", name: "Carriage return", hex: "0D", dec: 13 },
  { char: "\x0e", name: "Shift out", hex: "0E", dec: 14 },
  { char: "\x0f", name: "Shift in", hex: "0F", dec: 15 },
  { char: "\x10", name: "Data link escape", hex: "10", dec: 16 },
  { char: "\x11", name: "Device control 1", hex: "11", dec: 17 },
  { char: "\x12", name: "Device control 2", hex: "12", dec: 18 },
  { char: "\x13", name: "Device control 3", hex: "13", dec: 19 },
  { char: "\x14", name: "Device control 4", hex: "14", dec: 20 },
  { char: "\x15", name: "Neg. acknowledge", hex: "15", dec: 21 },
  { char: "\x16", name: "Synchronous idle", hex: "16", dec: 22 },
  { char: "\x17", name: "End trans. block", hex: "17", dec: 23 },
  { char: "\x18", name: "Cancel", hex: "18", dec: 24 },
  { char: "\x19", name: "End of medium", hex: "19", dec: 25 },
  { char: "\x1a", name: "Substitution", hex: "1A", dec: 26 },
  { char: "\x1b", name: "Escape", hex: "1B", dec: 26 },
  { char: "\x1c", name: "File separator", hex: "1C", dec: 28 },
  { char: "\x1d", name: "Group separator", hex: "1D", dec: 29 },
  { char: "\x1e", name: "Record separator", hex: "1E", dec: 30 },
  { char: "\x1f", name: "Unit separator", hex: "1F", dec: 31 },
  { char: " ", name: "Space", hex: "20", dec: 32 },
  { char: "!", name: "Exclamation", hex: "21", dec: 33 },
  { char: '"', name: "Double quote", hex: "22", dec: 34 },
  { char: "#", name: "Hash", hex: "23", dec: 35 },
  { char: "$", name: "Dollar", hex: "24", dec: 36 },
  { char: "%", name: "Percent", hex: "25", dec: 37 },
  { char: "&", name: "Ampersand", hex: "26", dec: 38 },
  { char: "'", name: "Single quote", hex: "27", dec: 39 },
  { char: "(", name: "Left Parenthesis", hex: "28", dec: 40 },
  { char: ")", name: "Right Parenthesis", hex: "29", dec: 41 },
  { char: "*", name: "Asterisk", hex: "2A", dec: 42 },
  { char: "+", name: "Plus", hex: "2B", dec: 43 },
  { char: ",", name: "Comma", hex: "2C", dec: 44 },
  { char: "-", name: "Hyphen", hex: "2D", dec: 45 },
  { char: ".", name: "Period", hex: "2E", dec: 46 },
  { char: "/", name: "Forward slash", hex: "2F", dec: 47 },
  { char: "0", name: "Zero", hex: "30", dec: 48 },
  { char: "1", name: "One", hex: "31", dec: 49 },
  { char: "2", name: "Two", hex: "32", dec: 50 },
  { char: "3", name: "Three", hex: "33", dec: 51 },
  { char: "4", name: "Four", hex: "34", dec: 52 },
  { char: "5", name: "Five", hex: "35", dec: 53 },
  { char: "6", name: "Six", hex: "36", dec: 54 },
  { char: "7", name: "Seven", hex: "37", dec: 55 },
  { char: "8", name: "Eight", hex: "38", dec: 56 },
  { char: "9", name: "Nine", hex: "39", dec: 57 },
  { char: ":", name: "Colon", hex: "3A", dec: 58 },
  { char: ";", name: "Semicolon", hex: "3B", dec: 59 },
  { char: "<", name: "Less than", hex: "3C", dec: 60 },
  { char: "=", name: "Equal", hex: "3D", dec: 61 },
  { char: ">", name: "Greater than", hex: "3E", dec: 62 },
  { char: "?", name: "Question", hex: "3F", dec: 63 },
  { char: "@", name: "At symbol", hex: "40", dec: 64 },
  { char: "A", name: "A", hex: "41", dec: 65 },
  { char: "B", name: "B", hex: "42", dec: 66 },
  { char: "C", name: "C", hex: "43", dec: 67 },
  { char: "D", name: "D", hex: "44", dec: 68 },
  { char: "E", name: "E", hex: "45", dec: 69 },
  { char: "F", name: "F", hex: "46", dec: 70 },
  { char: "G", name: "G", hex: "47", dec: 71 },
  { char: "H", name: "H", hex: "48", dec: 72 },
  { char: "I", name: "I", hex: "49", dec: 73 },
  { char: "J", name: "J", hex: "4A", dec: 74 },
  { char: "K", name: "K", hex: "4B", dec: 75 },
  { char: "L", name: "L", hex: "4C", dec: 76 },
  { char: "M", name: "M", hex: "4D", dec: 77 },
  { char: "N", name: "N", hex: "4E", dec: 78 },
  { char: "O", name: "O", hex: "4F", dec: 79 },
  { char: "P", name: "P", hex: "50", dec: 80 },
  { char: "Q", name: "Q", hex: "51", dec: 81 },
  { char: "R", name: "R", hex: "52", dec: 82 },
  { char: "S", name: "S", hex: "53", dec: 83 },
  { char: "T", name: "T", hex: "54", dec: 84 },
  { char: "U", name: "U", hex: "55", dec: 85 },
  { char: "V", name: "V", hex: "56", dec: 86 },
  { char: "W", name: "W", hex: "57", dec: 87 },
  { char: "X", name: "X", hex: "58", dec: 88 },
  { char: "Y", name: "Y", hex: "59", dec: 89 },
  { char: "Z", name: "Z", hex: "5A", dec: 90 },
  { char: "[", name: "Left bracket", hex: "5B", dec: 91 },
  { char: "\\", name: "Backslash", hex: "5C", dec: 92 },
  { char: "]", name: "Right bracket", hex: "5D", dec: 93 },
  { char: "^", name: "Caret", hex: "5E", dec: 94 },
  { char: "_", name: "Underscore", hex: "5F", dec: 95 },
  { char: "`", name: "Backtick", hex: "60", dec: 96 },
  { char: "a", name: "a", hex: "61", dec: 97 },
  { char: "b", name: "b", hex: "62", dec: 98 },
  { char: "c", name: "c", hex: "63", dec: 99 },
  { char: "d", name: "d", hex: "64", dec: 100 },
  { char: "e", name: "e", hex: "65", dec: 101 },
  { char: "f", name: "f", hex: "66", dec: 102 },
  { char: "g", name: "g", hex: "67", dec: 103 },
  { char: "h", name: "h", hex: "68", dec: 104 },
  { char: "i", name: "i", hex: "69", dec: 105 },
  { char: "j", name: "j", hex: "6A", dec: 106 },
  { char: "k", name: "k", hex: "6B", dec: 107 },
  { char: "l", name: "l", hex: "6C", dec: 108 },
  { char: "m", name: "m", hex: "6D", dec: 109 },
  { char: "n", name: "n", hex: "6E", dec: 110 },
  { char: "o", name: "o", hex: "6F", dec: 111 },
  { char: "p", name: "p", hex: "70", dec: 112 },
  { char: "q", name: "q", hex: "71", dec: 113 },
  { char: "r", name: "r", hex: "72", dec: 114 },
  { char: "s", name: "s", hex: "73", dec: 115 },
  { char: "t", name: "t", hex: "74", dec: 116 },
  { char: "u", name: "u", hex: "75", dec: 117 },
  { char: "v", name: "v", hex: "76", dec: 118 },
  { char: "w", name: "w", hex: "77", dec: 119 },
  { char: "x", name: "x", hex: "78", dec: 120 },
  { char: "y", name: "y", hex: "79", dec: 121 },
  { char: "z", name: "z", hex: "7A", dec: 122 },
  { char: "{", name: "Left brace", hex: "7B", dec: 123 },
  { char: "|", name: "Separator bar", hex: "7C", dec: 124 },
  { char: "}", name: "Right brace", hex: "7D", dec: 125 },
  { char: "~", name: "Tilde", hex: "7E", dec: 126 },
  { char: "", name: "???", hex: "7F", dec: 127 }
];

//Basic Structure:
// seq: String, id: Integer, description: String, chars: Array[Integer]
const specialSequences = [
  {
    seq: "\\s",
    id: 1,
    description: "Any whitespace character",
    chars: [9, 10, 11, 12, 13, 32]
  },

  {
    seq: "\\d",
    id: 2,
    description: "Any digit [0-9]",
    chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
  },

  {
    seq: "\\w",
    id: 3,
    description: "Any word character [A-Za-z0-9_]",
    chars: [
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      95,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122
    ]
  },

  {
    seq: "\\b",
    id: 4,
    description: "Word BOUNDARY",
    chars: []
  },

  {
    seq: "\\S",
    id: 5,
    description: "Any non-whitespace character",
    chars: [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126
    ]
  },

  {
    seq: "\\D",
    id: 6,
    description: "Any non-digit character [^0-9]",
    chars: [
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127
    ]
  },

  {
    seq: "\\W",
    id: 7,
    description: "Any non-word character [^A-Za-z0-9_]",
    chars: [
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      91,
      92,
      93,
      94,
      96,
      123,
      124,
      125,
      126,
      127
    ]
  },

  {
    seq: "\\B",
    id: 8,
    description: "Non-word BOUNDARY",
    chars: []
  },

  {
    seq: "\\number",
    id: 9,
    description: "A 'captured-group' number (index starts at 1)",
    chars: []
  },

  {
    seq: "\\0",
    id: 10,
    description: "How do you match a null character?",
    chars: [0]
  },

  { seq: "\\X", id: 11, description: "Does this belong here?", chars: [] },

  {
    seq: "[\\b]",
    id: 12,
    description: "A backspace",
    chars: []
  },

  {
    seq: "\\A",
    id: 13,
    description: "The BOUNDARY that is the START of a string (^)",
    chars: [2]
  },

  {
    seq: "\\Z",
    id: 14,
    description: "The BOUNDARY that is the END of a string ($)",
    chars: [3]
  }
];

export { asciiData, specialSequences };
