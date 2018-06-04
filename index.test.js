const parse = require('./index')
test('matching in all the text', () => Promise.all(
  [{
    "input": "I am specialized in CART, placeholder",
    "expected": [
      {
        "ngram": "CART",
        "value": {
          "id": "classification and regression tree",
          "aliases": {
            "en": [
              "CART",
              "Classification And Regression Tree",
              "Classification And Regression Trees",
              "CARTS",
              "carttree",
              "CART Tree",
              "CART Trees"
            ],
            "fr": [
              "arbre de classification",
              "Arbre de classification et de régression",
              "Arbres CARTS",
              "Arbres CART",
              "Arbre CART"
            ]
          },
          "case_sensitive": false,
          "description": {
            "en": "Classification And Regression Tree (CART)",
            "fr": "Arbre de classification et de régression, de l'anglais Classification And Regression Tree (CART)."
          },
          "domain": "data science",
          "icon": "school",
          "keywords": [
            "data science",
            "regression",
            "classification",
            "decision tree"
          ],
          "label": {
            "en": "CART",
            "fr": "CART"
          },
          "skill_frequency": 0,
          "skill_occurrences": 0,
          "tag": {
            "en": "CART",
            "fr": "CART"
          }
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 4,
          "begin": 20,
          "end": 24
        }
      }
    ]
    }, {
    "input": "my data-science skills: C++, cart, baggin'",
    "expected": [
      {
        "ngram": "C++",
        "value": {
          "id": "cpp",
          "aliases": {
            "en": [
              "Cpp",
              "C++"
            ]
          },
          "description": {
            "en": "",
            "fr": ""
          },
          "domain": "development",
          "icon": "developer_board",
          "keywords": [
            "data science",
            "programming",
            "programming language",
            "development",
            "software development",
            "Functional programming",
            "c++",
            "cpp"
          ],
          "label": {
            "en": "C++",
            "fr": "C++"
          },
          "minimum_hits_required": 1,
          "skill_frequency": 0,
          "skill_occurrences": 0,
          "tag": {
            "en": "C++",
            "fr": "C++"
          }
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 4,
          "begin": 24,
          "end": 27
        }
      },
      {
        "ngram": "cart",
        "value": {
          "id": "classification and regression tree",
          "aliases": {
            "en": [
              "CART",
              "Classification And Regression Tree",
              "Classification And Regression Trees",
              "CARTS",
              "carttree",
              "CART Tree",
              "CART Trees"
            ],
            "fr": [
              "arbre de classification",
              "Arbre de classification et de régression",
              "Arbres CARTS",
              "Arbres CART",
              "Arbre CART"
            ]
          },
          "case_sensitive": false,
          "description": {
            "en": "Classification And Regression Tree (CART)",
            "fr": "Arbre de classification et de régression, de l'anglais Classification And Regression Tree (CART)."
          },
          "domain": "data science",
          "icon": "school",
          "keywords": [
            "data science",
            "regression",
            "classification",
            "decision tree"
          ],
          "label": {
            "en": "CART",
            "fr": "CART"
          },
          "skill_frequency": 0,
          "skill_occurrences": 0,
          "tag": {
            "en": "CART",
            "fr": "CART"
          }
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 6,
          "begin": 29,
          "end": 33
        }
      }
    ]
  }].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))
