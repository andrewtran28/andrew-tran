function ExperienceBox({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <div className="exp-card" key={i}>
          <img className="exp-img" src={item.image} />
          <span className="exp-title">{item.title}</span>
          <span className="exp-subtitle">{item.subtitle}</span>
          <span className="exp-date">{item.date}</span>
          {item.location !== "" && (
            <span className="exp-location">{item.location}</span>
          )}
          {item.note !== "" && <span className="exp-note">{item.note}</span>}
        </div>
      ))}
    </>
  );
}

export default ExperienceBox;
