export function getFormattedDate(today) 
{
    var dd   = today.getDate();
    var mm   = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minu = today.getMinutes();
    const month = today.toLocaleString('default', { month: 'long' });
    var timestamp = today.toLocaleTimeString('en-US');
    var meridian = timestamp.slice(-2);
    if(dd<10)  { dd='0'+dd } 
    if(hour<10)  { hour='0'+hour } 
    if(minu<10){ minu='0'+minu }
    return month+' '+dd+' '+yyyy+' at '+hour+':'+minu+' '+meridian;
}
