import "./links.scss";
import Button from "../Button/Button";

export default function Links() {
  return (
    <div className="Links">
      <div>
        <h3>Deliveroo Restaurants</h3>
        <ul>
          <li>Editions</li>
          <li>Signature</li>
          <li>Marketing</li>
          <li>Packaging</li>
          <li>Save on supplies</li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul>
          <li>Privacy</li>
          <li>Policies</li>
          <li>Cookies</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>
          <li>Help Centre</li>
          <li>COVID-19</li>
          <li>Log in to Restaurant Hub</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h3>Want your business on Deliveroo?</h3>
        <p>
          Send us your information and we'll reach out to help you become a
          Deliveroo partner.
        </p>
        <Button title="Become a partner" />
      </div>
    </div>
  );
}
