import $ from "jquery"
import "jquery"


function Modal(path,  startStopProgress, openClose) {

window.addEventListener('load', () => {

        if(path !== null) {
                mode(path)
        } else return



        if (startStopProgress === 'startProgress') {
            $('#modal').iziModal('startProgress') }

            else if (startStopProgress === 'stopProgress') {
                $('#modal').iziModal('stopProgress')
            } else return




            if ((openClose === 'open')  && $('#modal').iziModal('getState') 
                             === ('opened' || 'opening'))
                              {

                    $('#modal').iziModal('destroy')

                $('#modal').iziModal('open') }
    
                else if (openClose === 'close') {
                    $('#modal').iziModal('close')
                } 
                else if (openClose === 'destroy') {
                    $('#modal').iziModal('destroy') 
                } else return


    
const motionOut = [ 'comingOut', 'bounceOutDown', 
'bounceOutUp', 'fadeOutDown', 'fadeOutUp',  
'fadeOutLeft', 'fadeOutRight', 'flipOutX']

const randomMotionOut = motionOut[Math.floor(Math.random()*motionOut.length)]

const motionIn = ['comingIn', 'bounceInDown', 'bounceInUp', 'fadeInDown',
 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'flipInX']

 const randomMotionIn = motionIn[Math.floor(Math.random()*motionIn.length)]




 
      
     function mode(path) {

        $('#modal').iziModall({ 
  
        title: '',
        subtitle: '',
        headerColor: '#88A0B9',
        background: null,
        theme: '',  // light
        icon: null,
        iconText: null,
        iconColor: '',
        rtl: false,
        width: 600,
        top: null,
        bottom: null,
        borderBottom: true,
        padding: 0,
        radius: 3,
        zindex: 999,
        iframe: false,
        iframeHeight: 400,
        iframeURL: null,
        focusInput: true,
        group: '',
        loop: false,
        arrowKeys: true,
        navigateCaption: true,
        navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
        history: false,
        restoreDefaultContent: false,
        autoOpen: 0, // Boolean, Number
        bodyOverflow: false,
        fullscreen: false,
        openFullscreen: false,
        closeOnEscape: true,
        closeButton: true,
        appendTo: 'body', // or false
        appendToOverlay: 'body', // or false
        overlay: true,
        overlayClose: true,
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        timeout: false,
        timeoutProgressbar: false,
        pauseOnHover: false,
        timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
        transitionIn: randomMotionIn,
        transitionOut: randomMotionOut,
        transitionInOverlay: randomMotionIn,
        transitionOutOverlay: randomMotionOut,
        onFullscreen: function(){},
        onResize: function(){},
        onOpening: function(modal){
            
     
                modal.startLoading()
        
                modal.startProgress()
         
                $.get(path, function(data) {
                    $('#modal').html(data);
         
                    modal.stopLoading();
        
                    modal.stopProgress()
                });
        },

        onOpened: function(){},
        onClosing: function(){},
        onClosed: function(){},
        afterRender: function(){}

    }
        
    )

}


})

    return(
        <> 
        
        <div id="modal"></div>

        </>
    )




}


export default Modal