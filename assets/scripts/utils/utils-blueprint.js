function modDragStart(){
    event.currentTarget.id = "dragSelectedItem"
}
function modDragDrop(){
    let itemDiv = pd("dragSelectedItem");
    let dropDiv = event.currentTarget;
    // FIX

    if (itemDiv === dropDiv || event.target === null || event.target.parentNode === null || dropDiv === null || pd("dragSelectedItem") == null){return}
    if (dropDiv.classList.contains("bpItemDiv") && dropDiv.getItem && dropDiv.getItem().type !== "Group"){return}

    if (dropDiv.getItem && dropDiv.getItem().type !== "Group" && dropDiv.parentNode.className.includes("DivBody")){
        dropDiv = dropDiv.parentNode
    }

    let itemID = itemDiv.getID();
    let item = itemDiv.getItem();

    let dropID = dropDiv.className.includes("ItemDiv") ? dropDiv.getID() : dropDiv.list();

    // verify parent is NOT going into child
    // optimize this later
    if (dropDiv.getIndex && itemDiv.getIndex){
        let dd = JSON.stringify(dropDiv.getIndex());
        let ii = JSON.stringify(itemDiv.getIndex());
        if (dd.substring(0,dd.length-1).includes(ii.substring(0,ii.length-1))){
            return
        }
    }


    let o = pd("blueprintDiv").list();
    // SHIFT THIS LATER
    o = delete_item(itemID,o,"items");
    if (dropDiv.list){
        o = addItem(dropID,item,o,"items")
    } else {
        o = addItem( get_item(typeof dropID === "string" ? get_index("id",dropID,o,"items") : dropID,o,"items").id,item,o,"items")
    }

    itemDiv.remove()
    // REFRESH
    pd("blueprintDiv").refresh(o)


    pd("blueprintDiv").goTo(get_index("id",itemID,o,"items"))


}