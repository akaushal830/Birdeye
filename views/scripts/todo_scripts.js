
function showDetails(id)
{
    console.log('from onclick', id);
    window.location.href = "http://localhost:3000/todo/"+id;
}

function editDetails(id)
{
    console.log('from onclick', id);
    window.location.href = "http://localhost:3000/todo/"+id+"/edit";
}



