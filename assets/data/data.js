const nvRandomIDChars = {
    num: "0123456789",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}



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
                        "value": "green"
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
                                        "value": "green"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        storysheet: {
            order: []
        }
    }
];

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


const smBtnGroup_obj = [
    [
        { icon: "settings_account_box", text: "story info", f: function(){
            pd("storyManager").openMenuItem("story_info")
        }},
        { icon: "groups", text: "manage characters", f: function(){
            pd("storyManager").openMenuItem("manage_chars")
        }},
        { icon: "auto_stories", text: "guide", f: function(){
            pd("storyManager").openMenuItem("guide")
        }}
    ],
    [
        { icon: "fingerprint", text: "blueprint", f: function(){
            pd("storyManager").openMenuItem("blueprint")
        }},
        { icon: "description", text: "character sheet", f: function(){
            pd("storyManager").openMenuItem("char_sheet")
        }},
        { icon: "move_item", text: "exit", f: function(){
            pd("storyManager").exit();
        }}
    ]
]
