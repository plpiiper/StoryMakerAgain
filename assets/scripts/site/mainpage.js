function createHomePage(parent){
    let p = pd(parent);
    let div = append(cre("div"),p);
    div.id = "homePage";


    let ttx = append(cre("h1"),div);
        ttx.innerText = "Everstory:\n Character Creator";
        ttx.id = "homepage-title";

    let opdiv = append(cre("div"),div); opdiv.id = "homepage-options";
        let ops = [
            {name: "Stories", f: function(){
                createStoryManager("content")
            }},
            {name: "Settings", f: function(){
                toast("This feature is not yet available.")
             }},
            {name: "Guide", f: function(){
                    toast("This feature is not yet available.");
            }}
        ]
        function opfunc(o){
            let sp = cre("span");
                sp.innerText = o['name']; sp.onclick = o['f']
            return sp
        }
        addArrayChildren(opdiv,opfunc,ops)


    let linkdiv = append(cre("div"),div); linkdiv.id = "homepage-links";
        let agt = append(cre("a"),linkdiv);
            agt.href = "https://github.com/phpiiper";
            agt.target = "_blank";
            append(ic("share"),agt);

    return div
}


function toast(text){
    let div = pd("toast");   if (div !== null) {div.remove()}
    div = append(cre("div"),"content"); div.id = "toast";

    div.innerText = text;
    setTimeout(function(){   div.classList.add("visible");   },100)
    setTimeout(function(){   div.classList.toggle("visible");   },3000)
}

function confirmWith(text,f,param){
    let div = append(cre("div","confirmDiv"),coverDiv("content"));
        let tx = append(cre("span","confirmText"),div); tx.innerText = text;
        let btnDiv = append(cre("div","confirmBtnDiv"),div);
            let y = append(cre("button","confirmBtn confirmYes"),btnDiv);
                y.innerText = "Yes";
                y.onclick = function(){f(param); n.click()};
            let n = append(cre("button","confirmBtn confirmNo"),btnDiv);
                n.innerText = "No";
                n.onclick = function(){div.parentNode.remove();}
}

function duplicateItem(id){
    let item = mcd().getItemData(id); item.id = randomID(mcd().list());
    if (item.type === "Group"){
         for (var i=0; i<item.items.length; i++){
            item.items[i] = duplicateItem(item.items[i].id)
        }
    }
return item
}

function getItemIDList(array,key){
    let lis = [];

    for (var i=0; i<array.length; i++){
        if (array[i].type === "Group"){
            lis.push(array[i].id);
            lis = lis.concat(getItemIDList(array[i][key],key))
        } else {lis.push(array[i].id)}
    }
    return lis
}