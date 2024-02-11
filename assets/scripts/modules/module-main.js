function coverDiv(parent){
    let p = parent; if (typeof parent == "string") {p = document.getElementById(p)}
    let cov = append(cre("div","coverDiv"),p)
        cov.onclick = function(event){
        if (event.target === cov) {cov.remove()} }
    if (pd(".coverDiv").length > 1){cov.style.backgroundColor = "transparent";}
    return cov
}

function ic(name,ops){
    let c = document.createElement("span"); c.classList.add("material-symbols-outlined"); c.classList.add("icon"); c.innerText = name;
    if (ops !== undefined){
        // [["dataset","data","Text"],["style",["bg","yel"]],["checked","true"]]
        for (var i=0; i<ops.length; i++){ let o = ops[i];
            if (o[0] === "dataset"){ c["dataset"][o[1]] = o[2]; }
            if (o[0] !== "style" && o[0] !== "dataset"){ c[o[0]] = o[1] }
            if (o[0] === "style") { for (var x=1; x<o.length; x++){ let st = o[x];
                c["style"][st[0]] = st[1] }}
        }}
    return c
}

function cre(type,className,style){
    let obj = {type: type};
    if (className || style){
        obj.tags = {}
        if (className) {obj.tags.className = className;}
        if (style){obj.tags.style = style;}
    }
    return createElement(obj);
}

function createElement(obj){
    let elem;
// IF already made
    if (obj.nodeName) { return obj; }
    if (typeof obj === "function"){
        return obj()
    }
// Create Elem: --> input-text, div, button, p, etc
    if (typeof obj.type === "function"){
        elem = obj.type();
    } else if (obj.type.includes("-")){
        elem = cre(obj.type.split("-")[0]);
        elem.type = obj.type.split("-")[1]
    } else {elem = document.createElement(obj.type);}

// DATASETS if exist
    if (obj.dataset){
        for (key in obj.dataset){elem.dataset[key] = obj.dataset[key]}
    }
// Tags
    if (obj.tags){ for (key in obj.tags){
        elem[key] = obj.tags[key];
    }}
// STYLES
    if (obj.styles){ for (key in obj.styles){
        elem[key] = obj.styles[key];
    }}
// IF METHODS/functions
    if (obj.methods){
        for (var i=0;i<obj.methods.length; i++){
            let om = obj.methods[i];
            // TYPE1 --> eventlistener
            if (om.type){elem.addEventListener(om.type,om.func)}
            // TYPE2 --> tagElem
            if (om.name){elem[om.name] = om.func;}
        }}
// Children
    if (obj.children){
        for (var i=0; i<obj.children.length; i++){
            if (obj.children[i].nodeName){
                elem.appendChild(obj.children[i])
            } else if (typeof obj.children[i] === "function"){
                elem.appendChild(createElement(obj.children[i]()));
            }else {// if an element
                elem.appendChild(createElement(obj.children[i]))
            } // else, an obj to be created
        }}

// Methods for all elements
    if (elem.nodeName === "DIV"){
        elem.cl = function(){
            return Array.from(elem.childNodes);
        }
        elem.getData = function(name){
            return JSON.parse(elem.dataset[name]);
        }
        elem.saveData = function(obj,name){
            elem.dataset[name] = JSON.stringify(obj);
        }
    }

    return elem
}

function createOptionHoverList(arr){
    let lis = cre("div","optionHoverDiv");
    for (var i=0; i<arr.length; i++){ let it = arr[i];
        if (typeof it === "string"){
            let title = cre("span","optionHoverTitle"); title.innerText = it;
            lis.appendChild(title)
        } else {
            let btn = cre("button","optionHoverBtn");
                if (it.icon){   btn.appendChild(ic(it.icon));   }
            let btntext = cre("span","optionHoverBtnText"); btntext.innerText = it.text;
                btn.appendChild(btntext);
                btn.onclick = it.f;
            lis.appendChild(btn);
        }
    }
    return lis;
}

function findOption(item,type,key,name){
    return item[type].find(x => x[key] === name)
}


function removeChildren(parent,lim){
    let num = lim ? lim : 0;
    while (parent.childNodes.length > num){parent.childNodes[0].remove()}
    return parent
}
function addArrayChildren(parent,f,list){
    for (var i=0;i<list.length;i++){append(f(list[i]),parent)}
}




function setModuleOptions(div,obj){
    let ll = ["modifiers","styles"]
    for (var i=0; i<ll.length;i++){
        let key = ll[i];for (var x=0; x<obj[key].length; x++){
            let m = obj[key][x];
            if (key === "styles"){div['style'][m.affect] = m.value}
            else {
                div[m.affect] = m.value;
            }
        }}
    let type = findOption(obj,'modifiers','affect','moduleType');
    let list = type ? modList["Module"].types[type ? type.value : obj.type].modifiers : modList[obj.type].modifiers;
    for (var i=0;i<list.length;i++){ let search = list[i]
        let it = findOption(obj,"modifiers","affect", search.affect);
        if (it){
            if (div[search.funcName]){
                let v = it.value;
                if (it.defaultValue){
                    // if in char sheet
                    if (mcd() !== null){
                        let mod = mcd().getModules("blueprint").find(x => x.id === it.defaultValue);
                        // FIX THIS A LOT
                        if ((getModType(mod).includes("Dropdown") || getModType(mod).includes("List") || obj.type === "List") && it.value.length === 0){
                            v = randomList(randomListOfWord,2,10)
                        }
                    }
                }
                div[search.funcName](v,"bot")
            } else {console.log("???")}
        }
    }
}

function addModuleOption(obj,affect,value){
    let ind = obj.modifiers.findIndex(x => x.affect === affect)
    if (ind > -1)    {obj.modifiers[ind].value = value;
    } else {    obj.modifiers.push({affect: affect, value: value}); }
    return obj
}