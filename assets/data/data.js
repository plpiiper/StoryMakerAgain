var storyList = [
    {
        id: "ABCD1234",
        name: "StoryName",
        chars: [],
        blueprint: [
            {
                "name": "New Text",
                "type": "Text",
                "id": "ADSC3242",
                "modifiers": [
                    {
                        "affect": "innerText",
                        "value": "Text Here"
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
                "name": "Name of Something",
                "type": "Module",
                "id": "A1B2C3D4",
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
                        "affect": "max",
                        "value": "10"
                    },
                    {
                        "affect": "min",
                        "value": "3"
                    },
                    {
                        "affect": "textInsetText",
                        "value": "Value Here"
                    },
                    {
                        "affect": "textInsetPosition",
                        "value": "Top"
                    }
                ],
                "styles": [
                    {
                        "affect": "width",
                        "value": "200px"
                    },
                    {
                        "affect": "padding",
                        "value": "0.5rem 1rem"
                    },
                    {
                        "affect": "fontSize",
                        "value": "32px"
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
                    }
                ]
            },
            {
                "name": "Group",
                "type": "Group",
                "id": "SY4XHW48",
                "modifiers": [
                    {
                        "affect": "itemArrangement",
                        "value": "row"
                    },
                    {
                        "affect": "itemAlignment",
                        "value": "center"
                    }
                ],
                "styles": [
                    {
                        "affect": "width",
                        "value": "100%"
                    }
                ],
                "items": [
                    {
                        "name": "Text",
                        "type": "Text",
                        "id": "213IEBL2",
                        "modifiers": [
                            {
                                "affect": "innerText",
                                "value": "Text Here"
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
                        "name": "Group2",
                        "type": "Group",
                        "id": "JZ8Y2E0V",
                        "modifiers": [],
                        "styles": [],
                        "items": [
                            {
                                "name": "Module",
                                "type": "Module",
                                "id": "XE1T983J",
                                "modifiers": [
                                    {
                                        "affect": "moduleType",
                                        "value": "Input"
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
                                        "affect": "padding",
                                        "value": "0.5rem 1rem"
                                    },
                                    {
                                        "affect": "fontSize",
                                        "value": "1rem"
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
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        charsheet: [
            {
                "name": "New Text",
                "type": "Text",
                "id": "426QNZ56",
                "modifiers": [
                    {
                        "affect": "innerText",
                        "value": "Character Sheet"
                    }
                ],
                "styles": [
                    {
                        "affect": "textAlign",
                        "value": "center"
                    },
                    {
                        "affect": "fontSize",
                        "value": "32px"
                    }
                ]
            },
            {
                "name": "New List",
                "type": "List",
                "id": "H5J4DFI3",
                "modifiers": [
                    {
                        "affect": "listOptions",
                        "value": [
                            "Green",
                            "Blue",
                            "Orange"
                        ],
                        "defaultValue": "A1B2C3D4"
                    },
                    {
                        "affect": "listStyle",
                        "value": "Tag"
                    },
                    {
                        "affect": "listSpacingHorizontal",
                        "value": "4px"
                    },
                    {
                        "affect": "listSpacingVertical",
                        "value": "2px"
                    },
                    {
                        "affect": "listOptionAlignment",
                        "value": "Row"
                    }
                ],
                "styles": [],
                "items": []
            },
            {
                "name": "Other Bar",
                "type": "Bar",
                "id": "01SWCLV8",
                "modifiers": [
                    {
                        "affect": "barLineThickness",
                        "value": "8px"
                    },
                    {
                        "affect": "barValueText",
                        "value": "Medium"
                    },
                    {
                        "affect": "barValueValue",
                        "value": "7"
                    },
                    {
                        "affect": "barLeftValue",
                        "value": "1"
                    },
                    {
                        "affect": "barLeftText",
                        "value": "Dim"
                    },
                    {
                        "affect": "barRightValue",
                        "value": "10"
                    },
                    {
                        "affect": "barRightText",
                        "value": "Bright"
                    },
                    {
                        "affect": "barTextPosition",
                        "value": "Center"
                    },
                    {
                        "affect": "barLineMargin",
                        "value": "8px"
                    },
                    {
                        "affect": "barLineColor",
                        "value": "skyblue"
                    }
                ],
                "styles": [],
                "items": []
            }
        ]
    }
];

var presetList = []

var examplePresets = [
    {
        name: "Friendly Name",
        id: "A1234BCD",
        modifiers: [
            {affect: "max", value: "newValue"},
            {affect: "style-height", value: "300px"}
        ]
    }
];


