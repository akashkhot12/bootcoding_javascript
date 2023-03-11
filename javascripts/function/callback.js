const func1 = (a,b) => {
        return a+b;
}

const func2 = (name,callback) => {
    return callback;
};


console.log(func2("sweetie", func1(1,2)));



