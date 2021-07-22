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
    //for(index in index) todo
    $(this)
      .prev()
      .replaceWith(
        `<div style='min-height: 50px;min-width: 50px; border: 1px solid red; margin-left: 10px;' id="array-${indexs[0]}">
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
  let id = $(e.target).parent().attr("id").split("-")[1];
  console.log(id);
  console.log($(this).prev());
  if ($(this).prev().length === 0) {
    $(`#array-${id}`)
      .prepend(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=array-element-${id}-${0}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message-${id}-${0}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content-${id}-${0}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship-${id}-${0}"
            />
        </div>
    </div>`);
  } else {
    let index = $(this).prev().attr("id").split("-")[3];
    console.log(index);
    $(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=array-element-${id}-${
      parseInt(index) + 1
    }>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message-${id}-${parseInt(index) + 1}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content-${id}-${parseInt(index) + 1}"
            />
            <input type="button" value="SWITCH TO ARRAY" class="switch-to-array" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship-${id}-${parseInt(index) + 1}"
            />
        </div>
    </div>`).insertAfter(`#array-element-${id}-${parseInt(index)}`);
  }
});
