function chengetext(){
   document.getElementById("head1").innerHTML = "This is updated text.";
}

function text(){
    document.getElementById("head2").style.fontSize="25px"
}

function color(){
    document.getElementById("head2").style.color="blue"
}

function changestyle() {
   document.getElementById("head2").style.fontFamily ="monospace";
}

function changebg() {
   document.getElementById("bg1").style.backgroundColor ="orangered";
}

  function fun1() {
            let val1 = document.getElementById('name').value;
            let val2 = document.getElementById('course').value;
            alert('Name: ' + val1 + ' Course: ' + val2);
        }

