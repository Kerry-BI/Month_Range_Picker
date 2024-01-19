

(function () {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="popup-background" id="popup-background"></div>

    <div class="popup" id="popup">
            <p>Error, invalid dates selected</p>
            <button id="closePopup">Close</button>
    </div>

    <div class="row" id="Tile" style="width: 99%; height: 85%;">
    <div id="Column3" style="padding: 0px 0px 0px 0px"> 
        <div class="month">
          <ul>  
            <li id="NextButton" class="next">&#10095;</li>
            <li id="nextbuttonText" style="font-size:18px">2023</li>
          </ul>
        </div>

        <div class="months">
          <div class="monthsdiv" id="right_1">Jan</div>
          <div class="monthsdiv" id="right_2">Feb</div>
          <div class="monthsdiv" id="right_3">Mar</div>
          <div class="monthsdiv" id="right_4">Apr</div>
          <div class="monthsdiv" id="right_5">May</div>
          <div class="monthsdiv" id="right_6">Jun</div>
          <div class="monthsdiv" id="right_7">Jul</div>
          <div class="monthsdiv" id="right_8">Aug</div>
          <div class="monthsdiv" id="right_9">Sep</div>
          <div class="monthsdiv" id="right_10">Oct</div>
          <div class="monthsdiv" id="right_11">Nov</div>
          <div class="monthsdiv" id="right_12">Dec</div>
        </div>
      </div> 

      <div id="Column2"> 
        <div class="month">
          <ul>
            <li id="PreviousButton" class="prev">&#10094;</li>
            <li id = "PreviousButtonText" style="font-size:18px">2022</span></li>
          </ul>
        </div>
  
        <div class="months">
          <div class="monthsdiv" id="left_1">Jan</div>
          <div class="monthsdiv" id="left_2">Feb</div>
          <div class="monthsdiv" id="left_3">Mar</div>
          <div class="monthsdiv" id="left_4">Apr</div>
          <div class="monthsdiv" id="left_5">May</div>
          <div class="monthsdiv" id="left_6">Jun</div>
          <div class="monthsdiv" id="left_7">Jul</div>
          <div class="monthsdiv" id="left_8">Aug</div>
          <div class="monthsdiv" id="left_9">Sep</div>
          <div class="monthsdiv" id="left_10">Oct</div>
          <div class="monthsdiv" id="left_11">Nov</div>
          <div class="monthsdiv" id="left_12">Dec</div>
        </div>
      </div> 

      <div id="Column4"> 
        <div class="buttonrow" style="width: 99%; height: 12%;">
          <div id="options">
            <b>Options</b>
          </div> 
            <div id="_YTDButton" class="button">YTD</div>
            <div id="DETButton" class="button">Detail</div>
            <div id="MATButton" class="button">MAT</div>
            <div id="QTDButton" class="button">QTD</div>
            <div id="MQTButton" class="button">MQT</div>
            <div id="MonthButton" class="button">PTD</div>
          </div>
        </div> 
    </div> 
  </div>

  <div id="TileBottom" style="width: 99%; height: 10%;"> 
    <div id ="displayDates"> Select Dates... </div>
    <div id="Apply"><button id="ApplyButton">Apply</button></div> 
    <div id="reset"><button id="ResetButton">Reset</button></div> 
  </div>

  <style>
    /*style of column 3 (apply button, time options)*/
    /* Styles for the popup */
    .popup {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        text-align: center;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    .popup-background {
      display: none;
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #474747;
      opacity: 0;
      transition: all 0.5 linear;
      -webkit-transition: same!
      -moz-transition: same!
      -o-transition: same!
    }
    .popup-background.visible {
      display: block;
      opacity: .6;
    }

    /*style for Apply button*/
    #ApplyButton{
      background-color: #046d9e;
      Color: white;
    }

    #displayDates{
      text-align: center;
      flex: 1;
      font-weight: bold;
    }

    #ApplyButton, #ResetButton{
        margin-left: 10px;   
        margin-right: 20px;
        width: 80%;
        border-radius: 4px;
    }

    #options{
      padding: 3% 10%;
      text-align: center;
      height: 100%;
    }

    .button
    {
      display: inline-block;
      text-align: center;
      width: 100%;
      height: 100%;
      background-color: white;
      font-weight: normal;
    }

    .button.active
    {
    background-color: #046d9e;
    color: white;
    }
   

    #buttonrow
    {
        width:100%;
        text-align: center;
      
    }

    #Tile {
      border-style: solid;
      border-radius: 3px;
      border: 1px solid black;
  }

  #TileBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid black;
    bottom: 0;
}

  #Column2 {
      align-items: center;
      border-left: 1px solid #FF0000;
      float: right;
      text-align: center;
      width: 40%;
      height: 100%;
      border-color: black;
      background-color: white !important;
      
  }
   #Column3 {
      float: right;
      border-left: 1px solid #FF0000;
      width: 40%;
      height: 100%;
      border-color: black;
      background-color: white !important;
      
  }

  #Column4 {
    /*width: 19.8%;*/
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    height: 100%;
    border-color: black;
    background-color: white !important;
    
}


    ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

/* Month header */
.month {
  /* padding: 20px 40px;*/
  width: 100%;
  height: 15%;
  background: #046d9e;
  text-align: center;
}

/* Month list */
.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 3%;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-left: 20%;
}

/* Next button */
.month .next {
  float: right;
  padding-right: 20%;
}

/* Days (1-31) */
.months {
    background: #fff;
    height: 75%;
    margin: 5%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}

.monthsdiv {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 25%;
  text-align: center;
  margin-bottom: 2px;
  font-weight: bold;
  font-size:14px;
  color: #777;
  --x-px: calc(var(--x) * 1px);
  --y-px: calc(var(--y) * 1px);
}

.monthsdiv:hover {
  background-color: rgba(52, 152, 219, 0.5); /* Transparent blue color */
}

/* Highlight the "current" day */
.monthsdiv.active {
  background-color: blue !important; 
  color: white !important;
}

.monthsdiv.periodSelectEndDark {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 0px 15px 15px 0px;
}

.monthsdiv.periodSelectStartLight {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 15px 0px 0px 15px;
}

.monthsdiv.periodSelectStartAndEndDark {
  background-color: #046d9e !important; 
  color: white !important;
}

.monthsdiv.periodSelectBetweenLight {
  background-color: #2ebcff !important; 
  color: white !important;
}

