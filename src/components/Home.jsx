function Home() {
  const handleDownload = () => {
    const pdfUrl = "Andrew-Tran_Resume.pdf";
    const link = document.elementFromPoint("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeCHild(link);
  };

  return (
    <>
      <h1>This is the homepage.</h1>

      <h2>Experience</h2>
      <h2>Education</h2>
      <hr />
      <ul>
        <li>Bachelors of Engineering, Electrical, Co-op Option</li>
      </ul>
      <p>Download the printable resume below.</p>
      <button onClick={handleDownload}>Download Resume</button>
    </>
  );
}

export default Home;
