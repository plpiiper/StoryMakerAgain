function createBlueprintDiv(parent,obj){
    let p = pd(parent);
    let div = append(cre("div"),p); div.id = "blueprintDiv";
        div.exit = function(){div.remove();}
        div.dataset.id = obj.id;

    let l = append(cre("div","left"),div);
        let lis = append(cre("div"),l); lis.id = "blueprintList";
        lis.refresh = function() {
            addArrayChildren(lis,bpItemDiv,div.getData().blueprint)
        }
        lis.generateID = function(){
            return randomID(lis.list())
        }
        lis.addItem = function(obj){
            lis.appendChild(bpItemDiv(obj))
            div.saveList()
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
        r.addItem = function(itemObj){
            if (Array.isArray(itemObj)){for (var i=0;i<itemObj.length;i++){r.addItem(itemObj[i])}; return}

            if (itemObj.type === "Module"){
                let type = findOption(itemObj,'modifiers','affect','moduleType');
                if (type){
                    let elem = window[modList.Module.types[type.value].f](itemObj);
                    r.appendChild(elem)
                }
            } else if (itemObj.type === "Text"){
                let elem = window[modList.Text.f](itemObj);
                r.appendChild(elem)
            } else if (itemObj.type === "Group"){

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
    div.refresh = function(obj,id){
        div.saveData(obj);
        lis.refresh(id)
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
        let p = lis.childNodes;
        for (var i=0; i<index.length; i++){
            p = lis.childNodes[index[i]];
            if (p.getItem().type === "Group"){
                if (i === index-1){return p}
                p.open();
                }
            else {return p}
        }
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
    return div
}

function bpItemDiv(obj){
    let div = cre("div","bpItemDiv");
        append(ic(modList[obj.type].icon),div);
        let input = append(cre("input","bpItemName"),div);
            input.value = obj.name;
            input.oninput = function(){
                let it = div.getItem();
                    it.name = input.value;
                div.refreshItem(it,obj.id)
            }

    // if folder
    input.onclick = function(){
        selectElem("selectedItem",div)
        let ppd = popupcontainer("content","popupModuleSettings");
        if (ppd){
            ppd.saveData(obj.id);
            let b = popupcontent("bp",ppd);
        }
        // popupcontainer("content","bp",div.getItem(),div)
    }


    div.getID = function(){return obj.id}
    div.getItem = function(){
        return getItemFromList(div.getID(),pd("blueprintDiv").list())
    }


    div.dataset.data = JSON.stringify(obj);
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


function lpOptionList(div,optionlist,type,id){
    let data = getItemFromList(div.getData(),pd("blueprintDiv").list());

    let recs = optionlist.filter(x => x.main.includes(data.type) || x.main === "All");
    if (data.subtype){recs = recs.filter(x => x.sub ? x.sub.includes(data.subtype): false)}
    let others = optionlist.filter(x => !x.main.includes(data.type) && x.main !== "All");
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
            modifiers: mod.modifiers ? mod.modifiers : []
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