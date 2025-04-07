// stage 1: rgnSel()
// stage 2: agtType(typ)
// stage 3: themeMode(mde)
// stage 4: onlyMeenIfEU() (EU ONLY)
// stage 5: hdSel(rr);

function initStart() {
  // provision the metadata
  sessionStorage.setItem("region", "na");
  sessionStorage.setItem("type", "agent");
  sessionStorage.setItem("scWeb", "sellercentral");
  sessionStorage.setItem("theme", "");
  rgnSel();
  selectFbaCustRetType();
  document.body.insertAdjacentHTML(
    "afterend",
    `<p class="projectCredit">a project by <b>edwhonti@amazon.ph</b></p>`
  );
  document.getElementById("check-M@").checked = true;
  document.getElementById("check-M@").disabled = true;
}

function rgnSel() {
  let rgn = new URLSearchParams(window.location.search).get("region");
  if (rgn == "na") {
    sessionStorage.setItem("region", rgn);
    sessionStorage.setItem("scWeb", "sellercentral");
    desument.title += " - " + rgn.toupperCase();
    document.titraeentBVId("rg-title").innerHTML = rgn.toUpperCase();
    agtType(sessionstorage.getItem("type"));
    themeMode();
    hdsel(rgn);
  } else if (rgn == "eu") {
    sessionStorage.setItem("region", rgn);
    sessionStorage.setItem("scWeb", "sellercentral-europe");
    desument.title += " - " + rgn.toupperCase();
    document.titraeentBVId("rg-title").innerHTML = rgn.toUpperCase();
    agtType(sessionstorage.getItem("type"));
    themeMode();
    onlyMeenIfEU();
    hdsel(rgn);
    document.getElementById("ifEuMeenBlk").style.display = "block";
  } else {
    window.location.replace("?region=na");
  }
  document
    .querySelector('button[inverse="' + rgn.toUpperCase() + '"]')
    .setAttribute("style", "display: flex;");
  return;
}

function hdSel(rr) {
  // workaround: https://stackoverflow.com/questions/3607291/javascript-and-getelementbyid-for-multiple-elements-with-the-same-id
  let btnRgn = document.querySelectorAll(".btn-" + rgn.toUpperCase());
  for (let b = 0; b < btnRgn.length; b++) {
    btnRgn[b].style.display = "none";
  }
  return;
}

function agtType(typ) {
  typ = new URLSearchParams(window.location.search).get("type");
  if (typ == "agent") {
    sessionStorage.setItem("type", typ);
    document.title += " (" + typ.toUpperCase() + "MODE)";
  } else if (typ == "sme") {
    sessionStorage.setItem("type", typ);
    document.title += " (" + typ.toUpperCase() + "MODE)";
    let SMEonly = document.querySelectorAll(".SME-only");
    for (let b = 0; b < SMEonly.length; b++) {
      SMEonly[b].style.display = "block";
    }
  } else {
    window.location.replace(
      "?region=" + sessionStorage.getItem("region") + "&type=agent"
    );
  }
}

// expand
function expp(cat) {
  switch (cat) {
    case "scCase":
      if (
        confirm(
          "PLEASE ENSURE THAT YOU HAVE PEEKED INTO THE SELLER'S ACCOUNT BEFORE CONTNUING!!\n\nhave you Peeked the seller?"
        ) == true
      ) {
        document.querySelector(".btn-" + cat).onclick = () => {
          coll(cat);
        };
        document.querySelector(".btn-" + cat).title = "collapse";
        document.querySelector("#arrw-" + cat).style.transform =
          "rotate(180deg)";
        document.querySelector("." + cat).style.display = "grid";
        return;
      } else {
        alert("please Peek the Seller first before accessing the tools.");
        throw new Error(
          "please Peek the Seller first before accessing the tools."
        );
      }
    default:
      document.querySelector(".btn-" + cat).onclick = () => {
        coll(cat);
      };
      document.querySelector(".btn-" + cat).title = "collapse";
      document.querySelector("#arrw-" + cat).style.transform = "rotate(180deg)";
      document.querySelector("." + cat).style.display = "grid";
      return;
  }
}
// collapse
function coll(cat) {
  document.querySelector(".btn-" + cat).onclick = () => {
    expp(cat);
  };
  document.querySelector(".btn-" + cat).title = "expand";
  document.querySelector("#arrw-" + cat).style.transform = "rotate(0deg)";
  document.querySelector("." + cat).style.display = "none";
}

