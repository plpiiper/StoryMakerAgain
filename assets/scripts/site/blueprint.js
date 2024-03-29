function popupcontainer(parent,id){
    if (pd(id) !== null){return}
    // do not create a new one if exists

    let c = coverDiv(parent);
    let div = append(cre("div", "largePopupDiv right"),c);
        div.id = id;
    div.exit = function(){c.remove();}
    div.getData = function(name){
        if (name){
            return typeof div.dataset[name] === "string" ? div.dataset[name] : JSON.parse(div.dataset[name])
        }
        return typeof div.dataset.data === "string" ? div.dataset.data : JSON.parse(div.dataset.data)
    };
    div.saveData = function(obj){
        if (typeof obj === "string"){div.dataset.data = obj;}
        else {div.dataset.data = JSON.stringify(obj);}
    };


    // TITLE
    let title = append(cre("h2","lpHeader"),div);
    div.rename = function(name){title.innerText = name;}
    // BODY
    let body = append(cre("div","lpBody"),div);
    // TEXT
    let ext = append(cre("span","lpExit"),div);
    ext.innerText = "EXIT";
    ext.onclick = div.exit;

    div.body = body;
    return div
}

function popupcontent(type,div){
let main = mcd()
if (type === "bp"){
    // Modifier Options
    let id = div.getData();
    div.rename(main.getItemData(id).type + " Options");


    let inp = cInput({
    "type": "Module",
    "modifiers": [
        {   "affect": "moduleType", "value": "Input"  },
        {   "affect": "type",   "value": "Text" },
        {   "affect": "textInsetText",  "value": "Name" },
        {   "affect": "textInsetPosition",  "value": "Bottom" },
        {   "affect": "textInsetMarginHorizontal",  "value": "1rem" },
        {   "affect": "textInsetMarginVertical",  "value": "2px" }
    ],
    "styles": [
        {   "affect": "width",  "value": "100%"  },
        {   "affect": "padding", "value": "1rem 2rem"  },
        {   "affect": "fontSize","value": "1.5rem" },
        {   "affect": "borderThickness", "value": "2px"  },
        {   "affect": "borderStyle", "value": "solid"    },
        {   "affect": "borderColor", "value": "black"     },
        {   "affect": "borderRadius", "value": "5rem"     }
    ]
})
        inp.setValue(main.getItemData(id).name);
        inp.setFunction("input",function(){
            let it = main.getItemData(id)
            it.name = inp.getValue();
            main.refreshItem(it,it.id)
            main.findItem(it.id).refreshName()
        })
    div.body.appendChild(inp)

    let cdt = {
        Module: ["popupSelectModuleOptions","bpSelectModule","modifiers"],
        Style: ["popupSelectStyleOptions","bpSelectStyle","styles"],
        Preset: ["popupSelectPresetOptions","bpSelectPreset","presets"]
    }
    for (key in cdt){
        let c = cdt[key]
        let og = append(lpGroupBtn(key, function(){
            let ppd = popupcontainer("content",c[0]);
            if (ppd){
                ppd.saveData(id);
                ppd.keyword = c[2]
                popupcontent(c[1],ppd)
            }
        }), div.body)
    }
}
else if (type === "bpSelectModule"){
    lpOptionList(div,modifiersList,"modifiers","popupSelectModuleOptions")
}
else if (type === "bpSelectStyle") {
    lpOptionList(div, stylesList, "styles", "popupSelectStyleOptions")
}
else if (type === "bpSelectPreset"){
    let sp = append(cre("div","popupPreviewText"),div.body); sp.innerText = "Preview, Change Modules, Change Styles";
    let btn = append(cre("button","popupPreviewBtn"),div.body);
    btn.innerText = "Add Current Item (" + mcd().getItemData(div.getData()).name + ") as a Preset"
    btn.onclick = function(){
        let item = mcd().getItemData(div.getData());
        let preset = {
            name: item.name, id: randomID(presetList),
            modifiers: item.modifiers, styles: item.styles
        }
        presetList.push(preset);
        saveLS()
        div.exit();
    }
    lpPresetList(div, presetList, "popupSelectStyleOptions");
}
else if (type === "presetPreview"){
    div.rename("Preview Preset")
    let preset = presetList.find(x => x.id === JSON.parse(div.getData()).id);
    let dp = cDropdown({
            type: "Module",
            modifiers: [
                {affect: "moduleType", value: "Dropdown"},
                {
                    affect: "options", value: [
                        {name: "Blueprint: Input", value: ["Module","Input"]},
                        {name: "Blueprint: Dropdown", value: ["Module","Dropdown"]},
                        {name: "Text", value: "Text"},
                        {name: "Group", value: "Group"},
                        {name: "Char Sheet: List", value: "List"},
                        {name: "Char Sheet: Bar", value: "List"}

                    ]
                },
                {affect: "textInsetText", value: "Choose Type"},
                {affect: "textInsetPosition", value: "Bottom"}
            ],
            styles: [
                {affect: "margin", value: "1rem 0 2rem 0"}
            ]
        });
    div.body.appendChild(dp)
    dp.setFunction("click",function(){
        let t = dp.getValue();
        let tobj = {
            type: t.includes("Module") ? "Module" : t,
            modifiers: [],
            styles: [],
            items: t === "Group" ? [] : undefined
        }; if (t.includes("Module")){addModuleOption(tobj,"modifiers","moduleType",JSON.parse(t)[1])}
        prev.preview(tobj,preset)
    });
    let listDiv = append(cre("div","previewPresetList"),div.body);
        let sm = append(cre("div","popupPreviewText"),listDiv); sm.innerText = "Modifiers";
        for (var i=0; i<preset.modifiers.length;i++){
            let p = preset.modifiers[i]; let c = getFriendlyName(modifiersList,"affect",p.affect); if (c) {
                let pdiv = append(cre("div","pplDiv"),listDiv);
                pdiv.innerText = modifiersList.find(x => x.affect === p.affect).title + ": " + p.value;
            }
        }
        let st = append(cre("div","popupPreviewText"),listDiv); st.innerText = "Styles";
        for (var i=0; i<preset.styles.length;i++){
            let p = preset.styles[i]; let c = getFriendlyName(stylesList,"affect",p.affect); if (c) {
                let pdiv = append(cre("div","pplDiv"),listDiv);
                pdiv.innerText = stylesList.find(x => x.affect === p.affect).title + ": " + p.value;
            }
        }
    let prev = append(cre("div","previewPresetPreviewDiv"),div.body);
        prev.preview = function(selectedObj,presetObj){
            removeChildren(prev);
            for (var i=0; i<presetObj.modifiers; i++){  let mod = presetObj.modifiers[i];
                addModuleOption(selectedObj,"modifiers",mod.affect,mod.value);  }
            selectedObj.styles = presetObj.styles;
            append(cCreate(selectedObj),prev);
        }

}
else if (type === "sv") {
    div.rename("Choose Blueprint Module as Value");
    let item = main.getItemData(pd("popupModuleSettings").dataset.data);
    let search = findOption(item,"modifiers","affect",div.modifier.affect);

    let sp = append(cre("h3","csmpHeader"),div.body); sp.innerHTML = "<strong>Option: </strong>" + div.modifier.title;
    let lp = append(cre("h3","csmpHeader"),div.body); lp.innerHTML = "<strong>Module Picked:</strong> " + (search && search.defaultValue ? (getItemFromList(search.defaultValue,mcd().getData().blueprint).name + " (" + search.defaultValue + ")"): "None");
    let clear = append(cre("button","csmpBtn"),div.body); clear.innerText = "Deselect Module";
        clear.onclick = function(){
            div.btn.clear();   div.refreshFunc();   div.exit();
        }

        for (var i=0; i<main.getModules("blueprint").length; i++){
            let gm = main.getModules("blueprint")[i];   let m = append(csModPickerDiv(gm),div.body);
            m.btn.onclick = function(){
                div.btn.setValue(gm.id);   div.refreshFunc();   div.exit();
        }}
}
else if (type === "charSettings"){
    let id = div.getData();
    div.rename("Character Options")
    let inp = cInput({
        "type": "Module",
        "modifiers": [
            {   "affect": "moduleType", "value": "Input"  },
            {   "affect": "type",   "value": "Text" },
            {   "affect": "textInsetText",  "value": "Name" },
            {   "affect": "textInsetPosition",  "value": "Bottom" },
            {   "affect": "textInsetMarginHorizontal",  "value": "1rem" },
            {   "affect": "textInsetMarginVertical",  "value": "2px" }
        ],
        "styles": [
            {   "affect": "width",  "value": "100%"  },
            {   "affect": "padding", "value": "1rem 2rem"  },
            {   "affect": "fontSize","value": "1.5rem" },
            {   "affect": "borderThickness", "value": "2px"  },
            {   "affect": "borderStyle", "value": "solid"    },
            {   "affect": "borderColor", "value": "black"     },
            {   "affect": "borderRadius", "value": "5rem"     }
        ]
    })
    inp.setValue(main.getItemData(id).name);
    inp.setFunction("input",function(){
        let it = main.getItemData(id); it.name = inp.getValue();
        main.refreshItem(it,it.id); main.findItem(id).refreshName()
    })
    div.body.appendChild(inp)
}
else {console.log("huh?"); return 1}

return div
}


