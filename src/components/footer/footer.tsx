const Footer = () => {
  return (
    <footer className="mt-20 w-full text-amber-50">
      <p className="block mx-auto text-3xl font-bold tracking-wide leading-14 text-center">
        Contact me
      </p>
      <p className="mt-8 text-center text-xl leading-8 font-bold text-transparent bg-clip-text bg-linear-120 from-amber-50  to-primary">Feel free to reach out for any query and opportunities!</p>
      <ul className="mt-6 w-full flex justify-center items-center gap-4 [&>li]:transition-all [&>li]:hover:text-accent">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
