export const schema = {
  "type": "object",
  "properties": {
    "audio_channel": {
      "title": "Channel",
      "type": "integer",
      "default": 1
    },
    "media_entry": {
      "title": "Media Entry",
      "type": "string"
    },
    "format": {
      "title": "Subtitle format",
      "type": "string",
      "enum": ["SRT","TTML","RAW"],
      "default": "SRT"
    },
    "service": {
      "title": "Type",
      "type": "string",
      "oneOf": [{
        "const": "CHOOSE",
        "title": "Choose automatically"
      }, {
        "const": "EML",
        "title": "EML"
      }, {
        "const": "SPEECHMATICS",
        "title": "Speechmatics"
      }, {
        "const": "VERITONE",
        "title": "Veritone"
      }, {
        "const": "VOCAPIA",
        "title": "Vocapia"
      }, {
        "const": "WATSON",
        "title": "Watson"
      }]
    }
  },
  "allOf": [{
      "if": {
        "properties": {
          "service": {
            "const": "EML"
          }
        }
      },
      "then": {
        "properties": {
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
      }
    },
    {
      "if": {
        "properties": {
          "service": {
            "const": "SPEECHMATICS"
          }
        }
      },
      "then": {
        "properties": {
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
      }
    },
    {
      "if": {
        "properties": {
          "service": {
            "const": "VERITONE"
          }
        }
      },
      "then": {
        "properties": {
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
      }
    },
    {
      "if": {
        "properties": {
          "service": {
            "const": "VOCAPIA"
          }
        }
      },
      "then": {
        "properties": {
          "language": {
            "type": "string",
            "oneOf": [{
              "const": "FRENCH",
              "title": "French (France)"
            }]
          }
        }
      }
    },
    {
      "if": {
        "properties": {
          "service": {
            "const": "WATSON"
          }
        }
      },
      "then": {
        "properties": {
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
      }
    },
    {
      "if": {
        "properties": {
          "service": {
            "const": "CHOOSE"
          }
        }
      },
      "then": {
        "properties": {
          "type": "string",
          "language": {
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
    }
  ],
  "required": ["media_entry", "language"]
}
