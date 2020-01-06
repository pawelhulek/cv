function loadContent() {
  fillColor("cvNameAndSurname", "Paweł Hulek")
  fill("cvProfile", "Profile")
  fill("cvEmployment", "Employment")
  fill("cvEducation", "Education")
  fill("cvCertifications", "Certifications")
  fill("cvDisclaimer", "Disclaimer")
  fill("cvDetails", "Details")
  fill("cvSkills", "Skills")
  fill("cvLanguagues", "Languagues")
  fill("cvPlayground", "Playground tech")

}

function fillColor(where, what) {
  var el = document.getElementById(where)
  el.innerHTML = el.innerHTML + spanifyWithColor(what, "grey")
}

function fill(where, what) {
  var el = document.getElementById(where)
  el.innerHTML = el.innerHTML + spanify(what)
}

function spanify(object) {
  var newObject = "";
  for (var i = 0; i < object.length; i++) {
    newObject = newObject + "<span>" + object.substring(i, i + 1) + "</span>"
  }
  return newObject;
}

function spanifyWithColor(object, color) {
  var newObject = "";
  var half = object.length/2;
  var red = ' style="color: ' + color + '"';
  for (var i = 0; i < object.length; i++) {
    newObject = newObject + "<span"+(i<=half?red:"")+">" + object.substring(i, i + 1) + "</span>"
  }
  return newObject;
}

window.onload = loadContent
