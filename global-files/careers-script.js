  const textToCopy = document.getElementById('copyable');

 textToCopy.onclick = function() {
    document.execCommand("copy");
    // console.log('ehehhehe');
  }

 textToCopy.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", textToCopy.textContent);
      console.log(event.clipboardData.getData("text"))
      document.getElementsByClassName('tooltip')[0].innerHTML = 'Text Copied!';
      setTimeout(function() {
        // document.getElementsByClassName('tooltip')[0].style.opacity = "0";
        // document.getElementsByClassName('tooltip')[0].style.visibility = "hidden";
        document.getElementsByClassName('tooltip')[0].innerHTML = 'Click to Copy';
      }, 2000);
    }
  });

  function iconCopyLink() {
    console.log('workstothisextent');
    // var copyText = ;
    // copyText.select();
    document.getElementById('yessir').select();
    document.execCommand("copy");
    alert("Copied the text: ");
  }