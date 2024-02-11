const nvRandomIDChars = {
    num: "0123456789",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

const randomListOfWord = {
    words: [
        "fruits",
        "ornamental",
        "patched",
        "defraud",
        "byline",
        "crib",
        "pathetic",
        "infobank",
        "modems",
        "chippewa",
        "wagering",
        "nuke",
        "tablatures",
        "coveralls",
        "yoruba",
        "selby",
        "alveolar",
        "flask",
        "modeled",
        "advertise",
        "sandoval",
        "turkeys",
        "repeal",
        "lorry",
        "worksite",
        "supplier",
        "paradiso",
        "reconstruction",
        "bioinformatics",
        "receipt",
        "illegible",
        "observer",
        "traces",
        "clayton",
        "barcodes",
        "embossed",
        "repealed",
        "halsey",
        "spectre",
        "chlorinated",
        "sociological",
        "longevity",
        "ventana",
        "cartel",
        "knox",
        "master",
        "hawaiian",
        "starz",
        "meyers",
        "cajun"],
    colors: [
        "red","orange","yellow","green","blue","purple","pink"
    ],
    size: [
        "1rem", "1.5rem", "20%", "30px","1.2em","10vh","2vh"
    ]
}



const modList = {
    Text: {
        icon: "custom_typography",
        modifiers: [
            {
                affect: "innerText",
                funcName: "setText"
            }
        ],
        f: "cText"
    },
    Group: {
        icon: "folder",
        modifiers: [
            {
                affect: "itemAlignment",
                funcName: "setAlignment"
            },
            {
                affect: "itemArrangement",
                funcName: "setArrangement"
            }
        ],
        f: "cGroup"
    },
    Module: {
        icon: "extension",
        types: {
            Dropdown: {
                modifiers: [
                    {
                        affect: "options",
                        funcName: "addOption"
                    },
                    {
                        affect: "defaultValue",
                        funcName: "pickOption"
                    },
                    {
                        affect: "textInsetPosition",
                        funcName: "setInsetPos"
                    },
                    {
                        affect: "textInsetText",
                        funcName: "setInsetText"
                    },
                    {
                        affect: "textInsetMarginVertical",
                        funcName: "setInsetPosVertical"
                    },
                    {
                        affect: "textInsetMarginHorizontal",
                        funcName: "setInsetPosHorizontal"
                    }
                ],
                f: "cDropdown"
            },
            Input: {
                modifiers: [
                    {
                        affect: "defaultValue",
                        funcName: "setValue"
                    },
                    {
                        affect: "textInsetPosition",
                        funcName: "setInsetPos"
                    },
                    {
                        affect: "textInsetText",
                        funcName: "setInsetText"
                    },
                    {
                        affect: "textInsetMarginVertical",
                        funcName: "setInsetPosVertical"
                    },
                    {
                        affect: "textInsetMarginHorizontal",
                        funcName: "setInsetPosHorizontal"
                    }
                ],
                f: "cInput"
            },
            Boolean: {
                modifiers: [
                    {
                        affect: "defaultValue",
                        funcName: "setValue"
                    }
                ]
            },
            Check: {
                modifiers: [
                    {
                        affect: "defaultValue",
                        funcName: "setValue"
                    }
                ],
                f: "cCheck"
            }
        },
    },
    List: {
        icon: "format_list_bulleted",
        modifiers: [
            {
                affect: "listOptions",
                funcName: "addOption"
            },
            {
                affect: "listStyle",
                funcName: "changeOptionStyle"
            },
            {
                affect: "listSpacingHorizontal",
                funcName: "setTagSpacingHorizontal"
            },
            {
                affect: "listSpacingVertical",
                funcName: "setTagSpacingVertical"
            },
            {
                affect: "listOptionAlignment",
                funcName: "setAlignment"
            }
        ],
        f: "cList"
    },
    Bar: {
        icon: "linear_scale",
        modifiers: [
            {
                affect: "barValueText",
                funcName: "setMainText"
            },
            {
                affect: "barValueValue",
                funcName: "setMainValue"
            },
            {
                affect: "barLineThickness",
                funcName: "setLineThickness"
            },
            {
                affect: "barLineColor",
                funcName: "setBarLineColor"
            },
            {
                affect: "barLeftValue",
                funcName: "setLeftValue"
            },
            {
                affect: "barRightValue",
                funcName: "setRightValue"
            },
            {
                affect: "barLeftText",
                funcName: "setLeftText"
            },
            {
                affect: "barRightText",
                funcName: "setRightText"
            },
            {
                affect: "barLineMargin",
                funcName: "setLineMargin"
            },
            {
                affect: "barTextPosition",
                funcName: "setTextPosition"
            },
            {
                affect: "barTextSize",
                funcName: "setTextSize"
            }
        ],
        f: "cBar"
    }
}

const modifiersList = [
    {
        main: "Module", affect: "moduleType",
        title: "Module Type", text: "Choose the module type",
        type: "Module",
        modifiers: [
            {   affect: "options", value: ["Input","Dropdown"]  },
            {   affect: "defaultValue", value: "Input"  },
            {   affect: "moduleType", value: "Dropdown"    }
        ]
    },
    {
        main: "Input", affect: "type",
        title: "Input Type", text: "Change the maximum number the input can be inputted.",
        type: "Module",
        modifiers: [
            {   affect: "options", value: ["Text","Number","Range"]  },
            {   affect: "defaultValue", value: "Text"  },
            {   affect: "moduleType", value: "Dropdown"    }
        ]
    },
    {
        main: "Input", sub: ["Range","Number"], affect: "max",
        title: "Max", text: "Change the maximum number the input can be inputted.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Input", sub: ["Range","Number"], affect: "min",
        title: "Min", text: "Change the minimum number the input can be inputted.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Input", affect: "placeholder",
        title: "Placeholder", text: "This is a placeholder...",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Dropdown", affect: "allow",
        title: "Allow Input", text: "Allow user to input their own options.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    {name: "True", value: true},
                    {name: "False", value: false}
                ]}
        ]
    },
    {
        main: "Dropdown", affect: "options",
        title: "Options", text: "Allow user to choose options. Pair with 'Allow Input' to give input suggestions.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "allow", value: true    }
        ]
    },
    {
        main: "Text", affect: "innerText",
        title: "Text", text: "The text inside the text element",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Module", sub: ["Input","Dropdown"], affect: "textInsetPosition",
        title: "Inset Text Position", text: "Have text inside area?",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: ["Top","Bottom"]  }
        ]
    },
    {
        main: "Module", sub: ["Input","Dropdown"], affect: "textInsetText",
        title: "Inset Text", text: "Have text inside area?",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Module", sub: ["Input","Dropdown"], affect: "textInsetMarginVertical",
        title: "Inset Text Vertical Margin", text: "Shift the position of the inset text vertically from its position.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Module", sub: ["Input","Dropdown"], affect: "textInsetMarginHorizontal",
        title: "Inset Text Horizontal Margin", text: "Shift the position of the inset text horizontally from its position.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Group", affect: "itemArrangement",
        title: "Item Arrangement", text: "Arrange this here...",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    {name: "Row", value: "row"},
                    {name: "Column", value: "column"}
                ]}
        ]
    },
    {
        main: "Group", affect: "itemAlignment",
        title: "Item Alignment", text: "Align this here...",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {affect: "options", value: [
                    {name: "Left", value: "left"},
                    {name: "Center", value: "center"},
                    {name: "Right", value: "right"}
                ]}
        ]
    },
    {
        main: "List", affect: "listOptions",
        title: "List Options", text: "Choose the list's options here",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "allow", value: true    }
        ]
    },
    {
        main: "List", affect: "listStyle",
        title: "List Style", text: "Choose list style",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    {name: "Normal", value: "Normal"},
                    {name: "Tag", value: "Tag"}
                ]}
        ]
    },
    {
        main: "List", affect: "listSpacingHorizontal",
        title: "List Option Spacing: Horizontal", text: "Shift the option spacing horizontally.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "List", affect: "listSpacingVertical",
        title: "List Option Spacing: Vertical", text: "Shift the option spacing vertically.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "List", affect: "listOptionAlignment",
        title: "List Option Alignment", text: "How to align the list options.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    {name: "Row", value: "Row"},
                    {name: "Column", value: "Column"}
                ]}
        ]
    },
    {
        main: "Bar", affect: "barLineThickness",
        title: "Bar Line Thickness", text: "Thickness of the line.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Bar", affect: "barTextSize",
        title: "Bar Text Size", text: "The text size of the bar",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Bar", affect: "barValueValue",
        title: "Bar Value", text: "The numeric value of the bar's value.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Bar", affect: "barValueText",
        title: "Bar Text", text: "Text of the bar's main value.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Bar", affect: "barLeftValue",
        title: "Bar Left Value", text: "The numeric value of the bar's minimum value",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Bar", affect: "barLeftText",
        title: "Bar Left Text", text: "The left-side text",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Bar", affect: "barRightValue",
        title: "Bar Right Value", text: "The numeric value of the bar's minimum value.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Bar", affect: "barRightText",
        title: "Bar Right Text", text: "The right-side text",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Bar", affect: "barTextPosition",
        title: "Bar Text Position", text: "Where to align the text",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    "Top","Center","Bottom"
                ]}
        ]
    }
];