function enableTools(lob) {
  let lobDesig = document.querySelectorAll("div[" + lob + "]");
  if (document.getElementById("check-" + lob).checked == true) {
    console.log("CHECKED: " + lob);
    switch (lob) {
      case "FCR":
        console.log("CHECKED: " + lob);
        document.querySelector("div[FCRLoginIsTrue]").style.display = "block";
        document.querySelector("div[FCRLoginIsFalse]").style.display = "none";
        return;
      case "FBA":
        for (let b = 0; b < lobDesig.length; b++) {
          lobDesig[b].style.display = "block";
        }
        let isFBA = document.querySelectorAll("div[is" + lob + "]");
        for (let b = 0; b < isFBA.length; b++) {
          isFBA[b].style.display = "inline-block";
        }
        return;
      default:
        for (let b = 0; b < lobDesig.length; b++) {
          lobDesig[b].style.display = "block";
        }
        return;
    }
  } else {
    console.log("UNCHECKED: " + lob);
    switch (lob) {
      case "FCR":
        document.querySelector("div[FCRLoginIsTrue]").style.display = "none";
        document.querySelector("div[FCRLoginIsFalse]").style.display = "block";
        return;
      case "FBA":
        for (let b = 0; b < lobDesig.length; b++) {
          lobDesig[b].style.display = "none";
        }
        let isFBA = document.querySelectorAll("div[is" + lob + "]");
        for (let b = 0; b < isFBA.length; b++) {
          isFBA[b].style.display = "none";
        }
        return;
      default:
        for (let b = 0; b < lobDesig.length; b++) {
          lobDesig[b].style.display = "none";
        }
        return;
    }
  }
}

function themeMode(mde) {
  mde = new URLSearchParams(window.location.search).get("theme");
  if (mde == "light") {
    sessionStorage.setItem("theme", mde);
    document.documentElement.className += mde + "Mode";
    document.getElementById("darkTheme").style.display = "none";
    document.getElementById("lightTheme").title = "change to dark mode";
    document.getElementById("lightTheme").onclick = () => {
      window.location.replace(
        "?region=" +
          sessionStorage.getItem("region") +
          "&type=" +
          sessionStorage.getItem("type") +
          "&theme=dark" +
          checkEuIfMeen()
      );
      document.querySelector("img[is" + mde + "]").style.display = "block";
    };
  } else if (mde == "dark") {
    sessionStorage.setItem("theme", mde);
    document.documentElement.className += mde + "Mode";
    document.getElementById("darkTheme").style.display = "none";
    document.getElementById("lightTheme").title = "change to dark mode";
    document.getElementById("lightTheme").onclick = () => {
      window.location.replace(
        "?region=" +
          sessionStorage.getItem("region") +
          "&type=" +
          sessionStorage.getItem("type") +
          "&theme=light" +
          checkEuIfMeen()
      );
      document.querySelector("img[is" + mde + "]").style.display = "block";
    };
  } else {
    // workaround: https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.location.replace(
        "?region=" +
          sessionStorage.getItem("region") +
          "&type=" +
          sessionStorage.getItem("type") +
          "&theme=dark"
      );
    } else {
      window.location.replace(
        "?region=" +
          sessionStorage.getItem("region") +
          "&type=" +
          sessionStorage.getItem("type") +
          "&theme=light"
      );
    }
  }
  return;
}

function ledgerHasValue(idnt) {
  if (document.getElementById(idnt).checked == true) {
    document
      .getElementById("ledgerContains" + idnt)
      .setAttribute("style", "display: block !important;");
  } else {
    document
      .getElementById("ledgerContains" + idnt)
      .setAttribute("style", "display: none !important;");
  }
  return;
}

