var storyList = [
    {
        "id": "DJ72UKI5",
        "name": "Template Story",
        "desc": "This is a short description.",
        "charList": [
            {
                "name": "Test Character",
                "type": "Character",
                "id": "7T6IOK2T",
                "list": [
                    {
                        "id": "MG9904I3",
                        "value": "FirstName LastName"
                    },
                    {
                        "id": "I5S73114",
                        "value": "08/30"
                    },
                    {
                        "id": "Y6UDYYV2",
                        "value": "34"
                    },
                    {
                        "id": "8VA204H6",
                        "value": "3'10\""
                    },
                    {
                        "id": "2G0OU600",
                        "value": "\"This is a character quote that explains the character's personality and motives.\""
                    },
                    {
                        "id": "HDKDV3IK",
                        "value": "Characteristic 1"
                    },
                    {
                        "id": "VP30BQ46",
                        "value": "This will be a character's background history that explores the character's upbringing, key events, and other important information."
                    },
                    {
                        "id": "87EQ808U",
                        "value": [
                            "Like 1",
                            "Like 2",
                            "Like 3"
                        ]
                    },
                    {
                        "id": "753607R5",
                        "value": [
                            "Dislike 1",
                            "Dislike 2",
                            "Dislike 3"
                        ]
                    },
                    {
                        "id": "F3SFUZ0D",
                        "value": [
                            "Key appearance 1",
                            "Feature 2"
                        ]
                    },
                    {
                        "id": "HSME8178",
                        "value": [
                            "Habit 1",
                            "Habit 2"
                        ]
                    }
                ]
            }
        ],
        "blueprint": [
            {
                "name": "Blueprint Title",
                "type": "Text",
                "id": "9U6Y3F0P",
                "modifiers": [
                    {
                        "affect": "textValue",
                        "value": "Template Blueprint"
                    }
                ],
                "styles": [
                    {
                        "affect": "textAlign",
                        "value": "center"
                    },
                    {
                        "affect": "fontSize",
                        "value": "3rem"
                    },
                    {
                        "affect": "color",
                        "value": "rgb(100,200,320)"
                    }
                ]
            },
            {
                "name": "Name [Text Input]",
                "type": "Module",
                "id": "MG9904I3",
                "modifiers": [
                    {
                        "affect": "moduleType",
                        "value": "Input"
                    },
                    {
                        "affect": "type",
                        "value": "Text"
                    },
                    {
                        "affect": "textInsetPosition",
                        "value": "Top"
                    },
                    {
                        "affect": "textInsetText",
                        "value": "Name"
                    }
                ],
                "styles": [
                    {
                        "affect": "width",
                        "value": "80%"
                    },
                    {
                        "affect": "padding",
                        "value": "1rem"
                    },
                    {
                        "affect": "margin",
                        "value": "0 0 1rem 0"
                    },
                    {
                        "affect": "borderThickness",
                        "value": "2px"
                    },
                    {
                        "affect": "borderStyle",
                        "value": "solid"
                    },
                    {
                        "affect": "borderColor",
                        "value": "black"
                    },
                    {
                        "affect": "fontSize",
                        "value": "1.5rem"
                    }
                ]
            },
            {
                "name": "Birthday / Age / Height",
                "type": "Group",
                "id": "S44TMYQK",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    }
                ],
                "styles": [],
                "items": [
                    {
                        "name": "Birthday [Text Input]",
                        "type": "Module",
                        "id": "I5S73114",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Input"
                            },
                            {
                                "affect": "type",
                                "value": "Text"
                            },
                            {
                                "affect": "placeholder",
                                "value": "MM/DD"
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Birthday"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "6rem"
                            },
                            {
                                "affect": "padding",
                                "value": "1rem"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1rem 1rem 0"
                            },
                            {
                                "affect": "borderThickness",
                                "value": "2px"
                            },
                            {
                                "affect": "borderStyle",
                                "value": "solid"
                            },
                            {
                                "affect": "borderColor",
                                "value": "black"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    },
                    {
                        "name": "Age [Number Input]",
                        "type": "Module",
                        "id": "Y6UDYYV2",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Input"
                            },
                            {
                                "affect": "type",
                                "value": "Number"
                            },
                            {
                                "affect": "placeholder",
                                "value": ""
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Age"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "6rem"
                            },
                            {
                                "affect": "padding",
                                "value": "1rem"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1rem 1rem 0"
                            },
                            {
                                "affect": "borderThickness",
                                "value": "2px"
                            },
                            {
                                "affect": "borderStyle",
                                "value": "solid"
                            },
                            {
                                "affect": "borderColor",
                                "value": "black"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    },
                    {
                        "name": "Height [Text Input]",
                        "type": "Module",
                        "id": "8VA204H6",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Input"
                            },
                            {
                                "affect": "type",
                                "value": "Text"
                            },
                            {
                                "affect": "placeholder",
                                "value": ""
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Height"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "6rem"
                            },
                            {
                                "affect": "padding",
                                "value": "1rem"
                            },
                            {
                                "affect": "margin",
                                "value": "0 0 1rem 0"
                            },
                            {
                                "affect": "borderThickness",
                                "value": "2px"
                            },
                            {
                                "affect": "borderStyle",
                                "value": "solid"
                            },
                            {
                                "affect": "borderColor",
                                "value": "black"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Quote [Textarea]",
                "type": "Module",
                "id": "2G0OU600",
                "modifiers": [
                    {
                        "affect": "moduleType",
                        "value": "Textarea"
                    },
                    {
                        "affect": "textareaResize",
                        "value": "None"
                    },
                    {
                        "affect": "textInsetPosition",
                        "value": "Top"
                    },
                    {
                        "affect": "textInsetText",
                        "value": "Character Quote"
                    },
                    {
                        "affect": "type",
                        "value": "Text"
                    },
                    {
                        "affect": "dropdownInputWidth",
                        "value": "50%"
                    }
                ],
                "styles": [
                    {
                        "affect": "width",
                        "value": "100%"
                    },
                    {
                        "affect": "padding",
                        "value": "1rem 1rem"
                    },
                    {
                        "affect": "margin",
                        "value": "0 0 0.5rem 0"
                    },
                    {
                        "affect": "borderThickness",
                        "value": "2px"
                    },
                    {
                        "affect": "borderStyle",
                        "value": "solid"
                    },
                    {
                        "affect": "borderColor",
                        "value": "black"
                    },
                    {
                        "affect": "fontSize",
                        "value": "1.75rem"
                    }
                ]
            },
            {
                "name": "Key Characteristics [Dropdown]",
                "type": "Module",
                "id": "HDKDV3IK",
                "modifiers": [
                    {
                        "affect": "moduleType",
                        "value": "Dropdown"
                    },
                    {
                        "affect": "allow",
                        "value": "true"
                    },
                    {
                        "affect": "dropdownInputWidth",
                        "value": "200px"
                    },
                    {
                        "affect": "textInsetPosition",
                        "value": "Top"
                    },
                    {
                        "affect": "textInsetText",
                        "value": "Key Characteristics"
                    },
                    {
                        "affect": "type",
                        "value": "Text"
                    }
                ],
                "styles": [
                    {
                        "affect": "width",
                        "value": "100%"
                    },
                    {
                        "affect": "margin",
                        "value": "0 0 1rem 0"
                    },
                    {
                        "affect": "fontSize",
                        "value": "1.5rem"
                    }
                ]
            },
            {
                "name": "Background History [Textarea]",
                "type": "Module",
                "id": "VP30BQ46",
                "modifiers": [
                    {
                        "affect": "moduleType",
                        "value": "Textarea"
                    },
                    {
                        "affect": "textareaResize",
                        "value": "Vertical"
                    },
                    {
                        "affect": "textInsetPosition",
                        "value": "Top"
                    },
                    {
                        "affect": "textInsetText",
                        "value": "Background History"
                    }
                ],
                "styles": [
                    {
                        "affect": "width",
                        "value": "100%"
                    },
                    {
                        "affect": "height",
                        "value": "200px"
                    },
                    {
                        "affect": "padding",
                        "value": "2rem 1rem"
                    },
                    {
                        "affect": "margin",
                        "value": ""
                    },
                    {
                        "affect": "borderThickness",
                        "value": "2px"
                    },
                    {
                        "affect": "borderStyle",
                        "value": "solid"
                    },
                    {
                        "affect": "borderColor",
                        "value": "black"
                    },
                    {
                        "affect": "fontSize",
                        "value": "1.5rem"
                    }
                ]
            },
            {
                "name": "Likes / Dislikes",
                "type": "Group",
                "id": "E0RJNC17",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    }
                ],
                "styles": [
                    {
                        "affect": "margin",
                        "value": "1rem 0"
                    }
                ],
                "items": [
                    {
                        "name": "Likes [Dropdown]",
                        "type": "Module",
                        "id": "87EQ808U",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Dropdown"
                            },
                            {
                                "affect": "allow",
                                "value": "true"
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Likes"
                            },
                            {
                                "affect": "type",
                                "value": "Text"
                            },
                            {
                                "affect": "dropdownInputWidth",
                                "value": "200px"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "100%"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1rem 0rem 0"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    },
                    {
                        "name": "Dislikes [Dropdown]",
                        "type": "Module",
                        "id": "753607R5",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Dropdown"
                            },
                            {
                                "affect": "allow",
                                "value": "true"
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Dislikes"
                            },
                            {
                                "affect": "type",
                                "value": "Text"
                            },
                            {
                                "affect": "dropdownInputWidth",
                                "value": "200px"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "100%"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Appearance / Habits",
                "type": "Group",
                "id": "4GB10992",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    }
                ],
                "styles": [],
                "items": [
                    {
                        "name": "Appearance [Dropdown]",
                        "type": "Module",
                        "id": "F3SFUZ0D",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Dropdown"
                            },
                            {
                                "affect": "allow",
                                "value": "true"
                            },
                            {
                                "affect": "dropdownInputWidth",
                                "value": "200px"
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Appearance"
                            },
                            {
                                "affect": "type",
                                "value": "Text"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "100%"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1rem 0rem 0"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    },
                    {
                        "name": "Habits [Dropdown]",
                        "type": "Module",
                        "id": "HSME8178",
                        "modifiers": [
                            {
                                "affect": "moduleType",
                                "value": "Dropdown"
                            },
                            {
                                "affect": "allow",
                                "value": "true"
                            },
                            {
                                "affect": "dropdownInputWidth",
                                "value": "200px"
                            },
                            {
                                "affect": "textInsetPosition",
                                "value": "Top"
                            },
                            {
                                "affect": "textInsetText",
                                "value": "Habits"
                            },
                            {
                                "affect": "type",
                                "value": "Text"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "100%"
                            },
                            {
                                "affect": "fontSize",
                                "value": "1.5rem"
                            }
                        ]
                    }
                ]
            }
        ],
        "charsheet": [
            {
                "name": "Character Sheet Title",
                "type": "Text",
                "id": "I162L3C7",
                "modifiers": [
                    {
                        "affect": "textValue",
                        "value": "Template Character Sheet"
                    }
                ],
                "styles": [
                    {
                        "affect": "textAlign",
                        "value": "center"
                    },
                    {
                        "affect": "fontSize",
                        "value": "3rem"
                    },
                    {
                        "affect": "color",
                        "value": "rgb(100,200,320)"
                    }
                ]
            },
            {
                "name": "Top Row",
                "type": "Group",
                "id": "54OH6S2D",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    }
                ],
                "styles": [],
                "items": [
                    {
                        "name": "Basic Information",
                        "type": "Group",
                        "id": "W1W514S6",
                        "modifiers": [],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "70%"
                            },
                            {
                                "affect": "height",
                                "value": "fit-content"
                            },
                            {
                                "affect": "padding",
                                "value": "1rem 2rem"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1rem 0 0"
                            },
                            {
                                "affect": "borderStyle",
                                "value": "solid"
                            },
                            {
                                "affect": "borderRadius",
                                "value": "0.15rem"
                            }
                        ],
                        "items": [
                            {
                                "name": "Name of Character",
                                "type": "Text",
                                "id": "A56CZZW7",
                                "modifiers": [
                                    {
                                        "affect": "textValue",
                                        "value": "[Name of Character]",
                                        "defaultValue": "MG9904I3"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "fontSize",
                                        "value": "32px"
                                    }
                                ]
                            },
                            {
                                "name": "Birthday / Age / Height",
                                "type": "Group",
                                "id": "USU3952M",
                                "modifiers": [
                                    {
                                        "affect": "itemArrangement",
                                        "value": "row"
                                    }
                                ],
                                "styles": [],
                                "items": [
                                    {
                                        "name": "Birthday",
                                        "type": "Text",
                                        "id": "ALY8GCF0",
                                        "modifiers": [
                                            {
                                                "affect": "textValue",
                                                "value": "[MM/YY]",
                                                "defaultValue": "I5S73114"
                                            }
                                        ],
                                        "styles": [
                                            {
                                                "affect": "fontSize",
                                                "value": "1.25rem"
                                            },
                                            {
                                                "affect": "width",
                                                "value": "fit-content"
                                            },
                                            {
                                                "affect": "padding",
                                                "value": "0.25rem 1rem"
                                            },
                                            {
                                                "affect": "margin",
                                                "value": "0.15rem 0.5rem 0.15rem 0"
                                            },
                                            {
                                                "affect": "borderStyle",
                                                "value": "solid"
                                            },
                                            {
                                                "affect": "borderRadius",
                                                "value": "0.25rem"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Age",
                                        "type": "Text",
                                        "id": "QSN8SUM3",
                                        "modifiers": [
                                            {
                                                "affect": "textValue",
                                                "value": "[Age]",
                                                "defaultValue": "Y6UDYYV2"
                                            }
                                        ],
                                        "styles": [
                                            {
                                                "affect": "fontSize",
                                                "value": "1.25rem"
                                            },
                                            {
                                                "affect": "width",
                                                "value": "fit-content"
                                            },
                                            {
                                                "affect": "padding",
                                                "value": "0.25rem 1rem"
                                            },
                                            {
                                                "affect": "borderStyle",
                                                "value": "solid"
                                            },
                                            {
                                                "affect": "borderRadius",
                                                "value": "0.25rem"
                                            },
                                            {
                                                "affect": "margin",
                                                "value": "0.15rem 0.5rem"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Height",
                                        "type": "Text",
                                        "id": "5X6U95N0",
                                        "modifiers": [
                                            {
                                                "affect": "textValue",
                                                "value": "[Height]",
                                                "defaultValue": "8VA204H6"
                                            }
                                        ],
                                        "styles": [
                                            {
                                                "affect": "fontSize",
                                                "value": "1.25rem"
                                            },
                                            {
                                                "affect": "width",
                                                "value": "fit-content"
                                            },
                                            {
                                                "affect": "padding",
                                                "value": "0.25rem 1rem"
                                            },
                                            {
                                                "affect": "borderStyle",
                                                "value": "solid"
                                            },
                                            {
                                                "affect": "borderRadius",
                                                "value": "0.25rem"
                                            },
                                            {
                                                "affect": "margin",
                                                "value": "0.15rem 0.5rem"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Character Quote",
                        "type": "Text",
                        "id": "VUX0WH7L",
                        "modifiers": [
                            {
                                "affect": "textValue",
                                "value": "[Character Quote]",
                                "defaultValue": "2G0OU600"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "fontSize",
                                "value": "1.2rem"
                            },
                            {
                                "affect": "width",
                                "value": "30%"
                            },
                            {
                                "affect": "padding",
                                "value": "1rem"
                            },
                            {
                                "affect": "borderStyle",
                                "value": "solid"
                            },
                            {
                                "affect": "borderRadius",
                                "value": "0.15rem"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Key Char Group",
                "type": "Group",
                "id": "PYD6ZU95",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    },
                    {
                        "affect": "itemAlignmentV",
                        "value": "center"
                    },
                    {
                        "affect": "itemAlignmentH",
                        "value": "center"
                    }
                ],
                "styles": [],
                "items": [
                    {
                        "name": "Key Char. Text",
                        "type": "Text",
                        "id": "9IPVS6MT",
                        "modifiers": [
                            {
                                "affect": "textValue",
                                "value": "Key Characteristics"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "fontSize",
                                "value": "32px"
                            },
                            {
                                "affect": "width",
                                "value": "210px"
                            }
                        ]
                    },
                    {
                        "name": "Key Char. List",
                        "type": "List",
                        "id": "479902J8",
                        "modifiers": [
                            {
                                "affect": "listOptions",
                                "value": [],
                                "defaultValue": "HDKDV3IK"
                            },
                            {
                                "affect": "listStyle",
                                "value": "Tag"
                            }
                        ],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "80%"
                            },
                            {
                                "affect": "padding",
                                "value": "1rem"
                            },
                            {
                                "affect": "margin",
                                "value": "0.5rem 0"
                            },
                            {
                                "affect": "borderStyle",
                                "value": "solid"
                            }
                        ],
                        "items": []
                    }
                ]
            },
            {
                "name": "Likes / Dislikes",
                "type": "Group",
                "id": "8F6A879A",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    }
                ],
                "styles": [
                    {
                        "affect": "padding",
                        "value": "1rem"
                    },
                    {
                        "affect": "margin",
                        "value": "0 0 1rem 0"
                    },
                    {
                        "affect": "borderStyle",
                        "value": "solid"
                    },
                    {
                        "affect": "borderRadius",
                        "value": "0.15rem"
                    }
                ],
                "items": [
                    {
                        "name": "Likes List",
                        "type": "Group",
                        "id": "K9358X37",
                        "modifiers": [],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "48%"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1% 0 0"
                            }
                        ],
                        "items": [
                            {
                                "name": "Likes Text",
                                "type": "Text",
                                "id": "YPS96K01",
                                "modifiers": [
                                    {
                                        "affect": "textValue",
                                        "value": "Likes"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "fontSize",
                                        "value": "32px"
                                    }
                                ]
                            },
                            {
                                "name": "Likes List",
                                "type": "List",
                                "id": "7CM440C9",
                                "modifiers": [
                                    {
                                        "affect": "listOptions",
                                        "value": [],
                                        "defaultValue": "87EQ808U"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "listStyleType",
                                        "value": "square"
                                    }
                                ],
                                "items": []
                            }
                        ]
                    },
                    {
                        "name": "Dislikes List",
                        "type": "Group",
                        "id": "55R6KU1K",
                        "modifiers": [],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "48%"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1% 0 0"
                            }
                        ],
                        "items": [
                            {
                                "name": "Dislikes Text",
                                "type": "Text",
                                "id": "QO68CT56",
                                "modifiers": [
                                    {
                                        "affect": "textValue",
                                        "value": "Dislikes"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "fontSize",
                                        "value": "32px"
                                    }
                                ]
                            },
                            {
                                "name": "Dislikes List",
                                "type": "List",
                                "id": "822NICOV",
                                "modifiers": [
                                    {
                                        "affect": "listOptions",
                                        "value": [],
                                        "defaultValue": "753607R5"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "listStyleType",
                                        "value": "square"
                                    }
                                ],
                                "items": []
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Appearance / Habits",
                "type": "Group",
                "id": "YHB1H5LD",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    }
                ],
                "styles": [
                    {
                        "affect": "padding",
                        "value": "1rem"
                    },
                    {
                        "affect": "borderStyle",
                        "value": "solid"
                    },
                    {
                        "affect": "borderRadius",
                        "value": "0.15rem"
                    }
                ],
                "items": [
                    {
                        "name": "Appearance",
                        "type": "Group",
                        "id": "47S13382",
                        "modifiers": [],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "48%"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1% 0 0"
                            }
                        ],
                        "items": [
                            {
                                "name": "Appearance Text",
                                "type": "Text",
                                "id": "91YWLYCM",
                                "modifiers": [
                                    {
                                        "affect": "textValue",
                                        "value": "Appearance"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "fontSize",
                                        "value": "32px"
                                    }
                                ]
                            },
                            {
                                "name": "Appearance List",
                                "type": "List",
                                "id": "G3R5W1Z5",
                                "modifiers": [
                                    {
                                        "affect": "listOptions",
                                        "value": [],
                                        "defaultValue": "F3SFUZ0D"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "listStyleType",
                                        "value": "square"
                                    }
                                ],
                                "items": []
                            }
                        ]
                    },
                    {
                        "name": "Habits",
                        "type": "Group",
                        "id": "1C9JMAXE",
                        "modifiers": [],
                        "styles": [
                            {
                                "affect": "width",
                                "value": "48%"
                            },
                            {
                                "affect": "margin",
                                "value": "0 1% 0 0"
                            }
                        ],
                        "items": [
                            {
                                "name": "Habits Text",
                                "type": "Text",
                                "id": "TVP6NWAQ",
                                "modifiers": [
                                    {
                                        "affect": "textValue",
                                        "value": "Habits"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "fontSize",
                                        "value": "32px"
                                    }
                                ]
                            },
                            {
                                "name": "Habits List",
                                "type": "List",
                                "id": "T30608J7",
                                "modifiers": [
                                    {
                                        "affect": "listOptions",
                                        "value": [],
                                        "defaultValue": "HSME8178"
                                    }
                                ],
                                "styles": [
                                    {
                                        "affect": "listStyleType",
                                        "value": "square"
                                    }
                                ],
                                "items": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var presetList = [
    {
        "name": "Blueprint Title",
        "id": "6262MJRO",
        "modifiers": [
            {
                "affect": "textValue",
                "value": "Template Blueprint"
            }
        ],
        "styles": [
            {
                "affect": "textAlign",
                "value": "center"
            },
            {
                "affect": "fontSize",
                "value": "3rem"
            },
            {
                "affect": "color",
                "value": "rgb(100,200,320)"
            }
        ]
    },
    {
        "name": "Text Tag",
        "id": "W8G58E78",
        "modifiers": [
            {
                "affect": "textValue",
                "value": "[MM/YY]",
                "defaultValue": "I5S73114"
            }
        ],
        "styles": [
            {
                "affect": "fontSize",
                "value": "1.25rem"
            },
            {
                "affect": "width",
                "value": "fit-content"
            },
            {
                "affect": "padding",
                "value": "0.25rem 1rem"
            },
            {
                "affect": "margin",
                "value": "0.15rem 0.5rem"
            },
            {
                "affect": "borderStyle",
                "value": "solid"
            },
            {
                "affect": "borderRadius",
                "value": "0.25rem"
            }
        ]
    }
]



