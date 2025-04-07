// WILL PRETTYPRINT THIS LATER


// genCase
function genCase(cat) {
switch (cat) {
case "paragonStart":
window.open("https://paragon-"
return;
case "cid":
window.open("https://paragon-" + sessionStorage.getItem("region") +
+ document.getElementById("caseID").value.replaceAll(" ", ""));
return;
case "sopSearch":
window.open("https://paragon-" + sessionStorage.getItem("region") + ".amazon.com/hz/dox-search?
searchQuery=" + searchQue() + "&contentType=SOP&filter=1layer%3A" + document.getElementById("sopSearch-mkt-" +
ifUsEuMeen(sessionStorage.getItem("region"))).value + "&filter=1locale%3Aen-US");
function searchQue() {
let que = document.getElementById("sopSearch-value").value.trim();
if ((que == "") || (que == null)) {
alert("search query is required.");
throw new Error(""search query is required.");
} else { return que; }

+ sessionStorage.getItem("region") + ".amazon.com");

.amazon.com/hz/view-case?caseld="

}
return;
case "fclm":
window.open("https://fclm-portal.amazon.com/employee/activityDetails?employeeId=" +
document.getElementById("fclm").value);
return;
case "agentWIP":
window.open("https://paragon-" + sessionStorage.getItem("region") + ".amazon.com/hz/dox-search?
searchQuery=owner:" + isAgentNameRequired() + "&contentType=CASE&filter=status%3Awork-in-progress");
function isAgentNameRequired() {
let nm = document.getElementById("agntWIP").value.replaceAll(" ", "");
if ((hm == "") [| (nm == null)) {
alert("agent name is required.");
throw new Error(""agent name is required.");
} else { return nm; }

}
return;
case "andonLaunch":
let siteAssign = prompt(""enter your site:", "CPA");
if (siteAssign == "") {
alert ("please enter your site ID.");
genCase("andonLaunch");
} else if (siteAssign != null) {
window.open("https://paragon-"
".amazon.com/hz/paragon/andoncord/advisor-view?siteName=

+ sessionStorage.getItem("region") +
" + siteAssign);

}
return;
default:
throw new Error(""undefined");
}
}
// tixCase

function tixCase(cat) {
switch (cat) {
case "quickLink":
window.open("https://paragon-" + sessionStorage.getItem("region") +
".amazon.com/mn/paragon/diagnostic/show?resourcePath=RemedyQuicklink&region=" +
sessionStorage.getItem("region") + "&quicklink_id=" + document.getElementById("quickLink").value.replaceAll("
"0"
return;
case "tixLookup":
window.open("https://paragon-"
".amazon.com/mn/paragon/diagnostic/show?resourcePath=ViewTicket&region=" + sessionStorage.getItem("region") +
"&ticket_id=" + document.getElementById("tixLookup").value.replaceAll(" ", ""));
return;
default:
throw new Error("undefined");

+ sessionStorage.getItem("region") +

}
}

// soaCase
function soaCase(cat) {
switch (cat) {
case "spotASIN":
window.open("https://paragon-" + sessionStorage.getItem("region") +
".amazon.com/spot/tools#/asin_troubleshooting/asin_details;asin=" + document.getElementById("spotASIN-
ASIN").value + ";caseId=" + document.getElementById("spotASIN-CID").value + ";marketplaceId=" +
document.getElementById("spotASIN-rgn-" + ifUsEuMeen(sessionStorage.getItem("region"))).value);
return;
case "spotOID":
window.open("https://paragon-" + sessionStorage.getItem("region") +
".amazon.com/spot/tools#/order_information;orderId=" + document.getElementById("spotOID-0ID").value +
";caseld=" + document.getElementById("spotOID-CID").value + ";marketplaceIld=" +
document.getElementById("spotASIN-rgn-" + ifUsEuMeen(sessionStorage.getItem("region"))).value);
return;
case "srpdv":
window.open("https://csi.amazon.com/view?view=simple_product_data_view&item_id=" +
document.getElementById("srpdv-asin").value + "&marketplace_id=" + document.getElementById("srpdv-rgn-" +
ifUsEuMeen(sessionStorage.getItem("region"))).value + "&submit=Show");
return;
case "blame0":
window.open("https://csi.amazon.com/view?view=blame_o&item_id=" + document.getElementById("blameO-
ASIN") .value + "&marketplace_id=" + document.getElementById("blameO-rgn-" +
ifUsEuMeen(sessionStorage.getItem("region"))).value + "&search_string=" +
blameO_attr(document.getElementById("blameO-attr").value) + "&submit=Show");
function blameO_attr(attr) { if (attr != null) { return attr; } else { return ""; } }
return;
case "showGate":
window.open("https://csi.amazon.com/view?view=get_gating_decisions_view&item_id=" +
document.getElementById("showGate-ASIN").value + "&marketplace_id=" + document.getElementById("showGate-rgn-"
+ ifUsEuMeen(sessionStorage.getItem("region"))).value + "&customer_id=" + document.getElementById("showGate-
MCID").value + "&listing_ type=purchasable&submit=Show");
return;
case "submHist":
window.open("https://csi.amazon.com/view?view=submission_history&customer_id=" +
document.getElementById("submHist-MCID").value + "&marketplace_id=" + document.getElementById("submHist-rgn-"
+ ifUsEuMeen(sessionStorage.getItem("region"))).value + "&sku=" +
encodeURIComponent(document.getElementById("submHist-SKU").value) + "&submit=Show");
return;
case "globalsel":
window.open("https://paragon-" + sessionStorage.getItem("region") +
".amazon.com/mn/paragon/diagnostic/show?resourcePath=GlobalSellingSupportPreferences&region=" +
sessionStorage.getItem("region") + "&merchant_id=" + document.getElementById("globalsel").value.replaceAll("

IPOH
default:
throw new Error("undefined");
}
}
// fbaCase

function fbaCase(cat) {
switch (cat) {
case "ilac":
window.open("https://paragon-" + sessionStorage.getItem("region") +
shipmentId=" + document.getElementById("ilac").value);
return;
case "hitchLook":
window.open("https://paragon-" + sessionStorage.getItem("region") +
fnsku=" + document.getElementById("hitchLook").value);
return;
case "relLo":
window.open("https://fba-relo-removal-console-" + sessionStorage.getItem("region") + "-
iad.iad.proxy.amazon.com/removalOrderDetail/" + document.getElementById("reLo-MCID").value + "?
merchantRemovalOrderId=" + encodeURIComponent(document.getElementById("reLo-RID").value));
return;
case "rmsLookup":
window.open("https://console-" + sessionStorage.getItem("region") + ".seller-
reimbursement.amazon.dev/rms/view/transaction/" + document.getElementById("rmsLookup").value);
return;
case "SWIVT":
let fnsku = SWIVT_fnskuCheck(document.getElementById("SWIVT-fnsku").value.replaceAll(" ", "")),
mcid = SWIVT_isMCID(document.getElementById("SWIVT-mcid").value.replaceAll(" ", ""));
alert("please note that this tool will be generating the link first before presenting the link to you.
upon clicking OK, please wait 5 seconds for the request to be processed.\n\nyou may close the previous tab
once the request has been opened (and reload as needed when results fail to generate).");
window.open("https://fba-swivt-inventory-console-" + sessionStorage.getItem("region") + "-
iad.iad.proxy.amazon.com/Reconciliation/input?fnsku=" + fnsku + "&merchantCustomerId=" + mcid +
"&requestId=");
setTimeout(() => {
window.open("https://fba-swivt-inventory-console-"
iad.iad.proxy.amazon.com/Reconciliation/input?
fnsku=&merchantCustomerId=&requestId=amznl.fba.reconciliationReport."" + mcid +
}, 5000);
function SWIVT_fnskuCheck(fffnsku) {
if (fffnsku.replaceAll(" ", "").length == 10) {
if ((fffnsku.indexOf("BO") > -1) || (fffnsku.index0f("Xe") > -1)) {
return fffnsku;
} else {
alert ('FNSKU must start with either "BO" or "X0".');
throw new Error ('FNSKU must start with either "BO" or "X@".');
}
} else {
alert ("FNSKU must be 10 characters long.");
throw new Error("FNSKU must be 10 characters long.");

".amazon.com/ilac/view-ilac-report?

".amazon.com/ilac/fnsku-lookup?

+ sessionStorage.getItem("region") + "-

+ fnsku);

}
}
function SWIVT_isMCID(mmmcid) {
if ((mmmcid.trim() == "") || (mmmcid.trim() == null)) {

alert("MCID is required.");
throw new Error("MCID is required.");
} else { return mmmcid; }
}
return;
case "sidMatch":
window.open("https://paragon-" + sessionStorage.getItem("region") + ".amazon.com/hz/dox-search?
searchQuery=merchantId:" + document.getElementById("sidMatch-MCID").value + "%2@AND%20" +
document .getElementById("sidMatch-SID").value);
return;
case "FCR":
window.open("https://fcresearch-" + sessionStorage.getItem("region") + ".aka.amazon.com/" +
document .getElementById("FCR-FC").value.toUpperCase() + "/results?s=" + document.getElementById("FCR-
FNSKU") .value);
return;
case "serenity":
window.open("https://moonraker-" + sessionStorage.getItem("region") +
".aka.amazon.com/serenity/index.html?view=search&SourceTransactionReferenceID=" +
document.getElementById("serenity").value.replaceAll(" ", ""));

return;
default:
throw new Error("undefined");
}
}
// scCase

function scCase(cat) {
switch (cat) {
case "MYI":

window.open("https://" + sessionStorage.getItem("scWeb") + ".amazon.com/myinventory/inventory?
fulfilledBy=all&page=18&pageSize=25&searchField=" + document.getElementById("MYI-type").value.toLowerCase() +
"&searchTerm=" + MYI_hasAsinSkuFsnku(document.getElementById("MYI-idnt").value));

function MYI_hasAsinSkuFsnku(idnt) {

switch (document.getElementById("MYI-type").value) {
case "ASIN":
if (idnt.replaceAll(" ", "").length == 10) {
if ((idnt.indexOf("B@") > -1) || (idnt.indexOf("X@") > -1)) {
if (idnt.indexOf("Xe") > -1) {

alert("you have inputted an FNSKU into the ASIN field. please switch the selection to FNSKU

to continue.");
throw new Error("you have inputted an FNSKU into the ASIN field. please switch the
selection to FNSKU to continue.");
} else { return idnt; }
} else {
alert ('ASIN must start with "Be".');
throw new Error ('ASIN must start with "Be".');
}
} else
alert("ASIN must be 10 characters long.");
throw new Error("ASIN must be 108 characters long.");

}
case "SKU":
if ((idnt.trim() == "") || (idnt.trim() == null)) {

alert ("SKU is required.");
throw new Error("SKU is required.");
} else { return encodeURIComponent(idnt); }
case "FNSKU":
if (idnt.replaceAll(" ", "").length == 10) {
if ((idnt.indexOf("B@") > -1) || (idnt.indexOf("X@") > -1)) {
return idnt;
} else {
alert ('FNSKU must start with either "Be" or "X0".');
throw new Error('FNSKU must start with either "B@" or "Xe".');
}
} else {
alert("FNSKU must be 10 characters long.");
throw new Error("FNSKU must be 1@ characters long.");
}
default:
throw new Error("undefined");
}
}
return;
case "FYP":
window.open("https://" + sessionStorage.getItem("scWeb") + ".amazon.com/fixyourproducts?" +
FYP_hasAsinSkuFnsku(document.getElementById("FYP-idnt").value, document.getElementById("FYP-type").value));
function FYP_hasAsinSkuFnsku(idnt, type) {
switch (type) {
case "ASIN":
if (idnt.replaceAll(" ", "").length == 10) {
if (idnt.indexOf("B@") > -1) { return idnt; }
else {
alert ('ASIN must start with "Be".');
throw new Error ('ASIN must start with "Be".');

}
} else {
alert ("ASIN must be 10 characters long.");
throw new Error("ASIN must be 10 characters long.");
}
case "SKU":
if ((idnt.trim() == "") || (idnt.trim() == null)) {

alert ("SKU is required.");
throw new Error("SKU is required.");

} else { return encodeURIComponent(idnt); }
default:

throw new Error("undefined");

}
}
return;
case "FSI":
window.open("https://" + sessionStorage.getItem("scWeb") + ".amazon.com/inventoryplanning/stranded-
inventory?search=" + FSI_hasAsinSkuFsnku(document.getElementById("FSI-idnt").value,
document.getElementById("FSI-type").value));
function FSI_hasAsinSkuFsnku(idnt, type) {
switch (type) {
case "ASIN":
if (idnt.replaceAll(" ", "").length == 10) {
if ((idnt.indexOf("B@") > -1) || (idnt.indexOf("X@") > -1)) {
if (idnt.indexOf("Xe") > -1) {
alert("you have inputted an FNSKU into the ASIN field. please switch the selection to FNSKU

to continue.");
throw new Error("you have inputted an FNSKU into the ASIN field. please switch the
selection to FNSKU to continue.");
} else { return idnt; }
} else {
alert ('ASIN must start with "Be".');
throw new Error ('ASIN must start with "Be".');
}
} else
alert("ASIN must be 10 characters long.");
throw new Error("ASIN must be 108 characters long.");

}
case "SKU":
if ((idnt.trim() == "") || (idnt.trim() == null)) {

alert ("SKU is required.");
throw new Error("SKU is required.");
} else { return encodeURIComponent(idnt); }
case "FNSKU":
if (idnt.replaceAll(" ", "").length == 10) {
if ((idnt.indexOf("B@") > -1) || (idnt.indexOf("X@") > -1)) {
return idnt;
} else {
alert('FNSKU must start with either "Be" or "X0".');
throw new Error('FNSKU must start with either "B@" or "Xe".');
}
} else {
alert ("FNSKU must be 10 characters long.");
throw new Error ("FNSKU must be 10 characters long.");
}
default:
throw new Error("undefined");
}
}
return;
case "mngOrd":
window.open("https://" + sessionStorage.getItem("scWeb") + ".amazon.com/orders-v3/order/" +
MNGORD_oidCheck (document .getElementById("mngOrd").value.replaceAll(" ", "")));
function MNGORD_oidCheck (oid) {
if (oid.length == 19) { return oid; }
else {
alert ("OID must be 19 characters long and in this format: XXX-XXXXXXX-XXXXXXX");
throw new Error ("OID must be 19 characters long and in this format: XXX-XXXXXXX-XXXXXXX");

}
}
return;
case "mngRet":
window.open("https://" + sessionStorage.getItem("scWeb") +
document.getElementById("mngRet-type").value + "&searchString="
idnt").value);
return;
case "rmsRep":
window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral /REIMBURSEMENTS/0/" + encodeURI("{") + '"filters":["","","' + hasRMS() +
'",""],"pageOffset":1,"searchDays":"' + document.getElementById("rmsRep-time").value + encodeURI("}"));
function hasRMS() {
let rms = document.getElementById("rmsRep-rms").value.replaceAll(" ", "");

'.amazon.com/gp/returns/list/v2?searchBy=" +
+ document.getElementById("mngRet-

if ((rms == "") || (rms == null)) {
let rmsConf = "this will return all RMS IDs for the Seller. are you sure?";
if (confirm(rmsConf) == true) {
return "";
} else {

alert("RMS ID is required.");
throw new Error("RMS ID is required.");
}
} else { return rms; }
}
return;
case "cxShipSales":
window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral/SHIPMENT_SALES/@/" + encodeURI("{") + '"filters":[' + cxShipIDNT() +
']1,"pageOffset":1,"searchDays":"' + document.getElementById("cxShipSales-time").value + encodeURI("}"));
function cxShipIDNT() {
let idnt = document.getElementById("cxShipSales-idnt").value.replaceAll(" ", ""),
type = document.getElementById("cxShipSales-type").value;

if ((idnt == "") || (idnt == null)) {
let cxShipConf = "this will return all identifiers for this report. are your sure?"
if (confirm(cxShipConf) == true) {
return "M,N,
} else {

alert("ASIN, FNSKU, or OID is required.");
throw new Error("ASIN, FNSKU, or OID is required.");
}
} else {
if ((type == "ASIN") || (type == "FNSKU")) {
if (idnt.length == 10) {
switch (type) {
case "ASIN":
if (idnt.indexOf("Xe") > -1) {
alert ("you have inputted an FNSKU into the ASIN field. please switch the selection to
FNSKU to continue.");
throw new Error("you have inputted an FNSKU into the ASIN field. please switch the
selection to FNSKU to continue.");
} else { return

+ didnt + "ULL }

case "FNSKU":
return '"",""' + idnt + '",""";
default:
throw new Error("undefined");
}
} else {

alert ("ASIN or FNSKU must be 10 characters long.");
throw new Error("ASIN or FNSKU must be 10 characters long.");

}
} else {
if (idnt.length == 19) {
return TULUM 4 didnt + UY
} else {

alert ("OID must be 19 characters long and in this format: XXX-XXXXXXX-XXXXXXX");
throw new Error("OID must be 19 characters long and in this format: XXX-XXXXXXX-XXXXXXX");
}
}
}
}
case "ROid":
window.open("https://" + sessionStorage.getItem("scWeb") + ".amazon.com/recoveryui/removal-
order/detail?sourceRemovalOrderId=" + encodeURIComponent(document.getElementById("R0Oid").value.trim()));
return;
case "fbaCustRet":
switch (document.getElementById("fbaCustRet-type").value) {
case "idnt":
let idnnt = document.getElementById("fbaCustRet-idntINP").value.replaceAll(" ", "");
switch (document.getElementById("fbaCustRet-idntTYP").value) {
case "asin":
if (idnnt.length == 10) {
if (idnnt.indexO0f("Xe") > -1) {
alert("you have inputted an FNSKU into the ASIN field. please switch the selection to FNSKU

to continue.");
throw new Error("you have inputted an FNSKU into the ASIN field. please switch the
selection to FNSKU to continue.");
} else {
window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral/CUSTOMER_RETURNS/@/" + encodeURI("{") + '"filters":["","","","' + idnnt +
t",""],"pageOffset":1,"searchDays":365"' + encodeURI("}"));
}
} else {
alert ("ASIN must be 10 characters long.");
throw new Error("ASIN must be 10 characters long.");

return;
case "sku":

window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral/CUSTOMER_RETURNS/@/" + encodeURI("{") + '"filters":["' + encodeURIComponent(idnnt)
+ try, nt], "pageOffset" 1, "searchDays":365"' + encodeURI("}"));

return;

case "fnsku":
if (idnnt.length == 10) {
window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral/CUSTOMER_RETURNS/@/" + encodeURI("{") + '"filters":["","","' + idnnt +
tym, mt], "page0ffset":1, "searchDays":365"' + encodeURI("}"));
} else {
alert ("FNSKU must be 10 characters long.");
throw new Error ("FNSKU must be 10 characters long.");

return;
case "oid":

if (idnnt.length == 19) {
window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral/CUSTOMER_RETURNS/@/" + encodeURI("{") + '"filters":["","' + idnnt +
tem, nt, ], "page0ffset" 1, "searchDays":365' + encodeURI("}"));
} else {
alert ("OID must be 19 characters long and in this format: XXX-XXXXXXX-XXXXXXX");
throw new Error("OID must be 19 characters long and in this format: XXX-XXXXXXX-XXXXXXX");

}
return;
default:
throw new Error("undefined");
}
case "lpn":

window.open("https://" + sessionStorage.getItem("scWeb") +
".amazon.com/reportcentral/CUSTOMER_RETURNS/@/" + encodeURI("{") + '"filters":["","","","",""' +
document.getElementById("fbaCustRet-1pnINP").value.value.replaceAll(" ", "") +
'"1,"pageOffset"":1,"searchDays":365"' + encodeURI("}"));

return;

default:
throw new Error(""undefined");
}
case "shipm":
window.open("https://" + sessionStorage.getItem("scWeb") +
+ document.getElementById("shipm").value);
return;
case "ledger":
window.open("https://" + sessionStorage.getItem("scWeb") + ".amazon.com/reportcentral/LEDGER_REPORT/0/"
+ encodeURI("{") + '"filters":[' + LEDGER_hasAsinSkuFnsku() + ',"DAILY","FC","84700","' +
document.getElementById("ledgerContainsTRID").value.replaceAll(" ", "") + "","' +
document.getElementById("ledgerEvt").value + '",' + isAdjSel() + ',"' +
fcCheck(document.getElementById("ledgerContainsFC").value.replaceAll(" ", "")) + '","' +
document.getElementById("ledgerDisp").value + '"],"pageOffset":1,"searchDays":"' +
document.getElementById("ledgerTime").value + encodeURI("}"));
function LEDGER_hasAsinSkuFnsku() {
let asin = document.getElementById("ledgerContainsASIN").value,
sku = document.getElementById("ledgerContainsSKU").value,
fnsku = document.getElementById("ledgerContainsFNSKU").value;

".amazon.com/fba/inbound-shipment/summary/"

if ((asin == "") && (sku == "") && (fnsku == "")) {
let confirmIdnt = "this will return all identifiers for this report. are your sure?";
if (confirm(confirmIdnt) == true) { return ' "OY

else {
alert ("ASIN, SKU, or FNSKU is required.");
throw new Error("ASIN, SKU, or FNSKU is required.");
}
} else {
if (document.getElementById("ledgerHasASIN").checked == true) {
if (asin.replaceAll(" ", "").length == 10) {
if ((asin.indexOf("B@") > -1) || (asin.indexOf("Xe") > -1)) {
if (asin.indexOf("X@") > -1) {
alert("you have inputted an FNSKU into the ASIN field. please switch the selection to FNSKU
to continue.");
throw new Error("you have inputted an FNSKU into the ASIN field. please switch the
selection to FNSKU to continue.");
} else { return '"'
} else {
alert ('ASIN must start with "Be".');
throw new Error ('ASIN must start with "Be".');

+ asin + "UL }

}

} else
alert ("ASIN must be 10 characters long.");
throw new Error("ASIN must be 10 characters long.");

}

}
if (document.getElementById("ledgerHasSKU").checked == true) { return ""","' +

encodeURIComponent(sku).trim() + '","""; }
if (document.getElementById("ledgerHasFNSKU").checked == true) {
if (fnsku.replaceAll(" ", "").length == 10) {
if ((fnsku.indexO0f("B@") > -1) || (fnsku.indexOf("Xe") > -1)) { return '"","","' + fnsku + '"';

else {
alert('FNSKU must start with either "Be" or "X0".');
throw new Error('FNSKU must start with either "B@" or "Xe".');
}
} else {
alert("FNSKU must be 10 characters long.");
throw new Error("FNSKU must be 10 characters long.");
}
}
}
}
function isAdjSel() {
if (document.getElementById("ledgerEvt").value == "Adjustments") {
let adjVars = new Array();
if (document.getElementById("adjDamaged").checked != true &&
document.getElementById("adjDestroyed").checked != true && document.getElementById("adjFound").checked !=
true && document.getElementById("adjLost").checked != true && document.getElementById("adjOther").checked !=
true) {
alert("please select at least one adjustment reason group.");
throw new Error("please select at least one adjustment reason group.");
} else {
if (document.getElementById("adjDamaged").checked == true) { adjVars.push('"Damaged"'); }
if (document.getElementById("adjDestroyed").checked == true) { adjVars.push('"Destroyed"'); }
if (document.getElementById("adjFound").checked == true) { adjVvars.push('"Found"'); }
if (document.getElementById("adjLost").checked == true) { adjVars.push('"Lost"'); }
if (document.getElementById("adjOther").checked == true) { adjvars.push('"Other"'); }
return "[" + adjVars.toString() + "1";

}
} else { return '""'; }
}
function fcCheck(fc) {
if ((fc == "") || (fc == null)) { return ""; }
else {
if (fc.length == 4) { return fc; }
else {
alert ("FC must be 4 characters long.");
throw new Error("FC must be 4 characters long.");
}
}
}
return;

case "helpRes":
window.open("https://" + sessionStorage.getItem("scWeb") +
searchQue());
function helpPageOrSellerUni() {
switch (document.getElementById("helpRes-type").value) {
case "helpPage":
return "help/hub/reference/search?query=";
case "sellerUni":
return "learn/s?searchText=";
default:
throw new Error("undefined");

'.amazon.com/" + helpPageOrSellerUni() +
