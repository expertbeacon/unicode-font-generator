import { FontKey } from "./transforms";

export const styleKeys = [
  "all",
  "cool",
  "fancy",
  "small-text",
  "bold-text",
  "italic",
  "bold-italic",
  "sans-serif",
  "serif",
  "underline",
  "bubble-text",
  "square-text",
  "cursive-font",
  "alternating",
  "exotic",
  "mathematical",
  "decorative",
  "vintage",
  "modern",
  "artistic",
  "rounded",
  "sharp",
  "handwritten",
  "gaming",
  "retro",
  "elegant",
  "playful"
] as const;
export type StyleKey = typeof styleKeys[number];

export const topicKeys = [
  "facebook",
  "twitter",
  "whatsapp",
  "handwriting"
] as const;

export type TopicKey = typeof topicKeys[number];

export const styleFonts: Record<StyleKey, FontKey[]> = {
  "all": [], // keep it empty 
  "cursive-font": ["script", "boldScript", "subscript"],
  "fancy": [
    "script", "boldScript", "fraktur", "boldFraktur",
    "doubleStruck", "smallCaps", "serifBoldItalic", "sansBoldItalic",
    "bubble", "blackBubble", "vaiLetterlike", "bamumLetterlike",
    "alternatingBoldScript", "alternatingFraktur"
  ],
  "cool": [
    "fullwidth", "squared", "squaredNegative",
    "vaiLetterlike", "bamumLetterlike", "smallCherokeeLetterlike",
    "canadianAboriginalLetterlike1", "canadianAboriginalLetterlike2",
    "inverted", "mirrored", "rotatedLeft", "rotatedRight",
    "bubble", "blackBubble", "parenthesized",
    "monospace", "doubleStruck", "fraktur", "boldFraktur"
  ],
  "small-text": [
    "smallCaps", "superscript", "subscript", "sansItalic", "serifItalic"
  ],
  "bold-text": [
    "sansBold", "serifBold", "boldScript", "boldFraktur",
    "serifBoldItalic", "sansBoldItalic",
    "alternatingSansBold", "alternatingSansBoldItalic",
    "alternatingSerifBold", "alternatingSerifBoldItalic",
    "alternatingBold", "alternatingBoldFraktur", "alternatingBoldScript",
    "monospace", "squared", "squaredNegative"
  ],
  "italic": [
    "sansItalic", "serifItalic", "serifBoldItalic", "sansBoldItalic",
    "alternatingSansBoldItalic", "alternatingSerifBoldItalic",
    "alternatingItalicBold", "script", "subscript"
  ],
  "bold-italic": [
    "sansBoldItalic", "serifBoldItalic",
    "sansItalic", "serifItalic",
    "sansBold", "serifBold", "boldScript", "boldFraktur",
    "alternatingSansBoldItalic", "alternatingSerifBoldItalic"
  ],
  "underline": [
    "smallCaps",
    "boldScript",
    "superscript",
    "squaredNegative",
    "doubleStruck",
    "serifBoldItalic",
    "serifBold",
    "serifItalic",
    "sansSerif",
    "sansItalic",
    "sansBoldItalic",
    "sansBold",
    "monospace",
    "inverted",
    "mirrored",
    "boldFraktur",
    "subscript"
  ],
  "bubble-text": [
    "bubble", "blackBubble", "alternatingBubble"
  ],
  "square-text": [
    "squared", "squaredNegative", "alternatingSquared"
  ],
  "alternating": [
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBubble",
    "alternatingSquared",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic",
    "alternatingItalicBold",
    "alternatingCursiveScriptBold",
    "alternatingFraktur",
    "alternatingBold"
  ],
  "sans-serif": [
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic"
  ],
  "serif": [
    "serifBold",
    "serifItalic",
    "serifBoldItalic"
  ],
  "exotic": [
    "vaiLetterlike", "bamumLetterlike", "smallCherokeeLetterlike",
    "canadianAboriginalLetterlike1", "canadianAboriginalLetterlike2",
    "fullwidth", "monospace", "inverted", "mirrored", "rotatedLeft", "rotatedRight"
  ],
  "mathematical": [
    "doubleStruck", "script", "boldScript", "fraktur", "boldFraktur",
    "superscript", "subscript", "sansSerif", "sansBold", "monospace"
  ],
  "decorative": [
    "bubble", "blackBubble", "parenthesized", "squared", "squaredNegative",
    "script", "boldScript", "fullwidth", "vaiLetterlike", "bamumLetterlike"
  ],
  "vintage": [
    "fraktur", "boldFraktur", "script", "boldScript", "serifBold",
    "serifItalic", "doubleStruck", "smallCaps", "alternatingFraktur",
    "alternatingBoldScript", "alternatingBoldFraktur"
  ],
  "modern": [
    "sansSerif", "sansBold", "sansItalic", "sansBoldItalic",
    "monospace", "doubleStruck", "alternatingSansBold", "alternatingSansBoldItalic",
    "alternatingBold", "squared", "squaredNegative", "fullwidth"
  ],
  "artistic": [
    "script", "boldScript", "fraktur", "boldFraktur", "doubleStruck",
    "bubble", "blackBubble", "vaiLetterlike", "bamumLetterlike",
    "alternatingBoldScript", "alternatingFraktur"
  ],
  "rounded": [
    "bubble", "blackBubble", "alternatingBubble", "parenthesized",
    "fullwidth", "script", "boldScript"
  ],
  "sharp": [
    "squared", "squaredNegative", "alternatingSquared", "monospace",
    "sansBold", "serifBold", "boldFraktur", "fullwidth"
  ],
  "handwritten": [
    "script", "boldScript", "serifItalic", "sansItalic",
    "subscript", "alternatingCursiveScriptBold", "alternatingBoldScript"
  ],
  "gaming": [
    "squared", "squaredNegative", "alternatingSquared", "monospace",
    "boldFraktur", "fullwidth", "sansBold", "doubleStruck",
    "blackBubble", "inverted"
  ],
  "retro": [
    "monospace", "squared", "fullwidth", "doubleStruck",
    "smallCaps", "squaredNegative", "parenthesized"
  ],
  "elegant": [
    "script", "boldScript", "serifItalic", "serifBoldItalic",
    "smallCaps", "fraktur", "doubleStruck", "alternatingSerifBoldItalic"
  ],
  "playful": [
    "bubble", "blackBubble", "alternatingBubble", "parenthesized",
    "rotatedLeft", "rotatedRight", "inverted", "mirrored",
    "smallCherokeeLetterlike", "canadianAboriginalLetterlike2"
  ]
};

export const topicFonts: Record<TopicKey, FontKey[]> = {
  handwriting: [
    "script", "boldScript", "subscript"
  ],
  facebook: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic",
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic"
  ],
  twitter: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic",
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic"
  ],
  whatsapp: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic",
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic"
  ]
} 