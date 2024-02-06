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
            name: "New Text", type: "Text",
            id: "ADSC3242",
            modifiers: [
                {affect: "innerText", value: "Text Here"}
            ],
            styles: [
                {affect: "fontSize", value: "32px"}
            ]
        },
        {
            name: "Name of Something", type: "Module",
            id: "A1B2C3D4",
            modifiers: [
                {affect: "moduleType", value: "Input"},
                {affect: "type", value: "Text"},
                {affect: "max", value: "10"},
                {affect: "min", value: "3"}
            ],
            styles: [
                {affect: "width", value: "200px"},
                {affect: "padding", value: "0.5rem 1rem"},
                {affect: "fontSize", value: "32px"},
                {affect: "borderThickness", value: "2px"},
                {affect: "borderStyle", value: "solid"},
                {affect: "borderColor", value: "green"}
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
