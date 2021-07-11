a =" madam came to meet my mom and dad "
a = a + ""
b = ""
revb = ""
for(i of a)
{
  if(i!=" ")
  {
    b=b+i
    revb= i + revb
  }
  else{
    if(b == revb)
    {
      console.log(b)
    }
    b= ""
    revb = ""
  }
}