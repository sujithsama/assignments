var func=[function(j){return j*j }];
for(let i=1;i<5;i++)
{
    func.push(function(value){
       return value*value;
    })
}
console.log(func[1](4));
console.log(func[2](5));