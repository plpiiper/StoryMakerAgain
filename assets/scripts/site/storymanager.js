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
                console.log("add");
            };
let right = append(cre("div","right"),div);
    right.refresh = function(id){
        const s = storyList.find(x => x.id === id);
        console.log(id)

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
    if (name === "blueprint"){
        createBlueprintDiv("content",storyList.find(x => x.id === div.selectedStory()))
    }
}
div.exit = function(){
    div.remove();
}



div.refreshStories()
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