function lpGroupBtn(name,f){
    let lmo = cre("div","lpModifierGroup");
    let lmoBtn = append(cre("button","lpModifierGroupBtn"),lmo);
        lmoBtn.innerText = name + " Options";
        lmoBtn.onclick = f;
    return lmo;
}


function getOptionListRecs(optionlist,mod){
    let types = getModType(mod)

    function filterFunc(x){
        if (x.main.includes("All")){return true}
        if (x.main === types[0]){return true}

        if (types.length === 1){return x.main.includes(types[0])}
        else if (types.length === 2){
            return x.main.includes(types[1])
        } else {
            if (x.main === types[1]){
                if (!x.sub){return true}
                else if (x.sub && x.sub.includes(types[2])){
                    return true
                } else {return false}
            } else {return false}
        }
    }



    return optionlist.filter(x => filterFunc(x))
}



function lpOptionList(div,optionList,type,id){
    let data = getItemFromList(div.getData(),mcd().list());

    let recs = getOptionListRecs(optionList,data);
    let others = optionList.filter(x => recs.findIndex(y => y.affect === x.affect) === -1);
    let all = optionList.filter(x => x.main.includes("All"));
    recs = recs.filter(x => !x.main.includes("All"))

    // inverse of recs
    let sl = append(cre("div","bpmpList"), div.body);

        let rt = append(cre("h2","bpmpTitle"),sl);
        rt.innerText = "recommended";
        for (var i=0; i<recs.length; i++){
            sl.appendChild(bpModifierDiv(recs[i],data[div.keyword]));
        }

        let al = append(cre("h2","bpmpTitle"),sl);
        al.innerText = "compatible";
        for (var i=0; i<all.length; i++){
            sl.appendChild(bpModifierDiv(all[i],data[div.keyword]));
        }

        let it = append(cre("h2","bpmpTitle"),sl);
        it.innerText = "incompatible";
        for (var i=0; i<others.length; i++){
            sl.appendChild(bpModifierDiv(others[i],data[div.keyword]));
        }

        sl.getValue = function(){
            return Array.from(sl.childNodes).filter(x => x.classList.contains("bpModifierDiv") && x.checked()).map(x => x.getData())
        };
        sl.refresh = function(){
            let dt = getItemFromList(div.getData(),mcd().list());
            dt[type] = sl.getValue();
            mcd().refreshItem(dt,dt.id);
            mcd().preview()
        }
}

