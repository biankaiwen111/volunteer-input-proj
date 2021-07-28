let checkedboxList = [];

var add_matchcondition = $("#add_matchcondition");
$(add_matchcondition)
  .off("click")
  .click(function (e) {
    if ($(this).prev().length === 0) {
      $(input_wrapper).prepend(
        `<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=section-element-${0}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message-${0}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content-${0}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship-${0}"
            />
        </div>
    </div>`
      );
      //initialization
      agreement["sections"][0] = {};
      agreement["sections"][0]["message"] = "";
      agreement["sections"][0]["content"] = "";
      agreement["sections"][0]["relationship"] = "";

      //add event listen
      $(`#message-${0}`).on("input", function () {
        agreement["sections"][0]["message"] = $(this).val();
      });
      $(`#content-${0}`).on("input", function () {
        agreement["sections"][0]["content"] = $(this).val();
      });
      $(`#relationship-${0}`).on("input", function () {
        agreement["sections"][0]["relationship"] = $(this).val();
      });
    } else {
      const id = parseInt($(this).prev().attr("id").split("-")[2]) + 1;
      $(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=section-element-${id}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message-${id}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content-${id}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship-${id}"
            />
        </div>
    </div>`).insertAfter($(this).prev());
      //initialization
      agreement["sections"][parseInt(id)] = {};
      agreement["sections"][parseInt(id)]["message"] = "";
      agreement["sections"][parseInt(id)]["content"] = "";
      agreement["sections"][parseInt(id)]["relationship"] = "";

      //add event listen
      $(`#message-${id}`).on("input", function () {
        agreement["sections"][parseInt(id)]["message"] = $(this).val();
      });
      $(`#content-${id}`).on("input", function () {
        agreement["sections"][parseInt(id)]["content"] = $(this).val();
      });
      $(`#relationship-${id}`).on("input", function () {
        agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
      });
    }
    $("body")
      .off("click", `.switch-to-array`)
      .on("click", `.switch-to-array`, function (e) {
        //console.log($(this).parent());
        const id = $(this).parent().parent().attr("id");
        const indexs = id.split("-").slice(2);
        //console.log(indexs);
        let temp = "";
        for (index of indexs) {
          temp = temp + "-" + index;
        }
        //for(index in index) todo
        $(this)
          .prev()
          .replaceWith(
            `<div style='min-height: 50px;min-width: 50px; border: 1px solid red; margin-left: 10px;' id="array${temp}">
        <input type="button" value="Add Element to Array" class="add-to-array" />
       </div>`
          );
        $("body")
          .off("click", `.add-to-array`)
          .on("click", `.add-to-array`, addElementToArray);
        console.log(indexs);
        console.log("-----");

        //agreement["sections"][0]["content"] = [];
        let changeValueString = `agreement["sections"]`;
        for (index of indexs) {
          changeValueString = changeValueString + `[${index}]` + `["content"]`;
        }
        changeValueString = changeValueString + `=[]`;
        console.log(changeValueString);
        eval(changeValueString);
        //recursiveSetEmptyArrayToAgreement(indexs, agreement["sections"]);
      });
  });
//<input type='button' value='Add' id='add_matchcondition_${counter}' />

