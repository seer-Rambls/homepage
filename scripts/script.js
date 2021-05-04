$(document).ready(function () {
  $(".acordion_item_trigger").click(function () {
    $(this).toggleClass("acordion_item_trigger_active");
    $(this).next(".acordion_item_content").slideToggle();
  });
});

$(document).ready(function () {
  $(".tabs_triggers_item").click(function (e) {
    e.preventDefault();

    $(".tabs_triggers_item").removeClass("tabs_triggers_item_active");
    $(".tabs_content_item").removeClass("tabs_content_item_active");

    $(this).addClass("tabs_triggers_item_active");
    $($(this).attr("href")).addClass("tabs_content_item_active");
  });
});
$(document).click(function (e) {
  let container = $(".tabs");
  let selector = $(".tabs_content_item");
  if (container.has(e.target).length === 0) {
    selector.removeClass("tabs_content_item_active");
  }
});
