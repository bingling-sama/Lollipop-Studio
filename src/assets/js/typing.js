const name = document.querySelector('.home');
name.innerHTML = name.textContent.replace(/\S/g, "<span>$&</span>")
