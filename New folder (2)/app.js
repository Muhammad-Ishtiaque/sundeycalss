
 
//Question No 4

function CheckPopulation(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

const Peoples = new CheckPopulation(
"ahsan parwaiz",
  "Male",
  "gulbhar",
  "bs cs",
  "we developer"
);
console.log(Peoples);

//save vales of education
function educationData() {
  var select = document.getElementById("education");
  if (localStorage === "") {
    select[localStorage.getItem("save")].selected = true;
  } else if (select.value === "cs") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "acf") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "bba") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "ms") {
    localStorage.setItem("save", select.value);
  }
}

//save values for profession
function professionPeoples() {
  var profession = document.getElementById("profession");
  if (localStorage === "") {
    profession[localStorage.getItem("save")];
  } else if (profession.value === "Web developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "React Native") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Flutter Developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "ios developer") {
    localStorage.setItem("profession", profession.value);
  }
}

//save values of radio buttons

var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("gender");
  }
}
