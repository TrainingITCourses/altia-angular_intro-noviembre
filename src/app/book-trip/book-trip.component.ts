import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Booking } from "../core/models/booking.interface";

@Component({
  selector: "app-book-trip",
  template: `
    <h3> Book a trip </h3>
    <h2> {{ tripId }} </h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <div>
          <label for="customerName"> Customer name </label>
          <pre> Is pristine: {{ form.controls["customerName"].pristine }} </pre>
          <pre> Is touched: {{ form.get("customerName")?.touched }} </pre>
          <pre> Is dirty: {{ form.get("customerName")?.dirty }} </pre>
          <pre> Is valid: {{ form.get("customerName")?.valid }} </pre>
          <pre> Errors: {{ form.get("customerName")?.errors | json }} </pre>
          <input
            type="text"
            id="customerName"
            name="customerName"
            formControlName="customerName" />
        </div>
        <div>
          <label for="customerEmail"> Customer email </label>
          <pre> Is pristine: {{ form.get("customerEmail")?.pristine }} </pre>
          <pre> Is touched: {{ form.get("customerEmail")?.touched }} </pre>
          <pre> Is dirty: {{ form.get("customerEmail")?.dirty }} </pre>
          <pre> Is valid: {{ form.get("customerEmail")?.valid }} </pre>
          <pre> Errors: {{ form.get("customerEmail")?.errors | json }} </pre>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            formControlName="customerEmail" />
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
          <input
            type="number"
            id="seats"
            name="seats"
            formControlName="seats" />
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
            formControlName="paymentMethod">
            <option value="cash"> 💵 Cash </option>
            <option value="credit"> 💳 Credit Card </option>
            <option value="bank">🏦 Bank transfer </option>
            <option value="crypto">🪙 Crypto </option>
          </select>
        </div>
      </fieldset>
      <button type="submit">Book the trip</button>
    </form>
    <pre> Is valid: {{ form.valid }} </pre>
    <pre> Is pristine: {{ form.pristine }} </pre>
    <pre> Is touched: {{ form.touched }} </pre>
    <pre> Is dirty: {{ form.dirty }} </pre>
    <pre> {{ form.value | json }} </pre>
  `,
  styles: [],
})
export class BookTripComponent implements OnInit {
  tripId: string = "";
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.params["tripId"];
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
        "elon@mars.com",
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      gender: new FormControl("male"),
      seats: new FormControl(5, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      premiumFood: true,
      paymentMethod: ["cash", Validators.required],
    });
  }

  onSubmit() {
    const formValue: Partial<Booking> = this.form.value;
    console.log(formValue);
    const booking: Partial<Booking> = {
      ...formValue,
      date: new Date().toISOString(),
      id: "1",
      status: "pending",
      tripId: this.tripId,
    };
    console.log(booking);
  }
}
