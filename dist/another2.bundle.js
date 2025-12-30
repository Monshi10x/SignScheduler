(self["webpackChunksignscheduler"] = self["webpackChunksignscheduler"] || []).push([["another2"],{

/***/ "./UI/UI.js":
/*!******************!*\
  !*** ./UI/UI.js ***!
  \******************/
/***/ (() => {

//QUICK TIPS:
//For checkboxes, use method below to check, prop doesnt work
//field.dataset.initialBackgroundColor

function createDiv(overrideCssStyles, headingText, parentObjectToAppendTo) {
    var div = document.createElement("div");
    div.style = STYLE.Div;
    div.style.cssText += overrideCssStyles;

    if(headingText !== null) {
        let heading = document.createElement("h3");
        heading.innerText = headingText;
        heading.style = "position:relative; top:0px; left:0x;color:black;font-size:14px;font-weight:bold;background-color:" + COLOUR.LightBlue + ";width:auto;padding:4px;text-align:center;margin:0px;";
        div.appendChild(heading);
    }

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(div);
    }
    return div;
}
function createDivStyle2(overrideCssStyles, headingText, parentObjectToAppendTo) {
    var div = document.createElement("div");
    div.style = STYLE.Div2;
    div.style.cssText += overrideCssStyles;

    let heading;

    if(headingText !== null) {
        heading = document.createElement("h3");
        heading.innerText = headingText;
        heading.style = "float: left; height: 30px; margin: -10px 0px 0px -10px; background-color: " + COLOUR.DarkGrey + "; width: calc(100% + 20px - 35px); box-sizing: border-box; padding: 0px; font-size: 10px; color: white; text-align: center; line-height: 30px; border: 1px solid " + COLOUR.DarkGrey + ";";
        div.appendChild(heading);
    }

    //---------------------------------------//
    //           MINIMIZE BUTTON             //
    //---------------------------------------//
    let minimizeBtn = createButton("-", "display: block; float: left; width: 35px;height:30px; border:none;padding:2px; color:white;min-height: 20px; margin: -10px -10px 0px 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.LightBlue + ";", () => {toggleMinimize();});
    div.appendChild(minimizeBtn);

    function toggleMinimize() {
        if(div.style.maxHeight != "10px") {
            div.style.maxHeight = "10px";
            div.style.overflowY = "hidden";
            minimizeBtn.innerText = "▭";
        }
        else {
            div.style.maxHeight = "800px";
            div.style.overflowY = "auto";
            minimizeBtn.innerText = "-";
        }
    }

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(div);
    }
    return [div, heading];
}
function createDivStyle3(overrideCssStyles, headingText, parentObjectToAppendTo) {
    var div = document.createElement("div");
    div.style = STYLE.Div3;
    div.style.cssText += overrideCssStyles;

    let divContent = document.createElement("div");
    divContent.style = "width:100%;min-height:30px;max-height:400px;overflow-y:scroll;";

    let heading;

    if(headingText !== null) {
        heading = document.createElement("h3");
        heading.innerText = headingText;
        heading.style = "float: left; height: 30px; margin: 0px 0px 0px 0px; background-color: " + COLOUR.DarkGrey + "; width: calc(100% - 70px); box-sizing: border-box; padding: 0px; font-size: 10px; color: white; text-align: center; line-height: 30px; border: 1px solid " + COLOUR.DarkGrey + ";";
        div.appendChild(heading);
    }

    /**
     * @MinimizeBtn
     */
    let minimizeBtn = createButton("-", "display: block; float: right; width: 35px;height:30px; border:none;padding:2px; color:white;min-height: 20px; margin: 0px 0px 0px 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.LightBlue + ";", () => {toggleMinimize();});
    minimizeBtn.id = "minimizeBtn";
    minimizeBtn.dataset.minimizedState = "maximized";
    div.appendChild(minimizeBtn);

    /**
     * @PopOutBtn
     */
    let popOutBtn = createButton("\u274F", "display: block; float: right; width: 35px;height:30px; border:none;padding:2px; color:white;min-height: 20px; margin: 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.DarkBlue + ";", () => {
        setFieldDisabled(true, popOutBtn);
        new ModalPopOut("Expanded View", () => {setFieldDisabled(false, popOutBtn);}, div);
    }, div);

    div.appendChild(divContent);

    function toggleMinimize() {
        if(divContent.style.display == "none") {
            divContent.style.display = "block";
            minimizeBtn.innerText = "-";
            minimizeBtn.dataset.minimizedState = "maximized";
        } else {
            divContent.style.display = "none";
            minimizeBtn.innerText = "▭";
            minimizeBtn.dataset.minimizedState = "minimized";
        }
        /*
        if(div.style.maxHeight != "10px") {
            div.style.maxHeight = "10px";
            div.style.overflowY = "hidden";
            minimizeBtn.innerText = "▭";
        }
        else {
            div.style.maxHeight = "800px";
            div.style.overflowY = "auto";
            minimizeBtn.innerText = "-";
        }*/
    }

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(div);
    }
    return [div, divContent, heading];
}
function createDivStyle4(overrideCssStyles, parentObjectToAppendTo) {
    var div = document.createElement("div");
    div.style = "box-sizing: border-box;width:calc(100% - 20px);" + STYLE.DropShadow + ";margin:10px;padding:5px;border:1px solid #ccc;float:left;border-collapse:collapse;background-color:white;";
    div.style.cssText += overrideCssStyles;

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(div);
    }
    return div;
}
function createDivStyle5(overrideCssStyles, headingText, parentObjectToAppendTo) {
    let f_div = document.createElement("div");
    let f_headingTextWrapper = document.createElement("div");
    let f_headingText = document.createElement("span");
    let f_headingTextWrapper2 = document.createElement("div");
    let f_arrow = document.createElement("span");
    let f_contentContainer = document.createElement("div");

    f_div.style = STYLE.Div5 + ";min-height:30px;background-color:" + COLOUR.MediumGrey + ";";
    f_div.style.cssText += overrideCssStyles;

    f_headingTextWrapper.style = "display:table;width:100px;text-align: center;float: left; position: relative; background-color: " + COLOUR.DarkBlue +
        ";box-sizing: border-box; padding: 0px; font-size: 10px; color: white; text-align: center; margin: 0px; border: 0px;";

    f_headingText.style = "display:table-cell;vertical-align: middle;word-break: break-all;";
    f_headingText.innerText = headingText;

    f_headingTextWrapper2.style = "display:table;width:20px;text-align: center;float: left; position: relative; background-color: " + COLOUR.DarkBlue +
        ";box-sizing: border-box; padding: 0px; font-size: 20px; color: white; text-align: center; margin: 0px; border: 0px;";

    f_arrow.style = "display:table-cell;vertical-align: middle;word-break: break-all;";
    f_arrow.innerHTML = "&#11208";

    f_contentContainer.style = "width:calc(100% - 120px);height:100%;float:left;position: relative;";

    f_headingTextWrapper.addEventListener("click", function() {
        $(f_contentContainer).toggle();
        console.log(f_arrow.innerHTML);
        toggle(f_arrow.innerHTML == "⯈", () => {
            f_arrow.innerHTML = "&#11207";
        }, () => {
            f_arrow.innerHTML = "&#11208";
        });
    });

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(f_div);
    }
    f_headingTextWrapper.appendChild(f_headingText);
    f_div.appendChild(f_headingTextWrapper);
    f_headingTextWrapper2.appendChild(f_arrow);
    f_div.appendChild(f_headingTextWrapper2);
    f_div.appendChild(f_contentContainer);

    return [f_div, f_contentContainer, f_headingText, f_headingTextWrapper];
}
function createButton(text, overrideCssStyles, optionalCallback, parentObjectToAppendTo) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode(text));
    btn.style = STYLE.Button;
    btn.style.cssText += overrideCssStyles;
    btn.dataset.backgroundColor = btn.style.backgroundColor;
    btn.style.borderColor = btn.style.backgroundColor;
    btn.dataset.backgroundColorDisabled = COLOUR.White;
    btn.dataset.initialTextColor = btn.style.color;
    btn.blur();
    var initialBackgroundColor = btn.style.backgroundColor;
    var initialTextColor = btn.style.color;
    $(btn).hover(function() {
        $(this).css("background-color", initialTextColor);
        $(this).css("color", initialBackgroundColor);
        btn.style.boxShadow = "3px 4px 10px 0px rgba(0, 0, 0, 0.8)";
    }, function() {
        $(this).css("background-color", initialBackgroundColor);
        $(this).css("color", initialTextColor);
        btn.style.boxShadow = "3px 4px 10px 0px rgba(0, 0, 0, 0.3)";
    });
    if(optionalCallback) {
        btn.onclick = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(btn);
    }
    return btn;
}
function createIconButton(src, text, overrideCssStyles, optionalCallback, parentObjectToAppendTo, invertOff) {
    let btn = document.createElement('button');
    let icon = document.createElement("img");
    let textField = document.createElement("p");
    let height;

    btn.style = STYLE.Button + ";line-height:30px";
    btn.style.cssText += overrideCssStyles;
    height = btn.style.height ? "" + btn.style.height : "30px";
    console.log(height);
    btn.dataset.backgroundColor = btn.style.backgroundColor;
    btn.style.borderColor = btn.style.backgroundColor;
    btn.dataset.backgroundColorDisabled = COLOUR.White;
    btn.blur();
    var initialBackgroundColor = btn.style.backgroundColor;
    $(btn).hover(() => {
        $(btn).css("background-color", "white");
        $(btn).css("color", initialBackgroundColor);
        $(textField).css("color", initialBackgroundColor);
        if(!invertOff) icon.style.filter = "invert(2%)";
    }, () => {
        $(btn).css("background-color", initialBackgroundColor);
        $(btn).css("color", "white");
        $(textField).css("color", "white");
        if(!invertOff) icon.style.filter = "invert(100%)";
    });

    icon.style = "height:100%;padding:0px;filter:invert(100%);float:left;";
    if(invertOff) icon.style.filter = "invert(0%)";
    icon.src = src;
    btn.appendChild(icon);

    textField.style = "color:white;font-size:13px;margin:0px;margin-top:-4px;text-align:center;vertical-align:center;line-height:" + height;
    textField.innerText = text;
    btn.appendChild(textField);

    if(optionalCallback) {
        btn.onclick = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(btn);
        //parentObjectToAppendTo.appendChild(textE);
    }
    return btn;
}
function createInput(text, defaultValue, overrideCssStyles, optionalCallback, parentObjectToAppendTo) {
    var input = document.createElement('input');
    input.placeholder = text;
    input.autocomplete = 'off';
    input.style = STYLE.InputField;
    if(defaultValue != null) input.value = defaultValue;
    if(overrideCssStyles) input.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        input.onkeyup = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(input);
    }
    return input;
}
function createInput_Infield(text, defaultValue, overrideCssStyles, optionalCallback, parentObjectToAppendTo, fieldRequired, increments, options = {
    prefix: "",
    postfix: ""
}) {
    var input = document.createElement('input');
    var containerDiv = document.createElement('div');
    var textDescription = document.createElement('p');
    textDescription.style = "width:calc(100% - 15px);box-sizing:border-box;height:18px;margin: 0px;padding:2px;color:#666;font-size:11px;";
    textDescription.innerText = text;
    input.autocomplete = 'off';
    input.autocomplete = "one-time-code";
    input.style = "float:left;field-sizing:content;min-width:10px;max-width:calc(100% - 4px);height:18px;margin: 0px;padding:2px;border:0px solid;box-sizing:content-box;outline: none;background:none;text-align:left;position:relative;font-size:14px;";
    containerDiv.style = STYLE.InputInfield;
    containerDiv.appendChild(textDescription);
    containerDiv.appendChild(input);
    if(defaultValue != null) input.value = defaultValue; else input.value = '';
    if(overrideCssStyles) containerDiv.style.cssText += overrideCssStyles;
    if(fieldRequired && input.value == "") {
        containerDiv.style.borderColor = "red";
    }
    if(increments != null) {
        /*var accuracyDigits = 12;
        if(increments<Math.pow(0.1,accuracyDigits)){
            alert("Accuracy of createInput_Infield function not desirable at this increment");
            console.log(increments);
            console.log(Math.pow(0.1,accuracyDigits));
        }*/
        var upArrow = document.createElement('button');
        upArrow.innerHTML = "&#9650";
        upArrow.style = "width:15px;height:20px;float:right;background-color:" + COLOUR.DarkGrey + ";position:absolute;top:0;right:0;color:white; border:0px solid " + COLOUR.DarkGrey + ";cursor: pointer;padding:0px;";
        upArrow.tabIndex = "-1";
        $(upArrow).hover(function() {
            $(this).css("background-color", "white");
            $(this).css("color", COLOUR.DarkGrey);
        }, function() {
            $(this).css("background-color", COLOUR.DarkGrey);
            $(this).css("color", "white");
        });
        upArrow.onclick = function() {
            var currentVal = (input.value == '' ? 0 : parseFloat(input.value));
            input.value = roundNumber(currentVal + increments, 12);
            $(input).keyup();
        };

        var downArrow = document.createElement('button');
        downArrow.innerHTML = "&#9660";
        downArrow.style = "width:15px;height:20px;float:right;background-color:" + COLOUR.DarkGrey + ";position:absolute;bottom:0px;right:0;color:white; border:0px solid " + COLOUR.DarkGrey + ";cursor: pointer;padding:0px;tabindex:-1;";
        downArrow.tabIndex = "-1";
        $(downArrow).hover(function() {
            $(this).css("background-color", "white");
            $(this).css("color", COLOUR.DarkGrey);
        }, function() {
            $(this).css("background-color", COLOUR.DarkGrey);
            $(this).css("color", "white");
        });
        downArrow.onclick = function() {
            var currentVal = (input.value == '' ? 0 : parseFloat(input.value));
            input.value = roundNumber(currentVal - increments, 12);
            $(input).keyup();
        };

        containerDiv.appendChild(upArrow);
        containerDiv.appendChild(downArrow);
    }
    input.onkeyup = function() {
        if(optionalCallback) {
            optionalCallback();
        }
        if(input.value != "" || !fieldRequired) {
            containerDiv.style.borderColor = "rgb(177, 177, 177)";
        } else {
            containerDiv.style.borderColor = "red";
        }
    };
    input.onchange = function() {
        if(optionalCallback) {
            optionalCallback();
        }
        if(input.value != "" || !fieldRequired) {
            containerDiv.style.borderColor = "rgb(177, 177, 177)";
        } else {
            containerDiv.style.borderColor = "red";
        }
    };

    containerDiv.addEventListener("click", (event) => {
        if(event.target == containerDiv) {
            input.focus();
        }
    });

    textDescription.onclick = function() {
        input.focus();
    };

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(containerDiv);
    }

    if(options.prefix) {
        let prefixField = document.createElement("p");
        prefixField.style = "float:left; field-sizing: content;color:#555;height:18px;margin: 0px;padding:2px;border:0px solid;box-sizing:content-box;outline: none;background:none;text-align:left;position:relative;font-family:Arial;font-size: 14px;line-height: 18px;";
        prefixField.innerText = options.prefix;
        prefixField.onclick = function() {
            input.focus();
        };
        input.style.cssText += "";
        insertBefore(prefixField, input);
    }
    if(options.postfix) {
        let postfixField = document.createElement("p");
        postfixField.style = "float:left; field-sizing: content;color:#555;height:18px;margin: 0px;padding:2px;border:0px solid;box-sizing:content-box;outline: none;background:none;text-align:left;position:relative;font-family:Arial;font-size: 14px;line-height: 18px;";
        postfixField.innerText = options.postfix;
        postfixField.onclick = function() {
            input.focus();
        };
        input.style.cssText += "";
        insertAfter(postfixField, input);
    }

    return [containerDiv, input, textDescription];
}
function createInputCalculated_Infield(text, defaultValue, overrideCssStyles, optionalCallback, locked, parentObjectToAppendTo) {
    var input = document.createElement('input');
    var containerDiv = document.createElement('div');
    var textDescription = document.createElement('p');
    var calculated_Text = document.createElement('p');
    calculated_Text.style = "width:30%;height:20px;margin: 0px;padding:4px;padding-top:8px;color:#666;font-size:12px;float:left";
    calculated_Text.innerText = "Calculated";
    var calculated = document.createElement('input');
    calculated.style = "float:left;width:45%;height:20px;margin: 0px;padding:4px;border:0px solid;box-sizing:content-box;outline: none;background:none;text-align:left;color:#666;";
    calculated.autocomplete = 'off';
    calculated.disabled = true;
    textDescription.style = "width:97%;height:10px;margin: 0px;padding:4px;color:#666;font-size:12px;float:left";
    textDescription.innerText = text;
    input.autocomplete = 'off';
    input.disabled = true;
    input.style = "float:left;width:97%;height:20px;margin: 0px;padding:4px;border:0px solid;box-sizing:content-box;outline: none;background:none;text-align:left;";
    containerDiv.style = STYLE.InputInfield;
    var lockButton = createButton("", "border-color:white;margin:0px;max-height:30px;min-height:30px;width:30px;object-fit: contain;float:left;background:url('" + ICON.lock + "');background-size: cover;background-repeat: no-repeat;background-position: center;", toggleLocked);
    lockButton.disabled = false;
    $(lockButton).hover(function() {
        $(this).css("background-color", "white");
        $(this).css("color", COLOUR.Blue);
    }, function() {
        $(this).css("background-color", "white");
        $(this).css("color", COLOUR.Blue);
    });
    var toggleIsLocked = true;

    containerDiv.appendChild(textDescription);
    containerDiv.appendChild(input);
    containerDiv.appendChild(calculated_Text);
    containerDiv.appendChild(calculated);
    containerDiv.appendChild(lockButton);


    if(defaultValue != null) {
        input.value = defaultValue;
        calculated.value = defaultValue;
    }
    if(overrideCssStyles) containerDiv.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        input.onkeyup = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(containerDiv);
    }

    function toggleLocked() {
        //if is locked icon, then unlock
        if(lockButton.style.backgroundImage == 'url("' + ICON.lock + '")') {
            lockButton.style.backgroundImage = 'url("' + ICON.unlock + '")';
            //unlocked
            toggleIsLocked = false;
            input.disabled = false;
            input.style.outline = "1px solid black";
        } else {
            lockButton.style.backgroundImage = 'url("' + ICON.lock + '")';
            //locked
            toggleIsLocked = true;
            input.disabled = true;
            input.value = calculated.value;
            input.style.outline = "none";
        }
    }

    //to call use         $(test[2]).val(600).change();
    $(calculated).on("change", function() {
        if(toggleIsLocked) {
            input.value = calculated.value;
        }
    });

    return [containerDiv, input, calculated];
}
function createTextarea(text, defaultValue, overrideCssStyles, optionalCallback, parentObjectToAppendTo) {
    var input = document.createElement('textarea');
    input.placeholder = text;
    input.autocomplete = 'off';
    input.style = STYLE.InputField;
    if(defaultValue != null) input.value = defaultValue;
    if(overrideCssStyles) input.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        input.onkeyup = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(input);
    }
    return input;
}
function createDropdown(text, selectedIndex, overrideCssStyles, options, optionalCallback) {
    var dropdown = document.createElement('select');
    dropdown.placeholder = text;
    dropdown.style = STYLE.DropDownField;
    dropdown.style.cssText += overrideCssStyles;
    if(options != null) {
        options.forEach(function(item, index) {
            dropdown.add(item, index);
        });
    }
    if(selectedIndex != null) dropdown.selectedIndex = selectedIndex;
    if(optionalCallback) {
        dropdown.onchange = optionalCallback;
    }
    return dropdown;
}
function createDropdown_Infield(text, selectedIndex, overrideCssStyles, options, optionalCallback, parentObjectToAppendTo) {
    var dropdown = document.createElement('select');
    if(options != null) {
        options.forEach(function(item) {
            dropdown.add(item);
        });
    }
    var containerDiv = document.createElement('div');

    var textDescription = document.createElement('p');
    textDescription.style = "width:97%;height:10px;margin: 0px;padding:4px;color:#666;font-size:12px;background:none;";
    textDescription.innerText = text;
    textDescription.style.cursor = "pointer";
    dropdown.style = "float:left;width:97%;height:20px;margin: 0px;padding:4px;padding-top:20px;border:0px solid;box-sizing:content-box;outline: none;background:none;text-align:left;position:absolute;top:0;left:0;";
    dropdown.style.cursor = "pointer";
    containerDiv.style = STYLE.DropDownInfield;
    containerDiv.style.cursor = "pointer";
    containerDiv.appendChild(textDescription);
    containerDiv.appendChild(dropdown);
    if(selectedIndex != null) dropdown.selectedIndex = selectedIndex;
    if(overrideCssStyles) containerDiv.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        dropdown.onchange = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(containerDiv);
    }
    return [containerDiv, dropdown];
}
function createDropdown_Infield_Icons(text, selectedIndex, overrideCssStyles, widthOfIcon, iconIsColour, options, optionalCallback, parentObjectToAppendTo) {
    var containerDiv = document.createElement('div');
    containerDiv.style = STYLE.DropDownInfield;
    containerDiv.style.cursor = "pointer";

    var dummyInput = createInput("", "", "display:none;", null, containerDiv);

    var textDescription = document.createElement('p');
    textDescription.style = "width:97%;height:10px;margin: 0px;padding:4px;color:#666;font-size:12px;background:none;";
    textDescription.style.cursor = "pointer";
    textDescription.innerText = text;
    textDescription.onclick = function() {
        $(dropdownBody).toggle();
    };
    containerDiv.appendChild(textDescription);

    var dropdownText = document.createElement('div');
    dropdownText.style = "width:97%;height:10px;margin: 0px;padding:4px;color:black;font-size:14px;background:none;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;";
    dropdownText.style.cursor = "pointer";
    dropdownText.innerText = "test123";
    dropdownText.onclick = function() {
        $(dropdownBody).toggle();
    };
    containerDiv.appendChild(dropdownText);


    var dropdownArrow = document.createElement('button');
    dropdownArrow.innerHTML = "&#9660";
    dropdownArrow.style = "width:15px;height:100%;float:right;background-color:" + COLOUR.Blue + ";position:absolute;bottom:0px;right:0;color:white; border:0px solid " + COLOUR.Blue + ";cursor: pointer;padding:0px";
    $(dropdownArrow).hover(function() {
        $(this).css("background-color", "white");
        $(this).css("color", COLOUR.Blue);
    }, function() {
        $(this).css("background-color", COLOUR.Blue);
        $(this).css("color", "white");
    });
    dropdownArrow.onclick = function() {
        $(dropdownBody).toggle();
    };
    containerDiv.appendChild(dropdownArrow);

    var dropdownBody = document.createElement('div');
    dropdownBody.style = "width:100%;height:300px;position:absolute;top:45px;left:0px;display:block;background-color:white;z-index:100;display:none; border:1px solid black;box-shadow: 1px 1px 6px 1px #aaa;overflow-y:scroll";
    containerDiv.appendChild(dropdownBody);

    if(overrideCssStyles) containerDiv.style.cssText += overrideCssStyles;

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(containerDiv);
    }

    for(var o = 0; o < options.length; o++) {
        var nullFunc = function() {
            var optionDiv = document.createElement('div');
            optionDiv.style = "width:100%;height:" + createDropdown_Infield_Icons + 20 + "px;border-bottom: 1px solid #aaa;display:block;float:left";
            $(optionDiv).hover(function() {
                $(this).css("background-color", "#ddd");
            }, function() {
                $(this).css("background-color", "white");
            });
            $(optionDiv).click(function() {
                dropdownText.innerText = optionDiv.querySelector("#optionText").innerText;
                dummyInput.value = dropdownText.innerText;
                $(dropdownBody).toggle();
                if(optionalCallback) {
                    optionalCallback();
                }
            });
            $(document).click((event) => {
                if(!$(event.target).closest(containerDiv).length) {
                    dropdownBody.style.display = "none";
                }
            });

            var optionIcon;
            if(iconIsColour) {
                optionIcon = document.createElement('div');
                optionIcon.style.background = options[o][1];
            } else {
                optionIcon = document.createElement('img');
                optionIcon.src = options[o][1];
            }
            optionIcon.style.cssText += "display: block; float: left; width: " + widthOfIcon + "px; height: " + widthOfIcon + "px; margin: 10px 10px; background-size: cover;";
            optionDiv.appendChild(optionIcon);

            var optionText = document.createElement('p');
            optionText.innerText = options[o][0];
            optionText.style = "display:block;float:left;width:calc(100%-20px);height:" + widthOfIcon + "px;color:black;padding:10px;font-size:14px;margin:0px;display: table-cell;line-height: " + widthOfIcon + "px;vertical-align: middle; ";
            optionText.id = "optionText";
            optionDiv.appendChild(optionText);

            dropdownBody.appendChild(optionDiv);
        };
        nullFunc();
    }

    if(selectedIndex !== null) {
        dropdownText.innerText = containerDiv.querySelectorAll("#optionText")[selectedIndex].innerText;
        dummyInput.value = dropdownText.innerText;
    }

    return [containerDiv, dummyInput, dropdownBody];
}
function createDropdown_Infield_Icons_Search(text, selectedIndex, overrideCssStyles, widthOfIcon, iconIsColour, options, optionalCallback, parentObjectToAppendTo, canAddCustom = false) {
    var containerDiv = document.createElement('div');
    containerDiv.style = STYLE.DropDownInfield;
    containerDiv.style.cursor = "pointer";

    var dummyInput = createInput("test", "", ";display:none;", null, null);
    dummyInput.id = "test";

    var textDescription = document.createElement('p');
    textDescription.style = "width:97%;height:10px;margin: 0px;padding:4px;color:#666;font-size:12px;background:none;";
    textDescription.style.cursor = "pointer";
    textDescription.innerText = text;
    textDescription.onclick = toggleMenu;

    containerDiv.appendChild(textDescription);

    var dropdownText = document.createElement('div');
    dropdownText.style = "width:97%;height:15px;margin: 0px;padding:4px;color:black;font-size:14px;background:none;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;";
    dropdownText.style.cursor = "pointer";
    dropdownText.innerText = "test123";
    dropdownText.onclick = toggleMenu;
    containerDiv.appendChild(dropdownText);


    var dropdownArrow = document.createElement('button');
    dropdownArrow.innerHTML = "&#9660";
    dropdownArrow.style = "width:15px;height:100%;float:right;background-color:" + COLOUR.DarkGrey + ";position:absolute;bottom:0px;right:0;color:white; border:0px solid " + COLOUR.DarkGrey + ";cursor: pointer;padding:0px";
    $(dropdownArrow).hover(function() {
        $(this).css("background-color", "white");
        $(this).css("color", COLOUR.DarkGrey);
    }, function() {
        $(this).css("background-color", COLOUR.DarkGrey);
        $(this).css("color", "white");
    });
    dropdownArrow.onclick = toggleMenu;
    containerDiv.appendChild(dropdownArrow);

    var searchBar = createInput("", null, "width:" + 600 + "px;height:30px;position:fixed;top:40px;left:0px;display:none;margin:0;padding:5px;box-sizing:border-box;z-index:1000;border:0px;outline:none;", narrowSearches, containerDiv);
    searchBar.placeholder = "Search or Type Custom...";

    function narrowSearches() {
        let currentSearchTerm = searchBar.value.toLowerCase();
        let atLeastOneSearchTermfound = false;
        for(let i = 0; i < options.length; i++) {
            let optionValue = options[i][0].toLowerCase();
            let matchesSearchTerm = optionValue.includes(currentSearchTerm);
            if(matchesSearchTerm) {
                atLeastOneSearchTermfound = true;
                internalOptionDivs[i].style.display = "block";
            } else {
                internalOptionDivs[i].style.display = "none";
            }
        }
        if(atLeastOneSearchTermfound == false) {
            showAddCustom();
        } else {
            hideCustom();
        }
    }
    let customDropdownOption;
    function showAddCustom() {
        if(canAddCustom) {
            for(let i = options.length; i < options.length + 1; i++) {
                internalOptionDivs[i].style.display = "block";
                containerDiv.querySelectorAll("#optionText")[i].innerText = searchBar.value;
            }
        }
    }
    function hideCustom() {
        if(canAddCustom) {
            for(let i = options.length; i < options.length + 1; i++) {
                internalOptionDivs[i].style.display = "none";
            }
        }
    }

    function resetSearches() {
        for(let i = 0; i < options.length; i++) {
            internalOptionDivs[i].style.display = "block";
        }
    }

    var isScrollInside = false;

    document.addEventListener("wheel", (event) => {
        if(!isScrollInside) {
            $(dropdownBody).hide();
            $(searchBar).hide();
            searchBar.value = "";
        }
    });

    function toggleMenu() {
        $(dropdownBody).toggle();
        $(searchBar).toggle();
        searchBar.value = "";
        searchBar.focus();
        searchBar.style.top = containerDiv.getBoundingClientRect().y + containerDiv.getBoundingClientRect().height + 0 + "px";
        searchBar.style.left = containerDiv.getBoundingClientRect().x + "px";
        resetSearches();
        hideCustom();
        dropdownBody.style.top = containerDiv.getBoundingClientRect().y + containerDiv.getBoundingClientRect().height + 40 + "px";
        dropdownBody.style.left = containerDiv.getBoundingClientRect().x + "px";
    }

    var dropdownBody = document.createElement('div');
    dropdownBody.style = "width:" + 600 + "px;height:400px;position:fixed;top:200px;left:0px;display:block;background-color:white;z-index:100;display:none; border:1px solid black;" + STYLE.DropShadow + ";overflow-y:scroll;z-index:1000;";
    containerDiv.appendChild(dropdownBody);
    containerDiv.appendChild(dummyInput);
    dropdownBody.style.top = containerDiv.getBoundingClientRect().bottom;
    dropdownBody.style.left = containerDiv.getBoundingClientRect().left;

    dropdownBody.addEventListener("mouseout", (event) => {
        isScrollInside = false;
    });

    dropdownBody.addEventListener("mouseover", (event) => {
        isScrollInside = true;
    });

    if(overrideCssStyles) containerDiv.style.cssText += overrideCssStyles;

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(containerDiv);
    }
    let internalOptionDivs = [];
    function createDropdownItems(dropdownOptions) {

        for(var o = 0; o < dropdownOptions.length; o++) {
            var nullFunc = function() {
                var optionDiv = document.createElement('div');
                internalOptionDivs.push(optionDiv);
                optionDiv.style = "width:100%;height:" + createDropdown_Infield_Icons + 20 + "px;border-bottom: 1px solid #aaa;display:block;float:left";
                $(optionDiv).hover(function() {
                    $(this).css("background-color", "#ddd");
                }, function() {
                    $(this).css("background-color", "white");
                });
                $(optionDiv).click(function() {
                    dropdownText.innerText = optionDiv.querySelector("#optionText").innerText;
                    dummyInput.value = dropdownText.innerText;
                    toggleMenu();
                    if(optionalCallback) {
                        optionalCallback();
                    }
                });
                $(document).click((event) => {
                    if(!$(event.target).closest(containerDiv).length) {
                        dropdownBody.style.display = "none";
                        searchBar.style.display = "none";
                    }
                });

                var optionIcon;
                if(iconIsColour) {
                    optionIcon = document.createElement('div');
                    optionIcon.style.background = dropdownOptions[o][1];
                } else {
                    optionIcon = document.createElement('img');
                    optionIcon.src = dropdownOptions[o][1];
                }
                optionIcon.style.cssText += "display: block; float: left; width: " + widthOfIcon + "px; height: " + widthOfIcon + "px; margin: 10px 10px; background-size: cover;";
                optionDiv.appendChild(optionIcon);

                var optionText = document.createElement('p');
                optionText.innerText = dropdownOptions[o][0];
                optionText.style = "display:block;float:left;width:calc(100%-20px);height:" + widthOfIcon + "px;color:black;padding:10px;font-size:14px;margin:0px;display: table-cell;line-height: " + widthOfIcon + "px;vertical-align: middle; ";
                optionText.id = "optionText";
                optionDiv.appendChild(optionText);

                dropdownBody.appendChild(optionDiv);
            };
            nullFunc();
        }
    }
    createDropdownItems(options);
    createDropdownItems([["Use Custom", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbiJarSPG1EXUnQ24f7kOzpi_rpAaS_wr6iEB0N4PHDyBeU5tCyGBWsZwIvYr8Cyg_ZU&usqp=CAU"]]);
    for(let i = options.length; i < options.length + 1; i++) {
        internalOptionDivs[i].style.display = "none";
    }

    if(selectedIndex !== null) {
        dropdownText.innerText = containerDiv.querySelectorAll("#optionText")[selectedIndex].innerText;
        dummyInput.value = dropdownText.innerText;
    }

    dummyInput.onchange = function() {
        dropdownText.innerText = dummyInput.value;
    };

    return [containerDiv, dummyInput, textDescription, dropdownBody];
}
function createFloatingTag(text, overrideCssStyles, parentObjectToAppendTo) {
    let floatingTag = document.createElement("div");
    floatingTag.innerText = text;
    floatingTag.style = STYLE.FloatingTag;
    if(overrideCssStyles) floatingTag.style.cssText += overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(floatingTag);
    }
    return floatingTag;
}
function createIFrame(url, overrideCssStyles, parentObjectToAppendTo) {
    let element = document.createElement("iframe");
    element.src = url;
    if(overrideCssStyles) element.style.cssText += overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(element);
    }
    return element;
}

