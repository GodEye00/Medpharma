import $ from "jquery"
import "jquery-ui"

$.sessionTimeout({

    // custom warning message
    message: 'Your session is about to expire.',
  
    // keep alive url
    keepAliveUrl: window.location.href,
  
    // request type
    keepAliveAjaxRequestType: 'POST',
  
    // redirect url
    redirUrl: '/General-Home',
  
    // logout url
    logoutUrl: '/logout',
  
    // 15 minutes
    warnAfter: 900000, 
  
    // 20 minutes
    redirAfter: 1200000, 
  
    // appends time stamp to keep alive url to prevent caching
    appendTime: true 
    
  });