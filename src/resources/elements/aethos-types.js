import {customElement, bindable} from 'aurelia-framework';

@customElement('aethos-types')
export class AethosTypes {
  @bindable to;

  speak(){
    alert(`Hello ${this.to}!`);
  }
}