const stylesList = [
    {
        main: "Text",
        affect: "textAlign",
        title: "Align Text",
        text: "Align text to",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    {name: "Left", value: "left"},
                    {name: "Center", value: "center"},
                    {name: "Right", value: "right"},
                ]}
        ]
    },
    {
        main: "List",
        affect: "listStyleType",
        title: "List Prefix",
        text: "Change the list prefix (with Normal Lists).",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: [
                    {name: "Bullet", value: "bullet"},
                    {name: "Circle", value: "circle"},
                    {name: "Square", value: "square"},
                    {name: "Roman (Upper)", value: "upper-roman"},
                    {name: "Roman (Lower)", value: "lower-roman"},
                    {name: "Alphabet (Upper)", value: "upper-alpha"},
                    {name: "Alphabet (Lower)", value: "lower-alpha"}
                ]}
        ]
    },
    {
        main: ["All"],
        affect: "backgroundColor",
        title: "Background Color",
        text: "Change the background color",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["All"],
        affect: "width",
        title: "Width",
        text: "Change the width of the container",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["All"],
        affect: "height",
        title: "Height",
        text: "Change the height of the container",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["All"],
        affect: "padding",
        title: "Padding",
        text: "Change the padding between the container and module.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["All"],
        affect: "margin",
        title: "Margin",
        text: "Change the margin between the container and other elements.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["Text","Input"],
        affect: "fontSize",
        title: "Font Size",
        text: "The point size of the text",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: ["Text","Input"],
        affect: "color",
        title: "Font Color",
        text: "The color of the text",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: ["Text","Input"],
        affect: "fontFamily",
        title: "Font Family",
        text: "The font family of the text",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: ["All"],
        affect: "borderThickness",
        title: "Border Width",
        text: "Change the border thickness (set with border type and color)",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["All"],
        affect: "borderStyle",
        title: "Border Type",
        text: "Change the border type (set with border width and color)",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {affect: "options", value: [
                    {name: "Normal", value: "solid"},
                    {name: "Dotted", value: "dotted"},
                    {name: "Dashed", value: "dashed"}
                ]}
        ]
    },
    {
        main: ["All"],
        affect: "borderColor",
        title: "Border Color",
        text: "Change the border color (set with border type and width)",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
    {
        main: ["All"],
        affect: "borderRadius",
        title: "Roundness",
        text: "Change the roundness of the edges (most visible with Border)",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    },
            {affect: "placeholder", value: "Valid Measurements: 'px' 'em' 'rem'"}
        ]
    },
]

