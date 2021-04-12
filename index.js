function saturdayFun(msg="roller-skate") {
    return `This Saturday, I want to ${msg}!`;
} 
saturdayFun();

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(msg="*"){
    return function innerfunction (highlight="special"){
        return `You are ${msg}${highlight}${msg}!`;
    }
}
