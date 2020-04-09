export const schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "audio_channel": {
      "title": "Channel",
      "type": "number",
      "default": 1
    },
    "format": {
      "title": "Subtitle format",
      "enum": ["SRT", "TTML", "RAW"],
      "default": "SRT"
    },
    "media_entry": {
      "title": "Media Entry",
      "type": "string",
      "format": "MediaEntry"
    }
  },
  "anyOf": [{
      "properties": {
        "type": {
          "enum": ["EML"]
        },
        "language": {
          "oneOf": [{
            "enum": ["ENGLISH_UNITED_STATES"],
            "title": "English (United States)"
          }, {
            "enum": ["FRENCH"],
            "title": "French (France)"
          }, {
            "enum": ["GERMAN"],
            "title": "German"
          }, {
            "enum": ["ITALIAN"],
            "title": "Italian"
          }]
        }
      }
    },
    {
      "properties": {
        "type": {
          "enum": ["SPEECHMATICS"]
        },
        "language": {
          "oneOf": [{
            "enum": ["ARABIC"],
            "title": "Arabic (Modern Standard)"
          }, {
            "enum": ["BULGARIAN"],
            "title": "Bulgarian"
          }, {
            "enum": ["CATALAN"],
            "title": "Catalan (Spain)"
          }, {
            "enum": ["CHINESE_MANDARIN"],
            "title": "Chinese, Mandarin"
          }, {
            "enum": ["CZECH"],
            "title": "Czech Republic"
          }, {
            "enum": ["DANISH"],
            "title": "Danish"
          }, {
            "enum": ["GERMAN"],
            "title": "German"
          }, {
            "enum": ["DUTCH"],
            "title": "Dutch"
          }, {
            "enum": ["GREEK"],
            "title": "Greek"
          }, {
            "enum": ["ENGLISH_GLOBAL"],
            "title": "English (Global)"
          }, {
            "enum": ["SPANISH"],
            "title": "Spanish (Spain)"
          }, {
            "enum": ["FINNISH"],
            "title": "Finnish (Finland)"
          }, {
            "enum": ["FRENCH"],
            "title": "French (France)"
          }, {
            "enum": ["HINDI"],
            "title": "Hindi"
          }, {
            "enum": ["CROATIAN"],
            "title": "Croatian"
          }, {
            "enum": ["HUNGARIAN"],
            "title": "Hungarian"
          }, {
            "enum": ["ITALIAN"],
            "title": "Italian"
          }, {
            "enum": ["JAPANESE"],
            "title": "Japanese"
          }, {
            "enum": ["KOREAN"],
            "title": "Korean (South Korea)"
          }, {
            "enum": ["LATVIAN"],
            "title": "Latvian"
          }, {
            "enum": ["LITHUANIAN"],
            "title": "Lithuanian"
          }, {
            "enum": ["NORWEGIAN"],
            "title": "Norwegian"
          }, {
            "enum": ["POLISH"],
            "title": "Polish"
          }, {
            "enum": ["PORTUGUESE"],
            "title": "Portuguese (Portugal)"
          }, {
            "enum": ["ROMANIAN"],
            "title": "Romanian"
          }, {
            "enum": ["RUSSIAN"],
            "title": "Russian"
          }, {
            "enum": ["SLOVAK"],
            "title": "Slovak"
          }, {
            "enum": ["SLOVENIAN"],
            "title": "Slovenian"
          }, {
            "enum": ["SWEDISH"],
            "title": "Swedish"
          }]
        }
      }
    },
    {
      "properties": {
        "type": {
          "enum": ["VERITONE"]
        },
        "language": {
          "oneOf": [{
            "enum": ["ARABIC_SAUDI_ARABIA"],
            "title": "Arabic (Saudi Arabia)"
          }, {
            "enum": ["ARABIC"],
            "title": "Arabic (Modern Standard)"
          }, {
            "enum": ["CATALAN"],
            "title": "Catalan (Spain)"
          }, {
            "enum": ["CHINESE_CANTONESE"],
            "title": "Chinese, Cantonese"
          }, {
            "enum": ["CHINESE_MANDARIN"],
            "title": "Chinese, Mandarin"
          }, {
            "enum": ["CHINESE_MANDARIN_TAIWAN"],
            "title": "Chinese, Mandarin (Taiwan)"
          }, {
            "enum": ["CROATIAN"],
            "title": "Croatian"
          }, {
            "enum": ["CZECH"],
            "title": "Czech Republic"
          }, {
            "enum": ["DUTCH"],
            "title": "Dutch"
          }, {
            "enum": ["GERMAN"],
            "title": "German"
          }, {
            "enum": ["ENGLISH_AUSTRALIA"],
            "title": "English (Australia)"
          }, {
            "enum": ["ENGLISH_CANADA"],
            "title": "English (Canada)"
          }, {
            "enum": ["ENGLISH_INDIA"],
            "title": "English (India)"
          }, {
            "enum": ["ENGLISH_SOUTH_AFRICA"],
            "title": "English (South Africa)"
          }, {
            "enum": ["ENGLISH_UNITED_KINGDOM"],
            "title": "English (United Kingdom)"
          }, {
            "enum": ["ENGLISH_UNITED_STATES"],
            "title": "English (United States)"
          }, {
            "enum": ["SPANISH_ARGENTINA"],
            "title": "Spanish (Argentina)"
          }, {
            "enum": ["SPANISH_CHILE"],
            "title": "Spanish (Chile)"
          }, {
            "enum": ["SPANISH_COLOMBIA"],
            "title": "Spanish (Colombia)"
          }, {
            "enum": ["SPANISH_GUATEMALA"],
            "title": "Spanish (Guatemala)"
          }, {
            "enum": ["SPANISH_MEXICO"],
            "title": "Spanish (Mexico)"
          }, {
            "enum": ["SPANISH_UNITED_STATES"],
            "title": "Spanish (United States)"
          }, {
            "enum": ["SPANISH"],
            "title": "Spanish (Spain)"
          }, {
            "enum": ["FRENCH_CANADA"],
            "title": "French (Canada)"
          }, {
            "enum": ["FRENCH"],
            "title": "French (France)"
          }, {
            "enum": ["GREEK"],
            "title": "Greek"
          }, {
            "enum": ["HEBREW"],
            "title": "Hebrew"
          }, {
            "enum": ["HINDI"],
            "title": "Hindi"
          }, {
            "enum": ["ITALIAN"],
            "title": "Italian"
          }, {
            "enum": ["JAPANESE"],
            "title": "Japanese"
          }, {
            "enum": ["KOREAN"],
            "title": "Korean (South Korea)"
          }, {
            "enum": ["MALAY"],
            "title": "Malay"
          }, {
            "enum": ["NORWEGIAN"],
            "title": "Norwegian"
          }, {
            "enum": ["POLISH"],
            "title": "Polish"
          }, {
            "enum": ["PORTUGUESE_BRAZILIAN"],
            "title": "Portuguese (Brazil)"
          }, {
            "enum": ["PORTUGUESE"],
            "title": "Portuguese (Portugal)"
          }, {
            "enum": ["ROMANIAN"],
            "title": "Romanian"
          }, {
            "enum": ["RUSSIAN"],
            "title": "Russian"
          }, {
            "enum": ["SWEDISH"],
            "title": "Swedish"
          }, {
            "enum": ["THAI"],
            "title": "Thai"
          }, {
            "enum": ["TURKISH"],
            "title": "Turkish"
          }]
        }
      }
    },
    {
      "properties": {
        "type": {
          "enum": ["VOCAPIA"]
        },
        "language": {
          "oneOf": [{
            "enum": ["FRENCH"],
            "title": "French (France)"
          }]
        }
      }
    },
    {
      "properties": {
        "type": {
          "enum": ["WATSON"]
        },
        "language": {
          "oneOf": [{
            "enum": ["ARABIC"],
            "title": "Arabic (Modern Standard)"
          }, {
            "enum": ["CATALAN"],
            "title": "Catalan (Spain)"
          }, {
            "enum": ["CHINESE_MANDARIN"],
            "title": "Chinese, Mandarin"
          }, {
            "enum": ["GERMAN"],
            "title": "German"
          }, {
            "enum": ["ENGLISH_UNITED_KINGDOM"],
            "title": "English (United Kingdom)"
          }, {
            "enum": ["ENGLISH_UNITED_STATES"],
            "title": "English (United States)"
          }, {
            "enum": ["SPANISH_ARGENTINA"],
            "title": "Spanish (Argentina)"
          }, {
            "enum": ["SPANISH_CHILE"],
            "title": "Spanish (Chile)"
          }, {
            "enum": ["SPANISH_COLOMBIA"],
            "title": "Spanish (Colombia)"
          }, {
            "enum": ["SPANISH_MEXICO"],
            "title": "Spanish (Mexico)"
          }, {
            "enum": ["SPANISH_PERU"],
            "title": "Spanish (Peru)"
          }, {
            "enum": ["SPANISH"],
            "title": "Spanish (Spain)"
          }, {
            "enum": ["FRENCH"],
            "title": "French (France)"
          }, {
            "enum": ["JAPANESE"],
            "title": "Japanese"
          }, {
            "enum": ["KOREAN"],
            "title": "Korean (South Korea)"
          }, {
            "enum": ["PORTUGUESE_BRAZILIAN"],
            "title": "Portuguese (Brazil)"
          }]
        }
      }
    },
    {
      "properties": {
        "type": {
          "oneOf": [{
            "enum": ["CHOOSE"],
            "title": "Choose automatically"
          }]
        },
        "language": {
          "oneOf": [{
            "enum": ["ARABIC_SAUDI_ARABIA"],
            "title": "Arabic (Saudi Arabia)"
          }, {
            "enum": ["ARABIC"],
            "title": "Arabic (Modern Standard)"
          }, {
            "enum": ["BULGARIAN"],
            "title": "Bulgarian"
          }, {
            "enum": ["CATALAN"],
            "title": "Catalan (Spain)"
          }, {
            "enum": ["CHINESE_CANTONESE"],
            "title": "Chinese, Cantonese"
          }, {
            "enum": ["CHINESE_MANDARIN"],
            "title": "Chinese, Mandarin"
          }, {
            "enum": ["CHINESE_MANDARIN_TAIWAN"],
            "title": "Chinese, Mandarin (Taiwan)"
          }, {
            "enum": ["CROATIAN"],
            "title": "Croatian"
          }, {
            "enum": ["CZECH"],
            "title": "Czech Republic"
          }, {
            "enum": ["DANISH"],
            "title": "Danish"
          }, {
            "enum": ["GERMAN"],
            "title": "German"
          }, {
            "enum": ["DUTCH"],
            "title": "Dutch"
          }, {
            "enum": ["ENGLISH_AUSTRALIA"],
            "title": "English (Australia)"
          }, {
            "enum": ["ENGLISH_CANADA"],
            "title": "English (Canada)"
          }, {
            "enum": ["ENGLISH_GLOBAL"],
            "title": "English (Global)"
          }, {
            "enum": ["ENGLISH_INDIA"],
            "title": "English (India)"
          }, {
            "enum": ["ENGLISH_UNITED_KINGDOM"],
            "title": "English (United Kingdom)"
          }, {
            "enum": ["ENGLISH_UNITED_STATES"],
            "title": "English (United States)"
          }, {
            "enum": ["ENGLISH_SOUTH_AFRICA"],
            "title": "English (South Africa)"
          }, {
            "enum": ["SPANISH_ARGENTINA"],
            "title": "Spanish (Argentina)"
          }, {
            "enum": ["SPANISH_CHILE"],
            "title": "Spanish (Chile)"
          }, {
            "enum": ["SPANISH_COLOMBIA"],
            "title": "Spanish (Colombia)"
          }, {
            "enum": ["SPANISH_GUATEMALA"],
            "title": "Spanish (Guatemala)"
          }, {
            "enum": ["SPANISH_MEXICO"],
            "title": "Spanish (Mexico)"
          }, {
            "enum": ["SPANISH_PERU"],
            "title": "Spanish (Peru)"
          }, {
            "enum": ["SPANISH_UNITED_STATES"],
            "title": "Spanish (United States)"
          }, {
            "enum": ["SPANISH"],
            "title": "Spanish (Spain)"
          }, {
            "enum": ["FINNISH"],
            "title": "Finnish (Finland)"
          }, {
            "enum": ["FRENCH_CANADA"],
            "title": "French (Canada)"
          }, {
            "enum": ["FRENCH"],
            "title": "French (France)"
          }, {
            "enum": ["GREEK"],
            "title": "Greek"
          }, {
            "enum": ["HEBREW"],
            "title": "Hebrew"
          }, {
            "enum": ["HINDI"],
            "title": "Hindi"
          }, {
            "enum": ["HUNGARIAN"],
            "title": "Hungarian"
          }, {
            "enum": ["ITALIAN"],
            "title": "Italian"
          }, {
            "enum": ["JAPANESE"],
            "title": "Japanese"
          }, {
            "enum": ["KOREAN"],
            "title": "Korean (South Korea)"
          }, {
            "enum": ["LATVIAN"],
            "title": "Latvian"
          }, {
            "enum": ["LITHUANIAN"],
            "title": "Lithuanian"
          }, {
            "enum": ["MALAY"],
            "title": "Malay"
          }, {
            "enum": ["NORWEGIAN"],
            "title": "Norwegian"
          }, {
            "enum": ["POLISH"],
            "title": "Polish"
          }, {
            "enum": ["PORTUGUESE_BRAZILIAN"],
            "title": "Portuguese (Brazil)"
          }, {
            "enum": ["PORTUGUESE"],
            "title": "Portuguese (Portugal)"
          }, {
            "enum": ["ROMANIAN"],
            "title": "Romanian"
          }, {
            "enum": ["RUSSIAN"],
            "title": "Russian"
          }, {
            "enum": ["SLOVAK"],
            "title": "Slovak"
          }, {
            "enum": ["SLOVENIAN"],
            "title": "Slovenian"
          }, {
            "enum": ["SWEDISH"],
            "title": "Swedish"
          }, {
            "enum": ["THAI"],
            "title": "Thai"
          }, {
            "enum": ["TURKISH"],
            "title": "Turkish"
          }]
        }
      }
    }
  ],
  "additionalProperties": false,
  "required": ["media_entry", "language"]
}