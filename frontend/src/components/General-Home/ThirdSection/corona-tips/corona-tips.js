import $ from "jquery"

import "./corona-tips.css"

function coronaVirus() {


        window.addEventListener('load', () => {
            var $window = $(window)
            var $slided = $('#slidedAd')
            var endZone = $('#ft').offset().top - $window.height() - 500

            $window.on('scroll', () => { 

                if ( (endZone) < $window.scrollTop() )  {
                    $slided.animate({ 'right': '0px'}, 250)
                }
                 else {
                    $slided.stop(true).animate({ 'right': '-360px'}, 250)
                }
            })
        })



    return (
        <div className="tip-container">
        <div id="ft">coronaVirus Tips</div>
        <div id="slidedAd">
        Wash your hands regularly</div>
            
        </div>
    )
}

 export default coronaVirus