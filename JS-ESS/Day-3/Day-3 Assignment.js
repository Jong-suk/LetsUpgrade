function Address() 
{
    var input = document.getElementsByName('array[]');
    for (var i = 0; i < input.length; i++) 
    {
        if(i%2 == 0)
        {
            let a=input[i];
            name = "Name: " + a.value + " ";
        }
        else
        {
            let a=input[i];
            address = "<br/>Address: " + a.value + " " ;
        } 
    }
    document.getElementById("par").innerHTML = `${name} ${address}`;
    document.getElementById("po").innerHTML = "Output";
}