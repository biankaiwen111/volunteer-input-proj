let sectionCounter = 0;

var input_wrapper = $("#input_wrapper");
var add_matchcondition = $("#add_matchcondition");
$(add_matchcondition).click(function (e) {
  $(input_wrapper).append(
    `<div style='min-height: 20vh;min-width: 90vw; margin: 10px; border: 1px solid blue' id=section-${sectionCounter}>
        <input
        type="text"
        name="message"
        autocomplete="off"
        placeholder="message"
        id="message_${sectionCounter}"
        />
        <input
        type="text"
        name="content"
        autocomplete="off"
        placeholder="content"
        id="content_${sectionCounter}"
        />
        <input type="button" value="SWITCH TO ARRAY" id="switch-to-array-${sectionCounter}" />
        <input
        type="text"
        name="relationship"
        autocomplete="off"
        placeholder="relationship"
        id="relationship_${sectionCounter}"
        />
    </div>`
  );

  $(`#switch-to-array-${sectionCounter}`).click(function (e) {
    const id = e.target.id;
    const indexs = id.split("-").slice(3);
    console.log(indexs);
    //for(index in index) todo
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
