let date = document.querySelector("input");
let btn=document.querySelector("button");
let year=document.querySelector("#year");
let month=document.querySelector("#month");
let day=document.querySelector("#day");


const today=new Date();
const nowday= today.getDate();
const nowmonth= today.getMonth() +1;
const nowyear=today.getFullYear();





btn.addEventListener("click",()=>{
    const birthday=new Date(date.value);
    const birth_day=birthday.getDate();
    const birth_month=birthday.getMonth()+1;
    const birth_year=birthday.getFullYear();

    if(birth_year>nowyear ){
        alert("select correct birthdate");
    }
    else if(birth_year==nowyear && birth_month>nowmonth){
        alert("select correct birthdate");
    }
    else if(birth_year==nowyear && birth_month==nowmonth && birth_day>nowday){
        alert("select correct birthdate");
    }
    else if(nowmonth>=birth_month ){
        
        if(nowday>=birth_day){

            year.innerText=(nowyear-birth_year);
            month.innerText=(nowmonth-birth_month);
            day.innerText=(nowday-birth_day);

        }
        else{

            year.innerText=(nowyear-birth_year);
            month.innerText=(nowmonth-birth_month-1);

            if(nowmonth-1==1||nowmonth-1==3||nowmonth-1==5||nowmonth-1==7||nowmonth-1==8||nowmonth-1==10||nowmonth==1){

                day.innerText=((31-birth_day)+nowday);

            }
            else if(nowmonth==3){
                if(nowyear%100==0 )
                {
                    if(nowyear%400==0){
                        day.innerText=((29-birth_day)+nowday);
                    }
                    else{
                        day.innerText=((28-birth_day)+nowday);
                    }
                }
                else{
                    if(nowyear%4==0){
                        day.innerText=((29-birth_day)+nowday);
                    }
                    else{
                        day.innerText=((28-birth_day)+nowday);
                    }
                }
            }
            else{

                day.innerText=((30-birth_day)+nowday);

            }
        }
    }
    else if(nowmonth<birth_month){

        year.innerText=(nowyear-birth_year-1);
        if(nowday>=birth_day){

            month.innerText=((12-birth_month)+nowmonth);
            day.innerText=(nowday-birth_day);

        }
        else{

            month.innerText=((12-birth_month)+nowmonth-1);

            if(nowmonth-1==1||nowmonth-1==3||nowmonth-1==5||nowmonth-1==7||nowmonth-1==8||nowmonth-1==10||nowmonth==1){
                day.innerText=((31-birth_day)+nowday);
            }
            else if(nowmonth==3){
                if(nowyear%100==0 )
                {
                    if(nowyear%400==0){
                        day.innerText=((29-birth_day)+nowday);
                    }
                    else{
                        day.innerText=((28-birth_day)+nowday);
                    }
                }
                else{
                    if(nowyear%4==0){
                        day.innerText=((29-birth_day)+nowday);
                    }
                    else{
                        day.innerText=((28-birth_day)+nowday);
                    }
                }
            }
            else{
                day.innerText=((30-birth_day)+nowday);
            }

        }
    }   
})

