import Grid from "./picgrid.png";
export default function Hero() {
  return (
    <section className="hero">
      <img src={Grid} alt="pic grid" className="hero-pic" />
      <h1 className="hero-head">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
