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
            {name: "Settings", f: function(){console.log("openthis","settings"); }},
            {name: "Guide", f: function(){console.log("openthis","guide"); }}
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