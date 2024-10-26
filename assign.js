//question 1
const array = [3,5,9,13,17,67, 40, 6, 1, 90, 10, 12,90 , 140, 161, 118,45,65,34, 120];
function findSum() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        sum += array[i];
    }


    document.getElementById('dm1').innerHTML = "the sum of array elements is " + sum;
}

//question 2
function findMax() {
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        else {
            max = max;
        }


    }
    document.getElementById("dm2").innerHTML = "The maximum among the array is" + max;
}

//question 3
function ascending() {
    array.sort((a, b) => a - b);
    document.getElementById("dm3").innerHTML = " The sorted array:" + array;
}

//question 4
function reversee(){
    const A=array.reverse();
document.getElementById('dm4').innerHTML="The reversed element is "+A;

}

//question 5
function arrangeEven(){
    let A=[];
    for(let i=0; i<array.length;i++){
        if(array[i]%2==0){
            A.push(array[i]);
        }
    }
    document.getElementById('dm5').innerHTML="The Even array is "+A;
}
arrangeEven();

//question 6
function arrangeOdd(){
    let A=[];
    for(let i=0; i<array.length;i++){
        if(array[i]%2!==0){
            A.push(array[i]);
        }
    }
    document.getElementById('dm6').innerHTML="The Odd array is "+A;
}
arrangeOdd();

//question 7
function findAverage(){
    let A=[];
    let sum=0;
    let average=0;
       for(let i=0;i<array.length;i++){
          
           sum+=array[i];
       }
       average=sum/array.length;
      document.getElementById('dm7').innerHTML="The Average array is "+average;

   }
   findAverage();

   //Question 8
   function removeDuplicates(){
    const viewed=[];
    const DuplicatedArray=[];
    array.forEach(value => {
        if(!viewed[value]){
            viewed[value]=true;
            DuplicatedArray.push(value);
        }
 });
 document.getElementById('dm8').innerHTML="The unDuplicated  array elt is "+DuplicatedArray;
   }
   removeDuplicates();
   //Question 9
   function findMedian(){
    let median;
    
        if(array.length%2==0){
            median=(array[array.length/2]+array[(array.length/2)+1])/2;
        
    }  
    else
    {
        median=array[Math.floor(array.length/2)]
    }
    document.getElementById('dm9').innerHTML= "The median of the  array elements is " +median;
 }
 findMedian()
 //Question 10
 function doubleArray(){
    let doubledArray=[];
    for(let i=0;i<array.length;i++){
         doubledArray.push(array[i]*2);
       
    }
    document.getElementById('dm10').innerHTML="The Doubled   array elements is " +doubledArray;
 }
 doubleArray()
 //question 11
 //array of string
const names=['bosco','jean','Aldrin','Kalisa','Theogene','Khabibu','Diplatin',
    'Shariff','Jackson','blaise','boris','Pilote','Jmv','Nyange','Damascene','Rene'
    ,'Emmy','Patric','Khamuza','Salimath'];
    function displayNames(){
        for(let i=0;i<names.length;i++){
           document.getElementById('dm11').innerHTML += names[i]+',';  
        } 
    }
    displayNames();

    //question 12
    function arrangeNames(){
        const sortedNames=names.sort((a,b) => a.localeCompare(b));
        document.getElementById('dm12').innerHTML=" The alphabetical names are "+sortedNames+',';
    }
    arrangeNames();

    //Question 13
    function searchName(){
        const verify="Rene";
        let feedback=false;
        for(let i=0;i<names.length;i++){
             if(names[i]==verify){
                feedback=true;
                break;
    }
 }
document.getElementById('dm13').innerHTML= "The answer is "+feedback;
    }
    searchName();
    
    //Question 14
    function findLargeName(){
        let long=names[0];
        for(let i=0;i<names.length;i++){
            if(names[i].length>long.length){
                long=names[i];
            }
            else
            {
                long=long;
            }
        }
       document.getElementById('dm14').innerHTML="the largest name in the arrray is "+long;

    }
    findLargeName();
    //Qustion 15
    function searchStart(){
        let start="b";
        let found=[];
        for(let i=0;i<names.length;i++){
            if(names[i].startsWith(start)){
                found.push(names[i]);
            }
        }
        console.log(found);
        document.getElementById('dm15').innerHTML=
         "The names in the arrray started with "+start+" are "+found;

    }
    searchStart();
    //question 16
    function upperlisee(){
        const upperlisedArray=[];
        for(let i=0;i<names.length;i++){
            upperlisedArray.push(names[i].toUpperCase());
        }    
            document.getElementById('dm16').innerHTML=
            "the upperlised array is "+upperlisedArray;
    }
    upperlisee();
    // question 17
    function removeName() {
        const remove = 'Rene';
        const index = names.indexOf(remove); 
     remainingNames=names;
        if (index !== -1) { 
            remainingNames.splice(index, 1); 
        }
        
        document.getElementById('dm17').innerHTML=
        "The remaining names from the array are "+remainingNames;
        
    }
    
    removeName();
    //Question 18
    function CountFound(){
        let count=0;
        for(let i=0;i<names.length;i++){
            if(names[i].includes('a')){
                count +=1;
            }
        }
        document.getElementById('dm18').innerHTML=
        "The names with letter a are "+count;
       
    }
    CountFound();
    //Question 19
    function singleString(){
        let string='';
        for(let i=0;i<names.length;i++){
            string +=names[i]+',';
        }
      document.getElementById('dm19').innerHTML=
      "the string of all array names is"+string;
      
    }
    singleString();
    //Question 20
    let ff=names;
    function reverseString(){
       
        const reversedNames=ff.reverse();
        document.getElementById('dm20').innerHTML="The reversed names of the array is"+reversedNames;
        
    }
    reverseString();
    //Question 21
    const person=
    {name:"Florance",
     age:23,
     occupation:"student"

    };
    // console.log(person);
//Question 22(
function  take(){
    let obj=person.name +" "+person.age +" "+ person.occupation;
    // console.log(obj);
}

take();
//Question 23
function addPropert(){
    person.gender="female";
    // console.log(person);
}
addPropert();
//Question 24
function removeProperty(){
    delete person.age;
    // console.log(person);
}
removeProperty();
//question 25
function display(){
    // console.log(person);
}
display();
//question 26
function mergeObj(){
    let address={
        tel:'0782433539',
        email:'niyoduflorence@gmail.com',
        location:'kigali'
    };
    let peaple={...person,...address};
    // console.log(peaple);
}

mergeObj();
//Question 27

function checkProperty(){
    let chech=("pie" in person);
   document.getElementById('q27').innerHTML=chech;
}
checkProperty();
//question 28
function cloneObject(){
    let clone=Object.assign({},person);
   document.getElementById('q28').innerHTML=
   "the cloned object is clone "+clone;
}
cloneObject();


