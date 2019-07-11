function isArrayLike(obj)
{
    let len=obj.length||-1;
   if(obj&&typeof obj=="object"&&isFinite(len)&&len>=0&&len<Math.pow(2,32)&&len===parseInt(len))
   {
       return true;
   }
   return false;
}
let obj={
    0:1,
    1:2,
    2:2,
    3:3,
    length:4,
}
function sum(obj)
{
    var sum=0;
    if(isArrayLike(obj))
    {
        for(var i=0;i<obj.length;i++)
        {
            var ele=obj[i];
            if(ele==null)continue;
            if(isFinite(ele))sum+=ele;
            else
            console.log(`ele ${i} is not number`);
        }
    }
    else
    console.log(`arguments is not arraylike`);
    return sum;
}
console.log(sum(obj));