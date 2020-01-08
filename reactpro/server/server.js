const express = require('express')
const app =express()

app.get('/api/v1/admin/login',(req,res)=>{
  let {userName,passWord} = req.query
  if(userName=='admin'&&passWord=='123'){
    res.send({err:0,msg:'loginok',token:'sdjskfhsfhskhsf',rootIds:['0','1','2-0','2-1']})
  }else{
    res.send({err:-1,msg:'login no ok'})
  }
})
app.listen(3003,()=>{
  console.log('server start')
})