function resetDropdownOption_Icon(options, dropdownText, dropdownBody, optionalCallback) {
    for(var o = 0; o < options.length; o++) {
        var nullFunc = function() {
            var optionDiv = document.createElement('div');
            optionDiv.style = "width:100%;height:" + createDropdown_Infield_Icons + 20 + "px;border-bottom: 1px solid #aaa;display:block;float:left";
            $(optionDiv).hover(function() {
                $(this).css("background-color", "#ddd");
            }, function() {
                $(this).css("background-color", "white");
            });
            $(optionDiv).click(function() {
                dropdownText.innerText = optionDiv.querySelector("#optionText").innerText;
                $(dropdownBody).toggle();
                if(optionalCallback) {
                    optionalCallback();
                }
            });
            $(document).click((event) => {
                if(!$(event.target).closest(containerDiv).length) {
                    dropdownBody.style.display = "none";
                }
            });

            var optionIcon;
            if(iconIsColour) {
                optionIcon = document.createElement('div');
                optionIcon.style.background = options[o][1];
            } else {
                optionIcon = document.createElement('img');
                optionIcon.src = options[o][1];
            }
            optionIcon.style.cssText += "display: block; float: left; width: " + widthOfIcon + "px; height: " + widthOfIcon + "px; margin: 10px 10px; background-size: cover;";
            optionDiv.appendChild(optionIcon);

            var optionText = document.createElement('p');
            optionText.innerText = options[o][0];
            optionText.style = "display:block;float:left;width:calc(100%-20px);height:" + widthOfIcon + "px;color:black;padding:10px;font-size:14px;margin:0px;display: table-cell;line-height: " + widthOfIcon + "px;vertical-align: middle; ";
            optionText.id = "optionText";
            optionDiv.appendChild(optionText);

            dropdownBody.appendChild(optionDiv);
        };
        nullFunc();
    }
}

function createOptGroup(text, options) {
    var optgroup = document.createElement('optgroup');
    optgroup.setAttribute("label", text);
    if(options != null) {
        options.forEach(function(item) {
            optgroup.appendChild(item);
        });
    }
    return optgroup;
}
function createDropdownOption(text, value) {
    var dropdownOption = document.createElement("option");
    dropdownOption.text = text;
    if(!value) dropdownOption.value = text;
    else dropdownOption.value = value;

    return dropdownOption;
}

function setOptions(field, options) {
    while(field.firstChild) {
        field.removeChild(field.firstChild);
    }

    for(var l = 0; l < options.length; l++) {
        field.add(options[l]);
    }
}

function createOptGroupDropdown(text, parent, classN, innerH, selectedIndex, overrideCssStyles, options, optionalCallback) {
    var divContainer = document.createElement("div");
    divContainer.style = "display:block;float:left;padding:2px;";
    var dropdown = createDropdown("classN", 0, STYLE.Button, null);
    dropdown.style = STYLE.Button + ";font-size:11px;";
    dropdown.style.margin = "0px";
    dropdown.style.cssText += overrideCssStyles;
    dropdown.blur();
    var initialdropdownBackgroundColor = dropdown.style.backgroundColor;
    $(dropdown).hover(() => {
        $(dropdown).css("background-color", "white");
        $(dropdown).css("color", initialdropdownBackgroundColor);
    }, () => {
        $(dropdown).css("background-color", initialdropdownBackgroundColor);
        $(dropdown).css("color", "white");
    });

    dropdown.innerHTML = innerH;
    dropdown.className = classN;

    for(var o = 0; o < options.length; o++) {
        dropdown.add(options[o]);
    }

    var btn = document.createElement("button");
    btn.style = STYLE.Button;
    btn.style.cssText += "width:30px;margin:0px;margin-left:3px";
    btn.innerHTML = "+";
    btn.className = classN;
    btn.onclick = optionalCallback;
    btn.blur();
    var initialBtnBackgroundColor = btn.style.backgroundColor;
    $(btn).hover(() => {
        $(btn).css("background-color", "white");
        $(btn).css("color", initialBtnBackgroundColor);
    }, () => {
        $(btn).css("background-color", initialBtnBackgroundColor);
        $(btn).css("color", "white");
    });

    divContainer.appendChild(dropdown);
    divContainer.appendChild(btn);
    parent.appendChild(divContainer);
    return dropdown;
}
function createLabel(text, overrideCssStyles, parentObjectToAppendTo) {
    var label = document.createElement('label');
    label.appendChild(document.createTextNode(text));
    label.style = STYLE.Label;
    label.style.cssText += overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(label);
    }
    return label;
}

/**
 * @param {String} text 
 * @param {String} overrideCssStyles 
 * @param {object} parentObjectToAppendTo 
 * @returns HTML text Object
 * @description for Symbols use \u_____ 
 * @see https://www.w3schools.com/charsets/ref_utf_punctuation.asp
 * @see https://www.w3schools.com/charsets/ref_utf_currency.asp
 * @see https://www.w3schools.com/charsets/ref_utf_letterlike.asp
 * @see https://www.w3schools.com/charsets/ref_utf_arrows.asp
 * @see https://www.w3schools.com/charsets/ref_utf_math.asp
 * @see https://www.w3schools.com/charsets/ref_utf_box.asp
 * @see https://www.w3schools.com/charsets/ref_utf_block.asp
 * @see https://www.w3schools.com/charsets/ref_utf_geometric.asp
 * @see https://www.w3schools.com/charsets/ref_utf_symbols.asp
 * @see https://www.w3schools.com/charsets/ref_utf_dingbats.asp
 * @see https://www.w3schools.com/charsets/ref_emoji.asp
 * @see https://www.w3schools.com/charsets/ref_emoji_smileys.asp
 * @see https://www.w3schools.com/charsets/ref_emoji_skin_tones.asp
 */
