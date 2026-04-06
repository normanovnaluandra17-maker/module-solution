(function () {

  var categories = [];

  var homeHtmlUrl = "snippets/home-snippet.html";
  var allCategoriesUrl = "https://coursera-jhu-default-random.herokuapp.com/categories.json";

  function buildAndShowHomePage(categories) {

    var randomCategoryShortName = chooseRandomCategory(categories);

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtmlSnippet) {

        var homeHtml = insertProperty(
          homeHtmlSnippet,
          "randomCategoryShortName",
          "'" + randomCategoryShortName + "'"
        );

        document.querySelector("#main-content").innerHTML = homeHtml;
      },
      false
    );
  }

  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
  }

  document.addEventListener("DOMContentLoaded", function () {

    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      function (response) {

        categories = response;

        buildAndShowHomePage(categories);
      }
    );

  });

})();(function () {

  var categories = [];

  var homeHtmlUrl = "snippets/home-snippet.html";
  var allCategoriesUrl = "https://coursera-jhu-default-random.herokuapp.com/categories.json";

  function buildAndShowHomePage(categories) {

    var randomCategoryShortName = chooseRandomCategory(categories);

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtmlSnippet) {

        var homeHtml = insertProperty(
          homeHtmlSnippet,
          "randomCategoryShortName",
          "'" + randomCategoryShortName + "'"
        );

        document.querySelector("#main-content").innerHTML = homeHtml;
      },
      false
    );
  }

  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
  }

  document.addEventListener("DOMContentLoaded", function () {

    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      function (response) {

        categories = response;

        buildAndShowHomePage(categories);
      }
    );

  });

})();(function () {

  var categories = [];

  var homeHtmlUrl = "snippets/home-snippet.html";
  var allCategoriesUrl = "https://coursera-jhu-default-random.herokuapp.com/categories.json";

  function buildAndShowHomePage(categories) {

    var randomCategoryShortName = chooseRandomCategory(categories);

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtmlSnippet) {

        var homeHtml = insertProperty(
          homeHtmlSnippet,
          "randomCategoryShortName",
          "'" + randomCategoryShortName + "'"
        );

        document.querySelector("#main-content").innerHTML = homeHtml;
      },
      false
    );
  }

  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
  }

  document.addEventListener("DOMContentLoaded", function () {

    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      function (response) {

        categories = response;

        buildAndShowHomePage(categories);
      }
    );

  });

})();
