function myFunction() {
    var txt;
    var pat_person = prompt("Please enter Patient's full name:", "Jane Doe ");
    var doc_person = prompt("Please enter Doctor's full name:", "Jany Doe ");
    var div = document.getElementById('divCheckbox');
    div.style.display = 'block';
    document.getElementById('patient').innerHTML=pat_person;
    document.getElementById('doctor').innerHTML=doc_person;
    if (pat_person  == null || pat_person  == "") {
        txt = "User cancelled the prompt.";
    } else {
        var originalContents = document.body.innerHTML;
        $(".delete-item").detach();
        $(".minus-item").detach();
        $(".plus-item").detach();
        var printcontent = document.getElementById('modalb').innerHTML;
        document.body.innerHTML = printcontent;
        window.print();
        document.body.innerHTML = originalContents;
        setTimeout(function() {
            location.reload();
        }, 1);
        }
        div.style.display = 'none';

    }
    


