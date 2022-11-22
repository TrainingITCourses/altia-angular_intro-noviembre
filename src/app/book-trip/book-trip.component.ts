import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
      customerName: "E. Musk",
      customerEmail: "elon@mars.com",
      gender: "male",
      seats: 5,
      premiumFood: true,
      paymentMethod: "cash",
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
