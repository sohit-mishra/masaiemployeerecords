var empname = document.querySelector("#name");
var empid = document.querySelector("#employeeID");
var department = document.querySelector("#department");
var experience = document.querySelector("#exp");
var email = document.querySelector("#email");
var mobileNumber = document.querySelector("#mbl");
var btn = document.querySelector("input[type='submit']");
var tbody = document.querySelector("tbody");


var array = [];


btn.addEventListener("click", function (e) {
    e.preventDefault();
    tbody.innerHTML = "";

    var obj = {
        EmployeeName: empname.value,
        EmployeeID: empid.value,
        Department: department.value,
        Experience: experience.value,
        EmaiAddress: email.value,
        MobileNumber: mobileNumber.value,
    }

    array.push(obj);

    array.forEach(element => {
        var objectdata = element;
        var tableRow = document.createElement("tr");
        var exper = "";
        for (let x in objectdata) {
            var objecttext = document.createElement("td");
            objecttext.innerText = objectdata[x];
            tableRow.append(objecttext);
            exper = objectdata['Experience'];
        }

        var roledata = document.createElement("td");
        if (Number(exper) > 5) {
            roledata.innerText = "Senior";
        } else if (Number(exper) > 2 && Number(exper) < 5) {
            roledata.innerText = "Junior";
        } else {
            roledata.innerText = "Fresher";
        }

        tableRow.append(roledata);

        var btndata = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerText = "Delete";
        btndata.append(btn);


        btn.addEventListener("click", function () {
            var index = array.indexOf(element);
            if (index !== -1) {
                array.splice(index, 1);
            }
            tableRow.remove();
        })
        

        tableRow.append(btndata);
        tbody.append(tableRow);
    });


});