function createSheetsDiv(parent,obj,type){
    let ti;
    if (type === "blueprint"){
        ti = {
            id: "blueprintDiv",
            affect: "blueprint",
            menuOptions: blueprintOptions
        }
    } else if (type === "charsheet") {
        ti = {
            id: "charSheetDiv",
            affect: "charsheet",
            menuOptions: charSheetOptions
        }
    } else {return}

    let p = pd(parent);
    let div = append(cre("div"),p); div.id = ti.id;
    div.classList.add("mainSheetDiv")
    div.exit = function(){div.remove();}
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
        let d = div.getData();
        d[ti.affect].push(obj);
        div.saveData(d);
        lis.appendChild(bpItemDiv(obj))
        div.preview()
    }

    let lm = append(cre("div","menuDiv"),l);
    let btn = append(cre("div"),lm);
    append(ic("menu"),btn);

    let hv = append(createOptionHoverList(ti.menuOptions),lm)

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
        } else {
            let m = append(window[modList[itemObj.type].f](itemObj),p ? p : r);
            if (itemObj.type === "Group" && itemObj.items){
                for (var i=0;i<itemObj.items.length;i++){
                    r.addItem(itemObj.items[i],m)
                };
            }
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
    div.refresh(obj[ti.affect])


    div.ondragover = function(event){event.preventDefault();}
    div.ondrop = modDragDrop;


    return div
}

function mcd(){
    return pd(".mainSheetDiv")[0]
}



function bpItemDiv(obj){
    let div = cre("div","bpItemDiv");
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