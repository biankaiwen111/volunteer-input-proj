const agreement = {
  sections: [],
};

$("#university-name").on("input", function () {
  console.log($(this).val());
  agreement["university"] = $(this).val();
});

$("#college-name").on("input", function () {
  console.log($(this).val());
  agreement["cc"] = $(this).val();
});

$("#major-name").on("input", function () {
  console.log($(this).val());
  agreement["major"] = $(this).val();
});

$("#server-button").bind("click", function () {
  alert("data sent to server!");
  $.ajax({
    type: "POST",
    data: JSON.stringify(agreement),
    contentType: "application/json",
    url: "../agreement",
    success: function (data) {
      console.log("success");
      console.log(JSON.stringify(data));
    },
  });
});
