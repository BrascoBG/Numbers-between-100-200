function number(arg1){
    let num = parseInt(arg1);

    if(num < 100){
        console.log('Less than 100');
    }
    else if(num > 200){
        console.log('More than 200');
    }
    else if(num >= 100 && num <= 200){
        console.log('Between');
    }
}

number(201);
