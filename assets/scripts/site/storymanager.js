function createStoryManager(parent){
let p = pd(parent);
    let div = append(cre("div"),p);
    div.id = "storyManager";
    let st = undefined;

let left = append(cre("div","left"),div);
    let lis = append(cre("div","smList"),left);
        // smStoryDiv
    let lm = append(cre("div","smMenu"),left);
        let add = append(ic("add"),lm);
            add.onclick = function(){
                let nst = {
                    id: randomID(storyList), name: "New Story", desc: "This is a short description.", charList: [], blueprint: [], charsheet: []
                }
                storyList.push(nst);
                lis.appendChild(smStoryDiv(nst))
                saveLS()
            };
let right = append(cre("div","right"),div);
    right.refresh = function(id){
        const s = storyList.find(x => x.id === id);
        if (!s){return}
        pd("smStoryName").innerText = s.name;
    }
    // list of stuff
    let hf = append(cre("h2"),right);
        hf.id = "smStoryName";
        hf.innerText = "[Select Story]"
    let btnlist = append(smBtnGroup(smBtnGroup_obj),right);


// functions //
div.refreshStories = function(){
    removeChildren(lis)
    addArrayChildren(lis,smStoryDiv,storyList)
    if (st){pd("storyManager").selectStory(st,lis.childNodes[div.findStoryIndex(st)]);}
}
div.findStoryIndex = function(id){
    return get_index("id",id,storyList,"")[0]
    // return storyList.findIndex(x => x.id === id);
}
div.selectStory = function(id,elem){
    selectElem("selectedStory",elem);
    div.changeStory(id);
    right.refresh(id);
}
div.selectedStory = function(){
    return st
}
div.changeStory = function(id){
    st = id;
}
div.openMenuItem = function(name){
    if (!div.selectedStory()){return}
    let story = storyList.find(x=>x.id === div.selectedStory());
    if (name === "blueprint"){
        createSheetsDiv("content",story,"blueprint")
    } else if (name === "char_sheet"){
        createSheetsDiv("content",story,"charsheet")
    } else if (name === "manage_characters"){
        createSheetsDiv("content",story,"manageChar")
    }else if (name === "story_info"){
        createStoryInfo("content",story)
    }else{
        toast("This feature is not yet available.")
    }
}
div.exit = function(){
    div.remove();
}



div.refreshStories()
if (storyList.length > 0){lis.childNodes[0].click();}
return div
}

function smStoryDiv(obj){
let div = cre("button","smStoryDiv");
    div.dataset.id = obj.id;
    div.innerText = obj.name;

div.onclick = function(){
    pd("storyManager").selectStory(obj.id,div);
}
return div
}


function smBtnGroup(arr){
    let div = cre("div"); div.id = "smBtnGroup";
        for (var i=0; i<arr.length; i++){
            let row = append(cre("div","smBtnGroupRow"),div);
            let lis = arr[i];
            for (var x=0; x<lis.length; x++){
                let btn = append(cre("button","smBtnGroupBtn"),row);
                    let btnobj = lis[x];
                    let icon = append(ic(btnobj.icon),btn);
                    let tx = append(cre("span","smBtnGroupTx"),btn);
                    tx.innerText = btnobj.text;
                    btn.onclick = btnobj.f;
            }
        }
    return div
}



function createStoryInfo(parent,story){
    let p = pd(parent);
    let div = append(cre("div"),p);
    div.id = "storyInfo";
    div.story = function(){return storyList.find(x => x.id === story.id)};
    div.index = function(){return storyList.findIndex(x => x.id === story.id)};

let l = append(cre("div","left"),div);
        let inDiv = append(cre("div","flex"),l)
            let icon = append(ic("book"),inDiv);
            let name = append(cInput(standardModules["Module"]),inDiv);
                name.style.width = "100%"; name.style.marginLeft = "0.75rem";
                if (story.name){name.setValue(story.name)}
                name.setFunction("keyup",function(){div.save(name.getValue(),"name")})
        let desc = append(cre("textarea"),l);
            if (story.desc){desc.value = story.desc;}
            desc.onkeyup = function(){
                div.save(desc.value,"desc")
            }
        let delClose = append(cre("div","flex"),l); delClose.id = "siDelClose"
            let delBtn = append(cre("button"),delClose);
                append(ic("delete"),delBtn);
                delBtn.onclick = function(){
                    confirmWith("Are you sure you want to delete Story: \"" + div.story().name + "\"?",function(id){
                        deleteStory(id); div.remove(); pd("storyManager").remove(); createStoryManager("content")
                    },story.id)
                }
            let exitBtn = append(cre("button"),delClose);
                append(ic("logout"),exitBtn);
                exitBtn.onclick = function(){
                    div.remove();
                    pd("storyManager").refreshStories()
                }
let r = append(cre("div","right"),div);
    let bph = append(cre("span","header"),r); bph.innerText = "Print Blueprint";
            let bpbtn = append(cre("button","printBtn"),r);
                let bpah = append(cre("a"),bpbtn);
                bpah.href = "print.html?=type=" + "blueprint" + "&&id=" + div.story().id;
                bpah.innerText = "Print Blueprint";
    let csh = append(cre("span","header"),r); csh.innerText = "Print Character Sheet";
    // Rest of characters
        let chars = div.story().charList;
        let pdlis = append(cre("div","list"),r);
        for (var i=0; i<chars.length;i++){ let ch = chars[i];
            let btn = append(cre("button","printBtn"),pdlis);
                let ah = append(cre("a"),btn);
                ah.href = "print.html?=type=" + "charsheet" + "&&id=" + ch.id + "&&story=" + div.story().id;
                ah.innerText = "Print: " + ch.name;
        }
div.save = function(data,key){
    let st = div.story(); let ind = div.index();
    if (key){st[key] = data;} else {st = data;}
    storyList[ind] = st;
    saveLS()
}

}

function deleteStory(id){
    if (storyList.find(x => x.id === id)){
        storyList = storyList.filter(x => x.id !== id);
       saveLS()
    }
}