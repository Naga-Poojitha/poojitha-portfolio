function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Gulla Naga Poojitha
        </p>

        <p>
          Built with React & curiosity.
        </p>
      </div>
    </footer>
  );
}

export default Footer;