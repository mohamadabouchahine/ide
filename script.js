let codes = document.getElementById("codes");
let run = document.getElementById("run_code");
let remove = document.getElementById("remove_code");
let result = document.getElementById("result");

run.onclick = () =>{
    result.innerHTML = codes.value;
    localStorage.setItem("OUTPUT", codes.value);
};

remove.onclick = () =>{
    result.innerHTML = "";
};

onload = () =>{
    codes.value = localStorage.getItem("OUTPUT");
};