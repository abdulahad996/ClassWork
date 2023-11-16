var studentdata = []
function addStudentDetails(studentData) {
    studentdata.findIndex((x)=>{
        return x.name == studentData.name
    })

    if(studentaData.findIndex((x) => { return x.name.toLowerCase() == studentData.name.toLowerCase() }) !== -1){
        console.error("student is already added")
        return false;
    }
    studentaData.push(studentData);
}