import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Booking } from "../core/models/booking.interface";
import { FormFeedbackService } from "../core/services/form-feedback.service";

@Component({
  selector: "app-book-trip-form",
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <div>
          <label for="customerName"> Customer name </label>
          <small *ngIf="mustShowError('customerName')">
            {{ form.get("customerName")?.errors | json }}
          </small>
          <input
            type="text"
            id="customerName"
            name="customerName"
            formControlName="customerName"
            [attr.aria-invalid]="isInvalid('customerName')" />
        </div>
        <div>
          <label for="customerEmail"> Customer email </label>
          <small *ngIf="mustShowError('customerEmail')">
            {{ form.get("customerEmail")?.errors | json }}
          </small>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            formControlName="customerEmail"
            [attr.aria-invalid]="isInvalid('customerEmail')" />
        </div>
        <div>
          <label for="gender"> Customer gender </label>
          <span>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              formControlName="gender" />
            <label for="male">👨🏼‍🦰 Masculine</label>
          </span>
          <span>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              formControlName="gender" />
            <label for="female">👩🏼‍🦰 Feminine</label>
          </span>
        </div>
        <div>
          <label for="seats"> Seats reserved </label>
          <small *ngIf="mustShowError('seats')">
            {{ form.get("seats")?.errors | json }}
          </small>
          <input
            type="number"
            id="seats"
            name="seats"
            formControlName="seats"
            [attr.aria-invalid]="isInvalid('seats')" />
        </div>
        <div>
          <label for="premiumFood"> Premium Food </label>
          <input
            type="checkbox"
            id="premiumFood"
            name="premiumFood"
            formControlName="premiumFood" />
        </div>
        <div>
          <label for="paymentMethod"> Payment method </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            formControlName="paymentMethod"
            [attr.aria-invalid]="isInvalid('paymentMethod')">
            <option value=""> 👇🏼 Choose an option </option>
            <option value="cash"> 💵 Cash </option>
            <option value="credit"> 💳 Credit Card </option>
            <option value="bank">🏦 Bank transfer </option>
            <option value="crypto">🪙 Crypto </option>
          </select>
        </div>
      </fieldset>
      <button type="submit" [disabled]="form.invalid">Book the trip</button>
    </form>
  `,
  styles: [],
})
export class BookTripFormComponent implements OnInit {
  @Output() save = new EventEmitter<Partial<Booking>>();

  @Input() set mustResetForm(reset: boolean) {
    if (reset) this.form.reset();
  }

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private formFeedback: FormFeedbackService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerName: [
        "E. Musk",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      customerEmail: [
        "elon@musk.com",
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      gender: new FormControl("male"),
      seats: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      premiumFood: true,
      paymentMethod: ["cash", Validators.required],
    });
  }

  mustShowError(controlName: string) {
    return this.formFeedback.mustShowError(this.form, controlName);
  }

  isInvalid(controlName: string) {
    return this.formFeedback.isInvalid(this.form, controlName);
  }

  onSubmit() {
    const formValue: Partial<Booking> = this.form.value;
    console.log(formValue);
    if (this.form.invalid) return;
    this.save.next(formValue);
  }
}
