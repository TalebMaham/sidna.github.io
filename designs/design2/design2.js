$(function () {

    let container = document.getElementById('mycontainer');

    let zone_result =  document.createElement("div");
    zone_result.style.color ="red";
    let result = document.createElement("span");
    result.style.color = "red";
  

    $("#btn-sum").on("click", function () {

        let a = parseInt($("#input1").val());
        let b = parseInt($("#input2").val());
        result.textContent = "le resulat la somme est :" + (a + b);
        zone_result.appendChild(result);
        container.appendChild(zone_result);


    });

    $("#btn-sub").on("click", function () {

        let a = parseInt($("#input1").val());
        let b = parseInt($("#input2").val());
        result.textContent = "le resultat de la soustraction est :" + (a - b);
        zone_result.appendChild(result);
        container.appendChild(zone_result);

    });

    $("#btn-mult").on("click", function () {

        let a = parseInt($("#input1").val());
        let b = parseInt($("#input2").val());
        result.textContent = "le resultat de la multiplication est :" + (a * b);
        zone_result.appendChild(result);
        container.appendChild(zone_result);

    });

    $("#btn-div").on("click", function () {

        let a = parseInt($("#input1").val());
        let b = parseInt($("#input2").val());
        result.textContent = "le resultat de la division est :" + (a / b);
        zone_result.appendChild(result);
        container.appendChild(zone_result);

    });

});