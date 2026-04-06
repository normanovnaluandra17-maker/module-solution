(function () {

  var categories = [];

  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
  }

  function buildHomePage(categories) {

    var randomCategoryShortName = chooseRandomCategory(categories);

    $ajaxUtils.sendGetRequest(
      "snippets/home-snippet.html",
      function (homeHtml) {

        homeHtml = insertProperty(
          homeHtml,
          "randomCategoryShortName",
          "'" + randomCategoryShortName + "'"
        );

        document.querySelector("#main-content").innerHTML = homeHtml;
      },
      false
    );
  }

  document.addEventListener("DOMContentLoaded", function () {

    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      function (response) {

        categories = response;

        buildHomePage(categories);
      }
    );

  });

})();
