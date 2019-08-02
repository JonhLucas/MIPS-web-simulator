function dragStart(ev)
{
    ev.dataTransfer.setData("ID", ev.target.getAttribute('id'));
}
function dragOver(ev)
{
    return false;
}
function dragDrop(ev)
{
    ev.preventDefault();
    var produtoSelecionado = ev.dataTransfer.getData("ID");
    console.log(ev.target);
    if(ev.target.tagName == "IMG")
    {
        ev.target.parentNode.appendChild(document.getElementById(produtoSelecionado));
    }
    else
    {
        ev.target.appendChild(document.getElementById(produtoSelecionado));
    }
}