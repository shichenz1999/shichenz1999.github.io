(function ($) {
  $(function () {
    const $nav = $("#navbarNav");
    const mobileQuery = window.matchMedia("(max-width: 575.98px)");

    const syncMobileNavState = () => {
      if (mobileQuery.matches && $nav.hasClass("show")) {
        document.body.classList.add("mobile-nav-open");
      } else {
        document.body.classList.remove("mobile-nav-open");
      }
    };

    $nav.on("show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse", syncMobileNavState);
    $(window).on("resize", syncMobileNavState);

    $nav.find(".nav-link").on("click", function () {
      if (mobileQuery.matches) {
        $nav.collapse("hide");
      }
    });

    syncMobileNavState();
  });
})(jQuery);
