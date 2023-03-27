let head=[4,2,1,3];
/* let q= head.sort();
  let w=q.toString(); */
  let i=0,j=0,temp=0;
  for(i=0;i<head.length;i++)
  {
      for(j=0;j<head.length;j++)
      {
          if(head[i]<head[j]){
              temp=head[i];
              head[i]=head[j];
              head[j]=temp;
          }
      }
  }
  let w=head;
  console.log(w);