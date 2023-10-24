
import star from "./star.png";
export default function Card(props) {
  let badgeText
    if (props.item.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <main className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="swimmer" className="card-pic" />
      <div className="card-stats">
        <img src={star} alt="star" className="star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) •</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
    </main>
  );
}