function createText(text, overrideCssStyles, parentObjectToAppendTo) {
    let _text = document.createElement('p');
    _text.innerText = text;
    _text.style = STYLE.Label;
    _text.style.cssText += overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(_text);
    }
    return _text;
}
function createCheckbox(text, defaultValue, overrideCssStyles, optionalCallback, parentObjectToAppendTo) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.placeholder = text;
    checkbox.style = STYLE.Checkbox;
    if(defaultValue) checkbox.checked = defaultValue;
    if(overrideCssStyles) checkbox.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        checkbox.onchange = optionalCallback;
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(checkbox);
    }
    return checkbox;
}
function createCheckbox_Infield(text, defaultValue, overrideCssStyles, optionalCallback, parentObjectToAppendTo) {
    var input = document.createElement('input');
    input.type = "checkbox";
    input.name = "checkbox";
    var containerDiv = document.createElement('div');
    var textDescription = document.createElement('p');
    textDescription.style = "width:calc(100% - 48x);height: 10px;color: rgb(102, 102, 102);font-size: 12px;float: left;display: block;margin: 8px;";
    textDescription.innerText = text;
    input.autocomplete = 'off';
    input.style = "float: left;width: 20px;height: 18px;margin: 6px 6px 6px;background: none;text-align: right;display: block;padding: 5px;";
    containerDiv.style = STYLE.CheckboxInfield;
    containerDiv.appendChild(input);
    containerDiv.appendChild(textDescription);
    containerDiv.onclick = function(e) {
        if(e) e.stopPropagation();
        if(!input.disabled) {
            input.click();
        }
    };
    input.onclick = function(e) {
        if(e) e.stopPropagation();
        if(!input.disabled) {
        }
    };

    containerDiv.style.cursor = "pointer";
    if(defaultValue) input.checked = defaultValue;
    if(overrideCssStyles) containerDiv.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        input.onchange = function() {
            optionalCallback();
        };
    }
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(containerDiv);
    }
    return [containerDiv, input];
}
function createRadio(text, defaultValue, overrideCssStyles, optionalCallback) {
    var radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "radio";
    radio.placeholder = text;
    radio.style = STYLE.Checkbox;
    if(defaultValue) radio.checked = defaultValue;
    if(overrideCssStyles) radio.style.cssText += overrideCssStyles;
    if(optionalCallback) {
        radio.onchange = optionalCallback;
    }

    return radio;
}
function createHr(overrideCssStyles, parentObjectToAppendTo) {
    var hr = document.createElement('hr');
    hr.style = "width:95%;display:block;float:left;margin:10px;border-color: " + COLOUR.Blue + ";background-color: " + COLOUR.Blue + ";border-width: 3px;border-radius: 3px;";
    if(overrideCssStyles) hr.style.cssText += overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(hr);
    }
    return hr;
}
function createHeading_Numbered(number, text, overrideCssStyles, parentObjectToAppendTo) {
    var container = document.createElement('div');
    container.style = "display:block; float:left; width:100%; height:40px;position: relative;margin-top:25px;";

    var circle = document.createElement('div');
    circle.style = "display:block;width:30px;height:30px;border-style: solid;border-width: 3px;border-color: " + COLOUR.LightBlue + ";border-radius: 20px;float:left;background-color: " + COLOUR.White + ";";
    container.appendChild(circle);

    //var line = document.createElement('div');
    // line.style = "display:block;width:80%;height:3px;background-color:" + COLOUR.LightBlue + ";float:left;margin-top:33px;margin-left:-15px;";
    //container.appendChild(line);

    var numberElement = document.createElement('p');
    numberElement.innerText = number;
    numberElement.style = "display:block;width:30px;height:30px;position:absolute;left:13px;top:10px;margin:0px;color:" + COLOUR.MidGrey + ";font-size:16px;font-weight:bold;";
    container.appendChild(numberElement);

    var textElement = document.createElement('p');
    textElement.innerText = text;
    textElement.style = "display:block;width:80%;height:30px;position:absolute;left:50px;top:10px;margin:0px;color:" + COLOUR.MidGrey + ";font-size:16px;font-weight:bold;";
    container.appendChild(textElement);

    if(overrideCssStyles) container.style.cssText += ";" + overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(container);
    }

    return [container, null];
}
function createHeading_Numbered2(number, text, overrideCssStyles, parentObjectToAppendTo) {
    var container = document.createElement('div');
    container.style = "display:block; float:left; width:100%; height:40px;position: relative;margin-top:25px;";

    var circle = document.createElement('div');
    circle.style = "display:block;width:30px;height:30px;border-style: solid;border-width: 3px;border-color: " + COLOUR.LightBlue + ";border-radius: 20px;float:left;background-color: " + COLOUR.LightBlue + ";";
    container.appendChild(circle);

    var line = document.createElement('div');
    line.style = "display:block;width:80%;height:3px;background-color:" + COLOUR.LightBlue + ";float:left;margin-top:33px;margin-left:-15px;";
    container.appendChild(line);

    var numberElement = document.createElement('p');
    numberElement.innerText = number;
    numberElement.style = "display:block;width:30px;height:30px;position:absolute;left:13px;top:10px;margin:0px;color:" + COLOUR.White + ";font-size:16px;font-weight:bold;";
    container.appendChild(numberElement);

    var textElement = document.createElement('p');
    textElement.innerText = text;
    textElement.style = "display:block;width:80%;height:30px;position:absolute;left:50px;top:10px;margin:0px;color:" + COLOUR.LightBlue + ";font-size:16px;font-weight:bold;";
    container.appendChild(textElement);

    if(overrideCssStyles) container.style.cssText += ";" + overrideCssStyles;
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(container);
    }

    return [container, null];
}
function createHeadingStyle1(text, overrideCssStyles, parentObjectToAppendTo) {
    let heading = createText(text, STYLE.HeadingStyle1, parentObjectToAppendTo);
    if(overrideCssStyles) hr.style.cssText += overrideCssStyles;
    return heading;
}
function createToken(text, selectedTF, overrideCssStyles, parentObjectToAppendTo) {
    var token = document.createElement('div');
    var fakeValueContainer = document.createElement('input');
    token.style = "display:block;float:left;width:120px;height:30px;font-size:12px;color:" + (selectedTF ? COLOUR.White : COLOUR.DarkGrey) + ";background-color:" + (selectedTF ? COLOUR.Blue : COLOUR.MediumGrey) + ";text-align:center;line-height:30px;border-radius:15px;cursor:pointer;margin:5px;user-select: none;";
    token.style.cssText += overrideCssStyles;
    token.innerText = text;
    token.dataset.selected = (selectedTF ? "true" : "false");
    token.dataset.selectedBackgroundColor = COLOUR.Blue;
    token.dataset.selectedColor = COLOUR.White;
    token.dataset.deselectedBackgroundColor = COLOUR.MediumGrey;
    token.dataset.deselectedColor = COLOUR.DarkGrey;
    fakeValueContainer.value = selectedTF;
    token.onclick = function() {
        fakeValueContainer.value = true;
        token.dataset.selected = "true";
        token.style.backgroundColor = token.dataset.selectedBackgroundColor;
        token.style.color = token.dataset.selectedColor;
    };
    token.onmouseover = function() {
        token.style.cssText += ";box-shadow: rgb(98 98 98) 5px 5px 10px -3px;";
    };
    token.onmouseleave = function() {
        token.style.cssText += ";box-shadow: none;";
    };
    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(token);
    }
    return [token, fakeValueContainer];
}

/**
 * 
 * @param {*} overrideCssStyles 
 * @param {*} text 
 * @param {*} href 
 * @param {*} target "_blank" (default), "new window"
 * @param {*} parentObjectToAppendTo 
 * @returns 
 */
function createLink(overrideCssStyles = "", text = "", href = "", target = "_blank", parentObjectToAppendTo) {
    let link = document.createElement('a');
    link.style = STYLE.Link;
    link.style.cssText += overrideCssStyles;
    link.innerText = text;

    let windowWidth = 1500, windowHeight = 1000, offsetX, offsetY;

    if(target == "_blank" || target == null) {
        link.target = target;
        link.href = href;
    } else if(target == "new window") {
        link.addEventListener("click", (e) => {
            offsetX = (window.outerWidth - windowWidth) / 2;
            offsetY = (window.innerHeight - windowHeight) / 2 + (window.outerHeight - window.innerHeight) / 2;
            window.open(href, '_blank', 'location=yes,top=' + offsetY + ',left=' + offsetX + ',height=' + windowHeight + ',width=' + windowWidth + ',scrollbars=yes,status=yes');
        });
    }

    if(parentObjectToAppendTo != null) {
        parentObjectToAppendTo.appendChild(link);
    }
    return link;
}

function dropdownSetSelectedIndexToNextAvailable(field, leaveIfCurrentSelectedIsNotDisabled = false) {
    let fieldOptions = field.options;
    let fieldOptionsLength = fieldOptions.length;
    if(leaveIfCurrentSelectedIsNotDisabled && fieldOptions[field.selectedIndex].disabled == false) return;
    for(let i = 0; i < fieldOptionsLength; i++) {
        if(fieldOptions[i].disabled === true) continue;
        else {
            field.selectedIndex = i;
            return;
        }
    }
}
function dropdownSetSelectedValue(field, value) {
    let allOptions = field.options;
    for(let i = 0; i < allOptions.length; i++) {
        if(allOptions[i].value === value) {
            field.selectedIndex = i;
            $(field).change();
            return;
        }
    }
    alert("no value selected for dropdown (no match)");
}
//helper functions
function checkboxesAddToSelectionGroup(oneMustBeChecked, ...checkboxElements) {
    var groupArray = [];

    for(var i = 0; i < checkboxElements.length; i++) {
        groupArray.push(checkboxElements[i]);

        let x = groupArray[i][0];
        let y = groupArray[i][1];
        groupArray[i][1].addEventListener("click", function(e) {
            t(x, y);
        });
    }

    function t(checkboxContainer, checkbox) {
        uncheckOthers(checkbox);
        if(checkbox.checked) {
            checkboxContainer.style.pointerEvents = "none";
        } else {
            checkboxContainer.style.pointerEvents = "all";
        }
    }

    function uncheckOthers(checkbox) {
        for(var i = 0; i < groupArray.length; i++) {
            if(groupArray[i][1] !== checkbox) {
                setCheckboxChecked(false, groupArray[i][1]);
            }
        }
    }

    return groupArray;
}
function divAddToSelectionGroup(...divElements) {
    var groupArray = [];

    for(var i = 0; i < divElements.length; i++) {
        groupArray.push(divElements[i]);

        let x = groupArray[i];
        if(x.dataset.selected == "true") {
            x.style.pointerEvents = "none";
        } else {
            x.style.pointerEvents = "all";
        }
        groupArray[i].addEventListener("click", function(e) {
            x.dataset.selected = "true";
            x.dataset.selected == "true";
            t(x);
        });
    }

    function t(div) {
        uncheckOthers(div);
        if(div.dataset.selected == "true") {
            div.style.pointerEvents = "none";
        } else {
            div.style.pointerEvents = "all";
        }
    }

    function uncheckOthers(div) {
        for(var i = 0; i < groupArray.length; i++) {
            if(groupArray[i] !== div) {
                groupArray[i].style.pointerEvents = "all";
                groupArray[i].style.backgroundColor = groupArray[i].dataset.deselectedBackgroundColor;
                groupArray[i].style.color = groupArray[i].dataset.deselectedColor;
            }
        }
    }

    return groupArray;
}
function tokenAddToSelectionGroup(...tokenElements) {
    var groupArray = [];

    for(var i = 0; i < tokenElements.length; i++) {
        groupArray.push(tokenElements[i]);

        let [x, y] = groupArray[i];
        if(x.dataset.selected == "true") {
            x.style.pointerEvents = "none";
        } else {
            x.style.pointerEvents = "all";
        }
        groupArray[i][0].addEventListener("click", function(e) {
            x.dataset.selected = "true";
            t(x, y);
        });
    }

    function t(div, input) {
        uncheckOthers(div);
        if(div.dataset.selected == "true") {
            div.style.pointerEvents = "none";
            input.value = true;
        } else {
            div.style.pointerEvents = "all";
            input.value = false;
        }
    }

    function uncheckOthers(div) {
        for(var i = 0; i < groupArray.length; i++) {
            if(groupArray[i][0] !== div) {
                groupArray[i][1].value = false;
                groupArray[i][0].style.pointerEvents = "all";
                groupArray[i][0].style.backgroundColor = groupArray[i][0].dataset.deselectedBackgroundColor;
                groupArray[i][0].style.color = groupArray[i][0].dataset.deselectedColor;
            }
        }
    }

    return groupArray;
}
function setFieldDisabled(disabledTF, field, optionalParentContainer) {
    if(field) {
        field.disabled = disabledTF;
        if(disabledTF) {
            if(field.dataset.backgroundColorDisabled) {
                field.style.backgroundColor = field.dataset.backgroundColorDisabled;
            } else {
                field.style.backgroundColor = "none";
            }
        } else {
            if(field.dataset.backgroundColor) {
                field.style.backgroundColor = field.dataset.backgroundColor;
            } else {
                field.style.backgroundColor = "none";
            }
        }
    }
    if(optionalParentContainer) {
        var children = optionalParentContainer.childNodes;
        children.forEach(function(item) {
            item.disabled = disabledTF;
        });
        disabledTF == true ? optionalParentContainer.style.backgroundColor = "rgb(221, 221, 221)" : optionalParentContainer.style.backgroundColor = "white";
    }

    return field || optionalParentContainer;
}
function setFieldHidden(disabledTF, field, optionalParentContainer) {
    if(disabledTF) {
        if(field) {
            $(field).hide();
        }
        if(optionalParentContainer) {
            $(optionalParentContainer).hide();
        }
    } else {
        if(field) {
            $(field).show();
        }
        if(optionalParentContainer) {
            $(optionalParentContainer).show();
        }
    }
    return field || optionalParentContainer;
}
function setCheckboxChecked(checkedTF, field) {
    if(field.checked == checkedTF) return;
    else $(field).click();
}
function clickCheckbox(field) {
    field.click();
}
/**
 * 
 * @param {*} parentControllerType any value within ["Checkbox","Div"]
 * @param {*} masterControllerField the master field that will toggle the children
 * @param  {...any} otherFields the children fields in that group
 */
function makeFieldGroup(parentControllerType, masterControllerField, canOpenAlreadyHidden = true, ...otherFields) {
    switch(parentControllerType) {
        case "Checkbox":
            masterControllerField.addEventListener("change", function(e) {
                let nowState = masterControllerField.checked;
                for(let i = 0; i < otherFields.length; i++) {
                    if(nowState == false) {
                        if(otherFields[i].style.display == "none") {
                            otherFields[i].dataset.wasAlreadyHidden = 'true';
                        } else {
                            otherFields[i].dataset.wasAlreadyHidden = 'false';
                        }
                        setFieldHidden(true, otherFields[i]);
                    } else {
                        if(otherFields[i].dataset.wasAlreadyHidden === 'true' && !canOpenAlreadyHidden) {
                            setFieldHidden(true, otherFields[i]);
                        } else {
                            setFieldHidden(false, otherFields[i]);
                        }
                    }
                }
            });
            break;
        default:
            console.error("No Case Available");
            break;
    }
}

