let data =["samsul","budi","miaw"];
let listMHS = dokumen.getElementById("listMHS");
data.forEach(showMahasiswa);

function showMahasiswa(value,index)
{
    console.log(value);
     listMHS.innerHTML += "<li>"+value+"</li>";
    //listMHS.innerHTML ="<li>${value}</li>";
}