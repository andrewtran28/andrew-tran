function ExperienceBox({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <div className="exp-card" key={i}>
          <div className="exp-top">
            <img className="exp-img" src={item.image} />
            <div className="exp-info">
              <div className="exp-flex">
                <span className="exp-title">{item.title}</span>
                <span className="exp-subtitle">{item.subtitle}</span>
              </div>

              <div className="exp-flex">
                <span className="exp-date">{item.date}</span>
                {item.location !== "" && (
                  <span className="exp-location">{item.location}</span>
                )}
              </div>
            </div>
          </div>

          {item.note !== "" && <span className="exp-note">{item.note}</span>}
        </div>
      ))}
    </>
  );
}

export default ExperienceBox;
