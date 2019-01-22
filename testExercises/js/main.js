function init() {
   $.getJSON("goods.json", goodsOut)
}

function goodsOut(data) {
    var goods = JSON.parse(data);
    console.log(data);
}

init();