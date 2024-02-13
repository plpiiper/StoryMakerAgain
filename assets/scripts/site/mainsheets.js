function createSheetsDiv(parent,obj,type){
    let ti;
    if (type === "blueprint"){
        ti = {
            id: "blueprintDiv",
            affect: "blueprint",
            menuOptions: blueprintOptions
        }
    }
    else if (type === "charsheet") {
        ti = {
            id: "charSheetDiv",
            affect: "charsheet",
            menuOptions: charSheetOptions
        }
    }
    else if (type === "manageChar"){
        ti = {
            id: "manageCharDiv",
            affect: "charList",
            menuOptions: manageCharOptions
        }
    }
    else {return}

    let p = pd(parent);
    let div = append(cre("div"),p); div.id = ti.id;
    div.classList.add("mainSheetDiv")
    div.exit = function(){div.remove();}
    div.ti = ti; div.swap = "blueprint"
    div.dataset.id = obj.id;

    let l = append(cre("div","left"),div);
    let lis = append(cre("div","list"),l);
    lis.refresh = function() {
        removeChildren(lis)
        addArrayChildren(lis,bpItemDiv,div.getData()[ti.affect])
    }
    lis.generateID = function(){
        return randomID(lis.list())
    }
    lis.addItem = function(obj){
        let d = div.getData(); let item = {}; for (key in obj){item[key] = obj[key]}
        if (item.id === "abcd1234"){item.id = randomID(d[ti.affect]);}
        d[ti.affect].push(item);
        div.saveData(d);
        lis.appendChild(bpItemDiv(item))
        div.preview()
    }

    let lm = append(cre("div","menuDiv"),l);
    let btn = append(cre("div"),lm);
    append(ic("menu"),btn);

    let hv = append(createOptionHoverList(ti.menuOptions),lm)

    let r = append(cre("div","right"),div);
    r.refresh = function(list){
        removeChildren(r);
        r.addItem(list ? list : div.list())
    }
    r.addItem = function(itemObj,p){
        if (Array.isArray(itemObj)){for (var i=0;i<itemObj.length;i++){r.addItem(itemObj[i]);}; return}

        if (itemObj.type === "Module"){
            let type = findOption(itemObj,'modifiers','affect','moduleType');
            if (type){
                append(window[modList.Module.types[type.value].f](itemObj),p ? p : r);
            }
        } else if (itemObj.type === "Character"){
            removeChildren(r);
            r.addItem(div.getData()[div.swap],r);
            let li = r.getModules(r.childNodes);
            for (var i=0; i<li.length;i++){
                let elem = li[i]; let elemObj = elem.dataset.id;
                let found = itemObj.list.find(x => x.id === elemObj);
                if (found && elem.setValue){elem.setValue(found.value)}
            }
            function setFunc(){
                let lis = r.getModules(r.childNodes).map(x => x={id: x.dataset.id, value: x.getValue()})
                let char = div.getItemData(itemObj.id);
                char.list = lis;
                div.refreshItem(char,char.id)
            }
            li.map(x => x.setFunction ? x.setFunction("input", setFunc) : x)
            li.map(x => x.setFunction ? x.setFunction("click", setFunc) : x)
        }else {
            let m = append(window[modList[itemObj.type].f](itemObj),p ? p : r);
            return m;
        }
    }
    r.getList = function(){
        let ml = Array.from(r.childNodes); let arr = [];
        for (var i=0; i<ml.length;i++){
            if (ml[i].getValue && (ml[i].classList.contains("moduleContainer") || ml[i].classList.contains("cGroup"))){
                ml[i].classList.contains("cGroup") ? arr = arr.concat(ml[i].getValue()) : arr.push(ml[i].getValue())
            }
        }
        return arr
    }
    r.getModules = function(elemList){
        let arr = [];
        let ml = elemList;
        for (var i=0; i<ml.length;i++){
            if (ml[i].getValue){
                if (ml[i].classList.contains("cGroup")){
                    arr = arr.concat(r.getModules(ml[i].childNodes))
                } else {if (ml[i].classList.contains("moduleContainer")){arr.push(ml[i])}}
            }
        }
        return arr
    }
    r.getModulesData = function(){
        return r.getModules(r.childNodes).map(x => x = {id: x.dataset.id, value: x.getValue()})
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
        d[ti.affect] = array;
        div.saveData(d)
    }
    div.refreshItem = function(newItem,id){
        let d = div.getData();
        d[ti.affect] = save_item(id,newItem,div.list(),"items")
        div.saveData(d);
        if (ti.affect !== "charList"){div.preview();}
    }
    div.getItemLoc = function(id){
        return get_index("id",id,div.list(),"items")
    }
    div.findItem = function(id){
        return div.goTo(div.getItemLoc(id))
    }
    div.getItemData = function(id){
        return getItemFromList(id,div.list())
    }
    div.goTo = function(index){
        if (!index){return -1}
        if (index.length === 1){return Array.from(lis.childNodes)[index[0]]}
        let p = lis;
        for (var i=0; i<index.length; i++){
            if (p === undefined){break}
            if (p.classList.contains("bpItemDiv") && p.getItem && p.getItem().type === "Group"){
                if (!p.isOpen()){p.open();}
                p = p.nextElementSibling.childNodes[index[i]];
            } else {
                p = p.childNodes[index[i]];
                if (p !== undefined && index.length-1 === i && p.getItem && p.getItem().type === "Group"){p.open();}
            }
            // FIX THIS SOMEHOW???
        }
        return p
    }
    div.list = function(){
        return div.getData()[ti.affect];
    };
    div.preview = function(){
        r.refresh()
    }
    div.getModules = function(key){
        let arr = [];
        let lis = div.getData()[key]
        for (var i=0; i<lis.length; i++){   littleSearch(lis[i],arr);   }
        function littleSearch(obj,array){
            if (obj.type === "Group"){
                for (var i=0; i<obj.items.length;i++){littleSearch(obj.items[i],array)}
            } else {  if (obj.type === "Module"){array.push(obj);}  }
        }
    return arr
    }
    div.deleteItem = function(id){
        let o = delete_item(id,div.list(),"items");
        div.saveList(o);
        div.refresh()
    }

    div.right = r;
    div.left = lis;
    if (ti.affect !== "charList"){div.refresh(obj[ti.affect])}
    else {lis.refresh()}


    div.ondragover = function(event){event.preventDefault();}
    div.ondrop = modDragDrop;


    return div
}

