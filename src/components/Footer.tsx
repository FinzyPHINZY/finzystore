const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy;{" "}
          <a
            className="border-b"
            href="https://finzyphinzy.github.io/Portfolio-React/"
          >
            Boluwatife Adeyemi
          </a>
          - FinzyStore {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
