	
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    const texts = [
        "Hello, I'm",
        "Tejas Kumar Singh",
        "Frontend Developer"
      ];
    
      const elements = [
        document.getElementById("hello"),
        document.getElementById("name"),
        document.getElementById("title")
      ];
    
      let index = 0;
    
      function writeText() {
        if (index < texts.length) {
          let text = texts[index];
          let element = elements[index];
          let charIndex = 0;
    
          function writeChar() {
            element.textContent += text[charIndex];
            charIndex++;
    
            if (charIndex < text.length) {
              setTimeout(writeChar, 100);
            } else {
              index++;
              setTimeout(writeText, 1000);
            }
          }
    
          writeChar();
        }
      }
    
      writeText();    