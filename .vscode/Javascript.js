window.onload = function()
{
document.querySelector("#button").addEventListener("click", function() 
{ 
    document.querySelector('#the-excuse').innerHTML = generateExcuse();
})
};
let generateExcuse = function()
{
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    let where = ['because was hungy','because was angry','because was distracted','because was bored'];  
  

    let whoindex = Math.floor(Math.random() * who.length);
    let whatindex = Math.floor(Math.random() * what.length);
    let whereindex = Math.floor(Math.random() * when.length);
    let whenindex = Math.floor(Math.random() * where.length);




    return who[whoindex] +" "+ what[whatindex] +" "+ where[whereindex] +" "+ when[whenindex];

}
