// function showDetails(id)
// {
//     console.log('from onclick', id);
//     window.location.href = "http://localhost:3000/todo/"+id;
// }

// function editDetails(id)
// {
//     console.log('from onclick', id);
//     window.location.href = "http://localhost:3000/todo/"+id+"/edit";
// }


class Todo {
    showDetails(id) {
        console.log('from onclick', id);
        window.location.href = "http://localhost:3000/todo/" + id;
    }

    editDetails(id) {
        console.log('from onclick', id);
        window.location.href = "http://localhost:3000/todo/" + id + "/edit";
    }
}

let obj = new Todo();

if(document.getElementById("hs") !== null){
    document.getElementById("hs").addEventListener('click', (e) => {
        obj.showDetails(e.target.id);
    });
}

if(document.getElementById("edb") !== null){
    document.getElementById("edb").addEventListener('click', (e) => {
        obj.editDetails(document.getElementById("edid").innerText);
    });
}




