var increaseFactor = 1;
var startingValue = 1;
var itemContent = "";

function SetIncreaseFactor() {
    number = Number(document.getElementById("increaseFactor").value);
    this.increaseFactor = number != 0 ? number : 1;
    ChangeNumerics();
}

function SetStartingValue() {
    this.startingValue = Number(document.getElementById("startingValue").value);
    ChangeNumerics();
}

function SetItemContent(params) {
    this.itemContent = document.getElementById("itemContent").value;
    AddListItem();
}

function ChangeNumerics() {
    var items = document.getElementsByTagName("li");
    count = startingValue;

    for (item of items) {
        item.setAttribute("value", count);
        count += increaseFactor;
    }

}

function AddListItem() {
    var item = document.createElement("li");
    var list = document.getElementById("list");
    var items = document.getElementsByTagName("li");
    item.innerHTML = itemContent ? itemContent : items.length + 1 + ". içerik";
    list.appendChild(item);
    ChangeNumerics();
}

function DeleteListItem() {
    var items = document.getElementsByTagName("li");
    if (items.length > 0)
        items[ items.length - 1 ].remove();
}

function CopyList() {
    var listHTML = document.getElementById("list").innerHTML;
    var txt = document.createElement("textarea");
    document.body.appendChild(txt);
    txt.value = listHTML;
    txt.select();
    document.execCommand("copy");
    document.body.removeChild(txt);
}

function ResetList() {
    document.getElementById("list").innerHTML = "";
}

function CopyContent() {
    var items = document.getElementsByTagName("li");
    var txt = document.createElement("textarea");
    document.body.appendChild(txt);

    for (item of items) {
        txt.value += item.getAttribute("value") + ". " + item.innerHTML + '\r\n';
    }

    txt.select();
    document.execCommand("copy");
    document.body.removeChild(txt);
}