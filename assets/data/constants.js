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
        icon: "folder"
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
                    }
                ],
                f: "cDropdown"
            },
            Input: {
                modifiers: [
                    {
                        affect: "defaultValue",
                        funcName: "setValue"
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
    }
}

const modifiersList = [
    {
        main: "Module",
        affect: "moduleType",
        title: "Module Type",
        text: "Choose the module type",
        type: "Module",
        modifiers: [
            {   affect: "options", value: ["Input","Dropdown"]  },
            {   affect: "defaultValue", value: "Input"  },
            {   affect: "moduleType", value: "Dropdown"    }
        ]
    },
    {
        main: "Input",
        affect: "type",
        title: "Input Type",
        text: "Change the maximum number the input can be inputted.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Input",
        sub: ["Range","Number"],
        affect: "max",
        title: "Max",
        text: "Change the maximum number the input can be inputted.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Input",
        sub: ["Range","Number"],
        affect: "min",
        title: "Min",
        text: "Change the minimum number the input can be inputted.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Number"    }
        ]
    },
    {
        main: "Input",
        affect: "placeholder",
        title: "Placeholder",
        text: "This is a placeholder...",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Dropdown",
        affect: "dataset-allow",
        title: "Allow Input",
        text: "Allow user to input their own options.",
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
        main: "Dropdown",
        affect: "options",
        title: "Options",
        text: "Allow user to choose options. Pair with 'Allow Input' to give input suggestions.",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "dataset-allow", value: true    }
        ]
    },
    {
        main: "Text",
        affect: "innerText",
        title: "Text",
        text: "The text inside the text element",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Input",
        affect: "dataset-textInsetPosition",
        title: "Inset Text Position",
        text: "Have text inside area?",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {   affect: "options", value: ["Top","Bottom"]  }
        ]
    },
    {
        main: "Input",
        affect: "dataset-textInsetText",
        title: "Inset Text",
        text: "Have text inside area?",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Input"    },
            {   affect: "type", value: "Text"    }
        ]
    },
    {
        main: "Group",
        affect: "dataset-itemArrangement",
        title: "Item Arrangement",
        text: "Arrange this here...",
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
        main: "Group",
        affect: "dataset-itemAlignment",
        title: "Item Alignment",
        text: "Align this here...",
        type: "Module",
        modifiers: [
            {   affect: "moduleType", value: "Dropdown"    },
            {affect: "options", value: [
                    {name: "Row", value: "row"},
                    {name: "Column", value: "column"}
                ]}
        ]
    }
];

const stylesList = [
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
]

const blueprintOptions = [
    "option",
    {icon: "save", text: "Save Story", f: function(){
            console.log("save_story")
        }},
    {icon: "move_item", text: "Exit (without saving)", f: function(){
            pd("blueprintDiv").exit()
        }},
    "add",
    {icon: "text_format", text: "Text", f: function(){
            let m = { name: "Text", type: "Text",
                id: randomID(pd("blueprintDiv").left.list()),
                modifiers: [
                    {affect: "innerText", value: "Text Here"}
                ],
                styles: [
                    {affect: "fontSize", value: "32px"}
                ]
            }
            pd("blueprintDiv").left.addItem(m)
        }},
    {icon: "folder", text: "Group", f: function(){
            let m = { name: "Group", type: "Group",
                id: randomID(pd("blueprintDiv").left.list()),
                modifiers: [
                ],
                styles: [
                ],
                items: []
            }
            pd("blueprintDiv").left.addItem(m)
        }},
    {icon: "extension", text: "Module", f: function(){
            console.log("add_module")
        }}
]