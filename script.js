function GoBack(){
    var back = document.querySelector("#goBack");
    back.remove();

    var QrCode = document.querySelector("#QRCode");
    QrCode.remove()

    var main = document.querySelector(".main");
    var mainChild = main.children;
    for (var i = 0; i< mainChild.length; i++){
        mainChild[i].style.display = "flex";
    }

    main.style.height = "755px"
    var qrButton = document.querySelector("#QRButton");
    qrButton.addEventListener("click", GetQr)
}

function GetQr(event){
    var main = document.querySelector(".main");
    var mainChild = main.children;
    for (var i = 0; i< mainChild.length; i++){
        mainChild[i].style.display = "none"
    }
    main.style.height = "592px";
    main.innerHTML += "<div id=\"goBack\">\n" +
        "            <svg width=\"46\" height=\"28\" viewBox=\"0 0 46 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                <g clip-path=\"url(#clip0_733_4)\">\n" +
        "                    <path d=\"M45.2093 11.667V16.3337H11.0005L19.6472 23.8996L15.876 27.1994L0.791016 14.0001L15.876 0.800781L19.6472 4.10061L10.9999 11.667H45.2093Z\" fill=\"black\"/>\n" +
        "                </g>\n" +
        "                <defs>\n" +
        "                    <clipPath id=\"clip0_733_4\">\n" +
        "                        <rect width=\"46\" height=\"28\" fill=\"white\"/>\n" +
        "                    </clipPath>\n" +
        "                </defs>\n" +
        "            </svg>\n" +
        "        </div>" + "<div id=\"QRCode\">\n" +
        "            <svg width=\"240\" height=\"240\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
        "                <g clip-path=\"url(#clip0_733_21)\">\n" +
        "                    <path d=\"M240 0H0V240H240V0Z\" fill=\"url(#pattern0)\"/>\n" +
        "                </g>\n" +
        "                <defs>\n" +
        "                    <pattern id=\"pattern0\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n" +
        "                        <use xlink:href=\"#image0_733_21\" transform=\"scale(0.00540541)\"/>\n" +
        "                    </pattern>\n" +
        "                    <clipPath id=\"clip0_733_21\">\n" +
        "                        <rect width=\"240\" height=\"240\" fill=\"white\"/>\n" +
        "                    </clipPath>\n" +
        "                    <image id=\"image0_733_21\" width=\"185\" height=\"185\" xlink:href=\"data:image/png;base64,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\"/>\n" +
        "                </defs>\n" +
        "            </svg>\n" +
        "        </div>";

    var back = document.querySelector("#goBack");
    back.addEventListener("click", GoBack);

}
var qrButton = document.querySelector("#QRButton");
qrButton.addEventListener("click", GetQr)
