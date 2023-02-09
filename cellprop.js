let sheetDB = [];

for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontfamily: "monospace",
            fontSize: 14,
            fontColor: "#000000",
            fontbgColor: "#000000"
        }
        sheetRow.push(cellProp)
    }
    sheetDB.push(sheetRow)
}

// selector for cell properties

let bold = document.querySelector('img[alt="bold"]')
let italic = document.querySelector('img[alt="italic"]')
let underline = document.querySelector('img[alt="underline"]')
let fontFamily = document.querySelector(".font-family-props")
let fontSize = document.querySelector(".font-size-props")
let fontColor = document.querySelector('.color-prop')
let bgColor = document.querySelector('.bgcolor-prop')
let leftAlignment = document.querySelector('img[alt="left-align"]')
let rightAlignment = document.querySelector('img[alt="right-align"]')
let justifytext = document.querySelector('img[alt="justify"]')

let activecolorProp = "gray"
let inactivecolorProp = "transparent"

// application of two way binding
//attach properties listener
bold.addEventListener("click",(e)=>{
    let address = addressBar.value;
    let [cell, cellProp] = activeCell(address)

    //modifiaction
    cellProp.bold = !cellProp.bold
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; //UI change
    bold.style.backgroundColor = cellProp.bold ? activecolorProp : inactivecolorProp;
})

function activeCell(address){
    let [rid, cid] = decodeRIDCIDfromAddress(address)

    //Access cell & storage object

    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp]
}

function decodeRIDCIDfromAddress(address){
    let rid = Number(address.slice(1)-1);
    let cid = Number(address.charCodeAt(0))-65;
    return [rid,cid]
}