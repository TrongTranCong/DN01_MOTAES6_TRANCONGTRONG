//list color
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let getEle = (id)=>{
    return document.querySelector(id);
}
//loadColorList function using arrow fs 
let loadColorList = () => {
    let content = " ";// nếu để trong map nó sẽ xuất hiện cái item cuối cùng
    colorList.map((item, index) => {
        content += `
        <button class="color-button ${item} ${index===1 ? "active":''}" onclick = "changeColorHouse('${item}')">
        </button>`;
    });
    document.getElementById("colorContainer").innerHTML = content;
    ;
}
loadColorList();
// Change colors 
let changeColorHouse = (item)=>{
    let currentActive = getEle('.active');
    console.log(currentActive);
    currentActive && currentActive.classList.remove('active');
    getEle(`.color-button.${item}`).classList.add('active');
    getEle('#house').className = `house ${item}`;
}
loadColorList();
