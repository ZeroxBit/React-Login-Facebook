import React, { Component } from "react";

class FacebookLogin extends Component {
  
  componentLogin(){
    window.fbAsyncInit = ()  => {
      window.FB.init({
        appId      : '[your-id-facebook]',
        xfbml      : true,
        version    : 'v3.0'
      });
      // FB.AppEvents.logPageView();
    };
  
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v3.0&appId=1687529501329074&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  
  render() {
    return (
      <div> 
        <h1>Login Con Facebook</h1>
       
        <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>

        <div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>
      </div>
    );
  }
}

export default FacebookLogin;