const blueprintOptions = [
    "option",
    {icon: "save", text: "Save Story", f: function(){
            if (mcd().getData){
            let bp = mcd().getData();
            storyList[storyList.findIndex(x => x.id === bp.id)] = bp;
            }
        }},
    {icon: "move_item", text: "Exit (without saving)", f: function(){
            mcd().exit()
        }},
    "add",
    {icon: "text_format", text: "Text", f: function(){
            let m = { name: "Text", type: "Text",
                id: randomID(mcd().list()),
                modifiers: [
                    {affect: "innerText", value: "Text Here"}
                ],
                styles: [
                    {affect: "fontSize", value: "32px"}
                ]
            }
            mcd().left.addItem(m)
        }},
    {icon: "folder", text: "Group", f: function(){
            let m = { name: "Group", type: "Group",
                id: randomID(mcd().list()),
                modifiers: [],
                styles: [],
                items: []
            }
            mcd().left.addItem(m)
        }},
    {icon: "extension", text: "Module", f: function(){
            let m = {
                name: "Module", type: "Module",
                id: randomID(mcd().list()),
                modifiers: [
                    {affect: "moduleType", value: "Input"},
                    {affect: "type", value: "Text"}
                ],
                styles: [
                    {affect: "width", value: "100%"},
                    {affect: "padding", value: "0.5rem 1rem"},
                    {affect: "fontSize", value: "1rem"},
                    {affect: "borderThickness", value: "2px"},
                    {affect: "borderStyle", value: "solid"},
                    {affect: "borderColor", value: "black"}
                ]
            }
            mcd().left.addItem(m)
        }}
]

