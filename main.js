var copiado = null;
function dragStart2(ev)
{
    //alert("hi");
    console.log("yes", ev.target);
    copiado = ev.target;
    ev.dataTransfer.setData("ID", ev.target.getAttribute('id'));
}
function dragStart(ev)
{
    var node = document.getElementById(ev.target.getAttribute('id')).cloneNode(true);
    node.id = node.id + contador;
    contador = contador + 1;
    ev.dataTransfer.setData("ID",  node.id);
    console.log("copiado", ev.target);
    copiado = node;
    //console.log(copiado);
    //ev.target.appendChild(node);
    node.ondragstart = function ondragstart(event){ return dragStart2(event);};
}
function dragOver(ev)
{
    return false;
}
function dragDrop(ev)
{
    ev.preventDefault();
    var produtoSelecionado = ev.dataTransfer.getData("ID");
    console.log("dropped", copiado.id, copiado.className, "target", ev.target.tagName);
    if(ev.target.tagName == "IMG")
    {
        console.log("implemente", ev.target.parentNode, ev.target.parentNode.nextSibling, ev.target.parentNode.parentNode.className);
        ev.target.parentNode.parentNode.insertBefore(copiado, ev.target.parentNode.nextSibling);
        //ev.target.parentNode.nextSibling.insertBefore();
        //ev.target.parentNode.parentNode.appendChild(copiado);
    }
    else if(ev.target.className == "campo")
    {
        //var new_node = <div>inter</div>;
        //console.log("2", copiado, new_node);
        ev.target.append(copiado);
        //ev.target.append();
        //ev.target.appendChild(document.getElementById(produtoSelecionado)); 
    }
    else
    {
        console.log("1", ev.target.parentNode);
        
        ev.target.parentNode.appendChild(copiado);
        //ev.target.parentNode.appendChild(document.getElementById(produtoSelecionado));
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