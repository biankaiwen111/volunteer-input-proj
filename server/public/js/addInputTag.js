let sectionCounter = 0;

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
    </div>`);
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
    </div>`).insertAfter($(this).prev());

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
        //agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
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
        //agreement["sections"][parseInt(id)]["relationship"] = $(this).val();
      }
    );
  }

  //recursiveAddElementToArray(indexs, agreement["sections"]);
}

function recursiveAddElementToArray(indexs, agreement) {
  console.log(indexs, agreement);
  if (indexs.length === 1) {
    agreement[index]["content"].push({
      message: "",
      content: "",
      relationship: "",
    });
    return;
  }
  if (indexs.length > 0) {
    index = parseInt(indexs[0]);
    recursiveSetEmptyArrayToAgreement(
      indexs.slice(1),
      agreement[index].content
    );
  }
}
