function loadContent() {
  fill("cvNameAndSurname", "Paweł Hulek")
  fill("cvProfile", "Profile")
  fill("cvEmployment", "Employment")
  fill("cvEducation", "Education")
  fill("cvCertifications", "Certifications")
  fill("cvDisclaimer", "Disclaimer")
  fill("cvDetails", "Details")
  fill("cvSkills", "Skills")
  fill("cvLanguagues", "Languagues")
  fill("cvPlayground", "Playground techs")

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
window.onload = loadContent
