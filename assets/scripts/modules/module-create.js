/*

INPUT
 - Text, Number
 - Range (special?)
 -
DROPDOWN

LIST



 */
 function cInput(obj){
let e = cre("div","moduleContainer");
if (obj.id){e.dataset.id = obj.id}

    let inp = append(cre("input"),e)
    // fix style
    inp.className = "cInput " + (obj.className ? obj.className : "");
    // functions
    inp.getValue = function(){
        return inp.value;
    }; e.getValue = inp.getValue;
    inp.setValue = function(newVal){
        inp.value = newVal;
    }; e.setValue = inp.setValue;
    inp.valueDiv = inp; e.valueDiv = inp;
    inp.setFunction = function(type,f){
        inp.addEventListener(type,f)
    }; e.setFunction = inp.setFunction;

    // STYLE
     setModuleOptions(inp,obj)
    return e
 }



 function cDropdown(obj){
let div = cre("div","moduleContainer");
if (obj.id){div.dataset.id = obj.id}

        let dp = append(cre("div","cDropdown"), div);
        div.obj = function(){ return obj};
    let top = append(cre("div","dpTop"), dp);
        let slct = append(cre("div","dpSelected"), top);
        // console.log(obj)
        let allow = obj.modifiers.find(x => x.affect === "dataset-allow");
        if (allow){
            let inp = append(cInput({
                type: "Module", styles: [],
                modifiers: [
                    {   affect: "moduleType", value: "Input"    },
                    {   affect: "type", value: "Text"    }
                ]
            }), top);
            inp.onkeyup = function(event){
                if (event.key === "Enter"){   inpBtn.click();   }
            };
            let inpBtn = append(cre("button","dpBtn"),top);
                append(ic("add_circle"),inpBtn)
                inpBtn.onclick = function(value){
                    if (value || inp.getValue().replaceAll(" ","").length > 0){
                    dp.addOption(typeof value === "string" ? value : inp.getValue(),"top");
                    inp.valueDiv.value = ""
                }}
            div.inputDiv = inp; dp.inputDiv = inp;
            div.inputBtn = inpBtn; dp.inputBtn = inpBtn;
        }
    let bot = append(cre("div","dpBot"), dp);

    div.top = slct; div.bot = bot;

dp.addOption = function(value,loc){
    if (Array.isArray(value)){ for (var i=0;i<value.length;i++) {
        dp.addOption(value[i],loc)
    } return }

    let lc = typeof loc === "string" ? div[loc] : loc;
    let op = append(cre("button","dpOption"),lc);
    if (typeof value === "string"){
        op.dataset.data = value;
        op.innerText = value;
    } else {
        op.dataset.data = typeof value.value === "string" ? value.value : JSON.stringify(value.value);
        op.innerText = value.name;
    }

    op.getData = function(){
        return {name: op.innerText, value: op.dataset.data}
    }
    op.getValue = function(){
        return op.getData().value
    }
    op.select = function (){ // onclick
        if (allow){
            if (op.parentNode.classList.contains("dpSelected")){
                op.remove();
            } else {
                div.inputDiv.setValue(op.getValue());
                div.inputDiv.onkeyup({key: "Enter"});
            }
        } else {
            if (op.parentNode.classList.contains("dpBot")){
                if (slct.childNodes.length > 0) {
                    bot.appendChild(slct.childNodes[0]);    }
                slct.appendChild(op);
            } else {
                bot.appendChild(op);
            }
        }
    }
    op.onclick = op.select;
}; div.addOption = dp.addOption; // add
dp.getValue = function(){
    let vals = Array.from(slct.childNodes).map(x => x.getValue())
    return vals.length === 1 ? vals[0] : vals
}; div.getValue = dp.getValue;
div.getAllOptions = function(){
    return Array.from(slct.childNodes).concat(Array.from(bot.childNodes))
}

div.setFunction = function(type,f){
    let ops = div.getAllOptions()
    for (var i=0; i<ops.length;i++){ops[i].addEventListener(type,f);}
    div.addEventListener(type,f)
}
div.pickOption = function(name){
    if (allow){
        for (var i=0; i<name.length; i++){div.inputBtn.onclick(name[i])}
        return
    }
    if (typeof name === "string"){name = [name]}
    for (var i=0;i<name.length;i++) {
        let o = Array.from(bot.childNodes).find(x => x.innerText === name[i] || x.getValue() === name[i]);
        if (o) {
            o.onclick()
        }
    }
}


// if (obj.defaultValue){    div.pickOption(obj.defaultValue)   }
/* Modifiers/Styles ADD */
setModuleOptions(div,obj)

return div
}


function cCheck(obj){
let div = cre("div","cCheck");
    let value = ("defaultValue" in obj) ? obj.defaultValue : false;
    div.obj = function(){return obj}
    div.checked = function(){return value}

    // STYLES
    let s = obj.size;
    if (s){div.style.minWidth = s}
    let sl = {
        square: {
            borderRadius: "2px"
        }
    }

    // FIX UP
    let outer = append(cre("div","cCheckOuter"), div);
        if (obj.styleType[0] === "square"){
            outer.style.borderRadius = "2px";
        } else { outer.style.borderRadius = s ? ("calc(" + s + " * 2)"): "10rem"; }
        for (var i=0; i<obj.outerStyle.length; i++){
            let st = obj.outerStyle[i];
            outer.style[st.affect] = st.value;
        }
    let inner = append(cre("div","cCheckInner"), outer);
        if (obj.styleType[1] === "square"){
            inner.style.borderRadius = "2px";
        } else { inner.style.borderRadius = s ? ("calc(" + s + " * 2)"): "10rem"; }
        for (var i=0; i<obj.innerStyle.length; i++){
            let st = obj.innerStyle[i];
            inner.style[st.affect] = st.value;
        }


    if (s){
        div.style.width = s; div.style.height = s;
        inner.style.width = "calc(" + s + " * 0.625)";
        inner.style.height = "calc(" + s + " * 0.625)";
    }



div.onclick = function(){
    div.toggle();
    div.swap();
}
div.setValue = function(val){
    if (div.getValue() !== val){div.onclick();}
}
div.getValue = function(){return value}
div.toggle = function(){ value = !value }
div.swap = function(){
    if (div.getValue()){
        outer.style.borderColor = obj.styleColor[0][0];
        inner.style.borderColor = obj.styleColor[1][0];
        if (obj.fill){inner.style.backgroundColor = obj.fill[0];}
    } else {
        outer.style.borderColor = obj.styleColor[0][1];
        inner.style.borderColor = obj.styleColor[1][1];
        if (obj.fill){inner.style.backgroundColor = obj.fill[1];}
    }
}
div.setFunction = function(type,f){
    div.addEventListener(type,f);
}


div.swap();
setModuleOptions(div,obj)

return div
}

function cText(obj){
    let div = cre("div","cText");
    div.setText = function(tx){
        div.innerText = tx;
    }



    setModuleOptions(div,obj)
    return div
}


function cGroup(obj){
    let div = cre("div","cGroup");
        div.dataset.id = obj.id;
        console.log(obj)
    div.setAlignment = function(value){
        console.log("WAH--center,top,bot")
    }
    div.setArrangement = function(value){
        console.log("row,column")
    }
    div.toggle = function(state){

    }
    div.close = function(){

    }
    div.open = function(){

    }

    // DRAG/DROP functions

    return div
}