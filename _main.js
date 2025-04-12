// stage 1: rgnSel()
// stage 2: agtType(typ)
// stage 3: themeMode(mde)
// stage 4: onlyMeenIfEU() (EU ONLY)
// stage 5: hdSel(rr)

function initStart() {
  // provision the metadata
  sessionStorage.setItem("region", "na");
  sessionStorage.setItem("type", "agent");
  sessionStorage.setItem("scWeb", "sellercentral");
  sessionStorage.setItem("theme", "");
  rgnSel();
  selectFbaCustRetType();
  selectSerenityType();
  document.body.insertAdjacentHTML(
    "afterend",
    `a project by edwhonti@amazon.ph`
  );
  document.getElementById("check-M@").checked = true;
  document.getElementById("check-M@").disabled = true;
}

function rgnSel() {
  const rgn = new URLSearchParams(window.location.search).get("region") || "na"; // default to "na" if no region is specified
  const regionSettings = {
    na: { scWeb: "sellercentral", extraActions: () => hdSel(rgn) },
    eu: {
      scWeb: "sellercentral-europe",
      extraActions: () => {
        onlyMeenIfEU();
        hdSel(rgn);
        document
          .getElementById("ifEuMeenBlk")
          .setAttribute("style", "display: block");
      },
    },
  };
  const settings = regionSettings[rgn] || regionSettings.na;
  sessionStorage.setItem("region", rgn);
  sessionStorage.setItem("scWeb", settings.scWeb);
  document.title += ` - ${rgn.toUpperCase()}`;
  document.getElementById("rg-title").innerHTML = rgn.toUpperCase();
  agtType(sessionStorage.getItem("type"));
  themeMode();
  settings.extraActions();
  document
    .querySelector(`button[inverse="${rgn.toUpperCase()}"]`)
    .setAttribute("style", "display: flex");
}

function hdSel(rr) {
  // workaround: https://stackoverflow.com/questions/3607291/javascript-and-getelementbyid-for-multiple-elements-with-the-same-id
  let btnRgn = document.querySelectorAll(".btn-" + rr.toUpperCase());
  for (let b = 0; b < btnRgn.length; b++) {
    btnRgn[b].setAttribute("style", "display: none");
  }
  return;
}

function agtType(typ) {
  typ = new URLSearchParams(window.location.search).get("type") || "agent"; // default to "agent" if no type is provided
  sessionStorage.setItem("type", typ);
  document.title += ` (${typ.toUpperCase()} MODE)`;
  if (typ === "sme") {
    document.querySelectorAll(".SMEonly").forEach((element) => {
      element.setAttribute("style", "display: block");
    });
  }
  if (typ !== "agent" && typ !== "sme") {
    window.location.replace(
      `?region=${sessionStorage.getItem("region")}&type=agent`
    );
  }
}

function expp(cat) {
  // expand
  if (
    cat == "scCase" &&
    !confirm(
      "PLEASE ENSURE THAT YOU HAVE PEEKED INTO THE SELLER'S ACCOUNT BEFORE CONTINUING!!\n\nHave you Peeked the Seller?"
    )
  ) {
    alert("Please Peek the Seller first before accessing the tools.");
    throw new Error("Please Peek the Seller first before accessing the tools.");
  }
  document.querySelector(".btn-" + cat).onclick = () => {
    coll(cat);
  };
  document.querySelector(".btn-" + cat).title = "collapse";
  document
    .querySelector("#arrw-" + cat)
    .setAttribute("style", "transform: rotate(180deg)");
  document.querySelector("." + cat).setAttribute("style", "display: grid");
}
function coll(cat) {
  // collapse
  document.querySelector(".btn-" + cat).onclick = () => {
    expp(cat);
  };
  document.querySelector(".btn-" + cat).title = "expand";
  document
    .querySelector("#arrw-" + cat)
    .setAttribute("style", "transform: rotate(0deg)");
  document.querySelector("." + cat).setAttribute("style", "display: none");
}

