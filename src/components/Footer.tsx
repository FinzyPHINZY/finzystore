const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; Boluwatife Adeyemi - FinzyStore{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