function addElementToArray(e) {
  //console.log("123");
  let indexs = $(e.target).parent().attr("id").split("-").slice(1);
  //console.log(id);
  let temp = "";
  for (index of indexs) {
    temp = temp + "-" + index;
  }
  //console.log($(this).prev());
  if ($(this).prev().length === 0) {
    $($(this).parent())
      .prepend(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=array-element${temp}-${0}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message${temp}-${0}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content${temp}-${0}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship${temp}-${0}"
            />
        </div>
        <div id="equivalences${temp}-${0}" style="display:none;">
          <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="equivalences-message${temp}-${0}"
          />
          </div>
          <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="equivalences-content${temp}-${0}"
          />
            <input type="button" value="SWITCH TO ARRAY" class="equivalences-switch-to-array" />
          </div>
          <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="equivalences-relationship${temp}-${0}"
            />
          </div>
        </div>
        <input type="button" value="EDITING EQUIVALENCES" class="editing-equ" style="display:none" />
        <input type="checkbox" id="has-equivalences${temp}-${0}">
        <label for="has-equivalences${temp}-${0}">Has equivalences?</label>
    </div>`);
    disableNecessarycheckbox(`has-equivalences${temp}-${0}`);
    checkboxEvent(`#has-equivalences${temp}-${0}`);
    console.log(indexs);
    let commonPrefix;
    let changeValueString = `agreement["sections"]`;
    for (index of indexs) {
      changeValueString = changeValueString + `[${index}]` + `["content"]`;
    }
    commonPrefix = changeValueString;
    changeValueString =
      changeValueString +
      `.push({
      message: "",
      content: "",
      relationship: "",
    })`;
    eval(changeValueString);

    $(`#message${temp}-${0}`).on("input", function () {
      const bindingString =
        commonPrefix.slice(0, -11) +
        "['content']" +
        `[${0}]` +
        "['message']" +
        "= $(this).val()";
      console.log(bindingString);
      eval(bindingString);
      //agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
    });

    $(`#content${temp}-${0}`).on("input", function () {
      const bindingString =
        commonPrefix.slice(0, -11) +
        "['content']" +
        `[${0}]` +
        "['content']" +
        "= $(this).val()";
      eval(bindingString);
      //agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
    });

    $(`#relationship${temp}-${0}`).on("input", function () {
      const bindingString =
        commonPrefix.slice(0, -11) +
        "['content']" +
        `[${0}]` +
        "['relationship']" +
        "= $(this).val()";
      eval(bindingString);
      //agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
    });
  } else {
    let prevEle = $(this).prev().attr("id").split("-");
    //console.log(indexs);
    $(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=array-element${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }"
            />
        </div>
        <div id="equivalences${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }" style="display:none;">
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="equivalences-message${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="equivalences-content${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }"
            />
            <input type="button" value="SWITCH TO ARRAY" class="equivalences-switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="equivalences-relationship${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }"/>
        </div>
        </div>
        <input type="button" value="EDITING EQUIVALENCES" class="editing-equ" style="display:none"/>
        <input type="checkbox" id="has-equivalences${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }">
        <label for="has-equivalences${temp}-${
      parseInt(prevEle[prevEle.length - 1]) + 1
    }">Has equivalences?</label>
    </div>`).insertAfter($(this).prev());
    disableNecessarycheckbox(
      `has-equivalences${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}`
    );
    checkboxEvent(
      `#has-equivalences${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}`
    );
    const idxs = `${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}`
      .split("-")
      .slice(1);
    console.log(idxs);
    let commonPrefix;
    let changeValueString = `agreement["sections"]`;
    for (index of indexs) {
      changeValueString = changeValueString + `[${index}]` + `["content"]`;
    }
    commonPrefix = changeValueString;
    changeValueString =
      changeValueString +
      `.push({
      message: "",
      content: "",
      relationship: "",
    })`;
    console.log(changeValueString);
    eval(changeValueString);

    $(`#message${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}`).on(
      "input",
      function () {
        const bindingString =
          commonPrefix.slice(0, -11) +
          "['content']" +
          `[${parseInt(prevEle[prevEle.length - 1]) + 1}]` +
          "['message']" +
          "= $(this).val()";
        eval(bindingString);
        //agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
      }
    );

    $(`#content${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}`).on(
      "input",
      function () {
        const bindingString =
          commonPrefix.slice(0, -11) +
          "['content']" +
          `[${parseInt(prevEle[prevEle.length - 1]) + 1}]` +
          "['content']" +
          "= $(this).val()";
        eval(bindingString);
      }
    );

    $(`#relationship${temp}-${parseInt(prevEle[prevEle.length - 1]) + 1}`).on(
      "input",
      function () {
        const bindingString =
          commonPrefix.slice(0, -11) +
          "['content']" +
          `[${parseInt(prevEle[prevEle.length - 1]) + 1}]` +
          "['relationship']" +
          "= $(this).val()";
        eval(bindingString);
      }
    );
  }
}

$("body")
  .off("click", `.editing-equ`)
  .on("click", `.editing-equ`, function (e) {
    $("#overlay").css({ display: "block" });
    $(this).prev().css({
      display: "block",
      position: "relative",
      border: "solid 3px green",
      "margin-top": "5px",
    });
  });

