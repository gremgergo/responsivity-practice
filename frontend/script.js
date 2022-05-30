headerComponent = function(title) {
    return `
        <header>${title}</header>
    `
}

sectionComponent = function(id, buttonText, h2Text) {
    return`
        <section id="${id}">
            <h2>${h2Text} <span>Hello</span></h2>
            <button>${buttonText}</button>
        </section>
    `
}

footerComponent = function() {
    return`
        <footer></footer>
    `
}
const loadEvent = function (){

    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity"));
    
    let sections = "" // ""=ures string
    
    for (let index = 1; index < 5; index++) {
        sections += sectionComponent(`id-${index}`, `Button ${index}`, `Subtitle ${index}`);
        
    } // 5=5x szeretnenk a scriptet lefuttatni, 1= 1rol indul a szamolas
    
    rootElement.insertAdjacentHTML("beforeend", sections); // az insertAdjactementHTML az memoria igenyes, pl egy orszagok listajanal sokszor futna le ujra es ujra ha mindre irunk egy insertAdjactementHTML-t ezert const section-be rakjuk es a for fuggvenyben is leirjuk +=-vel, ezzel 
    
    rootElement.insertAdjacentHTML("afterend", footerComponent());
}

window.addEventListener("load", loadEvent) // nem rakjuk ki a zarojelet mert azt akarjuk hogy utoljara fusson le a loadEvent fuggveny