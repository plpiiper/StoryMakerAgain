function cList(obj){
    let e = cContainer()
    if (obj.id){e.dataset.id = obj.id}

    let list = append(cre("ol","cList"),e);
    if (obj.className){list.classList.add(obj.className)}

    // functions
    list.getValue = function(){
        return Array.from(list.childNodes).map(x => x.getValue())
    }; e.getValue = list.getValue;

    list.addOption = function(obj){
        if (Array.isArray(obj)){  obj.map(x => list.addOption(x))  }
        else {
            let op = cre("li","cListOption");
            op.innerText = obj.value ? obj.value : obj;
                op.getValue = function(){return obj}
            list.appendChild(op)
        }
    }

    list.getOptions = function(type){
        if (type === "array"){
            return Array.from(list.childNodes).map(x => x.getValue())
        } else { return Array.from(list.childNodes);  }
    }

    list.changeOptionStyle = function(type){
        list.classList.add(type)
    }
    list.setTagSpacingVertical = function(value){
        list.getOptions().map(x => x.style.marginTop = value)
        list.getOptions().map(x => x.style.marginBottom = value)
    }
    list.setTagSpacingHorizontal = function(value){
        list.getOptions().map(x => x.style.marginLeft = value)
        list.getOptions().map(x => x.style.marginRight = value)
    }
    list.setAlignment = function(value){
        list.style.display = "flex";
        list.style.flexDirection = value;
    }


    // STYLE
    setModuleOptions(list,obj)
    e.setValue = list.addOption
    return e
}


function cBar(obj){
    let e = cContainer()
    if (obj.id){e.dataset.id = obj.id}
    let cb = append(cre("div","cBar"),e)

    let left = append(cre("div","cBarLeft"),cb);
        cb.setLeftPosition = function(type){
            if (type === "Top"){
                left.style.position = "absolute";
                left.style.bottom = "100%"
                left.style.left = line.margin ? line.margin : 0
            } else if (type === "Center"){
                left.style.position = "relative";
            } else if (type === "Bottom"){
                left.style.position = "absolute";
                left.style.top = "100%"
                left.style.left = line.margin ? line.margin : 0
            } else {return}
        }
        cb.setLeftText = function(value){   left.innerText = value;   }
        cb.setLeftValue = function(value){   left.value = value;   }

    let line = append(cre("div","cBarLine"),cb);
    cb.setLineThickness = function(value){line.style.height = value;}
    cb.setLineMargin = function(value){
        line.style.marginLeft = value; line.style.marginRight = value;
        line.margin = value;
    }
    cb.setBarLineColor = function(value){
        line.style.backgroundColor = value;
    }

    let val = append(cre("div","cBarValue"),cb);
    cb.setMainText = function(value){
        val.innerText = value;
    }
    cb.setMainValue = function(value){
        val.value = value;
    }

    let right = append(cre("div","cBarRight"),cb);
        cb.setRightPosition = function(type){
            if (type === "Top"){
                right.style.position = "absolute";
                right.style.bottom = "100%"
                right.style.right = line.margin ? line.margin : 0
            } else if (type === "Center"){
                left.style.position = "relative";
            } else if (type === "Bottom"){
                right.style.position = "absolute";
                right.style.top = "100%"
                right.style.right = line.margin ? line.margin : 0
            } else {return}
        }
        cb.setRightText = function(value){   right.innerText = value;   }
        cb.setRightValue = function(value){   right.value = value;   }


    cb.setValuePosition = function(){
        let l = left.value ? JSON.parse(left.value) : 1;
        let r = right.value ? JSON.parse(right.value) : 10;
        let v = val.value ? JSON.parse(val.value): 5;
        val.style.left = 'calc(' + (v/(l+r)*100)+"% - " + val.getBoundingClientRect().width + "px" + ')';
    }
    cb.setTextPosition = function(value){
        if (cb.positionStyles[value]){for (key in cb.positionStyles[value]){ let st = cb.positionStyles[value][key];
            for (var i=0; i<st.length; i++){cb[key].style[st[i][0]] = st[i][1]}
        }}

    }
    cb.setTextSize = function(value){
        left.style.fontSize = value;
        right.style.fontSize = value;
        val.style.fontSize = value;
    }
    // STYLE
    cb.left = left; cb.value = val; cb.right = right; cb.container = e;
    cb.positionStyles = {
        Top: {
            right: [["position","absolute"],["bottom","100%"],["right",line.margin ? line.margin : 0]],
            left: [["position","absolute"],["bottom","100%"],["left",line.margin ? line.margin : 0]],
            value: [["position","absolute"],["bottom","100%"]],
            container: [["marginTop","1.5rem"],["marginBottom","1.5rem"]]
        },
        Bottom: {
            right: [["position","absolute"],["top","100%"],["right",line.margin ? line.margin : 0]],
            left: [["position","absolute"],["top","100%"],["left",line.margin ? line.margin : 0]],
            value: [["position","absolute"],["top","100%"]],
            container: [["marginBottom","1.5rem"],["marginTop","1.5rem"]]
        },
        Center: {
            right: [["position","relative"]],
            left: [["position","relative"]]
        }
    }
    setModuleOptions(cb,obj)
    cb.setValuePosition()
    return e
}



function csModPickerDiv(obj){
    let modType = findOption(obj,"modifiers","affect","moduleType").value;
    let subType = findOption(obj,"modifiers","affect","type")

    let div = cre("div","csModPickerDiv");
        let name = append(cre("span","csmpdName"),div); name.innerText = obj.name;
        let id = append(cre("span","csmpdID"),div); id.innerText = obj.id;
        let type = append(cre("span","csmpdType"),div); type.innerText = modType + (subType ? "(" + subType.value + ")": "");
        let btn = append(cre("button","csmpdBtn"),div); btn.innerText = "Choose";
            div.btn = btn;
            div.obj = obj;
    return div
}


function setCharSheet(char,list){
    let r = mcd().right;
    if (mcd().swap === "blueprint"){r.addItem(char)}
    else {
        for (var i = 0; i < list.length; i++) {
            let m = list[i];
            r.addItem(m)
        }
    }
}