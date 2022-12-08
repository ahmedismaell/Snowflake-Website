let img = document.getElementById('gl')

function glow () { 
    setInterval(()=>{
        if (img.classList.contains('logo')){
            img.classList.remove('logo')
        } else (img.classList.add('logo'))
    },2000)
}

glow(); 

