const body = document.body


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.users__card').forEach(function(popup) {
        popup.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path
  
         document.querySelectorAll('.popup').forEach(function(pop) {
           pop.classList.remove('is-active')
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
         body.classList.toggle('lock')
        })
    })

    document.querySelectorAll('.popup__close').forEach(function(close) {
        close.addEventListener('click', function() {
            document.querySelectorAll('.popup').forEach(function(pop) {
                pop.classList.remove('is-active')
              }) 
              body.classList.remove('lock')
                  
        })    
    })    
  });

  document.querySelectorAll('.popup').forEach(function(b) {
    b.addEventListener('click', function() {
        document.querySelectorAll('.popup').forEach(function(pop) {
            pop.classList.remove('is-active')
          }) 
          body.classList.remove('lock')
    })
  })
  