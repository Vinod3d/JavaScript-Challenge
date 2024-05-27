function age(){

    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    
    
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    
    // var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   
    
    let y = y2 - y1
    let m = m2 - m1
    let d = d2 - d1

    if(m<0 || m == 0){
        y--;
        m += 12;
    }

    if(d < 0 || d == 0 ){
        m--;
        d+= monthDay(y2, m);
    }
    
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}

function monthDay(year, month){
    return new Date(year, month, 0).getDate();
}