function enableTools(lob) {
  const updateDisplay = (selector, displayStyle) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute("style", `display: ${displayStyle}`);
    });
  };
  if (document.getElementById(`check-${lob}`)?.checked) {
    console.log(`CHECKED: ${lob}`);
    switch (lob) {
      case "FCR":
        document
          .querySelector("div[FCRLoginIsTrue]")
          ?.setAttribute("style", "display: block");
        document
          .querySelector("div[FCRLoginIsFalse]")
          ?.setAttribute("style", "display: none");
        return;
      case "FBA":
        updateDisplay(`div[${lob}]`, "block");
        updateDisplay(`div[is${lob}]`, "inline-block");
        return;
      default:
        updateDisplay(`div[${lob}]`, "block");
        return;
    }
  } else {
    console.log(`UNCHECKED: ${lob}`);
    switch (lob) {
      case "FCR":
        document
          .querySelector("div[FCRLoginIsTrue]")
          ?.setAttribute("style", "display: none");
        document
          .querySelector("div[FCRLoginIsFalse]")
          ?.setAttribute("style", "display: block");
        return;
      case "FBA":
        updateDisplay(`div[${lob}]`, "none");
        updateDisplay(`div[is${lob}]`, "none");
        return;
      default:
        updateDisplay(`div[${lob}]`, "none");
        return;
    }
  }
}

function themeMode(mde) {
  mde = new URLSearchParams(window.location.search).get("theme");
  const updateTheme = (theme, otherTheme, buttonTitle) => {
    sessionStorage.setItem("theme", theme);
    document.documentElement.className += theme + "Mode";
    document
      .getElementById(otherTheme + "Theme")
      .setAttribute("style", "display: none");
    document.getElementById(theme + "Theme").setAttribute("title", buttonTitle);
    document.getElementById(theme + "Theme").onclick = () => {
      window.location.replace(
        `?region=${sessionStorage.getItem(
          "region"
        )}&type=${sessionStorage.getItem(
          "type"
        )}&theme=${otherTheme}${checkifEuMeen()}`
      );
    };
    document
      .querySelector(`img[is${theme}]`)
      .setAttribute("style", "display: block");
  };
  if (mde === "light") {
    updateTheme("light", "dark", "change to dark mode");
  } else if (mde === "dark") {
    updateTheme("dark", "light", "change to light mode");
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    window.location.replace(
      `?region=${sessionStorage.getItem(
        "region"
      )}&type=${sessionStorage.getItem("type")}&theme=${defaultTheme}`
    );
  }
}

function ledgerHasValue(idnt) {
  const ledgerHasElement = document.getElementById("ledgerHas" + idnt);
  const ledgerContainsElement = document.getElementById(
    "ledgerContains" + idnt
  );
  if (!ledgerHasElement || !ledgerContainsElement) {
    console.error(
      `Elements with ID ledgerHas${idnt} or ledgerContains${idnt} not found.`
    );
    return;
  }
  if (ledgerHasElement.checked) {
    ledgerContainsElement.setAttribute("style", "display: block !important");
  } else {
    ledgerContainsElement.setAttribute("style", "display: none !important");
  }
}

function isAdj() {
  const ledgerEvtValue = document.getElementById("ledgerEvt")?.value;
  const adjSelectionElement = document.querySelector(".adjSelection");
  if (!adjSelectionElement) {
    console.error("Element with class 'adjSelection' not found.");
    return;
  }
  if (ledgerEvtValue === "Adjustments") {
    adjSelectionElement.setAttribute("style", "display: block");
  } else {
    adjSelectionElement.setAttribute("style", "display: none");
  }
}

function selectFbaCustRetType() {
  const tt = document.getElementById("fbaCustRet-type").value;
  const idntElement = document.getElementById("fbaCustRet-idnt");
  const lpnElement = document.getElementById("fbaCustRet-lpn");
  const buttonElement = document.getElementById("fbaCustRet-btn");
  switch (tt) {
    case "idnt":
      idntElement.setAttribute("style", "display: block");
      lpnElement.setAttribute("style", "display: none");
      buttonElement.innerText = "view FBA return";
      break;
    case "lpn":
      idntElement.setAttribute("style", "display: none");
      lpnElement.setAttribute("style", "display: block");
      buttonElement.innerText = "fetch LPN";
      break;
    default:
      throw new Error("undefined");
  }
}