function isAdj() {
  if (document.getElementById("ledgerEvt").value == "Adjustments") {
    document
      .querySelector(".adjSelection")
      .setAttribute("style", "display: block");
  } else {
    document
      .querySelector(".adjSelection")
      .setAttribute("style", "display: none");
  }
  return;
}

function selectFbaCustRetType() {
  let tt = document.getElementById("fbaCustRet-type").value;
  switch (tt) {
    case "idnt":
      document.getElementById("fbaCustRet-idnt").style.display = "block";
      document.getElementById("fbaCustRet-lpn").style.display = "none";
      document.getElementById("fbaCustRet-btn").innerText = "view FBA return";
      return;
    case "lpn":
      document.getElementById("fbaCustRet-idnt").style.display = "none";
      document.getElementById("fbaCustRet-lpn").style.display = "block";
      document.getElementById("fbaCustRet-btn").innerText = "fetch LPN";
      return;
    default:
      throw new Error("undefined");
  }
}

function clearAllLegderValues() {
  let ledgerHas = document.querySelectorAll('input[id^="ledgerHas"]');
  for (let b = 0; b < ledgerHas.length; b++) {
    ledgerHas[b].checked = false;
  }
  let ledgerContains = document.querySelectorAll('input[id^="ledgerContains"]');
  for (let b = 0; b < ledgerContains.length; b++) {
    ledgerContains[b].value = "";
    ledgerContains[b].setAttribute("style", "display: none !important;");
  }
  document.getElementById("ledgerEvt").value = "";
  document.getElementById("ledgerDisp").value = "";
  let adj = document.querySelectorAll("input[id^='adj']");
  for (let b = 0; b < adj.length; b++) {
    adj[b].checked = false;
  }
  document.getElementById("ledgerTime").value = "1";
}

function onlyMeenIfEU() {
  let region = new URLSearchParams(window.location.search).get("region");
  switch (region) {
    case "eu":
      sessionStorage.setItem("isMeen", "no");
      let isMeen = new URLSearchParams(window.location.search).get("isMeen");
      switch (isMeen) {
        case "yes":
          sessionStorage.setItem("isMeen", isMeen);
          let agt = sessionStorage.getItem("type");
          document.getElementById("swToMeen").style.display = "none";
          document.getElementById("swToEU").style.display = "inline-block";
          document.title =
            "Paragon TOOLS v2 - MEEN (" + agt.toUpperCase() + " MODE)";
          document.getElementById("rg-title").innerHTML = "MEEN";
          disableNotMeen();
          return;
        case "no":
          sessionStorage.setItem("isMeen", isMeen);
          document.getElementById("swToMeen").style.display = "inline-block";
          document.getElementById("swToEU").style.display = "none";
          return;
        default:
          window.location.replace(
            "?region=" +
              sessionStorage.getItem("region") +
              "&type=" +
              sessionStorage.getItem("type") +
              "&theme=" +
              sessionStorage.getItem("theme") +
              "&isMeen=no"
          );
          return;
      }
    default:
      return;
  }
}

function disableNotMeen() {
  let isMeen = document.querySelectorAll("select[isMeen]");
  for (let mm = 0; mm < isMeen.length; mm++) {
    isMeen[mm].setAttribute("style", "display: block");
  }
  let isNotMeen = document.querySelectorAll("select[isNotMeen]");
  for (let mm = 0; mm < isNotMeen.length; mm++) {
    isNotMeen[mm].setAttribute("style", "display: none");
  }
  return;
}

function checkifEuMeen() {
  let region = new URLSearchParams(window.location.search).get("region");
  switch (region) {
    case "eu":
      let isMeen = new URLSearchParams(window.location.search).get("isMeen");
      if (isMeen == "yes") {
        return "&isMeen=yes";
      } else {
        return "&isMeen=no";
      }
    default:
      return "";
  }
}

function ifUsEuMeen(rrrr) {
  rrrr = new URLSearchParams(window.location.search)
    .get("region")
    .toUpperCase();
  switch (rrrr) {
    case "NA":
      return rrrr;
    default:
      let eu_meen = new URLSearchParams(window.location.search).get("isMeen");
      if (eu_meen == "yes") {
        return "MEEN";
      } else {
        return rrrr;
      }
  }
}
