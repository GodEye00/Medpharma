import $ from "jquery"


import "./modal.css"



export default function modal() {

           
    let $window
    let $content
    let $modal
    let $inner_content
    let $close


         
     $window= $(window)
     
     $content = $('#share-options').detach()
     $modal = $('<div class="modal">')
     $inner_content = $('<div class="modal-content"/>')
     $close = $('<button role="button" class="modal-close">close</button>')



    $modal.append($inner_content, $close)
    

    $close.on('click', function(e) {
        e.preventDefault()
        close()
    })

        

    

        openView(500, 500)
        

        function openView(width, height) {
                  $inner_content.empty().append($content)

                  center()
                  $(window).on('resize', center)

                                   
  
                  $modal.css({
                      width: width || 'auto',
                      height: height || 'auto'
                  }).appendTo('body')
  
                 

    

                }



                function close() {
                    $inner_content.empty()
                    $modal.detach()
                    $(window).off('resize', center())
                }
            

        
             function center() {

                let top = Math.max($window.height()-$modal.outerHeight(), 0)/2
                let left = Math.max($window.width()-$modal.outerWidth(), 0)/2

                $modal.css({
                    top: top + $window.scrollTop(),
                    left: left + $window.scrollLeft()
            

            })

        }

           
        

    



    return <div id="share-options"></div>
    
}