function selectSerenityType() {
  const ss = document.getElementById("serenity-type").value;
  const pthfndElement = document.getElementById("serenity-pthfnd");
  const nortnElement = document.getElementById("serenity-nortn");
  const buttonElement = document.getElementById("serenity-btn");
  switch (ss) {
    case "pthfnd":
      pthfndElement.setAttribute("style", "display: block");
      nortnElement.setAttribute("style", "display: none");
      buttonElement.innerText = "retrieve results";
      break;
    case "nortn":
      pthfndElement.setAttribute("style", "display: none");
      nortnElement.setAttribute("style", "display: block");
      buttonElement.innerText = "view R2_REVERSAL_UNIT";
      break;
    default:
      throw new Error("undefined");
  }
}

function clearAllLedgerValues() {
  const updateElements = (selector, action) => {
    document.querySelectorAll(selector).forEach(action);
  };
  updateElements(
    'input[id^="ledgerHas"]',
    (element) => (element.checked = false)
  );
  updateElements('input[id^="ledgerContains"]', (element) => {
    element.value = "";
    element.setAttribute("style", "display: none");
  });
  updateElements('input[id^="adj"]', (element) => (element.checked = false));
  const setValue = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.value = value;
  };
  setValue("ledgerEvt", "");
  setValue("ledgerDisp", "");
  document
    .querySelector(".adjSelection")
    ?.setAttribute("style", "display: none");
  setValue("ledgerTime", "1");
}

function onlyMeenIfEU() {
  const region = new URLSearchParams(window.location.search).get("region");
  if (region !== "eu") return;
  sessionStorage.setItem("isMeen", "no");
  const isMeen =
    new URLSearchParams(window.location.search).get("isMeen") || "no";
  const swToMeen = document.getElementById("swToMeen");
  const swToEU = document.getElementById("swToEU");
  const rgTitle = document.getElementById("rg-title");
  if (!swToMeen || !swToEU || !rgTitle) {
    console.error(
      "required elements are missing: swToMeen, swToEU, or rgTitle."
    );
    return;
  }
  sessionStorage.setItem("isMeen", isMeen);
  if (isMeen === "no") {
    swToMeen.setAttribute("style", "display: inline-block");
    swToEU.setAttribute("style", "display: none");
  } else if (isMeen === "yes") {
    const agt = sessionStorage.getItem("type") || "agent";
    swToMeen.setAttribute("style", "display: none");
    swToEU.setAttribute("style", "display: inline-block");
    document.title = `Paragon TOOLS v2 - MEEN (${agt.toUpperCase()} MODE)`;
    rgTitle.innerHTML = "MEEN";
    disableNotMeen();
  } else {
    const queryParams = new URLSearchParams({
      region: sessionStorage.getItem("region") || "na",
      type: sessionStorage.getItem("type") || "agent",
      theme: sessionStorage.getItem("theme") || "light",
      isMeen: "no",
    }).toString();
    window.location.replace(`?${queryParams}`);
  }
}

function disableNotMeen() {
  const updateElements = (selector, displayStyle) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute("style", `display: ${displayStyle}`);
    });
  };
  updateElements("select[isMeen]", "block");
  updateElements("select[isNotMeen]", "none");
}

function checkifEuMeen() {
  const region = new URLSearchParams(window.location.search).get("region");
  if (region === "eu") {
    const isMeen =
      new URLSearchParams(window.location.search).get("isMeen") || "no";
    return `&isMeen=${isMeen}`;
  }
  return "";
}

function ifUsEuMeen() {
  const region = new URLSearchParams(window.location.search)
    .get("region")
    ?.toUpperCase();
  if (region === "NA") {
    return region;
  }
  const euMeen = new URLSearchParams(window.location.search).get("isMeen");
  return euMeen === "yes" ? "MEEN" : region;
}

function serenityHasFNSKU() {
  const serenityHasFNSKUElement = document.getElementById("serenityHasFNSKU");
  const serenityFNSKUElement = document.getElementById("serenity-FNSKU");
  if (!serenityHasFNSKUElement || !serenityFNSKUElement) {
    console.error(
      "required elements 'serenityHasFNSKU' or 'serenity-FNSKU' not found."
    );
    return;
  }
  const displayStyle = serenityHasFNSKUElement.checked ? "block" : "none";
  serenityFNSKUElement.setAttribute("style", `display: ${displayStyle}`);
}