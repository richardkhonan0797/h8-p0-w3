function dataHandling2(){
    //splice
    input.splice(1,2,"Roman Alamsyah Elsharawi","Provinsi Bandar Lampung");
    input.splice(4,1,"Pria","SMA Internasional Metro");
    console.log(input);
  
    //split
    var tanggal = input[3];
    var split = input[3].split("/");
    switch(split[1]){
      case '01':console.log("Januari");break;
      case '02':console.log("Februari");break;
      case '03':console.log("Maret");break;
      case '04':console.log("April");break;
      case '05':console.log("Mei");break;
      case '06':console.log("Juni");break;
      case '07':console.log("Juli");break;
      case '08':console.log("Agustus");break;
      case '09':console.log("September");break;
      case '10':console.log("Oktober");break;
      case '11':console.log("November");break;
      case '12':console.log("Desember");break;
    }
  
    //sort
    sort = split.sort(function sortDescending(a, b){return b-a});
    console.log(sort);
    
    //join
    pisah = tanggal.split("/");
    join = pisah.join("-");
    console.log(join);
  
    //slice
    slice = input[1].slice(0,15);
    console.log(slice);
  }
  
  var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
  console.log(dataHandling2(input));