const xhr = new XMLHttpRequest();
xhr.open('GET', './db.json', true);
xhr.onload = function db() {
    if (this.status === 200) {
        let db = JSON.parse(this.responseText);

        let html = "";
        db.forEach(dbs => {
            html += `
                <tr id="${dbs.id}" class="posts">
                        <td class="table-title">
                            <a href="#">${dbs.title}</a>
                            </br>
                            <a href="#" class="change text-success mr-3">Change</a>
                            <a href="#" class="delete text-danger">Delete</a>
                        </td>
                        <td>${dbs.categories}</td>
                        <td>${dbs.tags}</td>
                        <td>${dbs.date}</td>
                    </tr>
                `;
        });
        document.querySelector('#db-lists').innerHTML = html;
    }
}
xhr.send();

let deleteTr = document.querySelectorAll('.delete');
for (let i = 0; i < deleteTr.length; i++) {
    deleteTr[i].addEventListener('click', function () {
        let tr = this.parentElement;
        tr.style.display = 'none';
    });

}