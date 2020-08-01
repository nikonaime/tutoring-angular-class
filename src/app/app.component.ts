import { Component } from "@angular/core";
import { convertPropertyBindingBuiltins } from "@angular/compiler/src/compiler_util/expression_converter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSysmols = false;

  length = 0;
  password = "";

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSysmols = !this.includeSysmols;
  }

  onChangeLength(passLength) {
    length = parseInt(passLength);
    if (!isNaN(length)) {
      this.length = length;
    }
  }

  onButtonClicked() {
    const numbers = "1234567890";
    const letters = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";
    const symbols = "!@#$%^&*()";
    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSysmols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    if(validChars!=""){
    for(let i=0; i<this.length;i++) {
      const index = Math.floor(Math.random()* validChars.length);
      generatedPassword+= validChars[index];
    }
    this.password = generatedPassword;
  }
  }
}
