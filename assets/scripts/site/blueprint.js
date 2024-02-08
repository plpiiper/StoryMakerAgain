function createBlueprintDiv(parent,obj){
    let p = pd(parent);
    let div = append(cre("div"),p); div.id = "blueprintDiv";
        div.exit = function(){div.remove();}
        div.dataset.id = obj.id;

    let l = append(cre("div","left"),div);
        let lis = append(cre("div"),l); lis.id = "blueprintList";
        lis.refresh = function() {
            removeChildren(lis)
            addArrayChildren(lis,bpItemDiv,div.getData().blueprint)
        }
        lis.generateID = function(){
            return randomID(lis.list())
        }
        lis.addItem = function(obj){
            let d = div.getData();
            d.blueprint.push(obj);
            div.saveData(d);
            lis.appendChild(bpItemDiv(obj))
            div.preview()
        }

        let lm = append(cre("div"),l); lm.id = "blueprintMenu";
            let btn = append(cre("div"),lm);
                append(ic("menu"),btn);
            let hv = append(createOptionHoverList(blueprintOptions),lm)

    let r = append(cre("div","right"),div);
        r.refresh = function(){
            removeChildren(r);
            r.addItem(div.list())
        }
        r.addItem = function(itemObj,p){

            if (Array.isArray(itemObj)){for (var i=0;i<itemObj.length;i++){r.addItem(itemObj[i])}; return}

            if (itemObj.type === "Module"){
                let type = findOption(itemObj,'modifiers','affect','moduleType');
                if (type){
                     append(window[modList.Module.types[type.value].f](itemObj),p ? p : r);
                }
            } else if (itemObj.type === "Text"){
                    append(window[modList.Text.f](itemObj),p ? p : r);
            } else if (itemObj.type === "Group"){
                    let elem = append(window[modList.Group.f](itemObj),p ? p : r);
                if (itemObj.items){
                    for (var i=0;i<itemObj.items.length;i++){
                        r.addItem(itemObj.items[i],elem)
                    };
                }

            } else {return "Err"}
        }
        r.getList = function(){
            let ml = Array.from(r.childNodes).filter(x => x.classList.contains("moduleContainer")).map(x => x= {id: x.dataset.id, value: x.getValue()})
            return ml
        }



    div.dataset.data = JSON.stringify(obj);
    div.getData = function(){return JSON.parse(div.dataset.data);}
    div.saveData = function(obj){
        div.dataset.data = JSON.stringify(obj);
    }
    div.refresh = function(array){
        if (array){div.saveList(array);}
        lis.refresh()
        r.refresh();
    }
    div.saveList = function(array){
        let d = div.getData();
        d.blueprint = array;
        div.saveData(d)
    }
    div.refreshItem = function(newItem,id){
        let d = div.getData();
        d.blueprint = save_item(id,newItem,div.list(),"items")
        div.saveData(d);
        div.preview()
    }
    div.findItem = function(id){
        return div.goTo(get_index("id",id,div.list(),"items"))
    }
    div.getItemData = function(id){
        return getItemFromList(id,div.list())
    }
    div.goTo = function(index){
        if (!index){return -1}
        if (index.length === 1){return Array.from(lis.childNodes)[index[0]]}
        let p = lis;
        for (var i=0; i<index.length; i++){
            if (p.classList.contains("bpItemDiv") && p.getItem && p.getItem().type === "Group"){
                p.open();
                p = p.nextElementSibling;
            } else {
                p = p.childNodes[index[i]];
                if (p !== undefined && index.length-1 === i && p.getItem && p.getItem().type === "Group"){p.open()}
            }
            // FIX THIS SOMEHOW???
        }
        return p
    }
    div.list = function(){
        return div.getData().blueprint;
    };
    div.preview = function(){
        r.refresh()
    }


    div.right = r;
    div.left = lis;
    lis.refresh()


    div.ondragover = function(event){event.preventDefault();}
    div.ondrop = modDragDrop;


    return div
}

