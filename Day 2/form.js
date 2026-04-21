
     const openabout=document.getElementById('about')
     const show=document.getElementById('show')
     const btn=document.getElementById('btn')
     const body=document.body
     openabout.addEventListener('click',()=>{
     show.classList.remove('hidden')
     body.classList.add('overflow-hidden')
         })
         btn.addEventListener('click',()=>{
          show.classList.add('hidden')
           body.classList.remove('overflow-hidden')
         })
        const open=document.getElementById('signin')
        const login=document.getElementById('login')
        const button=document.getElementById('button')
       
        open.addEventListener('click',()=>{
          login.classList.remove('hidden')
         
        })
        button.addEventListener('click',()=>{
        login.classList.add('hidden')
        })
     
   