function bpModifierDiv(mod,obj){
    let match = obj ? obj.find(x => x.affect === mod.affect) : false;
    let div = cre("div","bpModifierDiv");
    function inputFunc(){
        div.parentNode.refresh();
    }
    if (match) {div.dataset.data = JSON.stringify(match);}


    let top = append(cre("div","top"), div);
        let ck = append(cCheck({
            type: "Check",
            innerStyle: [], outerStyle: [],
            styles: [   {affect: "margin", value: "0 1rem 0 0"}   ],
            styleType: ["circle","circle"],
            styleColor: [["black","black"],["black","transparent"]],
            fill: ["black","transparent"],
            modifiers: [
                {affect: "defaultValue", value: match ? true : false},
                {affect: "moduleType", value: "Check"}
            ],
            size: "2rem"
        }),top);
            ck.setFunction("click",inputFunc)

        let title = append(cre("span","bpmdTitle"),top);
            title.innerText = mod.title;
            title.onclick = function(){   ck.onclick();    }

    let bot = append(cre("div","bot"),div);
        // if in Charsheet
        let vtbtn;
        if (mcd() && mcd().id === "charSheetDiv"){
            vtbtn = cre("button","bpmdVarBtn");
                append(ic("variable_insert"),vtbtn);
                vtbtn.getValue = function(){
                    return vtbtn.dataset.data
                }
                vtbtn.setValue = function(value){vtbtn.dataset.data = value}
                vtbtn.clear = function(){vtbtn.removeAttribute('data-data')}
                vtbtn.onclick = function(){
                    let ppd = popupcontainer("content","popupSelectVariable");
                    if (ppd){
                        ppd.modifier = mod;
                        ppd.btn = vtbtn;
                        ppd.refreshFunc = inputFunc;
                        popupcontent("sv",ppd)
                    }}
            bot.appendChild(vtbtn)
            if (match){if (match.defaultValue){vtbtn.setValue(match.defaultValue)}}
        }


        // INPUT DIFFERENT TYPES
        let inp;
        let type = findOption(mod,'modifiers','affect','moduleType');

        let inpObj = {
            type: type.value,
            styles: mod.styles ? mod.styles : [],
            modifiers: mod.modifiers ? mod.modifiers.map(x => x) : []
        }
        if (match){addModuleOption(inpObj,"modifiers","defaultValue",match.value)}

        if (type.value === "Input"){
            inp = cInput(inpObj);
            inp.setFunction("input",inputFunc);
        } else if (type.value === "Dropdown"){
            inp = cDropdown(inpObj);
            inp.setFunction("click",inputFunc);
        } else if (["Boolean","Check"].includes(type.value)){
            inpObj.innerStyle = [];
            inpObj.outerStyle = [];
            inpObj.styleType = ["square","square"];
            inpObj.styleColor = [["black","black"],["black","transparent"]];
            inpObj.fill = ["black","transparent"]
            inp = cCheck(inpObj)
            inp.setFunction("click",inputFunc);
        }
        else {return}


        bot.appendChild(inp);

        let desc = append(cre("span","bpmdDesc"), bot);
        desc.innerText = mod.text;



    div.getValue = function(){
         return inp.getValue()
    }
    div.getData = function(){
        return {affect: mod.affect, value: div.getValue(), defaultValue: (vtbtn && vtbtn.getValue ? vtbtn.getValue() : undefined)}
    }
    div.checked = function(){
        return ck.getValue();
    }

    return div
}
