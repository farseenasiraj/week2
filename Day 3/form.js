
     const openabout=document.getElementById('about')
     const show=document.getElementById('show')
     const btn=document.getElementById('btn')
     const press=document.getElementById('press')
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
        const submit=document.getElementById('submit')
        const nameInput=document.getElementById('name')
        const emailInput=document.getElementById('email')
        const passwordInput=document.getElementById('password')
       
        open.addEventListener('click',()=>{
          login.classList.remove('hidden')
        })
       press.addEventListener('click',()=>{
        login.classList.add('hidden')
        })
        const nameFeedback=document.getElementById('nameFeedback')
        const emailFeedback=document.getElementById('emailFeedback')
        const passwordFeedback=document.getElementById('passwordFeedback')
        const feedback = document.getElementById('feedback')

        const namePattern=/^[A-Za-z]+\s+[a-zA-Z]+$/
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&]).{8,}$/


        function nameCheck(){
         const name=nameInput.value.trim()
          if(!namePattern.test(name)){
            nameFeedback.textContent='Incorrect name'
          }else{
            nameFeedback.textContent=''
          }
          return namePattern.test(name)
        }


        function emailCheck(){
           const email=emailInput.value.trim()
          if(!emailPattern.test(email)){
            emailFeedback.textContent='Incorrect email'
          }else{
            emailFeedback.textContent=''
          }
          return emailPattern.test(email)
        }
        
        function passwordCheck(){
          const password=passwordInput.value.trim()
          if(!passPattern.test(password)){
            passwordFeedback.textContent='please provide a strong password'
          }else{
            passwordFeedback.textContent=''
          }
          return passPattern.test(password)
        }
        

        nameInput.addEventListener('blur',nameCheck)
        emailInput.addEventListener('blur',emailCheck)
         passwordInput.addEventListener('input',passwordCheck)
        
        
         login.addEventListener('submit',(e)=>{
          e.preventDefault()
        
          const allOk = nameCheck() && emailCheck() && passwordCheck();

          if(allOk){
          feedback.textContent="All ok...form is submitting.."
            feedback.className="text-green-900"
          }
        
         })
     
   