.monthsdiv.periodSelectStartDark {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 15px 0px 0px 15px;
}
</style>
    `
  var left_1, left_2, left_3, left_4, left_5, left_6, left_7, left_8, left_9, left_10, left_11, left_12;
  var right_1, right_2, right_3, right_4, right_5, right_6, right_7, right_8, right_9, right_10, right_11, right_12;
  var currentYear;
  let activeButton = null;
  var months;
  // var MP_MaxAllowedPeriodSelections=12;
  var gPeriodCharLength = 0;
  var MP_gYMStartPeriod; //Holds the start period year range value in YM format
  var MP_gYMEndPeriod;
  var gLimitPeriodSelection = false;
  var monthButtons;


  class MonthPicker2 extends HTMLElement {
    constructor() {
      super()
      //create the shadow root for DOM
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))

      //add event listener onclick for the month picker 
      this.addEventListener("click", event => {
        var event = new Event("onClick");
        this.dispatchEvent(event);
      });

      //variables used through component
      var _YTDButton;
      var QTDButton;
      var MQTButton;
      var MATButton;
      var DetailButton;
      var SingleMonthButton;
      this.activeButton = null;//keeps track of selected options 
      var monthButtons = [];//array that holds the all the month buttons 
      var gDateFormat = "MY";
      this.gStartPeriod = "";
      this.gEndPeriod = "";
      this.applyButton;

      this.ResetActiveButton = "_YTDButton"; // holds the current value of the selected option 

      //initialise funtion to initialise varibles and component on startup
      currentYear = new Date().getFullYear();

      //text area where the selected dates is displayed at bottom of component
      this.gDisplayText = this._shadowRoot.getElementById('displayDates');

      var MP_MaxAllowedPeriodSelections = 12;

      this.nextbuttonText = this._shadowRoot.getElementById('nextbuttonText');
      this.prevoiusbuttonText = this._shadowRoot.getElementById('PreviousButtonText');

      this._YTDButton = this._shadowRoot.getElementById('_YTDButton');
      this._YTDButton.addEventListener('click', this._toggleOptionButton.bind(this, this._YTDButton, this.gDisplayText));
      this.QTDButton = this._shadowRoot.getElementById('QTDButton');
      this.QTDButton.addEventListener('click', this._toggleOptionButton.bind(this, this.QTDButton, this.gDisplayText));
      this.MQTButton = this._shadowRoot.getElementById('MQTButton');
      this.MQTButton.addEventListener('click', this._toggleOptionButton.bind(this, this.MQTButton, this.gDisplayText));
      this.DetailButton = this._shadowRoot.getElementById('DETButton');
      this.DetailButton.addEventListener('click', this._toggleOptionButton.bind(this, this.DetailButton, this.gDisplayText));
      this.SingleMonthButton = this._shadowRoot.getElementById('MonthButton');
      this.SingleMonthButton.addEventListener('click', this._toggleOptionButton.bind(this, this.SingleMonthButton, this.gDisplayText));
      this.MATButton = this._shadowRoot.getElementById('MATButton');
      this.MATButton.addEventListener('click', this._toggleOptionButton.bind(this, this.MATButton, this.gDisplayText));

      this.activeButton = this._YTDButton;

      //month buttons
      left_1 = this._shadowRoot.getElementById('left_1');
      left_2 = this._shadowRoot.getElementById('left_2');
      left_3 = this._shadowRoot.getElementById('left_3');
      left_4 = this._shadowRoot.getElementById('left_4');
      left_5 = this._shadowRoot.getElementById('left_5');
      left_6 = this._shadowRoot.getElementById('left_6');
      left_7 = this._shadowRoot.getElementById('left_7');
      left_8 = this._shadowRoot.getElementById('left_8');
      left_9 = this._shadowRoot.getElementById('left_9');
      left_10 = this._shadowRoot.getElementById('left_10');
      left_11 = this._shadowRoot.getElementById('left_11');
      left_12 = this._shadowRoot.getElementById('left_12');
      right_1 = this._shadowRoot.getElementById('right_1');
      right_2 = this._shadowRoot.getElementById('right_2');
      right_3 = this._shadowRoot.getElementById('right_3');
      right_4 = this._shadowRoot.getElementById('right_4');
      right_5 = this._shadowRoot.getElementById('right_5');
      right_6 = this._shadowRoot.getElementById('right_6');
      right_7 = this._shadowRoot.getElementById('right_7');
      right_8 = this._shadowRoot.getElementById('right_8');
      right_9 = this._shadowRoot.getElementById('right_9');
      right_10 = this._shadowRoot.getElementById('right_10');
      right_11 = this._shadowRoot.getElementById('right_11');
      right_12 = this._shadowRoot.getElementById('right_12');


      //add onlclick event listener to the month buttons 
      left_1.addEventListener('click', this._buttonClicked.bind(this, left_1, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_2.addEventListener('click', this._buttonClicked.bind(this, left_2, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_3.addEventListener('click', this._buttonClicked.bind(this, left_3, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_4.addEventListener('click', this._buttonClicked.bind(this, left_4, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_5.addEventListener('click', this._buttonClicked.bind(this, left_5, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_6.addEventListener('click', this._buttonClicked.bind(this, left_6, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_7.addEventListener('click', this._buttonClicked.bind(this, left_7, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_8.addEventListener('click', this._buttonClicked.bind(this, left_8, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_9.addEventListener('click', this._buttonClicked.bind(this, left_9, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_10.addEventListener('click', this._buttonClicked.bind(this, left_10, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_11.addEventListener('click', this._buttonClicked.bind(this, left_11, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      left_12.addEventListener('click', this._buttonClicked.bind(this, left_12, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_1.addEventListener('click', this._buttonClicked.bind(this, right_1, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_2.addEventListener('click', this._buttonClicked.bind(this, right_2, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_3.addEventListener('click', this._buttonClicked.bind(this, right_3, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_4.addEventListener('click', this._buttonClicked.bind(this, right_4, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_5.addEventListener('click', this._buttonClicked.bind(this, right_5, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_6.addEventListener('click', this._buttonClicked.bind(this, right_6, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_7.addEventListener('click', this._buttonClicked.bind(this, right_7, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_8.addEventListener('click', this._buttonClicked.bind(this, right_8, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_9.addEventListener('click', this._buttonClicked.bind(this, right_9, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_10.addEventListener('click', this._buttonClicked.bind(this, right_10, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_11.addEventListener('click', this._buttonClicked.bind(this, right_11, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));
      right_12.addEventListener('click', this._buttonClicked.bind(this, right_12, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText));

      months = this._shadowRoot.getElementById('months');

      this._root = this._shadowRoot.getElementById('column2');

      this._nextButton = this._shadowRoot.getElementById('NextButton').addEventListener("click", this._incrementYear.bind(this, this._shadowRoot.getElementById('nextbuttonText'), this._shadowRoot.getElementById('PreviousButtonText'), this.gDisplayText));
      this._previousButton = this._shadowRoot.getElementById('PreviousButton').addEventListener("click", this._decrementYear.bind(this, this._shadowRoot.getElementById('nextbuttonText'), this._shadowRoot.getElementById('PreviousButtonText'), this.gDisplayText));


      //var applyButton;
      var resetButton;
      //apply and reset buttons event listeners
      this.applyButton = this._shadowRoot.getElementById("ApplyButton");
      this.applyButton.addEventListener("click", this._submitApply.bind(this, this.gDisplayText));
      resetButton = this._shadowRoot.getElementById("ResetButton").addEventListener("click", this._submitReset.bind(this));

      //pop up buttons  event listeners
      this.popup = this._shadowRoot.getElementById("popup");
      this.closePopupButton = this._shadowRoot.getElementById("closePopup").addEventListener('click', this._closePopup.bind(this));
      this.popupBackground = this._shadowRoot.getElementById("popup-background");

      var monthButtonsArray = [left_1, left_2, left_3, left_4, left_5, left_6, left_7, left_8, left_9, left_10, left_11, left_12,
        right_1, right_2, right_3, right_4, right_5, right_6, right_7, right_8, right_9, right_10, right_11, right_12];

      this.init(monthButtonsArray);
      this._setDefaultTime();

      this._props = {};
      //this._toggleOptionButton(_YTDButton,this.gDisplayText);
      // this.render()
    }

    //initialise variables 
    init(monthButtonsArray) {
      this.monthButtons = monthButtonsArray;
      this.MP_MaxAllowedPeriodSelections = 12
    }

    //change the selected time period option
    _toggleOptionButton(button1) {
      this._clearSelections(this.gDisplayText);
      if (this.activeButton !== null) {
        this.activeButton.classList.remove("active");
      }
      if (this.activeButton !== button1) {
        button1.classList.add("active");
        this.activeButton = button1;
      } else {
        this.activeButton = null;
      }
    }

    //called when a month button is clicked 
    _buttonClicked(ButtonName, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      if (this.activeButton.id === "MonthButton") {
        this._setSinglePeriod(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
        this._setDateText(this.gDisplayText);
      }
      else if (this.activeButton.id === "_YTDButton") {
        this._changeState_YTD(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
      else if (this.activeButton.id === "MQTButton") {
        this._changeState_MQT(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
        this._setDateText(this.gDisplayText);
      }
      else if (this.activeButton.id === "QTDButton") {
        this._changeState_QTD(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
        this._setDateText(this.gDisplayText);
      }
      else if (this.activeButton.id === "DETButton") {
        if (this.MP_MaxAllowedPeriodSelections === 1) {
          // set the max allowed weeks param to 0 to prevent a call loop
          this.MP_MaxAllowedPeriodSelections = 0;
          MP_Scripts.setSinglePeriod(thisButton);
          // now set it back again to 1
          this.MP_MaxAllowedPeriodSelections = -1;
        } else {
          this._changeState(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          this._setDateText(this.gDisplayText);
        }
      }
      else if (this.activeButton.id === "MATButton") {
        this._changeState_MAT(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
        this._setDateText(this.gDisplayText);
      };
    }

    //set the default text for right andf left year 
    _setDefaultTime() {
      //get current year and set it as right . set the left year to the right -1 
      var currentTime = new Date();
      var year = currentTime.getFullYear();
      var prevYear = (currentTime.getFullYear() - 1);
      this.prevoiusbuttonText.innerText = prevYear;
      this.nextbuttonText.innerText = year;
    }

    _clearPeriodCSS() {
      //clear all the css 
      for (var i = 0; i < this.monthButtons.length; i++) {
        this.monthButtons[i].className = "monthsdiv";
        this.monthButtons[i].style.visibility = 'visible';
      }
    }

    _clearSelections(gDisplayText) {
      this._clearPeriodCSS();
      this.gStartPeriod = "";
      this.gEndPeriod = "";
      this.gDisplayText.innerText = "Select dates...";
    }

    _submitReset(e) {
      console.log("SUBMIT RESET CLICKED + "+ this.ResetActiveButton)
      e.preventDefault();
      this.dispatchEvent(new CustomEvent("propertiesChanged", {
        detail: {
          properties: {
            selectedTimeFrame: this.ResetActiveButton,
            startPeriod: this.startPeriod,
            endPeriod: this.endPeriod,
            startMonth: this.startMonth,
            startYear: this.startYear,
            endMonth: this.endMonth,
            endYear: this.endYear,
            selectedAction: "Reset",

          }
        }
      }));

    }


    //called when the active button is Detail. called from function buttonClicked
    _setSinglePeriod(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      this.gStartPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
      var delimiterPosition = this.gStartPeriod.indexOf(".");
      this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);


      MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
      MP_gYMEndPeriod = this.gEndPeriod.substring(delimiterPosition + 1, this.gEndPeriod.length) + "." + this.gEndPeriod.substring(0, delimiterPosition);

      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") { // <-- start is populated so fill end
        this._clearPeriodCSS();
        thisButton.classList.add("periodSelectStartAndEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
      }
    }

    _changeState_MAT(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      this._clearPeriodCSS();

      //end period = last month 
      this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
      this.gStartPeriod = "01" + "." + this.gEndPeriod.split(".")[1];

      var period = parseInt(this.gEndPeriod.split(".")[0]);
      var year = parseInt(this.gEndPeriod.split(".")[1]);

      if (period === 12) {
        this.gStartPeriod = "001" + "." + (year).toString();
      }
      else {
        this.gStartPeriod = "00" + (period + 1).toString() + "." + (year - 1).toString();
        //	gStartPeriod = gStartPeriod.substring(gStartPeriod.length - gPeriodCharLength);
      }
      var delimiterPosition = this.gStartPeriod.indexOf(".");

      MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
      MP_gYMEndPeriod = this.gEndPeriod.substring(delimiterPosition + 1, this.gEndPeriod.length) + "." + this.gEndPeriod.substring(0, delimiterPosition);

      //APPLICATION.createErrorMessage(gStartPeriod + "->" + gEndPeriod);

      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        // <-- start is populated so fill end

        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
    }

    //function to change the state of the month picker to accomodate YTD selections
    _changeState_YTD(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      //clear all the css 
      this._clearPeriodCSS();

      this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);

      this.gStartPeriod = ("001" + "." + this.gEndPeriod.split(".")[1]);
      this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
      var delimiterPosition = this.gStartPeriod.indexOf(".");

      MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);


      //sets the css of the start month
      if (thisButton.id.includes("right")) {
        this.monthButtons[12].classList.add("periodSelectStartLight");
      } else {
        this.monthButtons[0].classList.add("periodSelectStartLight");
      }
      var populatedPeriods = this._checkPopulatedPeriods();
      if (populatedPeriods === "both") {
        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }

    }

    //function to change the state of the month picker to accomodate MQT selections
    _changeState_MQT(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      //clear all the css 
      this._clearPeriodCSS();
      this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);

      var period = parseInt(this.gEndPeriod.split(".")[0]);
      var year = parseInt(this.gEndPeriod.split(".")[1]);

      if (period >= 3) {
        this.gStartPeriod = "00" + (period - 2).toString() + "." + (year).toString();
      } else {
        var temp = 0;
        if (period === 1) {
          temp = 1;
        } else if (period === 2) {
          temp = 0;
        }
        this.gStartPeriod = "00" + (12 - temp).toString() + "." + (year - 1).toString();
      }

      this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
      this.gEndPeriod = this.gEndPeriod.substring(this.gEndPeriod.length, gPeriodCharLength);

      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
    }

    //called when QTD is picked and date is updated 
    _changeState_QTD(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      this._clearPeriodCSS();

      var buttonName = thisButton.id;
      var year = "";
      var selectedPeriod = parseInt(buttonName.split("_")[1]);


      if (buttonName.indexOf("left") !== -1) {
        year = this.prevoiusbuttonText.innerText || this.prevoiusbuttonText.textContent
      } else {
        year = this.nextbuttonText.innerText || this.nextbuttonText.textContent
      }

      if (selectedPeriod >= 1 && selectedPeriod <= 3) {
        this.gStartPeriod = "00" + "1" + "." + year;
        this.gEndPeriod = "00" + "3" + "." + year;
      } else if (selectedPeriod >= 4 && selectedPeriod <= 6) {
        this.gStartPeriod = "00" + "4" + "." + year;
        this.gEndPeriod = "00" + "6" + "." + year;
      } else if (selectedPeriod >= 7 && selectedPeriod <= 9) {
        this.gStartPeriod = "00" + "7" + "." + year;
        this.gEndPeriod = "00" + "9" + "." + year;
      } else if (selectedPeriod >= 10 && selectedPeriod <= 12) {
        this.gStartPeriod = "00" + "10" + "." + year;
        this.gEndPeriod = "00" + "12" + "." + year;
      }

      this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
      this.gEndPeriod = this.gEndPeriod.substring(this.gEndPeriod.length, gPeriodCharLength);

      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        // <-- start is populated so fill end
        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }

    }

    //function to set the css of the selected months range 
    _setCSSBetween(gDisplayText, prevoiusbuttonText, nextbuttonText) {
      this._clearPeriodCSS();
      this._setDateText(this.gDisplayText);

      if (this.gDisplayText.innerText !== "Select Dates...") {
        var startPeriodSelection = this.gDisplayText.innerText.split(" -> ")[0];
        var endPeriodSelection = this.gDisplayText.innerText.split(" -> ")[1];
        startPeriodSelection = startPeriodSelection.trim();

        var startYear = "";
        var startPeriod = "";
        var endYear = "";
        var endPeriod = "";
        var action = "";

        var startButtonString = "none";
        var endButtonString = "none";

        if (endPeriodSelection === "select end") {
          // just do the start CSS assignment
          startYear = startPeriodSelection.split(".")[1];
          startPeriod = startPeriodSelection.split(".")[0];
          endYear = "";
          endPeriod = "";
          action = "start";

          if (this.prevoiusbuttonText.innerText === startYear) {
            startButtonString = "left";
          } else if (this.nextbuttonText.innerText === startYear) {
            endButtonString = "right";
          }
        } else {
          startYear = startPeriodSelection.split(".")[1];
          startPeriod = startPeriodSelection.split(".")[0];
          endYear = endPeriodSelection.split(".")[1];
          endPeriod = endPeriodSelection.split(".")[0];
          action = "both";

          if (this.prevoiusbuttonText.innerText.includes(startYear)) {
            startButtonString = "left";
          } else if (this.nextbuttonText.innerText.includes(startYear)) {
            startButtonString = "right";
          }
          if (this.nextbuttonText.innerText === endYear) {
            endButtonString = "right";
          } else if (this.prevoiusbuttonText.innerText === endYear) {
            endButtonString = "left";
          }

          if (action === "start") {
            for (var i = 0; i < this.monthButtons.length; i++) {
              var temp2 = this.monthButtons[i].id;
              if (temp2.includes(startButtonString) && parseInt(temp2.split("_")[1]) === parseInt(startPeriod)) {
                this.monthButtons[i].classList.add("periodSelectStartDark");
              } else {
                this.monthButtons[i].className = "monthsdiv"; //might be different code ??
              }
            }
          } else if (action === "both") {
            for (var j = 0; j < this.monthButtons.length; j++) {
              var temp = this.monthButtons[j].id;
              if (this.monthButtons[j].className === "periodSelectableBold") {
                this.monthButtons[j].className = "monthsdiv";
              }
              if (
                temp.includes(startButtonString) &&
                parseInt(temp.split("_")[1]) === parseInt(startPeriod) &&
                startPeriodSelection === endPeriodSelection
              ) {
                this.monthButtons[j].classList.add("periodSelectStartAndEndDark");
              } else if (
                temp.includes(startButtonString) &&
                parseInt(temp.split("_")[1]) === parseInt(startPeriod)
              ) {
                this.monthButtons[j].classList.add("periodSelectStartDark");
              } else if (
                temp.includes(endButtonString) &&
                parseInt(temp.split("_")[1]) === parseInt(endPeriod)
              ) {
                this.monthButtons[j].classList.add("periodSelectEndDark");
              } else if (
                parseInt(this.prevoiusbuttonText.innerText) > parseInt(startYear) &&
                parseInt(this.prevoiusbuttonText.innerText) < parseInt(endYear) &&
                temp.includes("left")
              ) {
                this.monthButtons[j].classList.add("periodSelectBetweenLight");
              } else if (
                parseInt(this.nextbuttonText.innerText) > parseInt(startYear) &&
                parseInt(this.nextbuttonText.innerText) < parseInt(endYear) &&
                temp.includes("right")
              ) {
                this.monthButtons[j].classList.add("periodSelectBetweenLight");
              } else if (
                temp.includes(startButtonString) &&
                parseInt(startYear) === parseInt(endYear) &&
                parseInt(temp.split("_")[1]) > parseInt(startPeriod) &&
                parseInt(temp.split("_")[1]) < parseInt(endPeriod)
              ) {
                this.monthButtons[j].classList.add("periodSelectBetweenLight");
              } else if (
                temp.includes(startButtonString) &&
                parseInt(startYear) !== parseInt(endYear) &&
                parseInt(temp.split("_")[1]) > parseInt(startPeriod)
              ) {
                this.monthButtons[j].classList.add("periodSelectBetweenLight");
              } else if (
                temp.includes(endButtonString) &&
                parseInt(startYear) !== parseInt(endYear) &&
                parseInt(temp.split("_")[1]) < parseInt(endPeriod)
              ) {
                this.monthButtons[j].classList.add("periodSelectBetweenLight");
              }
            }

          }

        }
      }
    }


    //sets what buttons can and cant be clicked then the option is Deatil. max of 12 months left or right of chosen month can be selected 
    _toggleLimitPeriodSelection(prevoiusbuttonText, nextbuttonText) {
      if (this.activeButton.id === "DETButton" && this.MP_MaxAllowedPeriodSelections > 0 && this.gStartPeriod !== "" && this.gEndPeriod === "") {
        gLimitPeriodSelection = true;
      }
      else {
        gLimitPeriodSelection = false;
        this._enableAllPeriods();
      }


      if (gLimitPeriodSelection === true) {
        // enable everything then disable what is not allowed
        this._enableAllPeriods();

        var yearPeriodArray = this._calcMonthsYears(this.MP_MaxAllowedPeriodSelections);
        var minMaxPeriodArray = this._calcPeriodOffset(this.gStartPeriod, yearPeriodArray[0], yearPeriodArray[1]);
        var minAllowedPeriodYear = minMaxPeriodArray[0];
        var maxAllowedPeriodYear = minMaxPeriodArray[1];
        var sMinYear = minAllowedPeriodYear.split(".")[1];
        var sMinPeriod = "0" + minAllowedPeriodYear.split(".")[0];


        sMinPeriod = sMinPeriod.substring(sMinPeriod.length - 2, sMinPeriod.length);

        var iMinYearPeriod = parseInt((sMinYear + sMinPeriod));
        var sMaxYear = maxAllowedPeriodYear.split(".")[1];
        var sMaxPeriod = "0" + maxAllowedPeriodYear.split(".")[0];

        sMaxPeriod = sMaxPeriod.substring(sMaxPeriod.length - 2, sMaxPeriod.length);

        var iMaxYearPeriod = parseInt(sMaxYear + sMaxPeriod);
        var sSelectedPeriod = "0" + this.gStartPeriod.split(".")[0];

        sSelectedPeriod = sSelectedPeriod.substring(sSelectedPeriod.length - 2, sSelectedPeriod.length);


        for (var i = 0; i < this.monthButtons.length; i++) {
          var elementYear = "";
          var elementPeriod = "0" + this.monthButtons[i].id.split("_")[1];
          var elementYearPeriod = 0;

          if (this.monthButtons[i].id.indexOf("left") !== -1) {
            elementYear = this.prevoiusbuttonText.innerText;
          } else {
            elementYear = this.nextbuttonText.innerText;
          }

          elementPeriod = elementPeriod.substring(elementPeriod.length - 2, elementPeriod.length);
          elementYearPeriod = parseInt(elementYear + elementPeriod);


          if (elementYearPeriod > iMinYearPeriod && elementYearPeriod < iMaxYearPeriod) {
            this.monthButtons[i].style.visibility = 'visible';
            if (/*monthButtons[i].getCssClass() === ""*/this.monthButtons[i].className === "") {
              //monthButtons[i].setCssClass("periodSelectableBold2");
              this.monthButtons[i].classList.add("");
            }
          } else {
            this.monthButtons[i].style.visibility = 'hidden';
          }
        }
      }
    }

    _calcPeriodOffset(periodYear, numYears, numPeriods) {
      var result = [""];
      result.pop();

      var year = parseInt(periodYear.split(".")[1]);
      var period = parseInt(periodYear.split(".")[0]);

      var maxYear = year + numYears;
      var minYear = year - numYears;

      var maxPeriod = period + numPeriods;
      var minPeriod = period - numPeriods;

      if (maxPeriod > 12) {
        maxPeriod = maxPeriod - 12;
        maxYear = maxYear + 1;
      }

      if (minPeriod < 1) {
        if (minPeriod < 0) {
          minPeriod = minPeriod * -1;
        }
        minPeriod = 12 - minPeriod;
        minYear = minYear - 1;
      }

      var minPeriodYear = (minPeriod).toString() + "." + (minYear).toString();
      var maxPeriodYear = (maxPeriod).toString() + "." + (maxYear).toString();

      //APPLICATION.createErrorMessage("startPeriodYear: " + periodYear);
      //APPLICATION.createErrorMessage("minPeriodYear: " + minPeriodYear);
      //APPLICATION.createErrorMessage("maxPeriodYear: " + maxPeriodYear);

      result.push(minPeriodYear);
      result.push(maxPeriodYear);


      return result;
    }

    _calcMonthsYears(numberOfMonths) {
      var result = [0];

      result.pop();

      var years = 0;
      var months = 0;

      //numberOfMonths = numberOfMonths - 1;

      if (numberOfMonths >= 0) {
        years = Math.floor(numberOfMonths / 12);
        months = numberOfMonths - years * 12;
      }


      result.push(years);
      result.push(months);

      return result;
    }

    _enableAllPeriods() {
      for (var i = 0; i < this.monthButtons.length; i++) {
        this.monthButtons[i].style.visibility = 'visible';
      }
    }

    _fillBetweenCSS(gDisplayText, prevoiusbuttonText, nextbuttonText) {
      var startPeriod = parseInt(this.gStartPeriod.split(".")[0]);
      var startYear = parseInt(this.gStartPeriod.split(".")[1]);

      var endPeriod = parseInt(this.gEndPeriod.split(".")[0]);
      var endYear = parseInt(this.gEndPeriod.split(".")[1]);

      var delimiterPosition = this.gStartPeriod.indexOf(".");
      var startZero = "0";
      var endZero = "0";

      if (startPeriod >= 10) {
        startZero = "";
      }

      if (endPeriod >= 10) {
        endZero = "";
      }

      var intStartPeriod = parseInt((startYear).toString() + startZero + (startPeriod).toString());
      var intEndPeriod = parseInt((endYear).toString() + endZero + (endPeriod).toString());

      var temp = "";

      // swap start and end if out of order
      if (intStartPeriod > intEndPeriod) {
        temp = this.gStartPeriod;
        this.gStartPeriod = this.gEndPeriod;
        this.gEndPeriod = temp;
      }

      this._setDateText(this.gDisplayText);

      if (this.activeButton.id === "DETButton") {
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "_YTDButton") {
        this._setCSSBetween_YTD(this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "MATButton") {
        this._setCSSBetween_MAT(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "QTDButton") {
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "MQTButton") {
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
    }

    //function called when the option MAT is clicked and a range is selected 
    _setCSSBetween_MAT(gDisplayText, prevoiusbuttonText, nextbuttonText) {

      var leftYear = parseInt(this.prevoiusbuttonText.innerText);
      var rightYear = parseInt(this.nextbuttonText.innerText);

      var startYear = parseInt(
        this.gDisplayText.innerText.split(" -> ")[0].split(".")[1]
      );
      var endYear = parseInt(
        this.gDisplayText.innerText.split(" -> ")[1].split(".")[1]
      );


      var startPeriod = parseInt(
        this.gDisplayText.innerText.split(" -> ")[0].split(".")[0]
      );
      var endPeriod = parseInt(
        this.gDisplayText.innerText.split(" -> ")[1].split(".")[0]
      );

      var leftAction = "";
      var rightAction = "";

      if (leftYear === startYear && leftYear === endYear) {
        leftAction = "both";
      } else if (leftYear === startYear) {
        leftAction = "start";
      } else if (leftYear === endYear) {
        leftAction = "end";
      } else {
        leftAction = "nothing";
      }

      if (rightYear === startYear && rightYear === endYear) {
        rightAction = "both";
      } else if (rightYear === startYear) {
        rightAction = "start";
      } else if (rightYear === endYear) {
        rightAction = "end";
      } else {
        rightAction = "nothing";
      }



      for (var i = 0; i < this.monthButtons.length; i++) {
        var temp = this.monthButtons[i].id;
        var buttonPeriod = parseInt(temp.split("_")[1]);
        if (temp.indexOf("left") !== -1) {
          if (leftAction === "start") {
            if (buttonPeriod < startPeriod) {
            } else if (buttonPeriod === startPeriod) {
              this.monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod > startPeriod) {
              this.monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          } else if (leftAction === "end") {
            if (buttonPeriod < endPeriod) {
              this.monthButtons[i].classList.add("periodSelectBetweenLight");
            } else if (buttonPeriod === endPeriod) {
              this.monthButtons[i].classList.add("periodSelectEndDark");
            } else if (buttonPeriod > endPeriod) {
            }
          } else if (leftAction === "both") {
            if (buttonPeriod === 1) {
              this.monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod === 12) {
              this.monthButtons[i].classList.add("periodSelectEndDark");
            } else {
              this.monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          }
        } else {
          if (rightAction === "start") {
            if (buttonPeriod < startPeriod) {
            } else if (buttonPeriod === startPeriod) {
              this.monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod > startPeriod) {
              this.monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          } else if (rightAction === "end") {
            if (buttonPeriod < endPeriod) {
              this.monthButtons[i].classList.add("periodSelectBetweenLight");
            } else if (buttonPeriod === endPeriod) {
              this.monthButtons[i].classList.add("periodSelectEndDark");
            } else if (buttonPeriod > endPeriod) {
            }
          } else if (rightAction === "both") {
            if (buttonPeriod === 1) {
              this.monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod === 12) {
              this.monthButtons[i].classList.add("periodSelectEndDark");
            } else {
              this.monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          }
        }
      }

    }

    _setCSSBetween_YTD(prevoiusbuttonText, nextbuttonText) {
      var period = this.gEndPeriod.split(".")[0];
      var year = this.gEndPeriod.split(".")[1];

      var buttonString = "none";

      if (this.prevoiusbuttonText.innerText === year) {
        buttonString = "left";
      } else if (this.nextbuttonText.innerText === year) {
        buttonString = "right";
      }

      for (var i = 0; i < this.monthButtons.length; i++) {
        var temp = this.monthButtons[i].id;

        if (temp.indexOf(buttonString) !== -1 && parseInt(period) === 1 && parseInt(temp.split("_")[1]) === 1) {
          this.monthButtons[i].classList.add("periodSelectStartAndEndDark");
        } else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) === 1
        ) {
          this.monthButtons[i].classList.add("periodSelectStartLight");
        } else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) > parseInt(period)
        ) {
        } else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) !== parseInt(period)
        ) {
          this.monthButtons[i].classList.add("periodSelectBetweenLight");
        } else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) === parseInt(period)
        ) {
          this.monthButtons[i].classList.add("periodSelectEndDark");
        } else {
        }
      }
    }

    _changeState(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      var delimiterPosition = this.gStartPeriod.indexOf(".");
      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        // <-- both are populated so start again
        // clear the variables, the selection text, reset the CSS and the next CSS class to be applied
        this._clearPeriodCSS();
        this.gStartPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
        delimiterPosition = this.gStartPeriod.indexOf(".");
        this.gEndPeriod = "";
        MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
        MP_gYMEndPeriod = "";
        thisButton.classList.add("periodSelectStartDark");
      }
      else if (populatedPeriods === "start") {
        // <-- start is populated so fill end
        thisButton.classList.add("periodSelectEndDark")
        this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
        delimiterPosition = this.gEndPeriod.indexOf(".");
        MP_gYMEndPeriod = this.gEndPeriod.substring(delimiterPosition + 1, this.gEndPeriod.length) + "." + this.gEndPeriod.substring(0, delimiterPosition);

        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
      else if (populatedPeriods === "") {
        // <-- nothing is populated so start again
        this.gStartPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
        delimiterPosition = this.gStartPeriod.indexOf(".");
        MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
        thisButton.classList.add("periodSelectStartDark");
      }
      this._toggleLimitPeriodSelection(this.prevoiusbuttonText, this.nextbuttonText);

    }

    //formats the period into the right format depedning on the button picked 
    _getSelectedPeriod(thisButton, prevoiusbuttonText, nextbuttonText) {
      var buttonName = thisButton.id;
      var selectedPeriod = buttonName.split("_")[1];
      var year = "";
      var periodYear = "";

      if (buttonName.indexOf("left") !== -1) {
        year = this.prevoiusbuttonText.innerText || this.prevoiusbuttonText.textContent
      } else {
        year = this.nextbuttonText.innerText || this.nextbuttonText.textContent
      }

      periodYear = "00" + selectedPeriod + "." + year;
      periodYear = periodYear.substring(periodYear.length, gPeriodCharLength);
      //APPLICATION.createErrorMessage(buttonName + " - " + periodYear);
      return periodYear;
    }

    _setDateText(gDisplayText) {
      var populatedPeriods = this._checkPopulatedPeriods();
      if (populatedPeriods === "both") {
        if (this.gDateFormat === "MY") {
          // DatesPickedText_MP.applyText(gStartPeriod + "  ->  " + gEndPeriod);
        } else {
          //  DatesPickedText_MP.applyText(gYMStartPeriod + "  ->  " + gYMEndPeriod);
        }
        this.gDisplayText.innerText = this.gStartPeriod + "  ->  " + this.gEndPeriod;

        this.dispatchEvent(new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              startPeriod: this.startPeriod,
              endPeriod: this.endPeriod,
              startMonth: this.startMonth,
              startYear: this.startYear,
              endMonth: this.endMonth,
              endYear: this.endYear,
             // selectedTimeFrame: this.selectedTimeFrame
            }
          }
        }));
      }
      else if (populatedPeriods === "start") {
        if (this.gDateFormat === "MY") {
          //  DatesPickedText_MP.applyText(gStartPeriod + "  ->  " + "select end");
        } else {
          //  DatesPickedText_MP.applyText(gYMStartPeriod + "  ->  " + "select end");
        }
        this.gDisplayText.innerText = this.gStartPeriod + "  ->  " + "select end";
      }
      else if (populatedPeriods === "") {
        //DatesPickedText_MP.applyText("Select Dates...");
        this.gDisplayText.innerText = "Select Dates...";
      }

    }

    _checkPopulatedPeriods() {
      var result = "";
      if (this.gStartPeriod !== "" && this.gEndPeriod !== "") {
        result = "both";
      } else if (this.gEndPeriod !== "") {
        result = "end";
      } else if (this.gStartPeriod !== "") {
        result = "start";
      } else {
        result = "";
      }
      return result;
    }

    //called when apply button is clicked
    _submitApply(gDisplayText, e) {
      if (this.startPeriod !== "" && this.endPeriod !== "") {
        this.ResetActiveButton = this.activeButton.id
      } else {
        this.ResetActiveButton = "_YTDButton";
      }
      e.preventDefault();

      if (this.gDisplayText === "Select dates" || this.gEndPeriod === "select end" || this.gEndPeriod === "") {
        //display error popup 
        this._showPopup();
      } else {
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              startPeriod: this.startPeriod,
              endPeriod: this.endPeriod,
              startMonth: this.startMonth,
              startYear: this.startYear,
              endMonth: this.endMonth,
              endYear: this.endYear,
              selectedAction: "Apply",
              selectedTimeFrame: this.selectedTimeFrame
            }
          }
        }));
      }
    }

    get startPeriod() {
      return this.gStartPeriod;
    }

    get endPeriod() {
      return this.gEndPeriod;
    }
    get startMonth() {
      return this._getMonth(this.gStartPeriod);
    }
    get endMonth() {
      return this._getMonth(this.gEndPeriod);
    }
    get startYear() {
      return this._getYear(this.gStartPeriod);
    }
    get selectedTimeFrame() {
      return this.activeButton.id;
    }


    get endYear() {
      return this._getYear(this.gEndPeriod);
    }
    get activeButtonID() {
      return this.activeButton.id;
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };
    }

    onCustomWidgetAfterUpdate(changedProperties, gDisplayText, prevoiusbuttonText, nextbuttonText) {

      if ("showApplyButton" in changedProperties) {
        var temp = changedProperties["showApplyButton"];
        if (temp === true) {
          this.applyButton.style.visibility = 'visible';
        } else {
          this.applyButton.style.visibility = 'hidden';
        }
      }

      // if ("color" in changedProperties) {
      //   this.dispatchEvent(new CustomEvent("propertiesChanged", {
      //     detail: {
      //       properties: {
      //         startPeriod: this.gStartPeriod,
      //         endPeriod: this.gEndPeriod,
      //         startMonth: this.startMonth,
      //         startYear: this.startYear,
      //         endMonth: this.endMonth,
      //         endYear: this.endYear,
      //         selectedTimeFrame: this.selectedTimeFrame
      //       }
      //     }
      //   }));
      //   // this._setCSSBetween(this.gDisplayText,this.prevoiusbuttonText,this.nextbuttonText);
      //   this.click();

      // }
      if ("startPeriod" in changedProperties) {
        this.gStartPeriod = changedProperties["startPeriod"];
        // this._toggleOptionButton(changedProperties["selectedTimeFrame"],this.gDisplayText)
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);

      }

      if ("endPeriod" in changedProperties) {
        console.log("END PERIOD SELECTED ");
        this.gEndPeriod = changedProperties["endPeriod"];
        // this._toggleOptionButton(changedProperties["selectedTimeFrame"],this.gDisplayText)
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);

        this.dispatchEvent(new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              startPeriod: this.startPeriod,
              endPeriod: this.endPeriod,
              startMonth: this.startMonth,
              startYear: this.startYear,
              endMonth: this.endMonth,
              endYear: this.endYear,
              //selectedTimeFrame: this.selectedTimeFrame
            }
          }
        }));

        console.log("NEW START AND END  = "+ this.startPeriod +" - "+ this.endPeriod);
      }

      if ("selectedTimeFrame" in changedProperties) {
        
        var time = changedProperties["selectedTimeFrame"];
        console.log("SELECTED TIME FRAME IN CHANGED PROPS. = "+ time);
        if (time === "_YTDButton") {
          this._updateSelectedOptionOnResetAction(this._YTDButton);
        } else if (time === "DETButton") {
          this._updateSelectedOptionOnResetAction(this.DetailButton);
        } else if (time === "MATButton") {
          this._updateSelectedOptionOnResetAction(this.MATButton);
        } else if (time === "QTDButton") {
          this._updateSelectedOptionOnResetAction(this.QTDButton);
        } else if (time === "MQTButton") {
          this._updateSelectedOptionOnResetAction(this.MQTButton);
        } else if (time === "MonthButton") {
          this._updateSelectedOptionOnResetAction(this.SingleMonthButton);
        } else {
        }
      }

      //only do if apply button is hidden and you want to apply the new dates range

      if ("selectedAction" in changedProperties) {

        //check if start and end period are okay here 
        var temp = changedProperties["selectedAction"]
        //call _submit function 
        if (temp === "submit") {

          if (this.startPeriod !== "" && this.endPeriod !== "") {
            this.ResetActiveButton = this.activeButton.id
          } else {
            this.ResetActiveButton = "_YTDButton";
          }

          if (this.gDisplayText === "Select dates" || this.gEndPeriod === "select end" || this.gEndPeriod === "") {
            //display error popup 
            this._showPopup();
          } else {
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
              detail: {
                properties: {
                  startPeriod: this.startPeriod,
                  endPeriod: this.endPeriod,
                  startMonth: this.startMonth,
                  startYear: this.startYear,
                  endMonth: this.endMonth,
                  endYear: this.endYear,
                  selectedTimeFrame: this.selectedTimeFrame
                }
              }
            }));
          }

        } else if (temp === "Reset") {
          changedProperties["selectedTimeFrame"] = this.ResetActiveButton
          //var time = this.selectedTimeFrame//changedProperties["selectedTimeFrame"];
          var time = this.ResetActiveButton;
          if (time === "_YTDButton") {
            this._updateSelectedOptionOnResetAction(this._YTDButton);
          } else if (time === "DETButton") {
            this._updateSelectedOptionOnResetAction(this.DetailButton);
          } else if (time === "MATButton") {
            this._updateSelectedOptionOnResetAction(this.MATButton);
          } else if (time === "QTDButton") {
            this._updateSelectedOptionOnResetAction(this.QTDButton);
          } else if (time === "MQTButton") {
            this._updateSelectedOptionOnResetAction(this.MQTButton);
          } else if (time === "MonthButton") {
            this._updateSelectedOptionOnResetAction(this.SingleMonthButton);
          } else {

          }

          this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
              properties: {
                //selectedTimeFrame: this.gPlaceholderActiveButton,
                startPeriod: this.startPeriod,
                endPeriod: this.endPeriod,
                startMonth: this.startMonth,
                startYear: this.startYear,
                endMonth: this.endMonth,
                endYear: this.endYear,


              }
            }
          }));
        }

      }
      // if ("selectedTimeFrame" in changedProperties) {
      //   var temp;
      //   console.log("selectedTimeFramein changed properties: "+changedProperties["selectedTimeFrame"]);
      //   temp=changedProperties["selectedTimeFrame"];
      //   console.log(temp);
      //   //setCSSBetween();
      // }

    }



    _updateSelectedOptionOnResetAction(button1) {
      if (this.activeButton !== null) {
        this.activeButton.classList.remove("active");
      }
      if (this.activeButton !== button1) {
        button1.classList.add("active");
        this.activeButton = button1;
      } else {
        //this.activeButton = null;
        button1.classList.add("active");
      }
    }

    // decreases the year range by one
    _decrementYear(next, previous, gDisplayText) {
      currentYear = currentYear - 1;
      next.innerText = currentYear;
      previous.innerText = currentYear - 1;
      this._clearPeriodCSS();
      this._yearButtonCSS(this.gDisplayText, previous, next);
      this._toggleLimitPeriodSelection(previous, next);
    }

    _incrementYear(next, previous, gDisplayText) {
      currentYear = currentYear + 1;
      next.innerText = currentYear;
      previous.innerText = currentYear - 1;
      this._clearPeriodCSS();
      this._yearButtonCSS(this.gDisplayText, previous, next);
      this._toggleLimitPeriodSelection(previous, next);
    }

    _yearButtonCSS(gDisplayText, prevoiusbuttonText, nextbuttonText) {
      this._clearPeriodCSS();
      if (this.activeButton.id === "MATButton") {
        this._setCSSBetween_MAT(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "_YTDButton") {
        this._setCSSBetween_YTD(this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "DETButton") {
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "MonthButton") {
        this._setCSSBetween_SinglePeriod(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "QTDButton") {
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      } else if (this.activeButton.id === "MQTButton") {
        this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
    }

    _getMonth(startperiod) {
      var result = "";
      var inputString = startperiod;
      var regex = /(.{3})\./; // This regex captures the first 3 characters before a dot (.)

      var match = inputString.match(regex);

      if (match) {
        result = match[1]; // Get the first captured group
      } else {
      }
      return result;
    }

    _getYear(endperiod) {
      var result = "";
      var inputString = endperiod;
      var regex = /\.(.{4})/; // This regex matches a period followed by any 4 characters

      var match = regex.exec(inputString);

      if (match) {
        result = match[1];
      } else {
        console.log("No match found.");
      }
      return result;
    }

    //functions to open and close popup when apply is selected but the dates are invalid
    _showPopup() {
      this.popup.style.display = "block";
      this.popupBackground.classList.add("visible")
    }

    _closePopup() {
      this.popup.style.display = "none";
      this.popupBackground.classList.remove("visible")
    }

    onCustomWidgetResize(width, height) {
      this.render()
    }

    async render() {
      //this.dispose()
    }

    dispose() {

    }
  }
  customElements.define('month-picker2-main', MonthPicker2)
})()