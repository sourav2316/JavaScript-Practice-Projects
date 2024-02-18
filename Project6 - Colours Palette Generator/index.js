const generateBtn = document.getElementById("btnGenerate");


    const singleColor = () =>{
        const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

        let hexColour = "#";

        for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hex.length);
        hexColour += hex[random];
        }

        return hexColour;
    };

    const colorPalatte = () => {
        const colorPal = [];
        for (let i = 0; i < 4; i++) {
            colorPal.push(singleColor());
            }

            return colorPal;
    };

    const renderColor = () => {

        const colorCont = document.querySelector(".colorcont");

        colorCont.innerHTML = "";

        const colorPal = colorPalatte();

        colorPal.forEach((color, i)=>{
            const colorDiv = document.createElement("div");
            colorDiv.id = `color${i+1}`;
            colorDiv.style.backgroundColor = color;
            colorDiv.className = "colorBox";

            const colorTag = document.createElement("p");
            colorTag.id = `color${i+1}Tag`;
            colorTag.className = "colorTag";
            colorTag.innerText = color;
            colorDiv.appendChild(colorTag);
            colorCont.appendChild(colorDiv);
        });

        const copyClipboard = (id) => {
            const el = document.getElementById(id);
            navigator.clipboard
                .writeText(el.innerText)
                .then(()=>{
                    alert("Copied to clipboard");
                })
                .catch((err)=>{
                    alert("Couldn't copy clipboard");
                });

        };

        const colorTags = document.querySelectorAll(".colorTag");

        colorTags.forEach((colorTag, i)=> {
            colorTag.addEventListener("click", ()=> 
            copyClipboard(`color${i+1}Tag`)
            );
        });
};
renderColor();


generateBtn.addEventListener("click", renderColor);