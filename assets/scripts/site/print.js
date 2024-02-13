loadLS()
let href = window.location.href.split("?=");
let story; let sheet;
let obj = {}
if (href.length > 1){
    href = href[1];
    let lis = href.split("&&").map(x => x.split("="));
    lis.map(x => obj[x[0]] = x[1]);
    if (obj.type){
        if (obj.type === "blueprint" && storyList.find(x => x.id === obj.id)){
            console.log("print blueprint")
            let p = pd("content")
            let div = append(cre("div","printScreen"),p);
            let bp = storyList.find(x => x.id === obj.id).blueprint
            for (var i=0; i<bp.length; i++){
                append(cCreate(bp[i]),div)
            }
            print()
        } else if (obj.type === "charsheet"){
            story = storyList.find(x => x.id === obj.story);
            let ch = story.charList.find(x => x.id === obj.id);
            let p = pd("content")
            let div = append(cre("div","printScreen"),p);
            let bp = storyList.find(x => x.id === obj.story).charsheet

            console.log(ch.list)
            for (var i=0; i<bp.length; i++){
                append(cCreate(bp[i]),div);
            }
            print()
        }else {console.log("none")}
    } else {console.log("none");}
} else {console.log("none")}

let ex = append(cre("button","exitBtn"),"content");
    let ext = append(cre("a"),ex);
        ext.innerText = "EXIT"
        ext.href = "index.html"
function alternateSearch(it){
    let bp = story.blueprint;
    let bpMods = getModulesData(bp)
    let mod = bpMods.find(x => x.id === it.defaultValue);
    let char = story.charList.find(x => x.id === obj.id);
    return [mod,char]
}

function getModulesData(array){
    let arr = []
    for (var i=0; i<array.length;i++){ let item = array[i];
        if (item.type === "Group"){arr = arr.concat(getModulesData(item.items))}
        if (item.type === "Module"){   arr.push(item);   }
    }
    return arr
}

function getModulesElems(elemList){
    let arr = [];
    let ml = elemList;
    for (var i=0; i<ml.length;i++){
        if (ml[i].getValue){
            if (ml[i].classList.contains("cGroup")){
                arr = arr.concat(getModulesElems(ml[i].childNodes))
            } else {
                if (ml[i].classList.contains("moduleContainer")){
                    arr.push(ml[i])
                }
            }
        }
    }
    return arr
}
