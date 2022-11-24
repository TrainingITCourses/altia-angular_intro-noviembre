import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class FormFeedbackService {
  constructor() {}

  mustShowError(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  isInvalid(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    if (!control) return false;
    return control.invalid;
  }
}

@Injectable()
export class FormLessFeedbackService {
  constructor() {}

  mustShowError(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    if (!control) return false;
    return control.invalid && control.touched;
  }

  isInvalid(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    if (!control) return false;
    return control.invalid;
  }
}
