function ab() {
    var urlObj = new window.URL(window.location.href);
      win = window.open();
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      var iframe = document.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.referrerpolicy = "no-referrer";
      iframe.allow = "fullscreen";
      iframe.src = "https://6z3pk3-8080.csb.app/client/https://s2g3.onrender.com/play/activision-publishing-inc/7935/call-of-duty.html";
      win.document.body.appendChild(iframe);
}
