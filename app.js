
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let shop=[];
let numRow=1;

let parint = document.getElementById("parint") 
let table = document.createElement('table');
parint.appendChild(table);

//---------------------------------------------------
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
//---------------------------------------------------



function City(Location, minCusPerHour, maxCusPerHour, avgCookPerCus, CEHour, Coeh) {
    this.Location = Location;
    this.minCusPerHour = minCusPerHour;
    this.maxCusPerHour = maxCusPerHour;
    this.avgCookPerCus = avgCookPerCus;
    this.CEHour = CEHour;
    this.Coeh = Coeh;
    shop.push(this);
    console.log(shop);
    this.total = 0;
console.log(this.Coeh)}
    //----------------------------------------------------
    City.prototype.calCEHour=function(){
        for(let i=0;i<hour.length;i++){
            this.CEHour.push(random(this.minCusPerHour,this.maxCusPerHour));
        }}
        //----------------------------------------------------
    City.prototype.calCoeh=function(){
            for(let i=0;i<hour.length;i++){
                this.Coeh.push((Math.floor(this.CEHour[i]*this.avgCookPerCus)));
                this.total+=this.Coeh[i];
            }}
            //---------------------------------------------------
let seattle=new City('seattle','23','65','6.3',[],[]);
let tokyo=new City('tokyo','3','24','1.2',[],[]);
let Dubai=new City ('Dubai','11','38','3.7',[],[]);
let Paris=new City ('Paris','20','38','2.3',[],[]);
let Lima=new City ('Lima','2','16','4.6',[],[]);
//---------------------------------------------------
function makeHead(){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let th=document.createElement('th');
    tr.appendChild(th);
    th.textContent='Name'
    
    for(let i=0;i<hour.length;i++){
        let th=document.createElement('th')
        tr.appendChild(th);
        th.textContent=hour[i];
    }
    let lastTh=document.createElement('th');
    tr.appendChild(lastTh);
    lastTh.textContent='Total'
}
//----------------------------------------------
City.prototype.rander=function(){
    numRow++;
    let tr =document.createElement('tr');
    table.appendChild(tr);
    let td =document.createElement('td');
    tr.appendChild(td);
    td.textContent=this.Location;
    for(let i=0; i<hour.length;i++)
    {
        let td=document.createElement('td');
        tr.appendChild(td)
        td.textContent=this.Coeh[i];}

        let totald =document.createElement('th');
        tr.appendChild(totald);
        totald.textContent=this.total;
    
}







//---------------------------------------
let form=document.getElementById('form');
form.addEventListener('submit',submitter)

function submitter(event){
    event.preventDefault();
    
    let loca =event.target.locationfield.value;
    
    let min =event.target.minfield.value;
    
    let max =event.target.maxfield.value;
    
    let avg =event.target.avgfield.value;
    
    let addNewshop=new City(loca,min,max,avg,[],[])
    table.deleteRow(numRow);
    addNewshop.calCEHour();
    addNewshop.calCoeh();
    addNewshop.rander();
    footer();
}
makeHead();



seattle.calCEHour();
tokyo.calCEHour();
Dubai.calCEHour();
Paris.calCEHour();
Lima.calCEHour();

seattle.calCoeh();
tokyo.calCoeh();
Dubai.calCoeh();
Paris.calCoeh();
Lima.calCoeh();

seattle.rander();
tokyo.rander();
Dubai.rander();
Paris.rander();
Lima.rander();

//-----------------------------------------
function footer(){
    let footrRow=document.createElement('tr');
    table.appendChild(footrRow)
    let th=document.createElement('th');
    footrRow.appendChild(th);
    th.textContent='total'



    let totalTotal=0;
for(let i=0;i<hour.length;i++){
let total2=0;
for(let j=0;j<shop.length;j++){
    total2+=shop[j].Coeh[j]
    totalTotal+=shop[j].Coeh[j]
}
let th=document.createElement('th');
footrRow.appendChild(th);
th.textContent=total2;
    }

    let lastth=document.createElement('th');
    footrRow.appendChild(lastth);
    lastth.textContent=totalTotal;   
}
footer();







