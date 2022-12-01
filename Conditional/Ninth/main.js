let month = prompt('introduce a month');
let num;

if (month === 'january' || month === 'march' || month === 'may' || month === 'july' ||month === 'august' ||month === 'october' || month === 'december'){
    num = 30;
} else if ( month === 'april' || month === 'june' || month === 'september' || month === 'november'){
    num = 31;
}else{
    num = 28;
}




