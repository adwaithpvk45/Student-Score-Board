const students=[]

function addstudent(){
    const name=document.getElementById("name").value.toUpperCase();
    const regnumb=document.getElementById("regnumb").value ;
    const marks1=parseFloat(document.getElementById("marks1").value );
    const marks2=parseFloat(document.getElementById("marks2").value );
    const marks3=parseFloat(document.getElementById("marks3").value ); 
    const marks4=parseFloat(document.getElementById("marks4").value );

    const totalmarks=marks1+marks2+marks3+marks4;
    const avgmarks=totalmarks/4;
    var   grade='';

    if (avgmarks >= 90) {
        grade = 'A';
    }else if (avgmarks >= 75){
        grade = 'B';
    }else if (avgmarks >= 50){
        grade = 'C';
    }else{
        grade = 'D';
    }
    if(!isNaN(name)||!sNaN(regnumb)||isNaN(marks1)||isNaN(marks2)||isNaN(marks3)||isNaN(marks4)){
        alert("Please fill the details")
    }else{
        students.push({name,regnumb,marks1,marks2,marks3,marks4,totalmarks,avgmarks,grade})
    displaystudents();
    document.getElementById('marklist').reset();

    document.getElementById('name').focus()
    }    
}

function displaystudents(){

    students.sort((a,b)=>b.totalmarks-a.totalmarks);

    const tbody=document.querySelector('#studentdata tbody');
    tbody.innerHTML='';
    students.forEach(student=>{
               const row=document.createElement('tr');
               row.innerHTML=`
               <td>${student.name}</td>
               <td>${student.regnumb}</td>
               <td>${student.marks1}</td>
               <td>${student.marks2}</td>
               <td>${student.marks3}</td>
               <td>${student.marks4}</td>
               <td>${student.totalmarks}</td>
               <td class="${getHighlightClass(student.avgmarks)}">${student.avgmarks.toFixed(2)}</td>
               <td>${student.grade}</td>`;
    tbody.appendChild(row);
    });  

}

function getHighlightClass(avgmarks) {
    if (avgmarks >= 75) {
        return 'green';
    } else if (avgmarks >= 50) {
        return 'yellow';
    } else {
        return 'red';
    }
}
