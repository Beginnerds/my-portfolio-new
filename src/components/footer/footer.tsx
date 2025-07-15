const Footer = () => {
  return (
    <footer id="contact" className="mt-20 w-full text-amber-50">
      <p className="block mx-auto text-3xl font-bold tracking-wide leading-14 text-center">
        Contact me
      </p>
      <p className="mt-8 text-center text-xl leading-8 font-bold text-amber-50 ">Feel free to reach out for any query and opportunities!</p>
      <p className="mt-4 text-center text-xl leading-8 font-bold text-transparent bg-clip-text bg-linear-120 from-amber-50  to-primary">contact@shubhamkalra.dev</p>
      <ul className="mt-6 w-full flex justify-center items-center gap-4 [&>li]:transition-all [&>li]:hover:text-accent">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
