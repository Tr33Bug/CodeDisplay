function generate() {
    var codeStart = "&lt;";
    var codeEnd = "&gt;\n";
    var code = "void main(){\nprintf(\"Hello World!\");"

    code = document.getElementById('area51').value;
    var text2 = $("#area51").val();
    document.getElementById("changeParagraph").innerHTML = codeStart + code + codeEnd;
}