function createWindowDragZones(container, windowGrabZoneWidth = 10, callbackOnResize) {
    let grabbedSide = null;
    let boundingBox = container.getBoundingClientRect();
    let w = boundingBox.width;
    let h = boundingBox.height;

    function updateBoundingBox() {
        boundingBox = container.getBoundingClientRect();
        w = boundingBox.width;
        h = boundingBox.height;
    };

    let leftZone = document.createElement("div");
    let rightZone = document.createElement("div");
    let topZone = document.createElement("div");
    let bottomZone = document.createElement("div");
    let tlCorner = document.createElement("div");
    let trCorner = document.createElement("div");
    let blCorner = document.createElement("div");
    let brCorner = document.createElement("div");

    leftZone.style = "width: " + windowGrabZoneWidth + "px; height: calc(100% - " + (windowGrabZoneWidth) + "px); background-color:none;position:absolute;top:" + (windowGrabZoneWidth / 2) + "px;left:" + (-windowGrabZoneWidth / 2) + "px;cursor:w-resize;";
    rightZone.style = "width: " + windowGrabZoneWidth + "px; height: calc(100% - " + (windowGrabZoneWidth) + "px); background-color:none;position:absolute;top:" + (windowGrabZoneWidth / 2) + "px;right:" + (-windowGrabZoneWidth / 2) + "px;cursor:e-resize;";
    topZone.style = "width: calc(100% - " + (windowGrabZoneWidth) + "px); height: " + windowGrabZoneWidth + "px; background-color:none;position:absolute;top:" + (-windowGrabZoneWidth / 2) + "px;left:" + (windowGrabZoneWidth / 2) + "px;cursor:n-resize;";
    bottomZone.style = "width: calc(100% - " + (windowGrabZoneWidth) + "px); height: " + windowGrabZoneWidth + "px; background-color:none;position:absolute;bottom:" + (-windowGrabZoneWidth / 2) + "px;left:" + (windowGrabZoneWidth / 2) + "px;cursor:s-resize;";
    tlCorner.style = "width: " + windowGrabZoneWidth + "px; height: " + windowGrabZoneWidth + "px; background-color:none;position:absolute;top:" + (-windowGrabZoneWidth / 2) + "px;left:" + (-windowGrabZoneWidth / 2) + "px;cursor:nw-resize;";
    trCorner.style = "width: " + windowGrabZoneWidth + "px; height: " + windowGrabZoneWidth + "px; background-color:none;position:absolute;top:" + (-windowGrabZoneWidth / 2) + "px;right:" + (-windowGrabZoneWidth / 2) + "px;cursor:ne-resize;";
    blCorner.style = "width: " + windowGrabZoneWidth + "px; height: " + windowGrabZoneWidth + "px; background-color:none;position:absolute;bottom:" + (-windowGrabZoneWidth / 2) + "px;left:" + (-windowGrabZoneWidth / 2) + "px;cursor:ne-resize;";
    brCorner.style = "width: " + windowGrabZoneWidth + "px; height: " + windowGrabZoneWidth + "px; background-color:none;position:absolute;bottom:" + (-windowGrabZoneWidth / 2) + "px;right:" + (-windowGrabZoneWidth / 2) + "px;cursor:nw-resize;";

    leftZone.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "left";
    });
    rightZone.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "right";
    });
    topZone.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "top";
    });
    bottomZone.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "bottom";
    });

    tlCorner.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "tl";
    });
    trCorner.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "tr";
    });
    blCorner.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "bl";
    });
    brCorner.addEventListener("mousedown", (e) => {
        e.preventDefault();
        updateBoundingBox();
        grabbedSide = "br";
    });

    window.addEventListener("mouseup", (e) => {
        grabbedSide = null;
    });

    window.addEventListener("mousemove", (e) => {
        let mouseXY = {x: e.clientX, y: e.clientY};
        if(grabbedSide === null) return;

        if(grabbedSide == "left") {
            container.style.width = (w + (boundingBox.x - mouseXY.x) * 2) + "px";
        }
        if(grabbedSide == "right") {
            container.style.width = (w - (boundingBox.x + w - mouseXY.x) * 2) + "px";
        }
        if(grabbedSide == "top") {
            container.style.height = (h + (boundingBox.y - mouseXY.y) * 2) + "px";
        }
        if(grabbedSide == "bottom") {
            container.style.height = (h - (boundingBox.y + h - mouseXY.y) * 2) + "px";
        }

        if(grabbedSide == "tl") {
            container.style.height = (h + (boundingBox.y - mouseXY.y) * 2) + "px";
            container.style.width = (w + (boundingBox.x - mouseXY.x) * 2) + "px";
        }
        if(grabbedSide == "tr") {
            container.style.height = (h + (boundingBox.y - mouseXY.y) * 2) + "px";
            container.style.width = (w - (boundingBox.x + w - mouseXY.x) * 2) + "px";
        }
        if(grabbedSide == "bl") {
            container.style.height = (h - (boundingBox.y + h - mouseXY.y) * 2) + "px";
            container.style.width = (w + (boundingBox.x - mouseXY.x) * 2) + "px";
        }
        if(grabbedSide == "br") {
            container.style.height = (h - (boundingBox.y + h - mouseXY.y) * 2) + "px";
            container.style.width = (w - (boundingBox.x + w - mouseXY.x) * 2) + "px";
        }
        callbackOnResize(e);
    });

    container.appendChild(leftZone);
    container.appendChild(rightZone);
    container.appendChild(topZone);
    container.appendChild(bottomZone);
    container.appendChild(tlCorner);
    container.appendChild(trCorner);
    container.appendChild(blCorner);
    container.appendChild(brCorner);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./UI/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vVUkvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9RVUlDSyBUSVBTOlxyXG4vL0ZvciBjaGVja2JveGVzLCB1c2UgbWV0aG9kIGJlbG93IHRvIGNoZWNrLCBwcm9wIGRvZXNudCB3b3JrXHJcbi8vZmllbGQuZGF0YXNldC5pbml0aWFsQmFja2dyb3VuZENvbG9yXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaXYob3ZlcnJpZGVDc3NTdHlsZXMsIGhlYWRpbmdUZXh0LCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5zdHlsZSA9IFNUWUxFLkRpdjtcclxuICAgIGRpdi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG5cclxuICAgIGlmKGhlYWRpbmdUZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBoZWFkaW5nVGV4dDtcclxuICAgICAgICBoZWFkaW5nLnN0eWxlID0gXCJwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjBweDsgbGVmdDoweDtjb2xvcjpibGFjaztmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO2JhY2tncm91bmQtY29sb3I6XCIgKyBDT0xPVVIuTGlnaHRCbHVlICsgXCI7d2lkdGg6YXV0bztwYWRkaW5nOjRweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MHB4O1wiO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURpdlN0eWxlMihvdmVycmlkZUNzc1N0eWxlcywgaGVhZGluZ1RleHQsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LnN0eWxlID0gU1RZTEUuRGl2MjtcclxuICAgIGRpdi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG5cclxuICAgIGxldCBoZWFkaW5nO1xyXG5cclxuICAgIGlmKGhlYWRpbmdUZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG4gICAgICAgIGhlYWRpbmcuc3R5bGUgPSBcImZsb2F0OiBsZWZ0OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogLTEwcHggMHB4IDBweCAtMTBweDsgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBDT0xPVVIuRGFya0dyZXkgKyBcIjsgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHggLSAzNXB4KTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMHB4OyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiB3aGl0ZTsgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogMzBweDsgYm9yZGVyOiAxcHggc29saWQgXCIgKyBDT0xPVVIuRGFya0dyZXkgKyBcIjtcIjtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgLy8gICAgICAgICAgIE1JTklNSVpFIEJVVFRPTiAgICAgICAgICAgICAvL1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgbGV0IG1pbmltaXplQnRuID0gY3JlYXRlQnV0dG9uKFwiLVwiLCBcImRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgd2lkdGg6IDM1cHg7aGVpZ2h0OjMwcHg7IGJvcmRlcjpub25lO3BhZGRpbmc6MnB4OyBjb2xvcjp3aGl0ZTttaW4taGVpZ2h0OiAyMHB4OyBtYXJnaW46IC0xMHB4IC0xMHB4IDBweCAwcHg7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggNHB4IDhweCAwcHg7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5MaWdodEJsdWUgKyBcIjtcIiwgKCkgPT4ge3RvZ2dsZU1pbmltaXplKCk7fSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWluaW1pemVCdG4pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1pbmltaXplKCkge1xyXG4gICAgICAgIGlmKGRpdi5zdHlsZS5tYXhIZWlnaHQgIT0gXCIxMHB4XCIpIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLm1heEhlaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgbWluaW1pemVCdG4uaW5uZXJUZXh0ID0gXCLilq1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjgwMHB4XCI7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgbWluaW1pemVCdG4uaW5uZXJUZXh0ID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBbZGl2LCBoZWFkaW5nXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaXZTdHlsZTMob3ZlcnJpZGVDc3NTdHlsZXMsIGhlYWRpbmdUZXh0LCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5zdHlsZSA9IFNUWUxFLkRpdjM7XHJcbiAgICBkaXYuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuXHJcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZDb250ZW50LnN0eWxlID0gXCJ3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MzBweDttYXgtaGVpZ2h0OjQwMHB4O292ZXJmbG93LXk6c2Nyb2xsO1wiO1xyXG5cclxuICAgIGxldCBoZWFkaW5nO1xyXG5cclxuICAgIGlmKGhlYWRpbmdUZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG4gICAgICAgIGhlYWRpbmcuc3R5bGUgPSBcImZsb2F0OiBsZWZ0OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogMHB4IDBweCAwcHggMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIENPTE9VUi5EYXJrR3JleSArIFwiOyB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDBweDsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogd2hpdGU7IHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDMwcHg7IGJvcmRlcjogMXB4IHNvbGlkIFwiICsgQ09MT1VSLkRhcmtHcmV5ICsgXCI7XCI7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQE1pbmltaXplQnRuXHJcbiAgICAgKi9cclxuICAgIGxldCBtaW5pbWl6ZUJ0biA9IGNyZWF0ZUJ1dHRvbihcIi1cIiwgXCJkaXNwbGF5OiBibG9jazsgZmxvYXQ6IHJpZ2h0OyB3aWR0aDogMzVweDtoZWlnaHQ6MzBweDsgYm9yZGVyOm5vbmU7cGFkZGluZzoycHg7IGNvbG9yOndoaXRlO21pbi1oZWlnaHQ6IDIwcHg7IG1hcmdpbjogMHB4IDBweCAwcHggMHB4OyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDRweCA4cHggMHB4O2JhY2tncm91bmQtY29sb3I6XCIgKyBDT0xPVVIuTGlnaHRCbHVlICsgXCI7XCIsICgpID0+IHt0b2dnbGVNaW5pbWl6ZSgpO30pO1xyXG4gICAgbWluaW1pemVCdG4uaWQgPSBcIm1pbmltaXplQnRuXCI7XHJcbiAgICBtaW5pbWl6ZUJ0bi5kYXRhc2V0Lm1pbmltaXplZFN0YXRlID0gXCJtYXhpbWl6ZWRcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChtaW5pbWl6ZUJ0bik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAUG9wT3V0QnRuXHJcbiAgICAgKi9cclxuICAgIGxldCBwb3BPdXRCdG4gPSBjcmVhdGVCdXR0b24oXCJcXHUyNzRGXCIsIFwiZGlzcGxheTogYmxvY2s7IGZsb2F0OiByaWdodDsgd2lkdGg6IDM1cHg7aGVpZ2h0OjMwcHg7IGJvcmRlcjpub25lO3BhZGRpbmc6MnB4OyBjb2xvcjp3aGl0ZTttaW4taGVpZ2h0OiAyMHB4OyBtYXJnaW46IDBweDsgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA0cHggOHB4IDBweDtiYWNrZ3JvdW5kLWNvbG9yOlwiICsgQ09MT1VSLkRhcmtCbHVlICsgXCI7XCIsICgpID0+IHtcclxuICAgICAgICBzZXRGaWVsZERpc2FibGVkKHRydWUsIHBvcE91dEJ0bik7XHJcbiAgICAgICAgbmV3IE1vZGFsUG9wT3V0KFwiRXhwYW5kZWQgVmlld1wiLCAoKSA9PiB7c2V0RmllbGREaXNhYmxlZChmYWxzZSwgcG9wT3V0QnRuKTt9LCBkaXYpO1xyXG4gICAgfSwgZGl2KTtcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWluaW1pemUoKSB7XHJcbiAgICAgICAgaWYoZGl2Q29udGVudC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgbWluaW1pemVCdG4uaW5uZXJUZXh0ID0gXCItXCI7XHJcbiAgICAgICAgICAgIG1pbmltaXplQnRuLmRhdGFzZXQubWluaW1pemVkU3RhdGUgPSBcIm1heGltaXplZFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUJ0bi5pbm5lclRleHQgPSBcIuKWrVwiO1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUJ0bi5kYXRhc2V0Lm1pbmltaXplZFN0YXRlID0gXCJtaW5pbWl6ZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBpZihkaXYuc3R5bGUubWF4SGVpZ2h0ICE9IFwiMTBweFwiKSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIG1pbmltaXplQnRuLmlubmVyVGV4dCA9IFwi4patXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUubWF4SGVpZ2h0ID0gXCI4MDBweFwiO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIG1pbmltaXplQnRuLmlubmVyVGV4dCA9IFwiLVwiO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBbZGl2LCBkaXZDb250ZW50LCBoZWFkaW5nXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaXZTdHlsZTQob3ZlcnJpZGVDc3NTdHlsZXMsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LnN0eWxlID0gXCJib3gtc2l6aW5nOiBib3JkZXItYm94O3dpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO1wiICsgU1RZTEUuRHJvcFNoYWRvdyArIFwiO21hcmdpbjoxMHB4O3BhZGRpbmc6NXB4O2JvcmRlcjoxcHggc29saWQgI2NjYztmbG9hdDpsZWZ0O2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1wiO1xyXG4gICAgZGl2LnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcblxyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaXZTdHlsZTUob3ZlcnJpZGVDc3NTdHlsZXMsIGhlYWRpbmdUZXh0LCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICBsZXQgZl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGZfaGVhZGluZ1RleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBmX2hlYWRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsZXQgZl9oZWFkaW5nVGV4dFdyYXBwZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBmX2Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsZXQgZl9jb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBmX2Rpdi5zdHlsZSA9IFNUWUxFLkRpdjUgKyBcIjttaW4taGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5NZWRpdW1HcmV5ICsgXCI7XCI7XHJcbiAgICBmX2Rpdi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG5cclxuICAgIGZfaGVhZGluZ1RleHRXcmFwcGVyLnN0eWxlID0gXCJkaXNwbGF5OnRhYmxlO3dpZHRoOjEwMHB4O3RleHQtYWxpZ246IGNlbnRlcjtmbG9hdDogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlOyBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIENPTE9VUi5EYXJrQmx1ZSArXHJcbiAgICAgICAgXCI7Ym94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMHB4OyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiB3aGl0ZTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW46IDBweDsgYm9yZGVyOiAwcHg7XCI7XHJcblxyXG4gICAgZl9oZWFkaW5nVGV4dC5zdHlsZSA9IFwiZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7d29yZC1icmVhazogYnJlYWstYWxsO1wiO1xyXG4gICAgZl9oZWFkaW5nVGV4dC5pbm5lclRleHQgPSBoZWFkaW5nVGV4dDtcclxuXHJcbiAgICBmX2hlYWRpbmdUZXh0V3JhcHBlcjIuc3R5bGUgPSBcImRpc3BsYXk6dGFibGU7d2lkdGg6MjBweDt0ZXh0LWFsaWduOiBjZW50ZXI7ZmxvYXQ6IGxlZnQ7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBDT0xPVVIuRGFya0JsdWUgK1xyXG4gICAgICAgIFwiO2JveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDBweDsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogd2hpdGU7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwcHg7IGJvcmRlcjogMHB4O1wiO1xyXG5cclxuICAgIGZfYXJyb3cuc3R5bGUgPSBcImRpc3BsYXk6dGFibGUtY2VsbDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO3dvcmQtYnJlYWs6IGJyZWFrLWFsbDtcIjtcclxuICAgIGZfYXJyb3cuaW5uZXJIVE1MID0gXCImIzExMjA4XCI7XHJcblxyXG4gICAgZl9jb250ZW50Q29udGFpbmVyLnN0eWxlID0gXCJ3aWR0aDpjYWxjKDEwMCUgLSAxMjBweCk7aGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDtwb3NpdGlvbjogcmVsYXRpdmU7XCI7XHJcblxyXG4gICAgZl9oZWFkaW5nVGV4dFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoZl9jb250ZW50Q29udGFpbmVyKS50b2dnbGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmX2Fycm93LmlubmVySFRNTCk7XHJcbiAgICAgICAgdG9nZ2xlKGZfYXJyb3cuaW5uZXJIVE1MID09IFwi4q+IXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZl9hcnJvdy5pbm5lckhUTUwgPSBcIiYjMTEyMDdcIjtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZfYXJyb3cuaW5uZXJIVE1MID0gXCImIzExMjA4XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGZfZGl2KTtcclxuICAgIH1cclxuICAgIGZfaGVhZGluZ1RleHRXcmFwcGVyLmFwcGVuZENoaWxkKGZfaGVhZGluZ1RleHQpO1xyXG4gICAgZl9kaXYuYXBwZW5kQ2hpbGQoZl9oZWFkaW5nVGV4dFdyYXBwZXIpO1xyXG4gICAgZl9oZWFkaW5nVGV4dFdyYXBwZXIyLmFwcGVuZENoaWxkKGZfYXJyb3cpO1xyXG4gICAgZl9kaXYuYXBwZW5kQ2hpbGQoZl9oZWFkaW5nVGV4dFdyYXBwZXIyKTtcclxuICAgIGZfZGl2LmFwcGVuZENoaWxkKGZfY29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIFtmX2RpdiwgZl9jb250ZW50Q29udGFpbmVyLCBmX2hlYWRpbmdUZXh0LCBmX2hlYWRpbmdUZXh0V3JhcHBlcl07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIG92ZXJyaWRlQ3NzU3R5bGVzLCBvcHRpb25hbENhbGxiYWNrLCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgYnRuLnN0eWxlID0gU1RZTEUuQnV0dG9uO1xyXG4gICAgYnRuLnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBidG4uZGF0YXNldC5iYWNrZ3JvdW5kQ29sb3IgPSBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYnRuLnN0eWxlLmJvcmRlckNvbG9yID0gYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGJ0bi5kYXRhc2V0LmJhY2tncm91bmRDb2xvckRpc2FibGVkID0gQ09MT1VSLldoaXRlO1xyXG4gICAgYnRuLmRhdGFzZXQuaW5pdGlhbFRleHRDb2xvciA9IGJ0bi5zdHlsZS5jb2xvcjtcclxuICAgIGJ0bi5ibHVyKCk7XHJcbiAgICB2YXIgaW5pdGlhbEJhY2tncm91bmRDb2xvciA9IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB2YXIgaW5pdGlhbFRleHRDb2xvciA9IGJ0bi5zdHlsZS5jb2xvcjtcclxuICAgICQoYnRuKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgaW5pdGlhbFRleHRDb2xvcik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBpbml0aWFsQmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICBidG4uc3R5bGUuYm94U2hhZG93ID0gXCIzcHggNHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC44KVwiO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGluaXRpYWxCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiY29sb3JcIiwgaW5pdGlhbFRleHRDb2xvcik7XHJcbiAgICAgICAgYnRuLnN0eWxlLmJveFNoYWRvdyA9IFwiM3B4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMylcIjtcclxuICAgIH0pO1xyXG4gICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gb3B0aW9uYWxDYWxsYmFjaztcclxuICAgIH1cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBidG47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSWNvbkJ1dHRvbihzcmMsIHRleHQsIG92ZXJyaWRlQ3NzU3R5bGVzLCBvcHRpb25hbENhbGxiYWNrLCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLCBpbnZlcnRPZmYpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCBoZWlnaHQ7XHJcblxyXG4gICAgYnRuLnN0eWxlID0gU1RZTEUuQnV0dG9uICsgXCI7bGluZS1oZWlnaHQ6MzBweFwiO1xyXG4gICAgYnRuLnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBoZWlnaHQgPSBidG4uc3R5bGUuaGVpZ2h0ID8gXCJcIiArIGJ0bi5zdHlsZS5oZWlnaHQgOiBcIjMwcHhcIjtcclxuICAgIGNvbnNvbGUubG9nKGhlaWdodCk7XHJcbiAgICBidG4uZGF0YXNldC5iYWNrZ3JvdW5kQ29sb3IgPSBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYnRuLnN0eWxlLmJvcmRlckNvbG9yID0gYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGJ0bi5kYXRhc2V0LmJhY2tncm91bmRDb2xvckRpc2FibGVkID0gQ09MT1VSLldoaXRlO1xyXG4gICAgYnRuLmJsdXIoKTtcclxuICAgIHZhciBpbml0aWFsQmFja2dyb3VuZENvbG9yID0gYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgICQoYnRuKS5ob3ZlcigoKSA9PiB7XHJcbiAgICAgICAgJChidG4pLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICAgICAkKGJ0bikuY3NzKFwiY29sb3JcIiwgaW5pdGlhbEJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgJCh0ZXh0RmllbGQpLmNzcyhcImNvbG9yXCIsIGluaXRpYWxCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIGlmKCFpbnZlcnRPZmYpIGljb24uc3R5bGUuZmlsdGVyID0gXCJpbnZlcnQoMiUpXCI7XHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgJChidG4pLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgaW5pdGlhbEJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgJChidG4pLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgJCh0ZXh0RmllbGQpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgaWYoIWludmVydE9mZikgaWNvbi5zdHlsZS5maWx0ZXIgPSBcImludmVydCgxMDAlKVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWNvbi5zdHlsZSA9IFwiaGVpZ2h0OjEwMCU7cGFkZGluZzowcHg7ZmlsdGVyOmludmVydCgxMDAlKTtmbG9hdDpsZWZ0O1wiO1xyXG4gICAgaWYoaW52ZXJ0T2ZmKSBpY29uLnN0eWxlLmZpbHRlciA9IFwiaW52ZXJ0KDAlKVwiO1xyXG4gICAgaWNvbi5zcmMgPSBzcmM7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XHJcblxyXG4gICAgdGV4dEZpZWxkLnN0eWxlID0gXCJjb2xvcjp3aGl0ZTtmb250LXNpemU6MTNweDttYXJnaW46MHB4O21hcmdpbi10b3A6LTRweDt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6XCIgKyBoZWlnaHQ7XHJcbiAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpO1xyXG5cclxuICAgIGlmKG9wdGlvbmFsQ2FsbGJhY2spIHtcclxuICAgICAgICBidG4ub25jbGljayA9IG9wdGlvbmFsQ2FsbGJhY2s7XHJcbiAgICB9XHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgLy9wYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKHRleHRFKTtcclxuICAgIH1cclxuICAgIHJldHVybiBidG47XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodGV4dCwgZGVmYXVsdFZhbHVlLCBvdmVycmlkZUNzc1N0eWxlcywgb3B0aW9uYWxDYWxsYmFjaywgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gdGV4dDtcclxuICAgIGlucHV0LmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG4gICAgaW5wdXQuc3R5bGUgPSBTVFlMRS5JbnB1dEZpZWxkO1xyXG4gICAgaWYoZGVmYXVsdFZhbHVlICE9IG51bGwpIGlucHV0LnZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIGlucHV0LnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBpZihvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICAgICAgaW5wdXQub25rZXl1cCA9IG9wdGlvbmFsQ2FsbGJhY2s7XHJcbiAgICB9XHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnB1dDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbnB1dF9JbmZpZWxkKHRleHQsIGRlZmF1bHRWYWx1ZSwgb3ZlcnJpZGVDc3NTdHlsZXMsIG9wdGlvbmFsQ2FsbGJhY2ssIHBhcmVudE9iamVjdFRvQXBwZW5kVG8sIGZpZWxkUmVxdWlyZWQsIGluY3JlbWVudHMsIG9wdGlvbnMgPSB7XHJcbiAgICBwcmVmaXg6IFwiXCIsXHJcbiAgICBwb3N0Zml4OiBcIlwiXHJcbn0pIHtcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB2YXIgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXIgdGV4dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dERlc2NyaXB0aW9uLnN0eWxlID0gXCJ3aWR0aDpjYWxjKDEwMCUgLSAxNXB4KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjE4cHg7bWFyZ2luOiAwcHg7cGFkZGluZzoycHg7Y29sb3I6IzY2Njtmb250LXNpemU6MTFweDtcIjtcclxuICAgIHRleHREZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgICBpbnB1dC5hdXRvY29tcGxldGUgPSBcIm9uZS10aW1lLWNvZGVcIjtcclxuICAgIGlucHV0LnN0eWxlID0gXCJmbG9hdDpsZWZ0O2ZpZWxkLXNpemluZzpjb250ZW50O21pbi13aWR0aDoxMHB4O21heC13aWR0aDpjYWxjKDEwMCUgLSA0cHgpO2hlaWdodDoxOHB4O21hcmdpbjogMHB4O3BhZGRpbmc6MnB4O2JvcmRlcjowcHggc29saWQ7Ym94LXNpemluZzpjb250ZW50LWJveDtvdXRsaW5lOiBub25lO2JhY2tncm91bmQ6bm9uZTt0ZXh0LWFsaWduOmxlZnQ7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjE0cHg7XCI7XHJcbiAgICBjb250YWluZXJEaXYuc3R5bGUgPSBTVFlMRS5JbnB1dEluZmllbGQ7XHJcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBpZihkZWZhdWx0VmFsdWUgIT0gbnVsbCkgaW5wdXQudmFsdWUgPSBkZWZhdWx0VmFsdWU7IGVsc2UgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGlmKG92ZXJyaWRlQ3NzU3R5bGVzKSBjb250YWluZXJEaXYuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuICAgIGlmKGZpZWxkUmVxdWlyZWQgJiYgaW5wdXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICB9XHJcbiAgICBpZihpbmNyZW1lbnRzICE9IG51bGwpIHtcclxuICAgICAgICAvKnZhciBhY2N1cmFjeURpZ2l0cyA9IDEyO1xyXG4gICAgICAgIGlmKGluY3JlbWVudHM8TWF0aC5wb3coMC4xLGFjY3VyYWN5RGlnaXRzKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQWNjdXJhY3kgb2YgY3JlYXRlSW5wdXRfSW5maWVsZCBmdW5jdGlvbiBub3QgZGVzaXJhYmxlIGF0IHRoaXMgaW5jcmVtZW50XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmNyZW1lbnRzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coTWF0aC5wb3coMC4xLGFjY3VyYWN5RGlnaXRzKSk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgdmFyIHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB1cEFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XHJcbiAgICAgICAgdXBBcnJvdy5zdHlsZSA9IFwid2lkdGg6MTVweDtoZWlnaHQ6MjBweDtmbG9hdDpyaWdodDtiYWNrZ3JvdW5kLWNvbG9yOlwiICsgQ09MT1VSLkRhcmtHcmV5ICsgXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtjb2xvcjp3aGl0ZTsgYm9yZGVyOjBweCBzb2xpZCBcIiArIENPTE9VUi5EYXJrR3JleSArIFwiO2N1cnNvcjogcG9pbnRlcjtwYWRkaW5nOjBweDtcIjtcclxuICAgICAgICB1cEFycm93LnRhYkluZGV4ID0gXCItMVwiO1xyXG4gICAgICAgICQodXBBcnJvdykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImNvbG9yXCIsIENPTE9VUi5EYXJrR3JleSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBDT0xPVVIuRGFya0dyZXkpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBBcnJvdy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsID0gKGlucHV0LnZhbHVlID09ICcnID8gMCA6IHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSByb3VuZE51bWJlcihjdXJyZW50VmFsICsgaW5jcmVtZW50cywgMTIpO1xyXG4gICAgICAgICAgICAkKGlucHV0KS5rZXl1cCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkb3duQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkb3duQXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcclxuICAgICAgICBkb3duQXJyb3cuc3R5bGUgPSBcIndpZHRoOjE1cHg7aGVpZ2h0OjIwcHg7ZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5EYXJrR3JleSArIFwiO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowcHg7cmlnaHQ6MDtjb2xvcjp3aGl0ZTsgYm9yZGVyOjBweCBzb2xpZCBcIiArIENPTE9VUi5EYXJrR3JleSArIFwiO2N1cnNvcjogcG9pbnRlcjtwYWRkaW5nOjBweDt0YWJpbmRleDotMTtcIjtcclxuICAgICAgICBkb3duQXJyb3cudGFiSW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgJChkb3duQXJyb3cpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBDT0xPVVIuRGFya0dyZXkpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgQ09MT1VSLkRhcmtHcmV5KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvd25BcnJvdy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsID0gKGlucHV0LnZhbHVlID09ICcnID8gMCA6IHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSByb3VuZE51bWJlcihjdXJyZW50VmFsIC0gaW5jcmVtZW50cywgMTIpO1xyXG4gICAgICAgICAgICAkKGlucHV0KS5rZXl1cCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh1cEFycm93KTtcclxuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcclxuICAgIH1cclxuICAgIGlucHV0Lm9ua2V5dXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbmFsQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5wdXQudmFsdWUgIT0gXCJcIiB8fCAhZmllbGRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBjb250YWluZXJEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJnYigxNzcsIDE3NywgMTc3KVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvcHRpb25hbENhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlICE9IFwiXCIgfHwgIWZpZWxkUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2IoMTc3LCAxNzcsIDE3NylcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXJEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQgPT0gY29udGFpbmVyRGl2KSB7XHJcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGV4dERlc2NyaXB0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYob3B0aW9ucy5wcmVmaXgpIHtcclxuICAgICAgICBsZXQgcHJlZml4RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwcmVmaXhGaWVsZC5zdHlsZSA9IFwiZmxvYXQ6bGVmdDsgZmllbGQtc2l6aW5nOiBjb250ZW50O2NvbG9yOiM1NTU7aGVpZ2h0OjE4cHg7bWFyZ2luOiAwcHg7cGFkZGluZzoycHg7Ym9yZGVyOjBweCBzb2xpZDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O291dGxpbmU6IG5vbmU7YmFja2dyb3VuZDpub25lO3RleHQtYWxpZ246bGVmdDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LWZhbWlseTpBcmlhbDtmb250LXNpemU6IDE0cHg7bGluZS1oZWlnaHQ6IDE4cHg7XCI7XHJcbiAgICAgICAgcHJlZml4RmllbGQuaW5uZXJUZXh0ID0gb3B0aW9ucy5wcmVmaXg7XHJcbiAgICAgICAgcHJlZml4RmllbGQub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wdXQuc3R5bGUuY3NzVGV4dCArPSBcIlwiO1xyXG4gICAgICAgIGluc2VydEJlZm9yZShwcmVmaXhGaWVsZCwgaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgaWYob3B0aW9ucy5wb3N0Zml4KSB7XHJcbiAgICAgICAgbGV0IHBvc3RmaXhGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBvc3RmaXhGaWVsZC5zdHlsZSA9IFwiZmxvYXQ6bGVmdDsgZmllbGQtc2l6aW5nOiBjb250ZW50O2NvbG9yOiM1NTU7aGVpZ2h0OjE4cHg7bWFyZ2luOiAwcHg7cGFkZGluZzoycHg7Ym9yZGVyOjBweCBzb2xpZDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O291dGxpbmU6IG5vbmU7YmFja2dyb3VuZDpub25lO3RleHQtYWxpZ246bGVmdDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LWZhbWlseTpBcmlhbDtmb250LXNpemU6IDE0cHg7bGluZS1oZWlnaHQ6IDE4cHg7XCI7XHJcbiAgICAgICAgcG9zdGZpeEZpZWxkLmlubmVyVGV4dCA9IG9wdGlvbnMucG9zdGZpeDtcclxuICAgICAgICBwb3N0Zml4RmllbGQub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wdXQuc3R5bGUuY3NzVGV4dCArPSBcIlwiO1xyXG4gICAgICAgIGluc2VydEFmdGVyKHBvc3RmaXhGaWVsZCwgaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbY29udGFpbmVyRGl2LCBpbnB1dCwgdGV4dERlc2NyaXB0aW9uXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbnB1dENhbGN1bGF0ZWRfSW5maWVsZCh0ZXh0LCBkZWZhdWx0VmFsdWUsIG92ZXJyaWRlQ3NzU3R5bGVzLCBvcHRpb25hbENhbGxiYWNrLCBsb2NrZWQsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB2YXIgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXIgdGV4dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdmFyIGNhbGN1bGF0ZWRfVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNhbGN1bGF0ZWRfVGV4dC5zdHlsZSA9IFwid2lkdGg6MzAlO2hlaWdodDoyMHB4O21hcmdpbjogMHB4O3BhZGRpbmc6NHB4O3BhZGRpbmctdG9wOjhweDtjb2xvcjojNjY2O2ZvbnQtc2l6ZToxMnB4O2Zsb2F0OmxlZnRcIjtcclxuICAgIGNhbGN1bGF0ZWRfVGV4dC5pbm5lclRleHQgPSBcIkNhbGN1bGF0ZWRcIjtcclxuICAgIHZhciBjYWxjdWxhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNhbGN1bGF0ZWQuc3R5bGUgPSBcImZsb2F0OmxlZnQ7d2lkdGg6NDUlO2hlaWdodDoyMHB4O21hcmdpbjogMHB4O3BhZGRpbmc6NHB4O2JvcmRlcjowcHggc29saWQ7Ym94LXNpemluZzpjb250ZW50LWJveDtvdXRsaW5lOiBub25lO2JhY2tncm91bmQ6bm9uZTt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6IzY2NjtcIjtcclxuICAgIGNhbGN1bGF0ZWQuYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgICBjYWxjdWxhdGVkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHRleHREZXNjcmlwdGlvbi5zdHlsZSA9IFwid2lkdGg6OTclO2hlaWdodDoxMHB4O21hcmdpbjogMHB4O3BhZGRpbmc6NHB4O2NvbG9yOiM2NjY7Zm9udC1zaXplOjEycHg7ZmxvYXQ6bGVmdFwiO1xyXG4gICAgdGV4dERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBpbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJztcclxuICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGlucHV0LnN0eWxlID0gXCJmbG9hdDpsZWZ0O3dpZHRoOjk3JTtoZWlnaHQ6MjBweDttYXJnaW46IDBweDtwYWRkaW5nOjRweDtib3JkZXI6MHB4IHNvbGlkO2JveC1zaXppbmc6Y29udGVudC1ib3g7b3V0bGluZTogbm9uZTtiYWNrZ3JvdW5kOm5vbmU7dGV4dC1hbGlnbjpsZWZ0O1wiO1xyXG4gICAgY29udGFpbmVyRGl2LnN0eWxlID0gU1RZTEUuSW5wdXRJbmZpZWxkO1xyXG4gICAgdmFyIGxvY2tCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJcIiwgXCJib3JkZXItY29sb3I6d2hpdGU7bWFyZ2luOjBweDttYXgtaGVpZ2h0OjMwcHg7bWluLWhlaWdodDozMHB4O3dpZHRoOjMwcHg7b2JqZWN0LWZpdDogY29udGFpbjtmbG9hdDpsZWZ0O2JhY2tncm91bmQ6dXJsKCdcIiArIElDT04ubG9jayArIFwiJyk7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcIiwgdG9nZ2xlTG9ja2VkKTtcclxuICAgIGxvY2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICQobG9ja0J1dHRvbikuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBDT0xPVVIuQmx1ZSk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImNvbG9yXCIsIENPTE9VUi5CbHVlKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHRvZ2dsZUlzTG9ja2VkID0gdHJ1ZTtcclxuXHJcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY2FsY3VsYXRlZF9UZXh0KTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjYWxjdWxhdGVkKTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsb2NrQnV0dG9uKTtcclxuXHJcblxyXG4gICAgaWYoZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBjYWxjdWxhdGVkLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIGNvbnRhaW5lckRpdi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgIGlucHV0Lm9ua2V5dXAgPSBvcHRpb25hbENhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUxvY2tlZCgpIHtcclxuICAgICAgICAvL2lmIGlzIGxvY2tlZCBpY29uLCB0aGVuIHVubG9ja1xyXG4gICAgICAgIGlmKGxvY2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID09ICd1cmwoXCInICsgSUNPTi5sb2NrICsgJ1wiKScpIHtcclxuICAgICAgICAgICAgbG9ja0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArIElDT04udW5sb2NrICsgJ1wiKSc7XHJcbiAgICAgICAgICAgIC8vdW5sb2NrZWRcclxuICAgICAgICAgICAgdG9nZ2xlSXNMb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5wdXQuc3R5bGUub3V0bGluZSA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9ja0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArIElDT04ubG9jayArICdcIiknO1xyXG4gICAgICAgICAgICAvL2xvY2tlZFxyXG4gICAgICAgICAgICB0b2dnbGVJc0xvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjYWxjdWxhdGVkLnZhbHVlO1xyXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vdG8gY2FsbCB1c2UgICAgICAgICAkKHRlc3RbMl0pLnZhbCg2MDApLmNoYW5nZSgpO1xyXG4gICAgJChjYWxjdWxhdGVkKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZih0b2dnbGVJc0xvY2tlZCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNhbGN1bGF0ZWQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFtjb250YWluZXJEaXYsIGlucHV0LCBjYWxjdWxhdGVkXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0YXJlYSh0ZXh0LCBkZWZhdWx0VmFsdWUsIG92ZXJyaWRlQ3NzU3R5bGVzLCBvcHRpb25hbENhbGxiYWNrLCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSB0ZXh0O1xyXG4gICAgaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgICBpbnB1dC5zdHlsZSA9IFNUWUxFLklucHV0RmllbGQ7XHJcbiAgICBpZihkZWZhdWx0VmFsdWUgIT0gbnVsbCkgaW5wdXQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICBpZihvdmVycmlkZUNzc1N0eWxlcykgaW5wdXQuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuICAgIGlmKG9wdGlvbmFsQ2FsbGJhY2spIHtcclxuICAgICAgICBpbnB1dC5vbmtleXVwID0gb3B0aW9uYWxDYWxsYmFjaztcclxuICAgIH1cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKHRleHQsIHNlbGVjdGVkSW5kZXgsIG92ZXJyaWRlQ3NzU3R5bGVzLCBvcHRpb25zLCBvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGRyb3Bkb3duLnBsYWNlaG9sZGVyID0gdGV4dDtcclxuICAgIGRyb3Bkb3duLnN0eWxlID0gU1RZTEUuRHJvcERvd25GaWVsZDtcclxuICAgIGRyb3Bkb3duLnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBpZihvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZHJvcGRvd24uYWRkKGl0ZW0sIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKHNlbGVjdGVkSW5kZXggIT0gbnVsbCkgZHJvcGRvd24uc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XHJcbiAgICBpZihvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICAgICAgZHJvcGRvd24ub25jaGFuZ2UgPSBvcHRpb25hbENhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRyb3Bkb3duO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duX0luZmllbGQodGV4dCwgc2VsZWN0ZWRJbmRleCwgb3ZlcnJpZGVDc3NTdHlsZXMsIG9wdGlvbnMsIG9wdGlvbmFsQ2FsbGJhY2ssIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIHZhciBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgaWYob3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgZHJvcGRvd24uYWRkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHZhciB0ZXh0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0RGVzY3JpcHRpb24uc3R5bGUgPSBcIndpZHRoOjk3JTtoZWlnaHQ6MTBweDttYXJnaW46IDBweDtwYWRkaW5nOjRweDtjb2xvcjojNjY2O2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQ6bm9uZTtcIjtcclxuICAgIHRleHREZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGV4dERlc2NyaXB0aW9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgZHJvcGRvd24uc3R5bGUgPSBcImZsb2F0OmxlZnQ7d2lkdGg6OTclO2hlaWdodDoyMHB4O21hcmdpbjogMHB4O3BhZGRpbmc6NHB4O3BhZGRpbmctdG9wOjIwcHg7Ym9yZGVyOjBweCBzb2xpZDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O291dGxpbmU6IG5vbmU7YmFja2dyb3VuZDpub25lO3RleHQtYWxpZ246bGVmdDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7XCI7XHJcbiAgICBkcm9wZG93bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIGNvbnRhaW5lckRpdi5zdHlsZSA9IFNUWUxFLkRyb3BEb3duSW5maWVsZDtcclxuICAgIGNvbnRhaW5lckRpdi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0ZXh0RGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuICAgIGlmKHNlbGVjdGVkSW5kZXggIT0gbnVsbCkgZHJvcGRvd24uc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XHJcbiAgICBpZihvdmVycmlkZUNzc1N0eWxlcykgY29udGFpbmVyRGl2LnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBpZihvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICAgICAgZHJvcGRvd24ub25jaGFuZ2UgPSBvcHRpb25hbENhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtjb250YWluZXJEaXYsIGRyb3Bkb3duXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bl9JbmZpZWxkX0ljb25zKHRleHQsIHNlbGVjdGVkSW5kZXgsIG92ZXJyaWRlQ3NzU3R5bGVzLCB3aWR0aE9mSWNvbiwgaWNvbklzQ29sb3VyLCBvcHRpb25zLCBvcHRpb25hbENhbGxiYWNrLCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICB2YXIgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJEaXYuc3R5bGUgPSBTVFlMRS5Ecm9wRG93bkluZmllbGQ7XHJcbiAgICBjb250YWluZXJEaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgdmFyIGR1bW15SW5wdXQgPSBjcmVhdGVJbnB1dChcIlwiLCBcIlwiLCBcImRpc3BsYXk6bm9uZTtcIiwgbnVsbCwgY29udGFpbmVyRGl2KTtcclxuXHJcbiAgICB2YXIgdGV4dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dERlc2NyaXB0aW9uLnN0eWxlID0gXCJ3aWR0aDo5NyU7aGVpZ2h0OjEwcHg7bWFyZ2luOiAwcHg7cGFkZGluZzo0cHg7Y29sb3I6IzY2Njtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kOm5vbmU7XCI7XHJcbiAgICB0ZXh0RGVzY3JpcHRpb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0ZXh0RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHRleHREZXNjcmlwdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChkcm9wZG93bkJvZHkpLnRvZ2dsZSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0ZXh0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHZhciBkcm9wZG93blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRyb3Bkb3duVGV4dC5zdHlsZSA9IFwid2lkdGg6OTclO2hlaWdodDoxMHB4O21hcmdpbjogMHB4O3BhZGRpbmc6NHB4O2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToxNHB4O2JhY2tncm91bmQ6bm9uZTtvdmVyZmxvdzogaGlkZGVuO3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO3doaXRlLXNwYWNlOiBub3dyYXA7XCI7XHJcbiAgICBkcm9wZG93blRleHQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICBkcm9wZG93blRleHQuaW5uZXJUZXh0ID0gXCJ0ZXN0MTIzXCI7XHJcbiAgICBkcm9wZG93blRleHQub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoZHJvcGRvd25Cb2R5KS50b2dnbGUoKTtcclxuICAgIH07XHJcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZHJvcGRvd25UZXh0KTtcclxuXHJcblxyXG4gICAgdmFyIGRyb3Bkb3duQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRyb3Bkb3duQXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcclxuICAgIGRyb3Bkb3duQXJyb3cuc3R5bGUgPSBcIndpZHRoOjE1cHg7aGVpZ2h0OjEwMCU7ZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5CbHVlICsgXCI7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjBweDtyaWdodDowO2NvbG9yOndoaXRlOyBib3JkZXI6MHB4IHNvbGlkIFwiICsgQ09MT1VSLkJsdWUgKyBcIjtjdXJzb3I6IHBvaW50ZXI7cGFkZGluZzowcHhcIjtcclxuICAgICQoZHJvcGRvd25BcnJvdykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBDT0xPVVIuQmx1ZSk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgQ09MT1VSLkJsdWUpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZHJvcGRvd25BcnJvdy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChkcm9wZG93bkJvZHkpLnRvZ2dsZSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkcm9wZG93bkFycm93KTtcclxuXHJcbiAgICB2YXIgZHJvcGRvd25Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcm9wZG93bkJvZHkuc3R5bGUgPSBcIndpZHRoOjEwMCU7aGVpZ2h0OjMwMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo0NXB4O2xlZnQ6MHB4O2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTt6LWluZGV4OjEwMDtkaXNwbGF5Om5vbmU7IGJvcmRlcjoxcHggc29saWQgYmxhY2s7Ym94LXNoYWRvdzogMXB4IDFweCA2cHggMXB4ICNhYWE7b3ZlcmZsb3cteTpzY3JvbGxcIjtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkcm9wZG93bkJvZHkpO1xyXG5cclxuICAgIGlmKG92ZXJyaWRlQ3NzU3R5bGVzKSBjb250YWluZXJEaXYuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuXHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBvID0gMDsgbyA8IG9wdGlvbnMubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICB2YXIgbnVsbEZ1bmMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBvcHRpb25EaXYuc3R5bGUgPSBcIndpZHRoOjEwMCU7aGVpZ2h0OlwiICsgY3JlYXRlRHJvcGRvd25fSW5maWVsZF9JY29ucyArIDIwICsgXCJweDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnRcIjtcclxuICAgICAgICAgICAgJChvcHRpb25EaXYpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2RkZFwiKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQob3B0aW9uRGl2KS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duVGV4dC5pbm5lclRleHQgPSBvcHRpb25EaXYucXVlcnlTZWxlY3RvcihcIiNvcHRpb25UZXh0XCIpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgIGR1bW15SW5wdXQudmFsdWUgPSBkcm9wZG93blRleHQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgJChkcm9wZG93bkJvZHkpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoISQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KGNvbnRhaW5lckRpdikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Cb2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9uSWNvbjtcclxuICAgICAgICAgICAgaWYoaWNvbklzQ29sb3VyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25JY29uLnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zW29dWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uSWNvbi5zcmMgPSBvcHRpb25zW29dWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbkljb24uc3R5bGUuY3NzVGV4dCArPSBcImRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgd2lkdGg6IFwiICsgd2lkdGhPZkljb24gKyBcInB4OyBoZWlnaHQ6IFwiICsgd2lkdGhPZkljb24gKyBcInB4OyBtYXJnaW46IDEwcHggMTBweDsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcIjtcclxuICAgICAgICAgICAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbkljb24pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG9wdGlvblRleHQuaW5uZXJUZXh0ID0gb3B0aW9uc1tvXVswXTtcclxuICAgICAgICAgICAgb3B0aW9uVGV4dC5zdHlsZSA9IFwiZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O3dpZHRoOmNhbGMoMTAwJS0yMHB4KTtoZWlnaHQ6XCIgKyB3aWR0aE9mSWNvbiArIFwicHg7Y29sb3I6YmxhY2s7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowcHg7ZGlzcGxheTogdGFibGUtY2VsbDtsaW5lLWhlaWdodDogXCIgKyB3aWR0aE9mSWNvbiArIFwicHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTsgXCI7XHJcbiAgICAgICAgICAgIG9wdGlvblRleHQuaWQgPSBcIm9wdGlvblRleHRcIjtcclxuICAgICAgICAgICAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Cb2R5LmFwcGVuZENoaWxkKG9wdGlvbkRpdik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBudWxsRnVuYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNlbGVjdGVkSW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICBkcm9wZG93blRleHQuaW5uZXJUZXh0ID0gY29udGFpbmVyRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjb3B0aW9uVGV4dFwiKVtzZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XHJcbiAgICAgICAgZHVtbXlJbnB1dC52YWx1ZSA9IGRyb3Bkb3duVGV4dC5pbm5lclRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtjb250YWluZXJEaXYsIGR1bW15SW5wdXQsIGRyb3Bkb3duQm9keV07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd25fSW5maWVsZF9JY29uc19TZWFyY2godGV4dCwgc2VsZWN0ZWRJbmRleCwgb3ZlcnJpZGVDc3NTdHlsZXMsIHdpZHRoT2ZJY29uLCBpY29uSXNDb2xvdXIsIG9wdGlvbnMsIG9wdGlvbmFsQ2FsbGJhY2ssIHBhcmVudE9iamVjdFRvQXBwZW5kVG8sIGNhbkFkZEN1c3RvbSA9IGZhbHNlKSB7XHJcbiAgICB2YXIgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJEaXYuc3R5bGUgPSBTVFlMRS5Ecm9wRG93bkluZmllbGQ7XHJcbiAgICBjb250YWluZXJEaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgdmFyIGR1bW15SW5wdXQgPSBjcmVhdGVJbnB1dChcInRlc3RcIiwgXCJcIiwgXCI7ZGlzcGxheTpub25lO1wiLCBudWxsLCBudWxsKTtcclxuICAgIGR1bW15SW5wdXQuaWQgPSBcInRlc3RcIjtcclxuXHJcbiAgICB2YXIgdGV4dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dERlc2NyaXB0aW9uLnN0eWxlID0gXCJ3aWR0aDo5NyU7aGVpZ2h0OjEwcHg7bWFyZ2luOiAwcHg7cGFkZGluZzo0cHg7Y29sb3I6IzY2Njtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kOm5vbmU7XCI7XHJcbiAgICB0ZXh0RGVzY3JpcHRpb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICB0ZXh0RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHRleHREZXNjcmlwdGlvbi5vbmNsaWNrID0gdG9nZ2xlTWVudTtcclxuXHJcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICB2YXIgZHJvcGRvd25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcm9wZG93blRleHQuc3R5bGUgPSBcIndpZHRoOjk3JTtoZWlnaHQ6MTVweDttYXJnaW46IDBweDtwYWRkaW5nOjRweDtjb2xvcjpibGFjaztmb250LXNpemU6MTRweDtiYWNrZ3JvdW5kOm5vbmU7b3ZlcmZsb3c6IGhpZGRlbjt0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczt3aGl0ZS1zcGFjZTogbm93cmFwO1wiO1xyXG4gICAgZHJvcGRvd25UZXh0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgZHJvcGRvd25UZXh0LmlubmVyVGV4dCA9IFwidGVzdDEyM1wiO1xyXG4gICAgZHJvcGRvd25UZXh0Lm9uY2xpY2sgPSB0b2dnbGVNZW51O1xyXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duVGV4dCk7XHJcblxyXG5cclxuICAgIHZhciBkcm9wZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkcm9wZG93bkFycm93LmlubmVySFRNTCA9IFwiJiM5NjYwXCI7XHJcbiAgICBkcm9wZG93bkFycm93LnN0eWxlID0gXCJ3aWR0aDoxNXB4O2hlaWdodDoxMDAlO2Zsb2F0OnJpZ2h0O2JhY2tncm91bmQtY29sb3I6XCIgKyBDT0xPVVIuRGFya0dyZXkgKyBcIjtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MHB4O3JpZ2h0OjA7Y29sb3I6d2hpdGU7IGJvcmRlcjowcHggc29saWQgXCIgKyBDT0xPVVIuRGFya0dyZXkgKyBcIjtjdXJzb3I6IHBvaW50ZXI7cGFkZGluZzowcHhcIjtcclxuICAgICQoZHJvcGRvd25BcnJvdykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBDT0xPVVIuRGFya0dyZXkpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIENPTE9VUi5EYXJrR3JleSk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBkcm9wZG93bkFycm93Lm9uY2xpY2sgPSB0b2dnbGVNZW51O1xyXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duQXJyb3cpO1xyXG5cclxuICAgIHZhciBzZWFyY2hCYXIgPSBjcmVhdGVJbnB1dChcIlwiLCBudWxsLCBcIndpZHRoOlwiICsgNjAwICsgXCJweDtoZWlnaHQ6MzBweDtwb3NpdGlvbjpmaXhlZDt0b3A6NDBweDtsZWZ0OjBweDtkaXNwbGF5Om5vbmU7bWFyZ2luOjA7cGFkZGluZzo1cHg7Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtib3JkZXI6MHB4O291dGxpbmU6bm9uZTtcIiwgbmFycm93U2VhcmNoZXMsIGNvbnRhaW5lckRpdik7XHJcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBvciBUeXBlIEN1c3RvbS4uLlwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5hcnJvd1NlYXJjaGVzKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VhcmNoVGVybSA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBhdExlYXN0T25lU2VhcmNoVGVybWZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tpXVswXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlc1NlYXJjaFRlcm0gPSBvcHRpb25WYWx1ZS5pbmNsdWRlcyhjdXJyZW50U2VhcmNoVGVybSk7XHJcbiAgICAgICAgICAgIGlmKG1hdGNoZXNTZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgICAgICAgICBhdExlYXN0T25lU2VhcmNoVGVybWZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGludGVybmFsT3B0aW9uRGl2c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxPcHRpb25EaXZzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhdExlYXN0T25lU2VhcmNoVGVybWZvdW5kID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNob3dBZGRDdXN0b20oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlQ3VzdG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGN1c3RvbURyb3Bkb3duT3B0aW9uO1xyXG4gICAgZnVuY3Rpb24gc2hvd0FkZEN1c3RvbSgpIHtcclxuICAgICAgICBpZihjYW5BZGRDdXN0b20pIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBvcHRpb25zLmxlbmd0aCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxPcHRpb25EaXZzW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJEaXYucXVlcnlTZWxlY3RvckFsbChcIiNvcHRpb25UZXh0XCIpW2ldLmlubmVyVGV4dCA9IHNlYXJjaEJhci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVDdXN0b20oKSB7XHJcbiAgICAgICAgaWYoY2FuQWRkQ3VzdG9tKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9wdGlvbnMubGVuZ3RoOyBpIDwgb3B0aW9ucy5sZW5ndGggKyAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGludGVybmFsT3B0aW9uRGl2c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRTZWFyY2hlcygpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpbnRlcm5hbE9wdGlvbkRpdnNbaV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzU2Nyb2xsSW5zaWRlID0gZmFsc2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmKCFpc1Njcm9sbEluc2lkZSkge1xyXG4gICAgICAgICAgICAkKGRyb3Bkb3duQm9keSkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHNlYXJjaEJhcikuaGlkZSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgJChkcm9wZG93bkJvZHkpLnRvZ2dsZSgpO1xyXG4gICAgICAgICQoc2VhcmNoQmFyKS50b2dnbGUoKTtcclxuICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHNlYXJjaEJhci5mb2N1cygpO1xyXG4gICAgICAgIHNlYXJjaEJhci5zdHlsZS50b3AgPSBjb250YWluZXJEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSArIGNvbnRhaW5lckRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAwICsgXCJweFwiO1xyXG4gICAgICAgIHNlYXJjaEJhci5zdHlsZS5sZWZ0ID0gY29udGFpbmVyRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKyBcInB4XCI7XHJcbiAgICAgICAgcmVzZXRTZWFyY2hlcygpO1xyXG4gICAgICAgIGhpZGVDdXN0b20oKTtcclxuICAgICAgICBkcm9wZG93bkJvZHkuc3R5bGUudG9wID0gY29udGFpbmVyRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKyBjb250YWluZXJEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgNDAgKyBcInB4XCI7XHJcbiAgICAgICAgZHJvcGRvd25Cb2R5LnN0eWxlLmxlZnQgPSBjb250YWluZXJEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZHJvcGRvd25Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcm9wZG93bkJvZHkuc3R5bGUgPSBcIndpZHRoOlwiICsgNjAwICsgXCJweDtoZWlnaHQ6NDAwcHg7cG9zaXRpb246Zml4ZWQ7dG9wOjIwMHB4O2xlZnQ6MHB4O2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTt6LWluZGV4OjEwMDtkaXNwbGF5Om5vbmU7IGJvcmRlcjoxcHggc29saWQgYmxhY2s7XCIgKyBTVFlMRS5Ecm9wU2hhZG93ICsgXCI7b3ZlcmZsb3cteTpzY3JvbGw7ei1pbmRleDoxMDAwO1wiO1xyXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duQm9keSk7XHJcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZHVtbXlJbnB1dCk7XHJcbiAgICBkcm9wZG93bkJvZHkuc3R5bGUudG9wID0gY29udGFpbmVyRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuICAgIGRyb3Bkb3duQm9keS5zdHlsZS5sZWZ0ID0gY29udGFpbmVyRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblxyXG4gICAgZHJvcGRvd25Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpc1Njcm9sbEluc2lkZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZHJvcGRvd25Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaXNTY3JvbGxJbnNpZGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIGNvbnRhaW5lckRpdi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG5cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcclxuICAgIH1cclxuICAgIGxldCBpbnRlcm5hbE9wdGlvbkRpdnMgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duSXRlbXMoZHJvcGRvd25PcHRpb25zKSB7XHJcblxyXG4gICAgICAgIGZvcih2YXIgbyA9IDA7IG8gPCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgdmFyIG51bGxGdW5jID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbE9wdGlvbkRpdnMucHVzaChvcHRpb25EaXYpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRGl2LnN0eWxlID0gXCJ3aWR0aDoxMDAlO2hlaWdodDpcIiArIGNyZWF0ZURyb3Bkb3duX0luZmllbGRfSWNvbnMgKyAyMCArIFwicHg7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0XCI7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbkRpdikuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2RkZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbkRpdikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25UZXh0LmlubmVyVGV4dCA9IG9wdGlvbkRpdi5xdWVyeVNlbGVjdG9yKFwiI29wdGlvblRleHRcIikuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGR1bW15SW5wdXQudmFsdWUgPSBkcm9wZG93blRleHQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChjb250YWluZXJEaXYpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkJvZHkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25JY29uO1xyXG4gICAgICAgICAgICAgICAgaWYoaWNvbklzQ29sb3VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkljb24uc3R5bGUuYmFja2dyb3VuZCA9IGRyb3Bkb3duT3B0aW9uc1tvXVsxXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkljb24uc3JjID0gZHJvcGRvd25PcHRpb25zW29dWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uSWNvbi5zdHlsZS5jc3NUZXh0ICs9IFwiZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0OyB3aWR0aDogXCIgKyB3aWR0aE9mSWNvbiArIFwicHg7IGhlaWdodDogXCIgKyB3aWR0aE9mSWNvbiArIFwicHg7IG1hcmdpbjogMTBweCAxMHB4OyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1wiO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbkljb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uVGV4dC5pbm5lclRleHQgPSBkcm9wZG93bk9wdGlvbnNbb11bMF07XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UZXh0LnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7d2lkdGg6Y2FsYygxMDAlLTIwcHgpO2hlaWdodDpcIiArIHdpZHRoT2ZJY29uICsgXCJweDtjb2xvcjpibGFjaztwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjBweDtkaXNwbGF5OiB0YWJsZS1jZWxsO2xpbmUtaGVpZ2h0OiBcIiArIHdpZHRoT2ZJY29uICsgXCJweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcIjtcclxuICAgICAgICAgICAgICAgIG9wdGlvblRleHQuaWQgPSBcIm9wdGlvblRleHRcIjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbkRpdi5hcHBlbmRDaGlsZChvcHRpb25UZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkJvZHkuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbnVsbEZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVEcm9wZG93bkl0ZW1zKG9wdGlvbnMpO1xyXG4gICAgY3JlYXRlRHJvcGRvd25JdGVtcyhbW1wiVXNlIEN1c3RvbVwiLCBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RrYmlKYXJTUEcxRVhVblEyNGY3a096cGlfcnBBYVNfd3I2aUVCME40UEhEeUJlVTV0Q3lHQldzWndJdllyOEN5Z19aVSZ1c3FwPUNBVVwiXV0pO1xyXG4gICAgZm9yKGxldCBpID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBvcHRpb25zLmxlbmd0aCArIDE7IGkrKykge1xyXG4gICAgICAgIGludGVybmFsT3B0aW9uRGl2c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2VsZWN0ZWRJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGRyb3Bkb3duVGV4dC5pbm5lclRleHQgPSBjb250YWluZXJEaXYucXVlcnlTZWxlY3RvckFsbChcIiNvcHRpb25UZXh0XCIpW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dDtcclxuICAgICAgICBkdW1teUlucHV0LnZhbHVlID0gZHJvcGRvd25UZXh0LmlubmVyVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teUlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZHJvcGRvd25UZXh0LmlubmVyVGV4dCA9IGR1bW15SW5wdXQudmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBbY29udGFpbmVyRGl2LCBkdW1teUlucHV0LCB0ZXh0RGVzY3JpcHRpb24sIGRyb3Bkb3duQm9keV07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRmxvYXRpbmdUYWcodGV4dCwgb3ZlcnJpZGVDc3NTdHlsZXMsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIGxldCBmbG9hdGluZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmbG9hdGluZ1RhZy5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgZmxvYXRpbmdUYWcuc3R5bGUgPSBTVFlMRS5GbG9hdGluZ1RhZztcclxuICAgIGlmKG92ZXJyaWRlQ3NzU3R5bGVzKSBmbG9hdGluZ1RhZy5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChmbG9hdGluZ1RhZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxvYXRpbmdUYWc7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSUZyYW1lKHVybCwgb3ZlcnJpZGVDc3NTdHlsZXMsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIGVsZW1lbnQuc3JjID0gdXJsO1xyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXREcm9wZG93bk9wdGlvbl9JY29uKG9wdGlvbnMsIGRyb3Bkb3duVGV4dCwgZHJvcGRvd25Cb2R5LCBvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICBmb3IodmFyIG8gPSAwOyBvIDwgb3B0aW9ucy5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgIHZhciBudWxsRnVuYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG9wdGlvbkRpdi5zdHlsZSA9IFwid2lkdGg6MTAwJTtoZWlnaHQ6XCIgKyBjcmVhdGVEcm9wZG93bl9JbmZpZWxkX0ljb25zICsgMjAgKyBcInB4O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdFwiO1xyXG4gICAgICAgICAgICAkKG9wdGlvbkRpdikuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjZGRkXCIpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChvcHRpb25EaXYpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25UZXh0LmlubmVyVGV4dCA9IG9wdGlvbkRpdi5xdWVyeVNlbGVjdG9yKFwiI29wdGlvblRleHRcIikuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgJChkcm9wZG93bkJvZHkpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoISQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KGNvbnRhaW5lckRpdikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Cb2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9uSWNvbjtcclxuICAgICAgICAgICAgaWYoaWNvbklzQ29sb3VyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25JY29uLnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zW29dWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uSWNvbi5zcmMgPSBvcHRpb25zW29dWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbkljb24uc3R5bGUuY3NzVGV4dCArPSBcImRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgd2lkdGg6IFwiICsgd2lkdGhPZkljb24gKyBcInB4OyBoZWlnaHQ6IFwiICsgd2lkdGhPZkljb24gKyBcInB4OyBtYXJnaW46IDEwcHggMTBweDsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcIjtcclxuICAgICAgICAgICAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbkljb24pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG9wdGlvblRleHQuaW5uZXJUZXh0ID0gb3B0aW9uc1tvXVswXTtcclxuICAgICAgICAgICAgb3B0aW9uVGV4dC5zdHlsZSA9IFwiZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O3dpZHRoOmNhbGMoMTAwJS0yMHB4KTtoZWlnaHQ6XCIgKyB3aWR0aE9mSWNvbiArIFwicHg7Y29sb3I6YmxhY2s7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowcHg7ZGlzcGxheTogdGFibGUtY2VsbDtsaW5lLWhlaWdodDogXCIgKyB3aWR0aE9mSWNvbiArIFwicHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTsgXCI7XHJcbiAgICAgICAgICAgIG9wdGlvblRleHQuaWQgPSBcIm9wdGlvblRleHRcIjtcclxuICAgICAgICAgICAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Cb2R5LmFwcGVuZENoaWxkKG9wdGlvbkRpdik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBudWxsRnVuYygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcHRHcm91cCh0ZXh0LCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3B0Z3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xyXG4gICAgb3B0Z3JvdXAuc2V0QXR0cmlidXRlKFwibGFiZWxcIiwgdGV4dCk7XHJcbiAgICBpZihvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICBvcHRncm91cC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRncm91cDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bk9wdGlvbih0ZXh0LCB2YWx1ZSkge1xyXG4gICAgdmFyIGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGRyb3Bkb3duT3B0aW9uLnRleHQgPSB0ZXh0O1xyXG4gICAgaWYoIXZhbHVlKSBkcm9wZG93bk9wdGlvbi52YWx1ZSA9IHRleHQ7XHJcbiAgICBlbHNlIGRyb3Bkb3duT3B0aW9uLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIGRyb3Bkb3duT3B0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRPcHRpb25zKGZpZWxkLCBvcHRpb25zKSB7XHJcbiAgICB3aGlsZShmaWVsZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZmllbGQucmVtb3ZlQ2hpbGQoZmllbGQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBsID0gMDsgbCA8IG9wdGlvbnMubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICBmaWVsZC5hZGQob3B0aW9uc1tsXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdEdyb3VwRHJvcGRvd24odGV4dCwgcGFyZW50LCBjbGFzc04sIGlubmVySCwgc2VsZWN0ZWRJbmRleCwgb3ZlcnJpZGVDc3NTdHlsZXMsIG9wdGlvbnMsIG9wdGlvbmFsQ2FsbGJhY2spIHtcclxuICAgIHZhciBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Q29udGFpbmVyLnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7cGFkZGluZzoycHg7XCI7XHJcbiAgICB2YXIgZHJvcGRvd24gPSBjcmVhdGVEcm9wZG93bihcImNsYXNzTlwiLCAwLCBTVFlMRS5CdXR0b24sIG51bGwpO1xyXG4gICAgZHJvcGRvd24uc3R5bGUgPSBTVFlMRS5CdXR0b24gKyBcIjtmb250LXNpemU6MTFweDtcIjtcclxuICAgIGRyb3Bkb3duLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICBkcm9wZG93bi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgZHJvcGRvd24uYmx1cigpO1xyXG4gICAgdmFyIGluaXRpYWxkcm9wZG93bkJhY2tncm91bmRDb2xvciA9IGRyb3Bkb3duLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgICQoZHJvcGRvd24pLmhvdmVyKCgpID0+IHtcclxuICAgICAgICAkKGRyb3Bkb3duKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgJChkcm9wZG93bikuY3NzKFwiY29sb3JcIiwgaW5pdGlhbGRyb3Bkb3duQmFja2dyb3VuZENvbG9yKTtcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgICAkKGRyb3Bkb3duKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGluaXRpYWxkcm9wZG93bkJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgJChkcm9wZG93bikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyb3Bkb3duLmlubmVySFRNTCA9IGlubmVySDtcclxuICAgIGRyb3Bkb3duLmNsYXNzTmFtZSA9IGNsYXNzTjtcclxuXHJcbiAgICBmb3IodmFyIG8gPSAwOyBvIDwgb3B0aW9ucy5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgIGRyb3Bkb3duLmFkZChvcHRpb25zW29dKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5zdHlsZSA9IFNUWUxFLkJ1dHRvbjtcclxuICAgIGJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwid2lkdGg6MzBweDttYXJnaW46MHB4O21hcmdpbi1sZWZ0OjNweFwiO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IFwiK1wiO1xyXG4gICAgYnRuLmNsYXNzTmFtZSA9IGNsYXNzTjtcclxuICAgIGJ0bi5vbmNsaWNrID0gb3B0aW9uYWxDYWxsYmFjaztcclxuICAgIGJ0bi5ibHVyKCk7XHJcbiAgICB2YXIgaW5pdGlhbEJ0bkJhY2tncm91bmRDb2xvciA9IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAkKGJ0bikuaG92ZXIoKCkgPT4ge1xyXG4gICAgICAgICQoYnRuKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAgICAgJChidG4pLmNzcyhcImNvbG9yXCIsIGluaXRpYWxCdG5CYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICQoYnRuKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGluaXRpYWxCdG5CYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICQoYnRuKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XHJcbiAgICByZXR1cm4gZHJvcGRvd247XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCwgb3ZlcnJpZGVDc3NTdHlsZXMsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XHJcbiAgICBsYWJlbC5zdHlsZSA9IFNUWUxFLkxhYmVsO1xyXG4gICAgbGFiZWwuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvdmVycmlkZUNzc1N0eWxlcyBcclxuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudE9iamVjdFRvQXBwZW5kVG8gXHJcbiAqIEByZXR1cm5zIEhUTUwgdGV4dCBPYmplY3RcclxuICogQGRlc2NyaXB0aW9uIGZvciBTeW1ib2xzIHVzZSBcXHVfX19fXyBcclxuICogQHNlZSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2NoYXJzZXRzL3JlZl91dGZfcHVuY3R1YXRpb24uYXNwXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jaGFyc2V0cy9yZWZfdXRmX2N1cnJlbmN5LmFzcFxyXG4gKiBAc2VlIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY2hhcnNldHMvcmVmX3V0Zl9sZXR0ZXJsaWtlLmFzcFxyXG4gKiBAc2VlIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY2hhcnNldHMvcmVmX3V0Zl9hcnJvd3MuYXNwXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jaGFyc2V0cy9yZWZfdXRmX21hdGguYXNwXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jaGFyc2V0cy9yZWZfdXRmX2JveC5hc3BcclxuICogQHNlZSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2NoYXJzZXRzL3JlZl91dGZfYmxvY2suYXNwXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jaGFyc2V0cy9yZWZfdXRmX2dlb21ldHJpYy5hc3BcclxuICogQHNlZSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2NoYXJzZXRzL3JlZl91dGZfc3ltYm9scy5hc3BcclxuICogQHNlZSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2NoYXJzZXRzL3JlZl91dGZfZGluZ2JhdHMuYXNwXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jaGFyc2V0cy9yZWZfZW1vamkuYXNwXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jaGFyc2V0cy9yZWZfZW1vamlfc21pbGV5cy5hc3BcclxuICogQHNlZSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2NoYXJzZXRzL3JlZl9lbW9qaV9za2luX3RvbmVzLmFzcFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0LCBvdmVycmlkZUNzc1N0eWxlcywgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgbGV0IF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgX3RleHQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIF90ZXh0LnN0eWxlID0gU1RZTEUuTGFiZWw7XHJcbiAgICBfdGV4dC5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChfdGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3RleHQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3godGV4dCwgZGVmYXVsdFZhbHVlLCBvdmVycmlkZUNzc1N0eWxlcywgb3B0aW9uYWxDYWxsYmFjaywgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5uYW1lID0gXCJjaGVja2JveFwiO1xyXG4gICAgY2hlY2tib3gucGxhY2Vob2xkZXIgPSB0ZXh0O1xyXG4gICAgY2hlY2tib3guc3R5bGUgPSBTVFlMRS5DaGVja2JveDtcclxuICAgIGlmKGRlZmF1bHRWYWx1ZSkgY2hlY2tib3guY2hlY2tlZCA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIGlmKG92ZXJyaWRlQ3NzU3R5bGVzKSBjaGVja2JveC5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gb3B0aW9uYWxDYWxsYmFjaztcclxuICAgIH1cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrYm94O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94X0luZmllbGQodGV4dCwgZGVmYXVsdFZhbHVlLCBvdmVycmlkZUNzc1N0eWxlcywgb3B0aW9uYWxDYWxsYmFjaywgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBpbnB1dC5uYW1lID0gXCJjaGVja2JveFwiO1xyXG4gICAgdmFyIGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmFyIHRleHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHREZXNjcmlwdGlvbi5zdHlsZSA9IFwid2lkdGg6Y2FsYygxMDAlIC0gNDh4KTtoZWlnaHQ6IDEwcHg7Y29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtmb250LXNpemU6IDEycHg7ZmxvYXQ6IGxlZnQ7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiA4cHg7XCI7XHJcbiAgICB0ZXh0RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIGlucHV0LmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG4gICAgaW5wdXQuc3R5bGUgPSBcImZsb2F0OiBsZWZ0O3dpZHRoOiAyMHB4O2hlaWdodDogMThweDttYXJnaW46IDZweCA2cHggNnB4O2JhY2tncm91bmQ6IG5vbmU7dGV4dC1hbGlnbjogcmlnaHQ7ZGlzcGxheTogYmxvY2s7cGFkZGluZzogNXB4O1wiO1xyXG4gICAgY29udGFpbmVyRGl2LnN0eWxlID0gU1RZTEUuQ2hlY2tib3hJbmZpZWxkO1xyXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0ZXh0RGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyRGl2Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoZSkgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBpZighaW5wdXQuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5wdXQub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZihlKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmKCFpbnB1dC5kaXNhYmxlZCkge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyRGl2LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgaWYoZGVmYXVsdFZhbHVlKSBpbnB1dC5jaGVja2VkID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIGNvbnRhaW5lckRpdi5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgaWYob3B0aW9uYWxDYWxsYmFjaykge1xyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbmFsQ2FsbGJhY2soKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtjb250YWluZXJEaXYsIGlucHV0XTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVSYWRpbyh0ZXh0LCBkZWZhdWx0VmFsdWUsIG92ZXJyaWRlQ3NzU3R5bGVzLCBvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICB2YXIgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcclxuICAgIHJhZGlvLm5hbWUgPSBcInJhZGlvXCI7XHJcbiAgICByYWRpby5wbGFjZWhvbGRlciA9IHRleHQ7XHJcbiAgICByYWRpby5zdHlsZSA9IFNUWUxFLkNoZWNrYm94O1xyXG4gICAgaWYoZGVmYXVsdFZhbHVlKSByYWRpby5jaGVja2VkID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIHJhZGlvLnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBpZihvcHRpb25hbENhbGxiYWNrKSB7XHJcbiAgICAgICAgcmFkaW8ub25jaGFuZ2UgPSBvcHRpb25hbENhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYWRpbztcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVIcihvdmVycmlkZUNzc1N0eWxlcywgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgdmFyIGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgIGhyLnN0eWxlID0gXCJ3aWR0aDo5NSU7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O21hcmdpbjoxMHB4O2JvcmRlci1jb2xvcjogXCIgKyBDT0xPVVIuQmx1ZSArIFwiO2JhY2tncm91bmQtY29sb3I6IFwiICsgQ09MT1VSLkJsdWUgKyBcIjtib3JkZXItd2lkdGg6IDNweDtib3JkZXItcmFkaXVzOiAzcHg7XCI7XHJcbiAgICBpZihvdmVycmlkZUNzc1N0eWxlcykgaHIuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhyO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmdfTnVtYmVyZWQobnVtYmVyLCB0ZXh0LCBvdmVycmlkZUNzc1N0eWxlcywgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrOyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyBoZWlnaHQ6NDBweDtwb3NpdGlvbjogcmVsYXRpdmU7bWFyZ2luLXRvcDoyNXB4O1wiO1xyXG5cclxuICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNpcmNsZS5zdHlsZSA9IFwiZGlzcGxheTpibG9jazt3aWR0aDozMHB4O2hlaWdodDozMHB4O2JvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLXdpZHRoOiAzcHg7Ym9yZGVyLWNvbG9yOiBcIiArIENPTE9VUi5MaWdodEJsdWUgKyBcIjtib3JkZXItcmFkaXVzOiAyMHB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjogXCIgKyBDT0xPVVIuV2hpdGUgKyBcIjtcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cclxuICAgIC8vdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vIGxpbmUuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2s7d2lkdGg6ODAlO2hlaWdodDozcHg7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5MaWdodEJsdWUgKyBcIjtmbG9hdDpsZWZ0O21hcmdpbi10b3A6MzNweDttYXJnaW4tbGVmdDotMTVweDtcIjtcclxuICAgIC8vY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmUpO1xyXG5cclxuICAgIHZhciBudW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgICBudW1iZXJFbGVtZW50LnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrO3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxM3B4O3RvcDoxMHB4O21hcmdpbjowcHg7Y29sb3I6XCIgKyBDT0xPVVIuTWlkR3JleSArIFwiO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyRWxlbWVudCk7XHJcblxyXG4gICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHRleHRFbGVtZW50LnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrO3dpZHRoOjgwJTtoZWlnaHQ6MzBweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwcHg7dG9wOjEwcHg7bWFyZ2luOjBweDtjb2xvcjpcIiArIENPTE9VUi5NaWRHcmV5ICsgXCI7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcblxyXG4gICAgaWYob3ZlcnJpZGVDc3NTdHlsZXMpIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IFwiO1wiICsgb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnRPYmplY3RUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtjb250YWluZXIsIG51bGxdO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmdfTnVtYmVyZWQyKG51bWJlciwgdGV4dCwgb3ZlcnJpZGVDc3NTdHlsZXMsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZSA9IFwiZGlzcGxheTpibG9jazsgZmxvYXQ6bGVmdDsgd2lkdGg6MTAwJTsgaGVpZ2h0OjQwcHg7cG9zaXRpb246IHJlbGF0aXZlO21hcmdpbi10b3A6MjVweDtcIjtcclxuXHJcbiAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaXJjbGUuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2s7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtib3JkZXItc3R5bGU6IHNvbGlkO2JvcmRlci13aWR0aDogM3B4O2JvcmRlci1jb2xvcjogXCIgKyBDT0xPVVIuTGlnaHRCbHVlICsgXCI7Ym9yZGVyLXJhZGl1czogMjBweDtmbG9hdDpsZWZ0O2JhY2tncm91bmQtY29sb3I6IFwiICsgQ09MT1VSLkxpZ2h0Qmx1ZSArIFwiO1wiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpbmUuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2s7d2lkdGg6ODAlO2hlaWdodDozcHg7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5MaWdodEJsdWUgKyBcIjtmbG9hdDpsZWZ0O21hcmdpbi10b3A6MzNweDttYXJnaW4tbGVmdDotMTVweDtcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcclxuXHJcbiAgICB2YXIgbnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG51bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgbnVtYmVyRWxlbWVudC5zdHlsZSA9IFwiZGlzcGxheTpibG9jazt3aWR0aDozMHB4O2hlaWdodDozMHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTNweDt0b3A6MTBweDttYXJnaW46MHB4O2NvbG9yOlwiICsgQ09MT1VSLldoaXRlICsgXCI7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXJFbGVtZW50KTtcclxuXHJcbiAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0RWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGV4dEVsZW1lbnQuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2s7d2lkdGg6ODAlO2hlaWdodDozMHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTBweDt0b3A6MTBweDttYXJnaW46MHB4O2NvbG9yOlwiICsgQ09MT1VSLkxpZ2h0Qmx1ZSArIFwiO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xyXG5cclxuICAgIGlmKG92ZXJyaWRlQ3NzU3R5bGVzKSBjb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSBcIjtcIiArIG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbY29udGFpbmVyLCBudWxsXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nU3R5bGUxKHRleHQsIG92ZXJyaWRlQ3NzU3R5bGVzLCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICBsZXQgaGVhZGluZyA9IGNyZWF0ZVRleHQodGV4dCwgU1RZTEUuSGVhZGluZ1N0eWxlMSwgcGFyZW50T2JqZWN0VG9BcHBlbmRUbyk7XHJcbiAgICBpZihvdmVycmlkZUNzc1N0eWxlcykgaHIuc3R5bGUuY3NzVGV4dCArPSBvdmVycmlkZUNzc1N0eWxlcztcclxuICAgIHJldHVybiBoZWFkaW5nO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRva2VuKHRleHQsIHNlbGVjdGVkVEYsIG92ZXJyaWRlQ3NzU3R5bGVzLCBwYXJlbnRPYmplY3RUb0FwcGVuZFRvKSB7XHJcbiAgICB2YXIgdG9rZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZhciBmYWtlVmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9rZW4uc3R5bGUgPSBcImRpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDt3aWR0aDoxMjBweDtoZWlnaHQ6MzBweDtmb250LXNpemU6MTJweDtjb2xvcjpcIiArIChzZWxlY3RlZFRGID8gQ09MT1VSLldoaXRlIDogQ09MT1VSLkRhcmtHcmV5KSArIFwiO2JhY2tncm91bmQtY29sb3I6XCIgKyAoc2VsZWN0ZWRURiA/IENPTE9VUi5CbHVlIDogQ09MT1VSLk1lZGl1bUdyZXkpICsgXCI7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjE1cHg7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjVweDt1c2VyLXNlbGVjdDogbm9uZTtcIjtcclxuICAgIHRva2VuLnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICB0b2tlbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdG9rZW4uZGF0YXNldC5zZWxlY3RlZCA9IChzZWxlY3RlZFRGID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpO1xyXG4gICAgdG9rZW4uZGF0YXNldC5zZWxlY3RlZEJhY2tncm91bmRDb2xvciA9IENPTE9VUi5CbHVlO1xyXG4gICAgdG9rZW4uZGF0YXNldC5zZWxlY3RlZENvbG9yID0gQ09MT1VSLldoaXRlO1xyXG4gICAgdG9rZW4uZGF0YXNldC5kZXNlbGVjdGVkQmFja2dyb3VuZENvbG9yID0gQ09MT1VSLk1lZGl1bUdyZXk7XHJcbiAgICB0b2tlbi5kYXRhc2V0LmRlc2VsZWN0ZWRDb2xvciA9IENPTE9VUi5EYXJrR3JleTtcclxuICAgIGZha2VWYWx1ZUNvbnRhaW5lci52YWx1ZSA9IHNlbGVjdGVkVEY7XHJcbiAgICB0b2tlbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZmFrZVZhbHVlQ29udGFpbmVyLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB0b2tlbi5kYXRhc2V0LnNlbGVjdGVkID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgdG9rZW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG9rZW4uZGF0YXNldC5zZWxlY3RlZEJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0b2tlbi5zdHlsZS5jb2xvciA9IHRva2VuLmRhdGFzZXQuc2VsZWN0ZWRDb2xvcjtcclxuICAgIH07XHJcbiAgICB0b2tlbi5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRva2VuLnN0eWxlLmNzc1RleHQgKz0gXCI7Ym94LXNoYWRvdzogcmdiKDk4IDk4IDk4KSA1cHggNXB4IDEwcHggLTNweDtcIjtcclxuICAgIH07XHJcbiAgICB0b2tlbi5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0b2tlbi5zdHlsZS5jc3NUZXh0ICs9IFwiO2JveC1zaGFkb3c6IG5vbmU7XCI7XHJcbiAgICB9O1xyXG4gICAgaWYocGFyZW50T2JqZWN0VG9BcHBlbmRUbyAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZCh0b2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3Rva2VuLCBmYWtlVmFsdWVDb250YWluZXJdO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gb3ZlcnJpZGVDc3NTdHlsZXMgXHJcbiAqIEBwYXJhbSB7Kn0gdGV4dCBcclxuICogQHBhcmFtIHsqfSBocmVmIFxyXG4gKiBAcGFyYW0geyp9IHRhcmdldCBcIl9ibGFua1wiIChkZWZhdWx0KSwgXCJuZXcgd2luZG93XCJcclxuICogQHBhcmFtIHsqfSBwYXJlbnRPYmplY3RUb0FwcGVuZFRvIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsob3ZlcnJpZGVDc3NTdHlsZXMgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgaHJlZiA9IFwiXCIsIHRhcmdldCA9IFwiX2JsYW5rXCIsIHBhcmVudE9iamVjdFRvQXBwZW5kVG8pIHtcclxuICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5zdHlsZSA9IFNUWUxFLkxpbms7XHJcbiAgICBsaW5rLnN0eWxlLmNzc1RleHQgKz0gb3ZlcnJpZGVDc3NTdHlsZXM7XHJcbiAgICBsaW5rLmlubmVyVGV4dCA9IHRleHQ7XHJcblxyXG4gICAgbGV0IHdpbmRvd1dpZHRoID0gMTUwMCwgd2luZG93SGVpZ2h0ID0gMTAwMCwgb2Zmc2V0WCwgb2Zmc2V0WTtcclxuXHJcbiAgICBpZih0YXJnZXQgPT0gXCJfYmxhbmtcIiB8fCB0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgIGxpbmsudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XHJcbiAgICB9IGVsc2UgaWYodGFyZ2V0ID09IFwibmV3IHdpbmRvd1wiKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgb2Zmc2V0WCA9ICh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvd1dpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gd2luZG93SGVpZ2h0KSAvIDIgKyAod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGhyZWYsICdfYmxhbmsnLCAnbG9jYXRpb249eWVzLHRvcD0nICsgb2Zmc2V0WSArICcsbGVmdD0nICsgb2Zmc2V0WCArICcsaGVpZ2h0PScgKyB3aW5kb3dIZWlnaHQgKyAnLHdpZHRoPScgKyB3aW5kb3dXaWR0aCArICcsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhcmVudE9iamVjdFRvQXBwZW5kVG8gIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE9iamVjdFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGluaztcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvcGRvd25TZXRTZWxlY3RlZEluZGV4VG9OZXh0QXZhaWxhYmxlKGZpZWxkLCBsZWF2ZUlmQ3VycmVudFNlbGVjdGVkSXNOb3REaXNhYmxlZCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgZmllbGRPcHRpb25zID0gZmllbGQub3B0aW9ucztcclxuICAgIGxldCBmaWVsZE9wdGlvbnNMZW5ndGggPSBmaWVsZE9wdGlvbnMubGVuZ3RoO1xyXG4gICAgaWYobGVhdmVJZkN1cnJlbnRTZWxlY3RlZElzTm90RGlzYWJsZWQgJiYgZmllbGRPcHRpb25zW2ZpZWxkLnNlbGVjdGVkSW5kZXhdLmRpc2FibGVkID09IGZhbHNlKSByZXR1cm47XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmllbGRPcHRpb25zTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihmaWVsZE9wdGlvbnNbaV0uZGlzYWJsZWQgPT09IHRydWUpIGNvbnRpbnVlO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkcm9wZG93blNldFNlbGVjdGVkVmFsdWUoZmllbGQsIHZhbHVlKSB7XHJcbiAgICBsZXQgYWxsT3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsT3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGFsbE9wdGlvbnNbaV0udmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAkKGZpZWxkKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsZXJ0KFwibm8gdmFsdWUgc2VsZWN0ZWQgZm9yIGRyb3Bkb3duIChubyBtYXRjaClcIik7XHJcbn1cclxuLy9oZWxwZXIgZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIGNoZWNrYm94ZXNBZGRUb1NlbGVjdGlvbkdyb3VwKG9uZU11c3RCZUNoZWNrZWQsIC4uLmNoZWNrYm94RWxlbWVudHMpIHtcclxuICAgIHZhciBncm91cEFycmF5ID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNoZWNrYm94RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncm91cEFycmF5LnB1c2goY2hlY2tib3hFbGVtZW50c1tpXSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gZ3JvdXBBcnJheVtpXVswXTtcclxuICAgICAgICBsZXQgeSA9IGdyb3VwQXJyYXlbaV1bMV07XHJcbiAgICAgICAgZ3JvdXBBcnJheVtpXVsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0KHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHQoY2hlY2tib3hDb250YWluZXIsIGNoZWNrYm94KSB7XHJcbiAgICAgICAgdW5jaGVja090aGVycyhjaGVja2JveCk7XHJcbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVuY2hlY2tPdGhlcnMoY2hlY2tib3gpIHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZ3JvdXBBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihncm91cEFycmF5W2ldWzFdICE9PSBjaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tib3hDaGVja2VkKGZhbHNlLCBncm91cEFycmF5W2ldWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JvdXBBcnJheTtcclxufVxyXG5mdW5jdGlvbiBkaXZBZGRUb1NlbGVjdGlvbkdyb3VwKC4uLmRpdkVsZW1lbnRzKSB7XHJcbiAgICB2YXIgZ3JvdXBBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkaXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyb3VwQXJyYXkucHVzaChkaXZFbGVtZW50c1tpXSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gZ3JvdXBBcnJheVtpXTtcclxuICAgICAgICBpZih4LmRhdGFzZXQuc2VsZWN0ZWQgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgeC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JvdXBBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB4LmRhdGFzZXQuc2VsZWN0ZWQgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgeC5kYXRhc2V0LnNlbGVjdGVkID09IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICB0KHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHQoZGl2KSB7XHJcbiAgICAgICAgdW5jaGVja090aGVycyhkaXYpO1xyXG4gICAgICAgIGlmKGRpdi5kYXRhc2V0LnNlbGVjdGVkID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1bmNoZWNrT3RoZXJzKGRpdikge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBncm91cEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGdyb3VwQXJyYXlbaV0gIT09IGRpdikge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBBcnJheVtpXS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuICAgICAgICAgICAgICAgIGdyb3VwQXJyYXlbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ3JvdXBBcnJheVtpXS5kYXRhc2V0LmRlc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBncm91cEFycmF5W2ldLnN0eWxlLmNvbG9yID0gZ3JvdXBBcnJheVtpXS5kYXRhc2V0LmRlc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JvdXBBcnJheTtcclxufVxyXG5mdW5jdGlvbiB0b2tlbkFkZFRvU2VsZWN0aW9uR3JvdXAoLi4udG9rZW5FbGVtZW50cykge1xyXG4gICAgdmFyIGdyb3VwQXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdG9rZW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyb3VwQXJyYXkucHVzaCh0b2tlbkVsZW1lbnRzW2ldKTtcclxuXHJcbiAgICAgICAgbGV0IFt4LCB5XSA9IGdyb3VwQXJyYXlbaV07XHJcbiAgICAgICAgaWYoeC5kYXRhc2V0LnNlbGVjdGVkID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHguc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHguc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwQXJyYXlbaV1bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgeC5kYXRhc2V0LnNlbGVjdGVkID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIHQoeCwgeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdChkaXYsIGlucHV0KSB7XHJcbiAgICAgICAgdW5jaGVja090aGVycyhkaXYpO1xyXG4gICAgICAgIGlmKGRpdi5kYXRhc2V0LnNlbGVjdGVkID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVuY2hlY2tPdGhlcnMoZGl2KSB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGdyb3VwQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoZ3JvdXBBcnJheVtpXVswXSAhPT0gZGl2KSB7XHJcbiAgICAgICAgICAgICAgICBncm91cEFycmF5W2ldWzFdLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBncm91cEFycmF5W2ldWzBdLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBBcnJheVtpXVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBncm91cEFycmF5W2ldWzBdLmRhdGFzZXQuZGVzZWxlY3RlZEJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGdyb3VwQXJyYXlbaV1bMF0uc3R5bGUuY29sb3IgPSBncm91cEFycmF5W2ldWzBdLmRhdGFzZXQuZGVzZWxlY3RlZENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91cEFycmF5O1xyXG59XHJcbmZ1bmN0aW9uIHNldEZpZWxkRGlzYWJsZWQoZGlzYWJsZWRURiwgZmllbGQsIG9wdGlvbmFsUGFyZW50Q29udGFpbmVyKSB7XHJcbiAgICBpZihmaWVsZCkge1xyXG4gICAgICAgIGZpZWxkLmRpc2FibGVkID0gZGlzYWJsZWRURjtcclxuICAgICAgICBpZihkaXNhYmxlZFRGKSB7XHJcbiAgICAgICAgICAgIGlmKGZpZWxkLmRhdGFzZXQuYmFja2dyb3VuZENvbG9yRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZpZWxkLmRhdGFzZXQuYmFja2dyb3VuZENvbG9yRGlzYWJsZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGZpZWxkLmRhdGFzZXQuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmaWVsZC5kYXRhc2V0LmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uYWxQYXJlbnRDb250YWluZXIpIHtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBvcHRpb25hbFBhcmVudENvbnRhaW5lci5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmRpc2FibGVkID0gZGlzYWJsZWRURjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNhYmxlZFRGID09IHRydWUgPyBvcHRpb25hbFBhcmVudENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMjEsIDIyMSwgMjIxKVwiIDogb3B0aW9uYWxQYXJlbnRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWVsZCB8fCBvcHRpb25hbFBhcmVudENvbnRhaW5lcjtcclxufVxyXG5mdW5jdGlvbiBzZXRGaWVsZEhpZGRlbihkaXNhYmxlZFRGLCBmaWVsZCwgb3B0aW9uYWxQYXJlbnRDb250YWluZXIpIHtcclxuICAgIGlmKGRpc2FibGVkVEYpIHtcclxuICAgICAgICBpZihmaWVsZCkge1xyXG4gICAgICAgICAgICAkKGZpZWxkKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbmFsUGFyZW50Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICQob3B0aW9uYWxQYXJlbnRDb250YWluZXIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9uYWxQYXJlbnRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgJChvcHRpb25hbFBhcmVudENvbnRhaW5lcikuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZCB8fCBvcHRpb25hbFBhcmVudENvbnRhaW5lcjtcclxufVxyXG5mdW5jdGlvbiBzZXRDaGVja2JveENoZWNrZWQoY2hlY2tlZFRGLCBmaWVsZCkge1xyXG4gICAgaWYoZmllbGQuY2hlY2tlZCA9PSBjaGVja2VkVEYpIHJldHVybjtcclxuICAgIGVsc2UgJChmaWVsZCkuY2xpY2soKTtcclxufVxyXG5mdW5jdGlvbiBjbGlja0NoZWNrYm94KGZpZWxkKSB7XHJcbiAgICBmaWVsZC5jbGljaygpO1xyXG59XHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBwYXJlbnRDb250cm9sbGVyVHlwZSBhbnkgdmFsdWUgd2l0aGluIFtcIkNoZWNrYm94XCIsXCJEaXZcIl1cclxuICogQHBhcmFtIHsqfSBtYXN0ZXJDb250cm9sbGVyRmllbGQgdGhlIG1hc3RlciBmaWVsZCB0aGF0IHdpbGwgdG9nZ2xlIHRoZSBjaGlsZHJlblxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IG90aGVyRmllbGRzIHRoZSBjaGlsZHJlbiBmaWVsZHMgaW4gdGhhdCBncm91cFxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZUZpZWxkR3JvdXAocGFyZW50Q29udHJvbGxlclR5cGUsIG1hc3RlckNvbnRyb2xsZXJGaWVsZCwgY2FuT3BlbkFscmVhZHlIaWRkZW4gPSB0cnVlLCAuLi5vdGhlckZpZWxkcykge1xyXG4gICAgc3dpdGNoKHBhcmVudENvbnRyb2xsZXJUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkNoZWNrYm94XCI6XHJcbiAgICAgICAgICAgIG1hc3RlckNvbnRyb2xsZXJGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub3dTdGF0ZSA9IG1hc3RlckNvbnRyb2xsZXJGaWVsZC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG90aGVyRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobm93U3RhdGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3RoZXJGaWVsZHNbaV0uc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJGaWVsZHNbaV0uZGF0YXNldC53YXNBbHJlYWR5SGlkZGVuID0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJGaWVsZHNbaV0uZGF0YXNldC53YXNBbHJlYWR5SGlkZGVuID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZEhpZGRlbih0cnVlLCBvdGhlckZpZWxkc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3RoZXJGaWVsZHNbaV0uZGF0YXNldC53YXNBbHJlYWR5SGlkZGVuID09PSAndHJ1ZScgJiYgIWNhbk9wZW5BbHJlYWR5SGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZEhpZGRlbih0cnVlLCBvdGhlckZpZWxkc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZEhpZGRlbihmYWxzZSwgb3RoZXJGaWVsZHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIENhc2UgQXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZG93RHJhZ1pvbmVzKGNvbnRhaW5lciwgd2luZG93R3JhYlpvbmVXaWR0aCA9IDEwLCBjYWxsYmFja09uUmVzaXplKSB7XHJcbiAgICBsZXQgZ3JhYmJlZFNpZGUgPSBudWxsO1xyXG4gICAgbGV0IGJvdW5kaW5nQm94ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHcgPSBib3VuZGluZ0JveC53aWR0aDtcclxuICAgIGxldCBoID0gYm91bmRpbmdCb3guaGVpZ2h0O1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvdW5kaW5nQm94KCkge1xyXG4gICAgICAgIGJvdW5kaW5nQm94ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHcgPSBib3VuZGluZ0JveC53aWR0aDtcclxuICAgICAgICBoID0gYm91bmRpbmdCb3guaGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgbGVmdFpvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHJpZ2h0Wm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdG9wWm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgYm90dG9tWm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdGxDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRyQ29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBibENvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgYnJDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGxlZnRab25lLnN0eWxlID0gXCJ3aWR0aDogXCIgKyB3aW5kb3dHcmFiWm9uZVdpZHRoICsgXCJweDsgaGVpZ2h0OiBjYWxjKDEwMCUgLSBcIiArICh3aW5kb3dHcmFiWm9uZVdpZHRoKSArIFwicHgpOyBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOlwiICsgKHdpbmRvd0dyYWJab25lV2lkdGggLyAyKSArIFwicHg7bGVmdDpcIiArICgtd2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtjdXJzb3I6dy1yZXNpemU7XCI7XHJcbiAgICByaWdodFpvbmUuc3R5bGUgPSBcIndpZHRoOiBcIiArIHdpbmRvd0dyYWJab25lV2lkdGggKyBcInB4OyBoZWlnaHQ6IGNhbGMoMTAwJSAtIFwiICsgKHdpbmRvd0dyYWJab25lV2lkdGgpICsgXCJweCk7IGJhY2tncm91bmQtY29sb3I6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6XCIgKyAod2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtyaWdodDpcIiArICgtd2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtjdXJzb3I6ZS1yZXNpemU7XCI7XHJcbiAgICB0b3Bab25lLnN0eWxlID0gXCJ3aWR0aDogY2FsYygxMDAlIC0gXCIgKyAod2luZG93R3JhYlpvbmVXaWR0aCkgKyBcInB4KTsgaGVpZ2h0OiBcIiArIHdpbmRvd0dyYWJab25lV2lkdGggKyBcInB4OyBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOlwiICsgKC13aW5kb3dHcmFiWm9uZVdpZHRoIC8gMikgKyBcInB4O2xlZnQ6XCIgKyAod2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtjdXJzb3I6bi1yZXNpemU7XCI7XHJcbiAgICBib3R0b21ab25lLnN0eWxlID0gXCJ3aWR0aDogY2FsYygxMDAlIC0gXCIgKyAod2luZG93R3JhYlpvbmVXaWR0aCkgKyBcInB4KTsgaGVpZ2h0OiBcIiArIHdpbmRvd0dyYWJab25lV2lkdGggKyBcInB4OyBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOlwiICsgKC13aW5kb3dHcmFiWm9uZVdpZHRoIC8gMikgKyBcInB4O2xlZnQ6XCIgKyAod2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtjdXJzb3I6cy1yZXNpemU7XCI7XHJcbiAgICB0bENvcm5lci5zdHlsZSA9IFwid2lkdGg6IFwiICsgd2luZG93R3JhYlpvbmVXaWR0aCArIFwicHg7IGhlaWdodDogXCIgKyB3aW5kb3dHcmFiWm9uZVdpZHRoICsgXCJweDsgYmFja2dyb3VuZC1jb2xvcjpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDpcIiArICgtd2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtsZWZ0OlwiICsgKC13aW5kb3dHcmFiWm9uZVdpZHRoIC8gMikgKyBcInB4O2N1cnNvcjpudy1yZXNpemU7XCI7XHJcbiAgICB0ckNvcm5lci5zdHlsZSA9IFwid2lkdGg6IFwiICsgd2luZG93R3JhYlpvbmVXaWR0aCArIFwicHg7IGhlaWdodDogXCIgKyB3aW5kb3dHcmFiWm9uZVdpZHRoICsgXCJweDsgYmFja2dyb3VuZC1jb2xvcjpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDpcIiArICgtd2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtyaWdodDpcIiArICgtd2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtjdXJzb3I6bmUtcmVzaXplO1wiO1xyXG4gICAgYmxDb3JuZXIuc3R5bGUgPSBcIndpZHRoOiBcIiArIHdpbmRvd0dyYWJab25lV2lkdGggKyBcInB4OyBoZWlnaHQ6IFwiICsgd2luZG93R3JhYlpvbmVXaWR0aCArIFwicHg7IGJhY2tncm91bmQtY29sb3I6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206XCIgKyAoLXdpbmRvd0dyYWJab25lV2lkdGggLyAyKSArIFwicHg7bGVmdDpcIiArICgtd2luZG93R3JhYlpvbmVXaWR0aCAvIDIpICsgXCJweDtjdXJzb3I6bmUtcmVzaXplO1wiO1xyXG4gICAgYnJDb3JuZXIuc3R5bGUgPSBcIndpZHRoOiBcIiArIHdpbmRvd0dyYWJab25lV2lkdGggKyBcInB4OyBoZWlnaHQ6IFwiICsgd2luZG93R3JhYlpvbmVXaWR0aCArIFwicHg7IGJhY2tncm91bmQtY29sb3I6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206XCIgKyAoLXdpbmRvd0dyYWJab25lV2lkdGggLyAyKSArIFwicHg7cmlnaHQ6XCIgKyAoLXdpbmRvd0dyYWJab25lV2lkdGggLyAyKSArIFwicHg7Y3Vyc29yOm53LXJlc2l6ZTtcIjtcclxuXHJcbiAgICBsZWZ0Wm9uZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgZ3JhYmJlZFNpZGUgPSBcImxlZnRcIjtcclxuICAgIH0pO1xyXG4gICAgcmlnaHRab25lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlQm91bmRpbmdCb3goKTtcclxuICAgICAgICBncmFiYmVkU2lkZSA9IFwicmlnaHRcIjtcclxuICAgIH0pO1xyXG4gICAgdG9wWm9uZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgZ3JhYmJlZFNpZGUgPSBcInRvcFwiO1xyXG4gICAgfSk7XHJcbiAgICBib3R0b21ab25lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlQm91bmRpbmdCb3goKTtcclxuICAgICAgICBncmFiYmVkU2lkZSA9IFwiYm90dG9tXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0bENvcm5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgZ3JhYmJlZFNpZGUgPSBcInRsXCI7XHJcbiAgICB9KTtcclxuICAgIHRyQ29ybmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlQm91bmRpbmdCb3goKTtcclxuICAgICAgICBncmFiYmVkU2lkZSA9IFwidHJcIjtcclxuICAgIH0pO1xyXG4gICAgYmxDb3JuZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB1cGRhdGVCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIGdyYWJiZWRTaWRlID0gXCJibFwiO1xyXG4gICAgfSk7XHJcbiAgICBickNvcm5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgZ3JhYmJlZFNpZGUgPSBcImJyXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICAgICAgICBncmFiYmVkU2lkZSA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBtb3VzZVhZID0ge3g6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZfTtcclxuICAgICAgICBpZihncmFiYmVkU2lkZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihncmFiYmVkU2lkZSA9PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAodyArIChib3VuZGluZ0JveC54IC0gbW91c2VYWS54KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihncmFiYmVkU2lkZSA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gKHcgLSAoYm91bmRpbmdCb3gueCArIHcgLSBtb3VzZVhZLngpICogMikgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGdyYWJiZWRTaWRlID09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IChoICsgKGJvdW5kaW5nQm94LnkgLSBtb3VzZVhZLnkpICogMikgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGdyYWJiZWRTaWRlID09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IChoIC0gKGJvdW5kaW5nQm94LnkgKyBoIC0gbW91c2VYWS55KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ3JhYmJlZFNpZGUgPT0gXCJ0bFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAoaCArIChib3VuZGluZ0JveC55IC0gbW91c2VYWS55KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAodyArIChib3VuZGluZ0JveC54IC0gbW91c2VYWS54KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihncmFiYmVkU2lkZSA9PSBcInRyXCIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IChoICsgKGJvdW5kaW5nQm94LnkgLSBtb3VzZVhZLnkpICogMikgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICh3IC0gKGJvdW5kaW5nQm94LnggKyB3IC0gbW91c2VYWS54KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihncmFiYmVkU2lkZSA9PSBcImJsXCIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IChoIC0gKGJvdW5kaW5nQm94LnkgKyBoIC0gbW91c2VYWS55KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAodyArIChib3VuZGluZ0JveC54IC0gbW91c2VYWS54KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihncmFiYmVkU2lkZSA9PSBcImJyXCIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IChoIC0gKGJvdW5kaW5nQm94LnkgKyBoIC0gbW91c2VYWS55KSAqIDIpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAodyAtIChib3VuZGluZ0JveC54ICsgdyAtIG1vdXNlWFkueCkgKiAyKSArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2tPblJlc2l6ZShlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Wm9uZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRab25lKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3Bab25lKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21ab25lKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0bENvcm5lcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHJDb3JuZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJsQ29ybmVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChickNvcm5lcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9