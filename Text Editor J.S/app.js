function textStyleEditor(textStyle) {
    var output = document.getElementById("output");
    // console.log(output.innerHTML.color = color.value)
    // return
    if (textStyle === "left") {
        output.style.textAlign = "left"
    }
    else if (textStyle === "center") {
        output.style.textAlign = "center"
    }
    else if (textStyle === "right") {
        output.style.textAlign = "right"
    }

    else if (textStyle === "bold") {
        var boldtext = document.getElementById("output");
        var isContainBold = boldtext.classList.contains("textnorml")
        if (isContainBold) {
            boldtext.classList.replace("textnorml", "textBold")
        } else {
            boldtext.classList.replace("textBold", "textnorml")
        }
    }
    else if (textStyle === "italic") {
        var boldtext = document.getElementById("output");
        var isContainBold = boldtext.classList.contains("textNupe")
        if (isContainBold) {
            boldtext.classList.replace("textNupe", "textItalc")
        } else {
            boldtext.classList.replace("textItalc", "textNupe")
        }
    }

    else if (textStyle === "underline") {
        var boldtext = document.getElementById("output");
        var isContainBold = boldtext.classList.contains("textUnderlineNon")
        if (isContainBold) {
            boldtext.classList.replace("textUnderlineNon", "textUnderLine")
        } else {
            boldtext.classList.replace("textUnderLine", "textUnderlineNon")
        }
    }
}

function plus(ele) {
    var output = document.getElementById("output");
    var textCount = document.getElementById("textCount");
    var count = textCount.innerHTML;

    if (ele === "addition") {
        textCount.innerHTML = ++count

    } else if (ele === "minus") {
        textCount.innerHTML = --count
        if (count < 16) {
            textCount.innerHTML = 16
            count = false

        }
    }
  output.style.fontSize = `${count}px`
}


function colorChange(input) {
    var output = document.getElementById("output");
    output.style.color = input.value;
  }