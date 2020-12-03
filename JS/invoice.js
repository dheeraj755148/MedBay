var langer=0
    var checker = function(lang){
        switch (lang) {
            case "hi":
                 langer = 1
             break;
            case "mr":
                 langer = 2
              break;
            default:
                 langer = 3
            break;
    }
}

function myFunction() {
    var txt;
    console.log(langer)
    switch (langer) {
        case 1:
            var pat_person = prompt("कृपया रोगी का पूरा नाम दर्ज करें:", "Jane Doe ");
            var doc_person = prompt("कृपया डॉक्टर का पूरा नाम दर्ज करें::", "Jany Doe ");
            break;
        case 2:
            var pat_person = prompt("कृपया रुग्णाचे पूर्ण नाव प्रविष्ट करा:", "Jane Doe ");
            var doc_person = prompt("कृपया डॉक्टरांचे पूर्ण नाव प्रविष्ट करा:", "Jany Doe ");
            break;
        default:
            var pat_person = prompt("Please enter Patient's full name:", "Jane Doe ");
            var doc_person = prompt("Please enter Doctor's full name:", "Jany Doe ");
        break;
}
    
    
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
    


