import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

export type Controls<T> = { [key in keyof T]: AbstractControl };
export type SetControls<T> = { [key in keyof T]: any };

export class FormReactive<T> {
  formGroup!: FormGroup;

  constructor(
    private campos: SetControls<T>,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group(this.campos);
  }

  get controls() {
    return this.formGroup.controls as Controls<T>;
  }


  get values() {
    return this.formGroup.value;
  }

  setValueForm({ ...values }) {
    this.formGroup.setValue({ ...values });
  }
}
