let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(( numOrStr === null ) || ( numOrStr.trim() === '' ) || ( isNaN( +numOrStr ))) {
    console.log('You did not enter the data or your data is invalid')
} else {
    console.log('OK!')
}