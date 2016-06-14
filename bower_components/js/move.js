$(function() {
    $("#dragEle")[0].ondragstart = function(event) {
        console.log("dragStart")
        event.dataTransfer.setData("Text", event.target.id)
    }
    $('#dropEle')[0].ondrop = function(event) {
        console.log('onDrop');
        var id = event.dataTransfer.getData('Text')
        $(this).append($('#' + id).clone().text($(this).find('div').length))
        event.preventDefault()
    }
    $('#dropEle')[0].ondragover = function(event) {
        console.log('onDrop over');
        event.preventDefault()
    }
    $('#dropEle')[0].ondragenter = function(event) {
        console.log('onDrop enter');
    }
    $('#dropEle')[0].ondragleave = function(event) {
        console.log('onDrop leave');
    }
    $('#dropEle')[0].ondragend = function(event) {
        console.log('onDrop end');
    }
})
