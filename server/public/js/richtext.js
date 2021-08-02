function richtextEditerinit(id) {
  const positionId = `#section-content-div-${id}`;
  $(positionId).empty();
  console.log(positionId);
  const E = window.wangEditor;
  const editor = new E(positionId);

  editor.config.onchange = function (newHtml) {
    console.log("html after changed", newHtml);
    agreement["sections"][parseInt(id)]["content"] = newHtml;
  };
  editor.config.onchangeTimeout = 400;
  editor.config.lang = "en";
  editor.i18next = window.i18next;
  editor.config.menus = [
    "bold",
    "italic",
    "underline",
    "link",
    "foreColor",
    "justify",
    "undo",
    "redo",
  ];
  editor.create();
  return editor;
}

$("body")
  .off("click", ".switch-to-info-section")
  .on("click", ".switch-to-info-section", function (e) {
    const id = $(this).parent().attr("id");
    const tokens = id.split("-");
    const index = tokens[tokens.length - 1];
    $(this).remove();
    richtextEditerinit(index);
  });
