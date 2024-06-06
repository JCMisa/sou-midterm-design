//const { Toast } = require("../lib/bootstrap/dist/js/bootstrap.esm");

var dataTable;

$(document).ready(function () {
    loadDataTable(); //call the func if the document is ready
});



function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/commitmentlist/getall'},
        "columns": [
            { data: 'organizationName', "width": "10%" },
            { data: 'schoolYear', "width": "10%" },
            { data: 'advicerName', "width": "10%" },
            { data: 'homeAddress', "width": "10%" },
            { data: 'contactNo', "width": "10%" },
            { data: 'college.collegeName', "width": "10%" },
            { data: 'academicRank.rankName', "width": "10%" },
            {
                data: 'commitmentId',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                        <a href="/user/commitmentform/upsert?id=${data}" class="btn btn-primary mx-2">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                        <a onClick=Delete('/admin/commitmentlist/delete/${data}') class="btn btn-danger mx-2">
                            <i class="bi bi-trash-fill"></i>
                        </a>
                    </div>`
                },
                "width": "15%"
            }
        ]
    });
}


function Delete(url) {
    Swal.fire({ //provides the pop-up UI
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) { //check if confirmation button is clicked
            $.ajax({
                url: url, //pass the url parameter as value
                type: 'DELETE', //checks the http request of the action if it is HTTPDelete
                success: function (data) {
                    dataTable.ajax.reload(); //refresh the data table once something is deleted
                    toastr.success(data.message); //show the toastr notification once data is deleted
                }
            })
        }
    });
}