const ui=document.getElementById('date');
ui.max=new Date().toISOString().split("T")[0];      // splitting w.r.t "T" from isostring and taking yyyy-mm-dd
//ui.defaultValue=new Date("2000-01-01").toISOString().split("T")[0];
const display=document.getElementById("display");


function calage(){
    //birthday
    let birthdate = new Date(ui.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;   // MONTH FROM 0 TO 11 IN JS
    let y1 = birthdate.getFullYear();
    //current date
    let currdate = new Date();
    let d2 = currdate.getDate();
    let m2 = currdate.getMonth()+1;
    let y2 = currdate.getFullYear();
    // age calculation
    let y3,m3,d3;

    y3 = y2-y1;
    if(m2 >= m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12+m2-m1;
    }
    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = monthdate(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;     // assume birthday 28 jan 2004 and current date 27 jan 2024
    }
    display.innerHTML= `you are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old`;


}

function monthdate(year,month){
    return new Date(year, month, 0).getDate(); // day 0 mean last day of that month
}
