import $ from "jquery"

import ajaxPutData from "./ajax-put-new-text"


function updateElementText(tag, id) {

   

    var submitUpdate = 'SUBMIT UPDATE'

    $(function() {

        $(tag).html(function() {

          zz
          '<textarea id="replacedText" name="textarea"' +
            'rows = "10" cols="100">' +  $(this).text() + '</textarea>' 
            
            ) }
        )
        .append('<div class="text-submit"><button class"/" type="submit">' +
                submitUpdate + '</button></div>'
           )

           $('#text-submit').on('submit', function() {

            ajaxPutData(id)

      }  ).remove()

      $(tag).html(function() {
          return (
              '<div className="consults-symptoms">' + $(this).text() +
              '</div>'
          )
      })
    
    } )
         

    }



export default updateElementText