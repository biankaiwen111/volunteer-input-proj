let sectionCounter = 0;

var input_wrapper = $("#input_wrapper");
var add_matchcondition = $("#add_matchcondition");
$(add_matchcondition).click(function (e) {
  $(input_wrapper).append(
    `<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=section-${sectionCounter}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message_${sectionCounter}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content_${sectionCounter}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship_${sectionCounter}"
            />
        </div>
    </div>`
  );

  $("body").on("click", `.switch-to-array`, function (e) {
    //console.log($(this).parent());
    const id = $(this).parent().parent().attr("id");
    const indexs = id.split("-").slice(1);
    console.log(indexs);
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
    agreement["sections"][parseInt(indexs[0])]["content"] = [];
  });

  agreement["sections"].push({
    message: "",
    content: "",
    relationship: "",
  });
  sectionCounter += 1;
});

//<input type='button' value='Add' id='add_matchcondition_${counter}' />

$("body").on("click", `.add-to-array`, function (e) {
  let indexs = $(e.target).parent().attr("id").split("-").slice(1);
  //console.log(id);
  let temp = "";
  for (index of indexs) {
    temp = temp + "-" + index;
  }
  console.log($(this).prev());
  if ($(this).prev().length === 0) {
    $($(this).parent())
      .prepend(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=array-element${temp}-${0}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message-${66}-${0}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content-${66}-${0}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship-${66}-${0}"
            />
        </div>
    </div>`);
  } else {
    let indexs = $(this).prev().attr("id").split("-");
    console.log(indexs);
    $(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=array-element${temp}-${
      parseInt(indexs[indexs.length - 1]) + 1
    }>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message-${98}-${parseInt(99) + 1}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content-${98}-${parseInt(99) + 1}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship-${98}-${parseInt(99) + 1}"
            />
        </div>
    </div>`).insertAfter($(this).prev());
  }
});