const charSheetOptions = [
    "option",
    {icon: "save", text: "Save Story", f: function(){
            if (mcd().getData){
                let bp = mcd().getData();
                storyList[storyList.findIndex(x => x.id === bp.id)] = bp;
            }
        }},
    {icon: "move_item", text: "Exit (without saving)", f: function(){
            mcd().exit()
        }},
    "add",
    {icon: "text_format", text: "Text", f: function(){
            let m = { name: "New Text", type: "Text",
                id: randomID(mcd().list()),
                modifiers: [
                    {affect: "innerText", value: "Text Here"}
                ],
                styles: [
                    {affect: "fontSize", value: "32px"}
                ]
            }
            mcd().left.addItem(m)
        }},
    {icon: "folder", text: "Group", f: function(){
            let m = { name: "New Group", type: "Group",
                id: randomID(mcd().list()),
                modifiers: [],
                styles: [],
                items: []
            }
            mcd().left.addItem(m)
        }},
    {icon: "format_list_bulleted", text: "List", f: function(){
            let m = { name: "New List", type: "List",
                id: randomID(mcd().list()),
                modifiers: [],
                styles: [],
                items: []
            }
            mcd().left.addItem(m)
    }},
    {icon: "linear_scale", text: "Bar", f: function(){
            let m = { name: "New Bar", type: "Bar",
                id: randomID(mcd().list()),
                modifiers: [
                    {affect: "barLineThickness", value: "8px"},
                    {affect: "barLineColor", value: "black"},
                    {affect: "barValueText", value: "5"},
                    {affect: "barValueValue", value: "5"},
                    {affect: "barLeftValue", value: "1"},
                    {affect: "barLeftText", value: "Left"},
                    {affect: "barRightValue", value: "10"},
                    {affect: "barRightText", value: "Right"},
                    {affect: "barTextPosition", value: "Top"},
                    {affect: "barLineMargin", value: "8px"}
                ],
                styles: [],
                items: []
            }
            mcd().left.addItem(m)
        }}
]


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

const contextMenu = [
    { icon: "move_up", text: "Move Up", f: function(id){
            let o = mcd().list();
            let p = get_index("id",id,o,"items");
            let item = mcd().getItemData(id); let ind = p.pop();
            if (ind !== 0){
                o = insertItemAfter(ind-1,p,item,o,"items")
                mcd().saveList(o);
                mcd().refresh()
            }
        }},
    { icon: "move_down", text: "Move Down", f: function(id){
            let o = mcd().list();
            let p = get_index("id",id,o,"items");
            let item = mcd().getItemData(id);
            let ind = p.pop();
                o = insertItemAfter(ind+1,p,item,o,"items")
                mcd().saveList(o);
                mcd().refresh()
        }},
    { icon: "delete", text: "Delete Item", f: function(id){
            mcd().deleteItem(id)
        }, style: "color: red;"}
]
