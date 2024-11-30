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
      <h1>Hey there! I want to become a full-stack developer.</h1>
      <h1>Form. follows. Function.</h1>
      These are words that mean
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