$("#overlay").bind("click", function (e) {
  $("div[id^='equivalences-']").css({ display: "none" });
  $("#overlay").css({ display: "none" });
});

$("body")
  .off("click", ".equivalences-switch-to-array")
  .on("click", ".equivalences-switch-to-array", function (e) {
    const parentId = $(this).parent().parent().attr("id").split("-").slice(1);
    let temp = "";
    for (index of parentId) {
      temp = temp + "-" + index;
    }
    console.log(parentId);
    $(this)
      .prev()
      .replaceWith(
        `<div style='min-height: 50px;min-width: 50px; border: 1px solid red; margin-left: 10px;' id="equivalences_array${temp}">
        <input type="button" value="Add Element to Array" class="equivalences-add-to-array" />
       </div>`
      );
  });

//equivalences_array
$("body")
  .off("click", ".equivalences-add-to-array")
  .on("click", ".equivalences-add-to-array", function (e) {
    const oldarrayIds = $(this).parent().attr("id").split("-").slice(1);
    console.log(oldarrayIds);
    if ($(this).prev().length === 0) {
      let eleId = "";
      for (index of oldarrayIds) {
        eleId = eleId + "-" + index;
      }
      $(this).parent()
        .prepend(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=equivalences_array_element${eleId}%0>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="equivalences_message${eleId}%0"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="equivalences_content${eleId}%0"
            />
            <input type="button" value="SWITCH TO ARRAY" class="equivalences-switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="equivalences_relationship${eleId}%0"
            />
        </div>
    </div>`);
    } else {
      //get pre ele and change last char
      const preId = $(this).prev().attr("id");
      let prevEle = preId.split("%");
      console.log(prevEle);
      //can be improved here@@
      $(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=equivalences_array_element${preId.slice(
        0,
        -2
      )}%${parseInt(prevEle[prevEle.length - 1]) + 1}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="equivalences_message${preId.slice(0, -2)}%${
        parseInt(prevEle[prevEle.length - 1]) + 1
      }"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id=""equivalences_content${preId.slice(0, -2)}%${
        parseInt(prevEle[prevEle.length - 1]) + 1
      }""
            />
            <input type="button" value="SWITCH TO ARRAY" class="equivalences-switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="equivalences_relationship${preId.slice(0, -2)}%${
        parseInt(prevEle[prevEle.length - 1]) + 1
      }"
            />
        </div>      
    </div>`).insertAfter($(this).prev());
    }
  });

function checkboxEvent(id) {
  $(id).on("change", function () {
    const currentEleId = $(this).attr("id");
    const indexs = $(this).attr("id").split("-").slice(2);
    console.log(indexs);
    let checkboxId = "has-equivalences";
    let arrayId = "has-equivalences";
    if ($(this).prop("checked") == true) {
      //check if we can add equ here.if yes, add object to agreement else revert checkbox state to unchecked
      for (index of indexs.slice(0, -1)) {
        checkboxId = checkboxId + "-" + index;
        arrayId = arrayId + "-" + index;
        $(`#${checkboxId}`).attr("disabled", true);
      }
      arrayId = arrayId + "-" + `${indexs[indexs.length - 1]}`;
      checkedboxList.push(arrayId);
      //$(`#${array}`).;
      $(this).prev().css({ display: "block" });
      //disable some checkboxs in current dom
      $(`[id^=${currentEleId}-]`).attr("disabled", true);
    } else {
      for (index of indexs.slice(0, -1)) {
        checkboxId = checkboxId + "-" + index;
        arrayId = arrayId + "-" + index;
        $(`#${checkboxId}`).attr("disabled", false);
      }
      $(this).prev().css({ display: "none" });
      $(`[id^=${currentEleId}-]`).attr("disabled", false);
      const target = checkedboxList.indexOf(currentEleId);
      checkedboxList.splice(target, 1);
    }
  });
}

function disableNecessarycheckbox(id) {
  for (checkedId of checkedboxList) {
    if (id.startsWith(checkedId) && checkedId !== id) {
      console.log("here");
      $(`#${id}`).attr("disabled", true);
    }
  }
}
