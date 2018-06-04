# Parse Skills

If a skill is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-skills

## Usage

Example:

```javascript
await parse("I'm a verilog developer specialized in web marketing because #yolo")
```

Output:

```json
     [
      {
        "ngram": "verilog",
        "value": {
          "id": "verilog programming",
          "aliases": {
            "en": [
              "Verilog",
              "Verilog-A",
              "VerilogA",
              "Verilog-AMS",
              "Verilog/AMS",
              "OpenVAMS"
            ]
          },
          "description": {
            "en": "Hardware description language (HDL) used to model electronic systems.",
            "fr": "Langage de description matériel de circuits logiques (HDL, Hardware Description Language)."
          },
          "domain": "software development",
          "icon": "developer_board",
          "keywords": [
            "circuit design",
            "electronic circuit design",
            "integrated circuit design",
            "PCB"
          ],
          "label": {
            "en": "Verilog",
            "fr": "Verilog"
          },
          "minimum_hits_required": 1,
          "skill_frequency": 0,
          "skill_occurrences": 0,
          "tag": {
            "en": "Verilog",
            "fr": "Verilog"
          },
          "wikipedia_id": {
            "en": "Verilog",
            "fr": "Verilog"
          }
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 2,
          "begin": 6,
          "end": 13
        }
      },
            {
        "ngram": "web marketing",
        "value": {
          "id": "web marketing",
          "aliases": {
            "en": [
              "online marketing",
              "web marketing",
              "growth hacking",
              "search engine optimization",
              "pay-per-click marketing",
              "landing page optimization",
              "site design",
              "e-mail marketing",
              "mass email marketing",
              "bulk email marketing",
              "web analytics",
              "retargeting"
            ]
          },
          "case_sensitive": false,
          "description": {
            "en": ""
          },
          "domain": "management",
          "icon": "supervisor_account",
          "keywords": [
            "marketing",
            "growth hacking",
            "email marketing",
            "web marketing"
          ],
          "label": {
            "en": "Web marketing"
          },
          "minimum_hits_required": 4,
          "skill_frequency": 0,
          "skill_occurrences": 0,
          "tag": {
            "en": "Web marketing"
          }
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 6,
          "begin": 39,
          "end": 52
        }
      }
    ]
```
