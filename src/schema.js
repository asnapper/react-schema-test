export const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "audio_channel": {
      "title": "Channel",
      "type": "integer",
      "default": 1
    },
    "format": {
      "title": "Subtitle format",
      "type": "string",
      "enum": ["SRT", "TTML", "RAW"],
      "default": "SRT"
    },
    "media_entry": {
      "title": "Media Entry",
      "type": "string",
      "format": "MediaEntry"
    }
  },
  "anyOf": [
    {
      "title": "EML",
      "properties": {
        "service": {
          "type": "string",
          "default": "EML",
          "readOnly": true,
          "format": "hidden"
        },
        "language": {
          "type": "string",
          "oneOf": [{
            "const": "ENGLISH_UNITED_STATES",
            "title": "English (United States)"
          }, {
            "const": "FRENCH",
            "title": "French (France)"
          }, {
            "const": "GERMAN",
            "title": "German"
          }, {
            "const": "ITALIAN",
            "title": "Italian"
          }]
        }
      }
    },
    {
      "title": "SPEECHMATICS",
      "properties": {
        "service": {
          "type": "string",
          "default": "SPEECHMATICS",
          "readOnly": true,
          "format": "hidden"
        },
        "language": {
          "type": "string",
          "oneOf": [{
            "const": "ARABIC",
            "title": "Arabic (Modern Standard)"
          }, {
            "const": "BULGARIAN",
            "title": "Bulgarian"
          }, {
            "const": "CATALAN",
            "title": "Catalan (Spain)"
          }, {
            "const": "CHINESE_MANDARIN",
            "title": "Chinese, Mandarin"
          }, {
            "const": "CZECH",
            "title": "Czech Republic"
          }, {
            "const": "DANISH",
            "title": "Danish"
          }, {
            "const": "GERMAN",
            "title": "German"
          }, {
            "const": "DUTCH",
            "title": "Dutch"
          }, {
            "const": "GREEK",
            "title": "Greek"
          }, {
            "const": "ENGLISH_GLOBAL",
            "title": "English (Global)"
          }, {
            "const": "SPANISH",
            "title": "Spanish (Spain)"
          }, {
            "const": "FINNISH",
            "title": "Finnish (Finland)"
          }, {
            "const": "FRENCH",
            "title": "French (France)"
          }, {
            "const": "HINDI",
            "title": "Hindi"
          }, {
            "const": "CROATIAN",
            "title": "Croatian"
          }, {
            "const": "HUNGARIAN",
            "title": "Hungarian"
          }, {
            "const": "ITALIAN",
            "title": "Italian"
          }, {
            "const": "JAPANESE",
            "title": "Japanese"
          }, {
            "const": "KOREAN",
            "title": "Korean (South Korea)"
          }, {
            "const": "LATVIAN",
            "title": "Latvian"
          }, {
            "const": "LITHUANIAN",
            "title": "Lithuanian"
          }, {
            "const": "NORWEGIAN",
            "title": "Norwegian"
          }, {
            "const": "POLISH",
            "title": "Polish"
          }, {
            "const": "PORTUGUESE",
            "title": "Portuguese (Portugal)"
          }, {
            "const": "ROMANIAN",
            "title": "Romanian"
          }, {
            "const": "RUSSIAN",
            "title": "Russian"
          }, {
            "const": "SLOVAK",
            "title": "Slovak"
          }, {
            "const": "SLOVENIAN",
            "title": "Slovenian"
          }, {
            "const": "SWEDISH",
            "title": "Swedish"
          }]
        }
      }
    },
    {
      "title": "VERITONE",
      "properties": {
        "service": {
          "type": "string",
          "default": "VERITONE",
          "readOnly": true,
          "format": "hidden"
        },
        "language": {
          "type": "string",
          "oneOf": [{
            "const": "ARABIC_SAUDI_ARABIA",
            "title": "Arabic (Saudi Arabia)"
          }, {
            "const": "ARABIC",
            "title": "Arabic (Modern Standard)"
          }, {
            "const": "CATALAN",
            "title": "Catalan (Spain)"
          }, {
            "const": "CHINESE_CANTONESE",
            "title": "Chinese, Cantonese"
          }, {
            "const": "CHINESE_MANDARIN",
            "title": "Chinese, Mandarin"
          }, {
            "const": "CHINESE_MANDARIN_TAIWAN",
            "title": "Chinese, Mandarin (Taiwan)"
          }, {
            "const": "CROATIAN",
            "title": "Croatian"
          }, {
            "const": "CZECH",
            "title": "Czech Republic"
          }, {
            "const": "DUTCH",
            "title": "Dutch"
          }, {
            "const": "GERMAN",
            "title": "German"
          }, {
            "const": "ENGLISH_AUSTRALIA",
            "title": "English (Australia)"
          }, {
            "const": "ENGLISH_CANADA",
            "title": "English (Canada)"
          }, {
            "const": "ENGLISH_INDIA",
            "title": "English (India)"
          }, {
            "const": "ENGLISH_SOUTH_AFRICA",
            "title": "English (South Africa)"
          }, {
            "const": "ENGLISH_UNITED_KINGDOM",
            "title": "English (United Kingdom)"
          }, {
            "const": "ENGLISH_UNITED_STATES",
            "title": "English (United States)"
          }, {
            "const": "SPANISH_ARGENTINA",
            "title": "Spanish (Argentina)"
          }, {
            "const": "SPANISH_CHILE",
            "title": "Spanish (Chile)"
          }, {
            "const": "SPANISH_COLOMBIA",
            "title": "Spanish (Colombia)"
          }, {
            "const": "SPANISH_GUATEMALA",
            "title": "Spanish (Guatemala)"
          }, {
            "const": "SPANISH_MEXICO",
            "title": "Spanish (Mexico)"
          }, {
            "const": "SPANISH_UNITED_STATES",
            "title": "Spanish (United States)"
          }, {
            "const": "SPANISH",
            "title": "Spanish (Spain)"
          }, {
            "const": "FRENCH_CANADA",
            "title": "French (Canada)"
          }, {
            "const": "FRENCH",
            "title": "French (France)"
          }, {
            "const": "GREEK",
            "title": "Greek"
          }, {
            "const": "HEBREW",
            "title": "Hebrew"
          }, {
            "const": "HINDI",
            "title": "Hindi"
          }, {
            "const": "ITALIAN",
            "title": "Italian"
          }, {
            "const": "JAPANESE",
            "title": "Japanese"
          }, {
            "const": "KOREAN",
            "title": "Korean (South Korea)"
          }, {
            "const": "MALAY",
            "title": "Malay"
          }, {
            "const": "NORWEGIAN",
            "title": "Norwegian"
          }, {
            "const": "POLISH",
            "title": "Polish"
          }, {
            "const": "PORTUGUESE_BRAZILIAN",
            "title": "Portuguese (Brazil)"
          }, {
            "const": "PORTUGUESE",
            "title": "Portuguese (Portugal)"
          }, {
            "const": "ROMANIAN",
            "title": "Romanian"
          }, {
            "const": "RUSSIAN",
            "title": "Russian"
          }, {
            "const": "SWEDISH",
            "title": "Swedish"
          }, {
            "const": "THAI",
            "title": "Thai"
          }, {
            "const": "TURKISH",
            "title": "Turkish"
          }]
        }
      }
    },
    {
      "title": "VOCAPIA",
      "properties": {
        "service": {
          "type": "string",
          "default": "VOCAPIA",
          "readOnly": true,
          "format": "hidden"
        },
        "language": {
          "type": "string",
          "oneOf": [{
            "const": "FRENCH",
            "title": "French (France)"
          }]
        }
      }
    },
    {
      "title": "WATSON",
      "properties": {
        "service": {
          "type": "string",
          "default": "WATSON",
          "readOnly": true,
          "format": "hidden"
        },
        "language": {
          "type": "string",
          "oneOf": [{
            "const": "ARABIC",
            "title": "Arabic (Modern Standard)"
          }, {
            "const": "CATALAN",
            "title": "Catalan (Spain)"
          }, {
            "const": "CHINESE_MANDARIN",
            "title": "Chinese, Mandarin"
          }, {
            "const": "GERMAN",
            "title": "German"
          }, {
            "const": "ENGLISH_UNITED_KINGDOM",
            "title": "English (United Kingdom)"
          }, {
            "const": "ENGLISH_UNITED_STATES",
            "title": "English (United States)"
          }, {
            "const": "SPANISH_ARGENTINA",
            "title": "Spanish (Argentina)"
          }, {
            "const": "SPANISH_CHILE",
            "title": "Spanish (Chile)"
          }, {
            "const": "SPANISH_COLOMBIA",
            "title": "Spanish (Colombia)"
          }, {
            "const": "SPANISH_MEXICO",
            "title": "Spanish (Mexico)"
          }, {
            "const": "SPANISH_PERU",
            "title": "Spanish (Peru)"
          }, {
            "const": "SPANISH",
            "title": "Spanish (Spain)"
          }, {
            "const": "FRENCH",
            "title": "French (France)"
          }, {
            "const": "JAPANESE",
            "title": "Japanese"
          }, {
            "const": "KOREAN",
            "title": "Korean (South Korea)"
          }, {
            "const": "PORTUGUESE_BRAZILIAN",
            "title": "Portuguese (Brazil)"
          }]
        }
      }
    },
    {
      "title": "AUTO",
      "properties": {
        "service": {
          "type": "string",
          "default": "AUTO",
          "readOnly": true,
          "format": "hidden"
        },
        "language": {
          "type": "string",
          "oneOf": [{
            "const": "ARABIC_SAUDI_ARABIA",
            "title": "Arabic (Saudi Arabia)"
          }, {
            "const": "ARABIC",
            "title": "Arabic (Modern Standard)"
          }, {
            "const": "BULGARIAN",
            "title": "Bulgarian"
          }, {
            "const": "CATALAN",
            "title": "Catalan (Spain)"
          }, {
            "const": "CHINESE_CANTONESE",
            "title": "Chinese, Cantonese"
          }, {
            "const": "CHINESE_MANDARIN",
            "title": "Chinese, Mandarin"
          }, {
            "const": "CHINESE_MANDARIN_TAIWAN",
            "title": "Chinese, Mandarin (Taiwan)"
          }, {
            "const": "CROATIAN",
            "title": "Croatian"
          }, {
            "const": "CZECH",
            "title": "Czech Republic"
          }, {
            "const": "DANISH",
            "title": "Danish"
          }, {
            "const": "GERMAN",
            "title": "German"
          }, {
            "const": "DUTCH",
            "title": "Dutch"
          }, {
            "const": "ENGLISH_AUSTRALIA",
            "title": "English (Australia)"
          }, {
            "const": "ENGLISH_CANADA",
            "title": "English (Canada)"
          }, {
            "const": "ENGLISH_GLOBAL",
            "title": "English (Global)"
          }, {
            "const": "ENGLISH_INDIA",
            "title": "English (India)"
          }, {
            "const": "ENGLISH_UNITED_KINGDOM",
            "title": "English (United Kingdom)"
          }, {
            "const": "ENGLISH_UNITED_STATES",
            "title": "English (United States)"
          }, {
            "const": "ENGLISH_SOUTH_AFRICA",
            "title": "English (South Africa)"
          }, {
            "const": "SPANISH_ARGENTINA",
            "title": "Spanish (Argentina)"
          }, {
            "const": "SPANISH_CHILE",
            "title": "Spanish (Chile)"
          }, {
            "const": "SPANISH_COLOMBIA",
            "title": "Spanish (Colombia)"
          }, {
            "const": "SPANISH_GUATEMALA",
            "title": "Spanish (Guatemala)"
          }, {
            "const": "SPANISH_MEXICO",
            "title": "Spanish (Mexico)"
          }, {
            "const": "SPANISH_PERU",
            "title": "Spanish (Peru)"
          }, {
            "const": "SPANISH_UNITED_STATES",
            "title": "Spanish (United States)"
          }, {
            "const": "SPANISH",
            "title": "Spanish (Spain)"
          }, {
            "const": "FINNISH",
            "title": "Finnish (Finland)"
          }, {
            "const": "FRENCH_CANADA",
            "title": "French (Canada)"
          }, {
            "const": "FRENCH",
            "title": "French (France)"
          }, {
            "const": "GREEK",
            "title": "Greek"
          }, {
            "const": "HEBREW",
            "title": "Hebrew"
          }, {
            "const": "HINDI",
            "title": "Hindi"
          }, {
            "const": "HUNGARIAN",
            "title": "Hungarian"
          }, {
            "const": "ITALIAN",
            "title": "Italian"
          }, {
            "const": "JAPANESE",
            "title": "Japanese"
          }, {
            "const": "KOREAN",
            "title": "Korean (South Korea)"
          }, {
            "const": "LATVIAN",
            "title": "Latvian"
          }, {
            "const": "LITHUANIAN",
            "title": "Lithuanian"
          }, {
            "const": "MALAY",
            "title": "Malay"
          }, {
            "const": "NORWEGIAN",
            "title": "Norwegian"
          }, {
            "const": "POLISH",
            "title": "Polish"
          }, {
            "const": "PORTUGUESE_BRAZILIAN",
            "title": "Portuguese (Brazil)"
          }, {
            "const": "PORTUGUESE",
            "title": "Portuguese (Portugal)"
          }, {
            "const": "ROMANIAN",
            "title": "Romanian"
          }, {
            "const": "RUSSIAN",
            "title": "Russian"
          }, {
            "const": "SLOVAK",
            "title": "Slovak"
          }, {
            "const": "SLOVENIAN",
            "title": "Slovenian"
          }, {
            "const": "SWEDISH",
            "title": "Swedish"
          }, {
            "const": "THAI",
            "title": "Thai"
          }, {
            "const": "TURKISH",
            "title": "Turkish"
          }]
        }
      }
    }
  ],
  "required": ["media_entry", "language"]
}
