//list color
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
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
    let newColor = "";
    newColor += `<div id="house" class="house ${item} ${index = item ? 'active' : ''}">
    <div class="house-base">
        <div class="house-base-detail"></div>
        <div class="house-door-wrapper">
            <div class="house-door">
                <div class="house-door-window"></div>
                <div class="house-door-detail"></div>
            </div>
        </div>
        <div class="house-window-wrapper">
            <div class="house-window house-window-left"></div>
            <div class="house-window house-window-right"></div>
        </div>
    </div>
    <div class="house-sandwich"></div>
    <div class="house-upper">
        <div class="house-upper-detail"></div>
        <div class="house-upper-shadow"></div>
        <div class="house-window"></div>
        <div class="house-window-wrapper">
            <div class="house-window house-window-left"></div>
            <div class="house-window house-window-right"></div>
        </div>
    </div>
    <div class="house-roof">
        <div class="house-roof-side house-roof-side-left"></div>
        <div class="house-roof-side house-roof-side-right"></div>
        <div class="house-roof-detail"></div>
    </div>
                </div>`;
    document.getElementById("house").innerHTML = newColor;
}
