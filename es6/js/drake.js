//Drake Equation Calculator version 1.0 authored by Vincent Moore

//Drake Equation explanation
//https://www.kevinabarnes.com/drake-equation/

function drakeEq() {

/*
Values of the Equation
N = The number of civilizations in the Milky Way Galaxy whose electromagnetic emissions are detectable.
R = formation rate of suitable stars in the galaxy
fp = pct of stars that have planets
ne = number of planets per planet star that can have life
fl = pct of planets that will have life
fi = pct of those that will have intelligent life
fc = pct of those that will develop communication
L  = years civilizations will last
lT = years a star will exist
N = R * fp * ne * fl * fi * fc * L (Drake Equation Formula)
*/

// equation value variables

var regex=/[0-9]/;

    //r values
    let R = document.getElementById("R").value;

    if (!R.match(regex)) {
      document.getElementById("r_error").innerHTML = "<p>Please enter a number</p>";
    } else {
      document.getElementById("r_error").innerHTML = "";
    }


    //fp values
    let fp = document.getElementById("Fp").value / 100;

    if (document.getElementById("Fp").value > 100) {
      document.getElementById("fp_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fp_error").innerHTML = "";
    }

    //ne values
    let Ne = document.getElementById("Ne").value;

    if (!Ne.match(regex)) {
      document.getElementById("ne_error").innerHTML = "<p>Please enter a number</p>";
    } else {
      document.getElementById("ne_error").innerHTML = "";
    }

    //fl values
    let fl = document.getElementById("Fl").value / 100;

    if (document.getElementById("Fl").value > 100) {
      document.getElementById("fl_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fl_error").innerHTML = "";
    }

    //fi values
    let fi = document.getElementById("Fi").value / 100;

    if (document.getElementById("Fi").value > 100) {
      document.getElementById("fi_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fi_error").innerHTML = "";
    }

    //fc values
    let fc = document.getElementById("Fc").value / 100;

    if (document.getElementById("Fc").value > 100) {
      document.getElementById("fc_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fc_error").innerHTML = "";
    }

    let L = document.getElementById("L").value;

    if (!L.match(regex)) {
      document.getElementById("L_error").innerHTML = "<p>Please enter a number</p>";
    } else {
      document.getElementById("L_error").innerHTML = "";
    }

  //Equation calculations
    function mult() {
    	var N = Math.floor(R * fp * Ne * fl * fi * fc * L);
        return N.toLocaleString();
    }

    document.getElementById("calculate").innerHTML = "N = " + mult() + " detectable civilizations in the Milky Way";
}
