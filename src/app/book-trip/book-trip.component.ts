import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-trip",
  template: `
    <h3> Book a trip </h3>
    <h2> {{ tripId }} </h2>
    <form>
      <fieldset>
        <div>
          <label for="customerName"> Customer name </label>
          <input type="text" id="customerName" />
        </div>
        <div>
          <label for="customerEmail"> Customer email </label>
          <input type="email" id="customerEmail" />
        </div>
        <div>
          <label for="customerGender"> Customer gender </label>
          <span>
            <input type="radio" name="customerGender" value="male" id="male" />
            <label for="male">👨🏼‍🦰 Masculine</label>
          </span>
          <span>
            <input
              type="radio"
              name="customerGender"
              value="female"
              id="female" />
            <label for="female">👩🏼‍🦰 Feminine</label>
          </span>
        </div>
        <div>
          <label for="seats"> Seats reserved </label>
          <input type="number" id="seats" />
        </div>
        <div>
          <label for="premiumFood"> Premium Food </label>
          <input type="checkbox" id="premiumFood" />
        </div>
        <div>
          <label for="paymentMethod"> Payment method </label>
          <select id="paymentMethod">
            <option value="cash"> 💵 Cash </option>
            <option value="credit"> 💳 Credit Card </option>
            <option value="bank">🏦 Bank transfer </option>
            <option value="crypto">🪙 Crypto </option>
          </select>
        </div>
      </fieldset>
      <button type="submit">Book the trip</button>
    </form>
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
    this.form = this.formBuilder.group({});
  }
}