function mcd(){
    return pd(".mainSheetDiv")[0]
}



function bpItemDiv(obj){
    let div = cre("button","bpItemDiv");
    let icon = ic(modList[obj.type].icon);
    append(icon,div);
    let name = append(cre("span","bpItemName"),div);
    name.innerText = obj.name;

    div.getID = function(){return obj.id}
    div.getItem = function(){
        return getItemFromList(div.getID(),mcd().list())
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

    div.oncontextmenu = function(){
        event.preventDefault()
        itemContextMenu(div.getID())
    }


    /*

        DRAGGING AND DROPPING

     */
    icon.draggable = true;
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
    if (obj.type === "Character"){
        name.onclick = function(){
            if (obj.type !== "Group"){
            selectElem("selectedCharacter",div)

            let char = mcd().getItemData(obj.id);
            removeChildren(mcd().right)
            setCharSheet(obj,mcd().getData()[mcd().swap]);
        }}

        if (obj.type !== "Group"){
        div.ondblclick = function(){
            let ppd = popupcontainer("content","popupCharacterSettings");
            if (ppd){
                ppd.saveData(obj.id);
                popupcontent("charSettings",ppd);
            }
        }
    }}

    div.getIndex = function(){
        return get_index("id",obj.id,mcd().list(),"items")
    }

    return div;
}


function itemContextMenu(id){
    let m = event.currentTarget;
    if (pd(".contextMenuDiv").length > 0){
        if (pd(".contextMenuDiv")[0].dataset.id !== id){
            pd(".contextMenuDiv")[0].remove();
        } else {
            pd(".contextMenuDiv")[0].remove();
            docRem(); return
    }}

    let cm = cre("div","contextMenuDiv");
        cm.dataset.id = id;
        for (var i=0; i<contextMenu.length; i++){ let op = contextMenu[i];
            if (!Array.isArray(op) && typeof op === "object"){
                let od = append(cre("div","cmDiv"),cm);
                    append(ic(op.icon),od);
                    let sp = append(cre("span","cmText"),od); sp.innerText = op.text;
                od.onclick = function(){op.f(id)};
                od.addEventListener("click",function(){cm.remove(); docRem();})
                if (op.style){od.style = op.style;}
            }
            else {
                let od = append(cre("span","cmHeader"),cm); od.innerText = op;
            }
        }
    function documentEvent(){
        cm.remove(); docRem()
    }
    function docRem(){
        document.removeEventListener("click",documentEvent);
    }

    document.body.appendChild(cm)
    let cds = m.getBoundingClientRect();


    document.addEventListener("click",documentEvent)

    cm.style.top = (cds.y+10) + "px";
}


function lpPresetList(div,list,id){
    let data = getItemFromList(div.getData(),mcd().list());
    div.rename("Preset List")
    for (var i=0;i<list.length;i++){append(lpPresetDiv(list[i],data.id),div.body)}
}
function lpPresetDiv(obj,id){
let m = cre("div","lpPresetDiv");
    let del = append(ic("delete"),m); del.onclick = function(){
        presetList = presetList.filter(x => x.id !== obj.id); saveLS();
        m.remove()
    };
    let nm = append(cre("input","lpPresetName"),m); nm.value = obj.name;
        nm.onkeyup = function(){
            presetList[presetList.findIndex(x => x.id === obj.id)].name = nm.value;saveLS()
        }
    let prev = append(ic("visibility"),m); prev.onclick = function(){
        let ppd = popupcontainer("content","popupPresetPreview");
        if (ppd){   ppd.saveData(obj); popupcontent("presetPreview",ppd); }

    }
    let mod = append(ic("integration_instructions"),m); mod.onclick = function(){
        m.changeItem("add","modifiers");
        toast("Added the item's modifiers")
    }; mod.oncontextmenu = function(){
        event.preventDefault(); m.changeItem("rewrite","modifiers");
        toast("Overwrote the item's modifiers")
        }
    let styles = append(ic("format_paint"),m); styles.onclick = function(){
        m.changeItem("add","styles");
        toast("Added the item's styles")
    }; styles.oncontextmenu = function(){
        event.preventDefault(); m.changeItem("rewrite","styles");
        toast("Overwrote the item's styles")
        }
    m.changeItem = function(type,key){
        let item = mcd().getItemData(id);
        if (type === "rewrite"){
            item[key] = obj[key];
        } else if (type === "add"){
        for (var i=0; i<obj[key].length; i++){
            let mod = obj[key][i]; addModuleOption(item,key,mod.affect,mod.value);
        } } else {return}
        mcd().refreshItem(item,item.id)
    }

return m
}