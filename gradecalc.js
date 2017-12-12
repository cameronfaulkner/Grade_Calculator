function values(){
    document.getElementById('error').innerHTML = '';
    var hwgrade= convert(document.getElementById('hwgrade').value);
    var hwweight= .01 * parseInt(document.getElementById('hwweight').value);
    colors('1', hwgrade);
    var partgrade= convert(document.getElementById('partgrade').value);
    var partweight= .01 * parseInt(document.getElementById('partweight').value);
    colors('2', partgrade);
    var testgrade= convert(document.getElementById('testgrade').value);
    var testweight= .01 * parseInt(document.getElementById('testweight').value);
    colors('3', testgrade);
    var desired = parseInt(document.getElementById('desired').value);
    var finalweight = .01 * parseInt(document.getElementById('weight').value);
    if((hwweight+partweight+testweight+finalweight) != 1){
        document.getElementById('error').innerHTML = "Incorrect weights, try again";
        return
    }if(hwgrade < 0 || partgrade < 0 || testgrade < 0){
        document.getElementById('error').innerHTML = "You can't have a negative grade, try again"
    }
    var current_grade = ((hwweight*hwgrade) + (partgrade*partweight)+(testgrade*testweight))*(4/3);
    console.log(current_grade);
    var thing = ((hwweight*hwgrade) + (partgrade*partweight) + (testgrade*testweight) - desired) / -(finalweight);
    console.log(thing);
    document.getElementById('current grade').innerHTML = 'Your current grade is ' + Math.round(current_grade) + '%';
    document.getElementById('output').innerHTML = "The grade necessary for your final is " + Math.round(thing) + '%';
}
function convert(string){
    var newarray = string.split(",");
    return average(newarray)
}

function average(array){
    var sum = 0;
    for(i = 0; i < array.length; i++ ){
        array[i] = parseInt(array[i]);
        sum += array[i];
    }
    sum = sum/(array.length);
    return sum
}
function colors(field, value) {
    if( value>= 90){
        document.getElementById(field).style.background ='green';
        return
    }if(value >= 80){
        document.getElementById(field).style.background ='purple';
        return
    }if(value >= 70){
        document.getElementById(field).style.background ='yellow';
        return
    }else{
        document.getElementById(field).style.background ='red';
    }
}


