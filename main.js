function dragStart2(ev)
{
    ev.dataTransfer.setData("ID", ev.target.getAttribute('id'));
}
function dragStart(ev)
{
    var node = document.getElementById(ev.target.getAttribute('id')).cloneNode(true);
    node.id = node.id + contador;
    contador = contador + 1;
    ev.dataTransfer.setData("ID",  node.id);
    ev.target.appendChild(node);
    //console.log(node.ondragstart); 
    node.ondragstart = function ondragstart(event){ return dragStart2(event);};
    //console.log(node.ondragstart);  
}
function dragOver(ev)
{
    return false;
}
function dragDrop(ev)
{
    ev.preventDefault();
    var produtoSelecionado = ev.dataTransfer.getData("ID");
    console.log(produtoSelecionado);
    if(ev.target.tagName == "IMG")
    {
        ev.target.parentNode.appendChild(document.getElementById(produtoSelecionado));
    }
    else
    {
        ev.target.appendChild(document.getElementById(produtoSelecionado));
    }
}
function dragDrop2(ev)
{
    ev.preventDefault();
    var produtoSelecionado = ev.dataTransfer.getData("ID");
    console.log("excuir",produtoSelecionado);
    document.getElementById(produtoSelecionado).remove();
    ev.target.style.backgroundColor = "green";
}
function dragLeave(ev)
{
    console.log("Saiu");
    ev.target.style.backgroundColor = "green";
}
function dragEnter(ev)
{
    console.log("Entrar");
    ev.target.style.backgroundColor = "red";
}
var contador = 0;