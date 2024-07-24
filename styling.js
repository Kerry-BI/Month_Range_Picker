(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="applyButtonForm">
		
		<fieldset>
		<legend>Show or Hide Apply Button</legend>
		<label for="applyButtonOption">Show Apply Button:</label>
			<select name="applyButtonOption" id="applyButtonOption">
			<option value=true selected>true</option>	
			<option value=false>false</option>
			</select>
		</fieldset>
		</form>
		<form id="form">
			<fieldset>
				<legend>Month Picker Properties </legend>
				<table>
					<tr>
						<td>Color</td>
						<td><input id="styling_color" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>Start Period</td>
						<td><input id="Starting_Period" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>End Period</td>
						<td><input id="End_Period" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>End Month</td>
						<td><input id="End_Month" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>End Year</td>
						<td><input id="End_Year" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>Start Month</td>
						<td><input id="Start_Month" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>Start Year</td>
						<td><input id="Start_Year" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>selected time frame</td>
						<td><input id="Time_Frame" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>SSelected Option Name</td>
						<td><input id="Selected_Option" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;

	class stylingMonthPicker extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));

			this._shadowRoot.getElementById("applyButtonForm").addEventListener("click",this._shadowRoot.getElementById("applyButtonOption").addEventListener("change", this._updateApplyButton.bind(this)));
		}
		_updateApplyButton(e) {
			console.log(e);
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							showApplyButton: this.showApplyButton
						}
					}
			}));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							//color: this.color,
							startPeriod: this.startPeriod,
							endPeriod: this.endPeriod,
							startYear: this.startYear,
							endYear: this.endYear,
							startMonth: this.startMonth,
							endMonth: this.endMonth,
							selectedAction: this.selectedAction,
							selectedTimeFrame: this.selectedTimeFrame,
							showApplyButton: this.showApplyButton
						}
					}
			}));
		}

		set showApplyButton(newShowApplyButton) {
			this._shadowRoot.getElementById("applyButtonOption").value = newShowApplyButton;
		}

		get showApplyButton() {
			return this._shadowRoot.getElementById("applyButtonOption").value;
		}

		set color(newColor) {
			this._shadowRoot.getElementById("styling_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("styling_color").value;
		}

		set startPeriod(newStartPeriod) {
			this._shadowRoot.getElementById("Starting_Period").value = newStartPeriod;
		}

		get startPeriod() {
			return this._shadowRoot.getElementById("Starting_Period").value;
		}

		set endPeriod(newEndPeriod) {
			this._shadowRoot.getElementById("End_Period").value = newEndPeriod;
		}

		get endPeriod() {
			return this._shadowRoot.getElementById("End_Period").value;
		}

		set startYear(newStartYear) {
			this._shadowRoot.getElementById("Start_Year").value = newStartYear;
		}

		get startYear() {
			return this._shadowRoot.getElementById("Start_Year").value;
		}

		set endYear(newEndYear) {
			this._shadowRoot.getElementById("End_Year").value = newEndYear;
		}

		get endYear() {
			return this._shadowRoot.getElementById("End_Year").value;
		}

		set startMonth(newStartMonth) {
			this._shadowRoot.getElementById("Start_Year").value = newStartMonth;
		}

		get startMonth() {
			return this._shadowRoot.getElementById("Start_Month").value;
		}

		set endMonth(newEndMonth) {
			this._shadowRoot.getElementById("End_Month").value = newEndMonth;
		}

		get endMonth() {
			return this._shadowRoot.getElementById("End_Month").value;
		}

		set selectedTimeFrame(newSelectedTimeFrame) {
			this._shadowRoot.getElementById("Time_Frame").value = newSelectedTimeFrame;
		}

		get selectedTimeFrame() {
			return this._shadowRoot.getElementById("Time_Frame").value;
		}

		set selectedAction(newSelectedAction) {
			this._shadowRoot.getElementById("Selected_Option").value = newSelectedAction;
		}

		get selectedAction() {
			return this._shadowRoot.getElementById("Selected_Option").value;
		}
	}

customElements.define("month-picker-styling", stylingMonthPicker);
})();