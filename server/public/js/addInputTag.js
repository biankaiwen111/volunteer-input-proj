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
            <input type="button" value="SWITCH TO ARRAY" id="switch-to-array-${sectionCounter}" />
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

  $(`#switch-to-array-${sectionCounter}`).click(function (e) {
    const id = e.target.id;
    const indexs = id.split("-").slice(3);
    console.log(indexs);
    //for(index in index) todo
    $(`#content_${indexs[0]}`).remove();
    $(`#switch-to-array-${indexs[0]}`).replaceWith(
      `<div style='min-height: 50px;min-width: 50px; border: 1px solid red; margin-left: 10px;' id="array-${indexs[0]}">
        <input type="button" value="Add Element to Array" id="add-to-array-${indexs[0]}" />
       </div>`
    );
    $(`#add-to-array-${indexs[0]}`).click(function (e) {
      let id = $(e.target).parent().attr("id").split("-")[1];
      console.log(id);
      $(
        `#array-${id}`
      ).append(`<div style='min-width: 90vw; margin: 10px; border: 1px solid blue' id=section-${id}>
        <div>
            <input
            type="text"
            name="message"
            autocomplete="off"
            placeholder="message"
            id="message_${id}"
        />
        </div>
        <div>
            <input
            type="text"
            name="content"
            autocomplete="off"
            placeholder="content"
            id="content_${id}"
            />
            <input type="button" value="SWITCH TO ARRAY" id="switch-to-array-${id}" />
        </div>
        <div>
            <input
            type="text"
            name="relationship"
            autocomplete="off"
            placeholder="relationship"
            id="relationship_${id}"
            />
        </div>
    </div>`);
    });
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