function bpItemDiv(obj){
    let div = cre("div","bpItemDiv");
        let icon = ic(modList[obj.type].icon);
            append(icon,div);
        let name = append(cre("span","bpItemName"),div);
            name.innerText = obj.name;

    div.getID = function(){return obj.id}
    div.getItem = function(){
        return getItemFromList(div.getID(),pd("blueprintDiv").list())
    }
    div.refreshName = function(){
        name.innerText = div.getItem().name
    }
    name.onclick = function(){
        let ppd = popupcontainer("content","popupModuleSettings");
        if (ppd){
            ppd.saveData(obj.id);
            let b = popupcontent("bp",ppd);
        }
        // popupcontainer("content","bp",div.getItem(),div)
    }


    /*

        DRAGGING AND DROPPING

     */
     div.draggable = true;
     div.ondragstart = modDragStart;

    // DRAG/DROP functions
    div.ondrop = modDragDrop;

if (obj.type === "Group"){
    div.ondragover = function(event){event.preventDefault();}

    div.ondblclick = function(){
        if (div.isOpen){
            div.isOpen() ? div.close() : div.open()
        }
    }
    div.open = function(){
        if (div.nextElementSibling === null || !div.nextElementSibling.classList.contains("bpItemBodyDiv")) {
            let body = cre("div", "bpItemDivBody");
            div.after(body);
                body.getItem = div.getItem;
                for (var i=0;i<obj.items.length;i++){
                    append(bpItemDiv(obj.items[i]),body);
                }
            body.getID = div.getID;
            body.getItem = div.getItem;
            body.ondrop = modDragDrop;
        }
    }
    div.close = function(){
        if (div.isOpen()){div.nextElementSibling.remove()}
    }
    div.isOpen = function(){
        return (div.nextElementSibling && div.nextElementSibling.classList.contains("bpItemDivBody"))
    }
}

    div.getIndex = function(){
        return get_index("id",obj.id,pd("blueprintDiv").list(),"items")
    }

    return div;
}




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
let main = pd("blueprintDiv")
if (type === "bp"){
    // Modifier Options
    let id = div.getData();
    div.rename(main.getItemData(id).type + " Options");


    let inp = cInput({
    "name": "Module", "type": "Module",
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
        {   "affect": "borderColor", "value": "green"     },
        {   "affect": "borderRadius", "value": "5rem"     }
    ]
})
        inp.setValue(main.getItemData(id).name);
        inp.setFunction("input",function(){
            let it = main.getItemData(id)
            it.name = inp.getValue();
            main.refreshItem(it,it.id)
            main.findItem(id).refreshName()
        })
    div.body.appendChild(inp)

    let cdt = {
        Module: ["popupSelectModuleOptions","bpSelectModule","modifiers"],
        Style: ["popupSelectStyleOptions","bpSelectStyle","styles"]
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
} else if (type === "bpSelectStyle"){
    lpOptionList(div,stylesList,"styles","popupSelectStyleOptions")

}else {console.log("huh?"); return 1}

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
    let types = [];
    types.push(mod.type);
    if (mod.type === "Module"){
        let r = findOption(mod,'modifiers','affect','moduleType');
        if (r){types.push(r.value);}
        if (r.value === "Input"){
            let q = findOption(mod,'modifiers','affect','type');
            if (q){types.push(q.value);}
        }
    }

    function filterFunc(x){
        if (x.main.includes("All")){return true}
        if (x.main === types[0]){return true}

        if (types.length === 1){return x.main === types[0]}
        else if (types.length === 2){
            return x.main === types[1]
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
    let data = getItemFromList(div.getData(),pd("blueprintDiv").list());

    let recs = getOptionListRecs(optionList,data)
    let others = optionList.filter(x => recs.findIndex(y => y.affect === x.affect) === -1);

    // inverse of recs
    let sl = append(cre("div","bpmpList"), div.body);

        let rt = append(cre("h2","bpmpTitle"),sl);
        rt.innerText = "recommended";
        for (var i=0; i<recs.length; i++){
            sl.appendChild(bpModifierDiv(recs[i],data[div.keyword]));
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
            let dt = getItemFromList(div.getData(),pd("blueprintDiv").list());
            dt[type] = sl.getValue();
            pd("blueprintDiv").refreshItem(dt,dt.id);
            pd("blueprintDiv").preview()
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
        // INPUT DIFFERENT TYPES
        let inp;
        let type = findOption(mod,'modifiers','affect','moduleType');

        let inpObj = {
            type: type.value,
            styles: mod.styles ? mod.styles : [],
            modifiers: mod.modifiers ? mod.modifiers.map(x => x) : []
        }
        if (match){addModuleOption(inpObj,"defaultValue",match.value)}

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
        return {affect: mod.affect, value: div.getValue()}
    }
    div.checked = function(){
        return ck.getValue();
    }

    return div
}